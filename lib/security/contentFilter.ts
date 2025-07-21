/**
 * Content sanitization and spam detection utility
 * Validates and cleans user input from contact forms
 */

// Common spam patterns to detect
const SPAM_PATTERNS = [
  // URL patterns
  /https?:\/\/[^\s]+/gi,
  /www\.[^\s]+/gi,
  /[a-zA-Z0-9-]+\.(com|org|net|info|biz|click|tk|ml|ga|cf)/gi,

  // Excessive repetition
  /(.)\1{10,}/gi, // Same character repeated 10+ times
  /(\b\w+\b)\s*(\1\s*){5,}/gi, // Same word repeated 5+ times

  // Common spam phrases
  /viagra|cialis|pharmacy|casino|poker|lottery|winner|congratulations/gi,
  /click here|visit now|act now|limited time|hurry up/gi,
  /make money|work from home|earn \$|guaranteed income/gi,
  /lose weight|diet pills|weight loss/gi,
  /free trial|no cost|100% free|risk free/gi,

  // Suspicious patterns
  /[A-Z]{10,}/g, // Excessive caps
  /\$\d+|\d+\$|\d+\s?(dollars?|usd|euros?)/gi, // Money mentions
  /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/gi, // Email addresses in content
];

// Suspicious character patterns (for future use)
// const SUSPICIOUS_CHARS = [
//   /[\u200B-\u200D\uFEFF]/g, // Zero-width characters
//   /[^\x00-\x7F]/g, // Non-ASCII characters (excluding common accented characters)
// ];

// Maximum allowed lengths
const MAX_LENGTHS = {
  name: 100,
  email: 254, // RFC 5321 limit
  subject: 200,
  message: 2000,
};

// Minimum submission time (in seconds) to prevent bot submissions
const MIN_SUBMISSION_TIME = 3;

interface ValidationResult {
  isValid: boolean;
  isSpam: boolean;
  errors: string[];
  warnings: string[];
  sanitizedData?: {
    name: string;
    email: string;
    subject: string;
    message: string;
    honeypot: string;
  };
}

/**
 * Remove HTML tags and dangerous characters from input
 */
export function sanitizeInput(input: string): string {
  if (!input || typeof input !== "string") {
    return "";
  }

  return (
    input
      // Remove HTML tags
      .replace(/<[^>]*>/g, "")
      // Remove script content
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
      // Remove suspicious zero-width characters
      .replace(/[\u200B-\u200D\uFEFF]/g, "")
      // Normalize whitespace
      .replace(/\s+/g, " ")
      .trim()
  );
}

/**
 * Check if content contains spam patterns
 */
