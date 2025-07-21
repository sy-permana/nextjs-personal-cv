import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";
import { z } from "zod";
import { checkRateLimit, getClientIP } from "@/lib/security/rateLimiter";
import { validateContactForm } from "@/lib/security/contentFilter";

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY);

// Validation schema for contact form data (enhanced with security fields)
const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters").max(200),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(2000),
  honeypot: z.string().optional(),
  formStartTime: z.number().optional(),
  honeypotFieldName: z.string().optional(),
});

interface ApiResponse {
  success: boolean;
  message: string;
  error?: string;
}

/**
 * Contact form API endpoint that sends emails using Resend
 *
 * @param req - Next.js API request
 * @param res - Next.js API response
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>,
) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed. Use POST.",
    });
  }

  try {
    // Get client IP for rate limiting
    const clientIP = getClientIP(req);

    // Check rate limit
    const rateLimitResult = checkRateLimit(clientIP);
    if (!rateLimitResult.allowed) {
      console.log(`Rate limit exceeded for IP: ${clientIP}`);
      return res.status(429).json({
        success: false,
        message:
          rateLimitResult.message ||
          "Too many requests. Please try again later.",
        error: "Rate limit exceeded",
      });
    }

    // Validate environment variables
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not set");
      return res.status(500).json({
        success: false,
        message: "Email service configuration error",
        error: "Missing API key",
      });
    }

    if (!process.env.CONTACT_TO_EMAIL) {
      console.error("CONTACT_TO_EMAIL is not set");
      return res.status(500).json({
        success: false,
        message: "Email service configuration error",
        error: "Missing recipient email",
      });
    }

    // Validate request body with basic schema
    const schemaValidation = contactFormSchema.safeParse(req.body);

    if (!schemaValidation.success) {
      return res.status(400).json({
        success: false,
        message: "Invalid form data",
        error: schemaValidation.error.issues
          .map((issue) => issue.message)
          .join(", "),
      });
    }

    // Enhanced security validation
    const securityValidation = validateContactForm(
      schemaValidation.data,
      schemaValidation.data.formStartTime,
    );

    if (!securityValidation.isValid || securityValidation.isSpam) {
      console.log(`Spam/security violation detected from IP: ${clientIP}`, {
        errors: securityValidation.errors,
        warnings: securityValidation.warnings,
        isSpam: securityValidation.isSpam,
      });

      return res.status(400).json({
        success: false,
        message: securityValidation.isSpam
          ? "Your submission appears to be spam. Please try again."
          : securityValidation.errors.join(", "),
        error: "Security validation failed",
      });
    }

    const { name, email, subject, message } = securityValidation.sanitizedData!;

    // Prepare email content
    const fromEmail =
      process.env.CONTACT_FROM_EMAIL || "noreply@yourdomain.com";
    const toEmail = process.env.CONTACT_TO_EMAIL;

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333; border-bottom: 2px solid #0070f3; padding-bottom: 10px;">
          New Contact Form Submission
        </h2>

        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #0070f3; margin-top: 0;">Contact Details</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
        </div>

        <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e9ecef; border-radius: 8px;">
          <h3 style="color: #333; margin-top: 0;">Message</h3>
          <p style="line-height: 1.6; color: #555;">${message.replace(/\n/g, "<br>")}</p>
        </div>

        <div style="margin-top: 20px; padding: 15px; background-color: #e7f3ff; border-radius: 8px;">
          <p style="margin: 0; font-size: 14px; color: #666;">
            This message was sent from your CV website contact form at ${new Date().toLocaleString()}.
          </p>
        </div>
      </div>
    `;

    const emailText = `
New Contact Form Submission

Contact Details:
Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

---
This message was sent from your CV website contact form at ${new Date().toLocaleString()}.
    `;

    // Send email using Resend
    const emailResult = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: `Contact Form: ${subject}`,
      html: emailHtml,
      text: emailText,
      replyTo: email, // Allow direct reply to the sender
    });

    if (emailResult.error) {
      console.error("Resend error:", emailResult.error);
      return res.status(500).json({
        success: false,
        message: "Failed to send email",
        error: emailResult.error.message,
      });
    }

    console.log("Email sent successfully:", emailResult.data);
    console.log(`Successful submission from IP: ${clientIP}`);

    // Return success response
    return res.status(200).json({
      success: true,
      message: "Message sent successfully! I'll get back to you soon.",
    });
  } catch (error) {
    const clientIP = getClientIP(req);
    console.error(`Contact form error from IP ${clientIP}:`, error);

    return res.status(500).json({
      success: false,
      message: "An unexpected error occurred. Please try again.",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
}
