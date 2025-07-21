/**
 * Rate limiting utility for contact form spam protection
 * Uses in-memory storage suitable for Vercel serverless functions
 */

interface RateLimitEntry {
  count: number;
  firstAttempt: number;
  lastAttempt: number;
  blocked: boolean;
  blockUntil?: number;
}

// In-memory cache for rate limiting (resets on function cold starts)
const rateLimitCache = new Map<string, RateLimitEntry>();

// Configuration
const RATE_LIMIT_CONFIG = {
  maxAttempts: 5, // Maximum attempts per window
  windowMs: 60 * 60 * 1000, // 1 hour window
  blockDurationMs: 60 * 60 * 1000, // Block for 1 hour after limit exceeded
  cleanupIntervalMs: 10 * 60 * 1000, // Clean old entries every 10 minutes
};

/**
 * Clean up expired entries from the cache
 */
function cleanupExpiredEntries(): void {
  const now = Date.now();
  const expiredKeys: string[] = [];

  for (const [key, entry] of rateLimitCache.entries()) {
    // Remove entries older than the window
    if (now - entry.firstAttempt > RATE_LIMIT_CONFIG.windowMs) {
      expiredKeys.push(key);
    }
    // Remove entries that are no longer blocked
    if (entry.blocked && entry.blockUntil && now > entry.blockUntil) {
      expiredKeys.push(key);
    }
  }

  expiredKeys.forEach((key) => rateLimitCache.delete(key));
}

/**
 * Get client IP address from request
 */
export function getClientIP(req: {
  headers: Record<string, string | string[] | undefined>;
  connection?: { remoteAddress?: string };
  socket?: { remoteAddress?: string };
}): string {
  // Try various headers for IP address (common in serverless environments)
  const forwarded = req.headers["x-forwarded-for"];
  const realIP = req.headers["x-real-ip"];
  const cfConnectingIP = req.headers["cf-connecting-ip"]; // Cloudflare
  const remoteAddress =
    req.connection?.remoteAddress || req.socket?.remoteAddress;

  if (forwarded) {
    // x-forwarded-for can contain multiple IPs, take the first one
    return Array.isArray(forwarded)
      ? forwarded[0]
      : forwarded.split(",")[0].trim();
  }

  const realIPString = Array.isArray(realIP) ? realIP[0] : realIP;
  const cfConnectingIPString = Array.isArray(cfConnectingIP)
    ? cfConnectingIP[0]
    : cfConnectingIP;

  return realIPString || cfConnectingIPString || remoteAddress || "unknown";
}

/**
 * Check if an IP address is rate limited
 */
export function checkRateLimit(ip: string): {
  allowed: boolean;
  remaining: number;
  resetTime: number;
  blocked: boolean;
  message?: string;
} {
  // Clean up expired entries periodically
  if (Math.random() < 0.1) {
    // 10% chance to trigger cleanup
    cleanupExpiredEntries();
  }

  const now = Date.now();
  const entry = rateLimitCache.get(ip);

  // If no entry exists, create one
  if (!entry) {
    rateLimitCache.set(ip, {
      count: 1,
      firstAttempt: now,
      lastAttempt: now,
      blocked: false,
    });

    return {
      allowed: true,
      remaining: RATE_LIMIT_CONFIG.maxAttempts - 1,
      resetTime: now + RATE_LIMIT_CONFIG.windowMs,
      blocked: false,
    };
  }

  // Check if currently blocked
  if (entry.blocked && entry.blockUntil && now < entry.blockUntil) {
    const remainingBlockTime = Math.ceil((entry.blockUntil - now) / 1000 / 60); // minutes
    return {
      allowed: false,
      remaining: 0,
      resetTime: entry.blockUntil,
      blocked: true,
      message: `Too many requests. Please try again in ${remainingBlockTime} minutes.`,
    };
  }

  // Check if we're within the time window
  const isWithinWindow = now - entry.firstAttempt < RATE_LIMIT_CONFIG.windowMs;

  if (!isWithinWindow) {
    // Reset the counter for a new window
    rateLimitCache.set(ip, {
      count: 1,
      firstAttempt: now,
      lastAttempt: now,
      blocked: false,
    });

    return {
      allowed: true,
      remaining: RATE_LIMIT_CONFIG.maxAttempts - 1,
      resetTime: now + RATE_LIMIT_CONFIG.windowMs,
      blocked: false,
    };
  }

  // Increment the counter
  entry.count += 1;
  entry.lastAttempt = now;

  // Check if limit exceeded
  if (entry.count > RATE_LIMIT_CONFIG.maxAttempts) {
    entry.blocked = true;
    entry.blockUntil = now + RATE_LIMIT_CONFIG.blockDurationMs;

    return {
      allowed: false,
      remaining: 0,
      resetTime: entry.blockUntil,
      blocked: true,
      message: `Rate limit exceeded. You have made ${entry.count} requests. Please try again later.`,
    };
  }

  return {
    allowed: true,
    remaining: RATE_LIMIT_CONFIG.maxAttempts - entry.count,
    resetTime: entry.firstAttempt + RATE_LIMIT_CONFIG.windowMs,
    blocked: false,
  };
}

/**
 * Record a successful submission (can be used for analytics)
 */
export function recordSubmission(ip: string): void {
  const entry = rateLimitCache.get(ip);
  if (entry) {
    entry.lastAttempt = Date.now();
  }
}

/**
 * Get rate limit statistics (for debugging/monitoring)
 */
export function getRateLimitStats(): {
  totalEntries: number;
  blockedIPs: number;
  oldestEntry: number | null;
} {
  const now = Date.now();
  let blockedCount = 0;
  let oldestEntry: number | null = null;

  for (const [, entry] of rateLimitCache.entries()) {
    if (entry.blocked && entry.blockUntil && now < entry.blockUntil) {
      blockedCount++;
    }
    if (!oldestEntry || entry.firstAttempt < oldestEntry) {
      oldestEntry = entry.firstAttempt;
    }
  }

  return {
    totalEntries: rateLimitCache.size,
    blockedIPs: blockedCount,
    oldestEntry,
  };
}