export function detectSpam(content: string): {
  isSpam: boolean;
  confidence: number;
  detectedPatterns: string[];
} {
  if (!content || typeof content !== "string") {
    return { isSpam: false, confidence: 0, detectedPatterns: [] };
  }

  const detectedPatterns: string[] = [];
  let spamScore = 0;

  // Check against spam patterns
  for (const pattern of SPAM_PATTERNS) {
    const matches = content.match(pattern);
    if (matches) {
      detectedPatterns.push(`Spam pattern: ${pattern.source}`);
      spamScore += matches.length;
    }
  }

  // Check for excessive special characters
  const specialCharCount = (
    content.match(/[!@#$%^&*()_+={}\[\]|\\:";'<>?,./]/g) || []
  ).length;
  const specialCharRatio = specialCharCount / content.length;
  if (specialCharRatio > 0.3) {
    detectedPatterns.push("Excessive special characters");
    spamScore += 3;
  }

  // Check for excessive numbers
  const numberCount = (content.match(/\d/g) || []).length;
  const numberRatio = numberCount / content.length;
  if (numberRatio > 0.5) {
    detectedPatterns.push("Excessive numbers");
    spamScore += 2;
  }

  // Check for very short messages with links or money mentions
  if (
    content.length < 50 &&
    (content.includes("http") || /\$\d+/.test(content))
  ) {
    detectedPatterns.push("Short message with suspicious content");
    spamScore += 5;
  }

  const confidence = Math.min(spamScore * 10, 100);
  const isSpam = confidence > 30; // Threshold for spam detection

  return {
    isSpam,
    confidence,
    detectedPatterns,
  };
}

/**
 * Validate email format and domain
 */
export function validateEmail(email: string): {
  isValid: boolean;
  errors: string[];
} {
  const errors: string[] = [];

  if (!email || typeof email !== "string") {
    errors.push("Email is required");
    return { isValid: false, errors };
  }

  // Basic email regex (RFC 5322 compliant)
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  if (!emailRegex.test(email)) {
    errors.push("Invalid email format");
  }

  if (email.length > MAX_LENGTHS.email) {
    errors.push(`Email too long (max ${MAX_LENGTHS.email} characters)`);
  }

  // Check for suspicious domains
  const suspiciousDomains = [
    "10minutemail.com",
    "tempmail.org",
    "guerrillamail.com",
    "mailinator.com",
    "throwaway.email",
  ];

  const domain = email.split("@")[1]?.toLowerCase();
  if (domain && suspiciousDomains.includes(domain)) {
    errors.push("Temporary email addresses are not allowed");
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

/**
 * Check submission timing to detect bots
 */
export function validateSubmissionTiming(startTime: number): {
  isValid: boolean;
  error?: string;
} {
  if (!startTime || typeof startTime !== "number") {
    return { isValid: false, error: "Invalid submission timing" };
  }

  const submissionTime = (Date.now() - startTime) / 1000;

  if (submissionTime < MIN_SUBMISSION_TIME) {
    return {
      isValid: false,
      error: `Submission too fast (${submissionTime.toFixed(1)}s). Please take your time to fill out the form.`,
    };
  }

  // Also check if it's suspiciously long (possible bot)
  if (submissionTime > 30 * 60) {
    // 30 minutes
    return {
      isValid: false,
      error: "Session expired. Please refresh the page and try again.",
    };
  }

  return { isValid: true };
}

/**
 * Comprehensive form validation with spam detection
 */
export function validateContactForm(
  data: {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
    honeypot?: string;
  },
  startTime?: number,
): ValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];
  let isSpam = false;

  // Validate required fields
  if (!data.name || typeof data.name !== "string") {
    errors.push("Name is required");
  }
  if (!data.email || typeof data.email !== "string") {
    errors.push("Email is required");
  }
  if (!data.subject || typeof data.subject !== "string") {
    errors.push("Subject is required");
  }
  if (!data.message || typeof data.message !== "string") {
    errors.push("Message is required");
  }

  if (errors.length > 0) {
    return { isValid: false, isSpam: false, errors, warnings };
  }

  // Sanitize inputs
  const sanitizedData = {
    name: sanitizeInput(data.name || ""),
    email: sanitizeInput(data.email || ""),
    subject: sanitizeInput(data.subject || ""),
    message: sanitizeInput(data.message || ""),
    honeypot: data.honeypot || "", // Honeypot field should be empty
  };

  // Check honeypot (bot trap)
  if (sanitizedData.honeypot.length > 0) {
    return {
      isValid: false,
      isSpam: true,
      errors: ["Bot detected"],
      warnings: [],
    };
  }

  // Validate email
  const emailValidation = validateEmail(sanitizedData.email);
  if (!emailValidation.isValid) {
    errors.push(...emailValidation.errors);
  }

  // Check field lengths
  if (sanitizedData.name.length > MAX_LENGTHS.name) {
    errors.push(`Name too long (max ${MAX_LENGTHS.name} characters)`);
  }
  if (sanitizedData.subject.length > MAX_LENGTHS.subject) {
    errors.push(`Subject too long (max ${MAX_LENGTHS.subject} characters)`);
  }
  if (sanitizedData.message.length > MAX_LENGTHS.message) {
    errors.push(`Message too long (max ${MAX_LENGTHS.message} characters)`);
  }

  // Check minimum lengths
  if (sanitizedData.name.length < 2) {
    errors.push("Name must be at least 2 characters");
  }
  if (sanitizedData.subject.length < 5) {
    errors.push("Subject must be at least 5 characters");
  }
  if (sanitizedData.message.length < 10) {
    errors.push("Message must be at least 10 characters");
  }

  // Validate submission timing
  if (startTime) {
    const timingValidation = validateSubmissionTiming(startTime);
    if (!timingValidation.isValid) {
      errors.push(timingValidation.error!);
    }
  }

  // Spam detection
  const messageSpamCheck = detectSpam(sanitizedData.message);
  const subjectSpamCheck = detectSpam(sanitizedData.subject);

  if (messageSpamCheck.isSpam || subjectSpamCheck.isSpam) {
    isSpam = true;
    warnings.push("Content flagged as potential spam");
  }

  // Additional spam indicators
  if (
    sanitizedData.message.toLowerCase() === sanitizedData.subject.toLowerCase()
  ) {
    warnings.push("Identical subject and message");
    isSpam = true;
  }

  return {
    isValid: errors.length === 0 && !isSpam,
    isSpam,
    errors,
    warnings,
    sanitizedData,
  };
}

/**
 * Generate a random honeypot field name
 */
export function generateHoneypotFieldName(): string {
  const fieldNames = [
    "website",
    "url",
    "homepage",
    "link",
    "company_url",
    "business_site",
  ];
  return fieldNames[Math.floor(Math.random() * fieldNames.length)];
}
