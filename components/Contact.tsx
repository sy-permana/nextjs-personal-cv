"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { CVData, LocaleContent } from "@/types";

interface ContactProps {
  personalInfo: CVData["personalInfo"];
  content: LocaleContent;
}

// Form validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  honeypot: z.string().optional(), // Honeypot field for bot detection
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const Contact: React.FC<ContactProps> = ({ personalInfo, content }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [submitMessage, setSubmitMessage] = useState<string>("");
  const [formStartTime, setFormStartTime] = useState<number>(0);
  const [honeypotFieldName, setHoneypotFieldName] = useState<string>("website");

  // Set form start time when component mounts
  useEffect(() => {
    setFormStartTime(Date.now());
    // Generate random honeypot field name
    const fieldNames = ["website", "url", "homepage", "link", "company_url"];
    setHoneypotFieldName(
      fieldNames[Math.floor(Math.random() * fieldNames.length)],
    );
  }, []);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      honeypot: "",
    },
  });

  const handleSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      // Add timing and honeypot data
      const submissionData = {
        ...data,
        formStartTime,
        honeypotFieldName,
      };

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus("success");
        setSubmitMessage(result.message);
        form.reset();
      } else {
        setSubmitStatus("error");
        setSubmitMessage(
          result.message || "Failed to send message. Please try again.",
        );
      }
    } catch (error) {
      setSubmitStatus("error");
      setSubmitMessage(
        "Network error. Please check your connection and try again.",
      );
      console.error("Contact form error:", error);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setSubmitStatus("idle");
        setSubmitMessage("");
      }, 5000);
    }
  };

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: content.labels.email,
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: content.labels.phone,
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: content.labels.linkedin,
      value: personalInfo.linkedin,
      href: `https://${personalInfo.linkedin}`,
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: content.labels.location,
      value: personalInfo.location,
      href: "#",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            {content.sections.contact}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Let&apos;s connect and explore opportunities to work together.
            I&apos;m always excited to discuss new projects and innovative
            ideas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Get In Touch
              </h3>
              <p className="text-muted-foreground mb-8">
                I&apos;m currently open to new opportunities and interesting
                projects. Whether you have a question, want to discuss a
                potential collaboration, or just want to say hello, I&apos;d
                love to hear from you.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Card
                    className={`transition-all duration-300 hover:shadow-md ${
                      method.href === "#" ? "cursor-default" : "cursor-pointer"
                    }`}
                  >
                    <a
                      href={method.href}
                      className="flex items-center p-4"
                      {...(method.href.startsWith("http") && {
                        target: "_blank",
                        rel: "noopener noreferrer",
                      })}
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-primary to-primary rounded-lg flex items-center justify-center text-primary-foreground group-hover:scale-110 transition-transform duration-300">
                        {method.icon}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-muted-foreground">
                          {method.label}
                        </div>
                        <div className="text-foreground font-semibold">
                          {method.value}
                        </div>
                      </div>
                    </a>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200 dark:from-green-950/20 dark:to-emerald-950/20 dark:border-green-800">
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    </div>
                    <div className="ml-3">
                      <div className="text-green-800 dark:text-green-200 font-semibold">
                        Available for Projects
                      </div>
                      <div className="text-green-600 dark:text-green-300 text-sm">
                        Currently accepting new opportunities and freelance
                        projects
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-br from-muted/30 via-muted/20 to-muted/30">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Send a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(handleSubmit)}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Your Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="your.email@example.com"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="What's this about?"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell me about your project or just say hello..."
                              rows={5}
                              className="resize-none"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Honeypot field - hidden from users, catches bots */}
                    <FormField
                      control={form.control}
                      name="honeypot"
                      render={({ field }) => (
                        <FormItem className="hidden">
                          <FormLabel>{honeypotFieldName}</FormLabel>
                          <FormControl>
                            <Input
                              placeholder=""
                              tabIndex={-1}
                              autoComplete="off"
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-primary to-primary text-primary-foreground hover:from-primary/90 hover:to-primary/90"
                      size="lg"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center">
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending Message...
                        </div>
                      ) : (
                        "Send Message"
                      )}
                    </Button>

                    {/* Status Messages */}
                    {submitStatus === "success" && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <Card className="bg-green-50 border-green-200 dark:bg-green-950/20 dark:border-green-800">
                          <CardContent className="p-4 text-center">
                            <div className="text-green-800 dark:text-green-200 font-semibold">
                              Message Sent!
                            </div>
                            <div className="text-green-600 dark:text-green-300 text-sm">
                              {submitMessage ||
                                "Thank you for reaching out. I'll get back to you soon."}
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    )}

                    {submitStatus === "error" && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <Card className="bg-red-50 border-red-200 dark:bg-red-950/20 dark:border-red-800">
                          <CardContent className="p-4 text-center">
                            <div className="text-red-800 dark:text-red-200 font-semibold">
                              Error
                            </div>
                            <div className="text-red-600 dark:text-red-300 text-sm">
                              {submitMessage ||
                                "Something went wrong. Please try again later."}
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    )}
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="bg-gradient-to-r from-primary to-primary text-primary-foreground">
            <CardContent className="text-center p-8">
              <h3 className="text-2xl font-bold mb-4">
                Let&apos;s Build Something Amazing Together
              </h3>
              <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
                Whether you need a high-performance web application, want to
                optimize your existing system, or explore innovative solutions,
                I&apos;m here to help bring your vision to life.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  "Web Applications",
                  "Performance Optimization",
                  "Technical Consulting",
                  "Code Reviews",
                ].map((service, index) => (
                  <motion.div
                    key={service}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.9 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-primary-foreground/20 backdrop-blur-sm border border-primary-foreground/30 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {service}
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
