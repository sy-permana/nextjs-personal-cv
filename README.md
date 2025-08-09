# Surya Permana - Professional CV Website

A modern, professional CV website built with Next.js, TypeScript, shadcn/ui, and OKLCH colors, featuring real email functionality, enterprise-level spam protection, and smooth scroll animations with internationalization support.

## 🌟 Features

- **Modern Design System**: Built with shadcn/ui components and OKLCH color science
- **Real Email Functionality**: Working contact form with Resend integration
- **Enterprise Security**: Rate limiting, spam protection, and content sanitization
- **OKLCH Colors**: Future-proof color system with better perceptual uniformity
- **Responsive Layout**: Fully responsive design that works on all devices
- **Smooth Animations**: Elegant scroll animations using Framer Motion
- **Internationalization**: Support for English and Bahasa Indonesia
- **TypeScript**: Fully typed with comprehensive type definitions
- **Performance Optimized**: Built with Next.js for optimal performance
- **SEO Friendly**: Proper meta tags and semantic HTML structure
- **Professional Sections**:
  - Hero section with professional photo placeholder
  - About/Professional Summary
  - Work Experience with timeline design
  - Technical Skills categorized by type
  - Certifications with progress indicators
  - Education background
  - Working contact form with real email delivery
  - Footer component with social links

## 🚀 Tech Stack

- **Framework**: Next.js 15.3.3 with Pages Router
- **Language**: TypeScript 5
- **UI Components**: shadcn/ui with Radix UI primitives
- **Styling**: Tailwind CSS with OKLCH color system
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Geist (sans, mono)
- **Email Service**: Resend for contact form functionality
- **Form Handling**: React Hook Form with Zod validation
- **Security**: Custom rate limiting and spam protection
- **Package Manager**: bun

## 📁 Project Structure

```
nextjs-cv-website/
├── components/           # Reusable React components
│   ├── ui/              # shadcn/ui components
│   │   ├── badge.tsx    # Badge component
│   │   ├── button.tsx   # Button component
│   │   ├── card.tsx     # Card component
│   │   ├── form.tsx     # Form components
│   │   ├── input.tsx    # Input component
│   │   ├── sheet.tsx    # Sheet component (mobile menu)
│   │   └── textarea.tsx # Textarea component
│   ├── About.tsx        # Professional summary section
│   ├── Certifications.tsx # Certifications and achievements
│   ├── Contact.tsx      # Contact form with real email functionality
│   ├── Education.tsx    # Education background
│   ├── Experience.tsx   # Work experience timeline
│   ├── Footer.tsx       # Footer component with social links
│   ├── Hero.tsx         # Hero section with photo
│   ├── Navigation.tsx   # Navigation bar with language switcher
│   └── Skills.tsx       # Technical skills grid
├── lib/                 # Utility functions and data
│   ├── security/        # Security utilities
│   │   ├── contentFilter.ts # Spam detection and content sanitization
│   │   └── rateLimiter.ts   # IP-based rate limiting
│   ├── locales/         # Internationalization content
│   │   ├── en.ts       # English translations
│   │   └── id.ts       # Indonesian translations
│   ├── cv-data.ts      # CV content data
│   ├── i18n.ts         # Internationalization utilities
│   └── utils.ts        # shadcn/ui utilities (cn function)
├── pages/              # Next.js pages (Pages Router)
│   ├── api/            # API routes
│   │   └── contact.ts  # Contact form email endpoint
│   ├── _app.tsx        # App wrapper with global styles
│   └── index.tsx       # Main home page
├── types/              # TypeScript type definitions
│   └── index.ts        # All project types
├── app/                # App Router files (globals only)
│   ├── globals.css     # Global styles with OKLCH color system
│   └── layout.tsx      # Root layout (metadata only)
└── public/             # Static assets
```

## 🎨 Design Features

### OKLCH Color System

- **Color Science**: Modern OKLCH color space for better perceptual uniformity
- **Semantic Tokens**: Clean semantic naming (background, foreground, primary, secondary)
- **Dark Mode**: Native dark mode support with improved contrast ratios
- **Accessibility**: WCAG AA compliant contrast ratios (4.5:1+)
- **Future-Proof**: Better browser support and color management

### Typography

- **Font**: Geist (modern, readable sans-serif and monospace)
- **Hierarchy**: Clear font sizes and weights optimized for readability
- **Performance**: Optimized font loading with proper fallbacks
- **Readability**: Enhanced line heights and spacing for better user experience

### shadcn/ui Components

- **Consistency**: Unified design language across all components
- **Accessibility**: Built-in ARIA attributes and keyboard navigation
- **Customization**: Themeable components with CSS variables
- **Performance**: Tree-shakeable and optimized for bundle size

### Animations

- **Scroll Animations**: Elements fade in with smooth transitions using Framer Motion
- **Hover Effects**: Interactive buttons and cards with enhanced feedback
- **Component Transitions**: Smooth state changes and micro-interactions
- **Loading States**: Professional loading indicators for form submissions

## 🌍 Internationalization

The website supports two languages:

- **English (en)**: Default language
- **Bahasa Indonesia (id)**: Indonesian translation

Language switching is available in the navigation bar, and the content is fully localized including:

- Navigation menu items
- Section titles and labels
- Professional descriptions
- Contact information labels

## 📱 Responsive Design

- **Mobile First**: Designed for mobile devices first
- **Breakpoints**:
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px
- **Touch Friendly**: Optimized for touch interactions
- **Performance**: Optimized images and lazy loading

## 🛠 Installation & Setup

1. **Clone the repository**

   ```bash
   git clone [repository-url]
   cd nextjs-cv-website
   ```

2. **Install dependencies**

   ```bash
   bun install
   ```

3. **Run development server**

   ```bash
   bun dev
   ```

4. **Build for production**
   ```bash
   bun run build
   bun start
   ```

## 📝 Customization

### Updating CV Data

Edit `lib/cv-data.ts` to update:

- Personal information
- Professional summary
- Work experience
- Skills and technologies
- Certifications
- Education background

### Adding New Languages

1. Create new locale file in `lib/locales/`
2. Add locale to `next.config.ts`
3. Update `lib/i18n.ts` with new locale

### Styling Customization

- Update color variables in `app/globals.css`
- Modify Tailwind classes in components
- Add custom CSS for specific styling needs

### Image Replacement

Replace the elegant placeholder in `components/Hero.tsx`:

1. Add your professional photo to `public/` folder
2. Replace the placeholder div with Next.js Image component
3. Update the styling as needed

## 🎯 Performance Features

- **Static Generation**: Pre-rendered at build time
- **Code Splitting**: Automatic code splitting by Next.js
- **Image Optimization**: Next.js image optimization
- **Font Optimization**: Google Fonts optimization
- **Bundle Analysis**: Built-in bundle analyzer

## 📧 Contact Form & Email Functionality

The contact form features real email functionality with enterprise-level security:

### Email Service

- **Resend Integration**: Professional email delivery service
- **HTML Templates**: Beautiful, responsive email templates
- **Reply-to Support**: Direct replies to form submissions
- **Environment Configuration**: Secure API key management

### Security Features

- **Rate Limiting**: IP-based rate limiting (5 submissions per hour)
- **Spam Protection**: Honeypot fields and content filtering
- **Input Sanitization**: HTML/script tag removal and content validation
- **Bot Detection**: Submission timing analysis and pattern recognition

### Form Validation

- **Client-side**: React Hook Form with Zod schema validation
- **Server-side**: Comprehensive validation and sanitization
- **User Feedback**: Real-time validation messages and success/error states
- **Accessibility**: Full keyboard navigation and screen reader support

### Environment Setup

```bash
# Required environment variables
RESEND_API_KEY=your_resend_api_key
CONTACT_TO_EMAIL=your-email@example.com
CONTACT_FROM_EMAIL=noreply@yourdomain.com
```

## 🔧 Development Commands

```bash
# Development server
bun dev

# Production build
bun run build

# Start production server
bun start

# Lint code
bun run lint

# Type checking
bunx tsc --noEmit

# Component development (shadcn/ui)
bunx shadcn@latest add [component-name]
```

## 🛡️ Security Features

### Rate Limiting

- **IP-based Protection**: Prevents abuse from single IP addresses
- **Configurable Limits**: 5 submissions per hour (customizable)
- **Automatic Cleanup**: Memory-efficient with automatic entry expiration
- **User-friendly Messages**: Clear feedback when limits are reached

### Spam Protection

- **Honeypot Fields**: Hidden fields that catch automated bots
- **Content Filtering**: Detects spam patterns and suspicious content
- **Timing Analysis**: Prevents submissions that are too fast (bot behavior)
- **Input Sanitization**: Removes HTML tags and malicious content

### Data Validation

- **Multi-layer Validation**: Client-side and server-side validation
- **Zod Schema**: Type-safe validation with comprehensive error handling
- **Email Verification**: Domain validation and suspicious email detection
- **Content Limits**: Appropriate length limits for all form fields

## 🚀 Deployment

### Vercel (Recommended)

The project is optimized for Vercel deployment:

1. Push to GitHub repository
2. Connect repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically on push to main branch

### Environment Variables

Required for production deployment:

- `RESEND_API_KEY`: Your Resend API key for email functionality
- `CONTACT_TO_EMAIL`: Email address where contact forms are sent
- `CONTACT_FROM_EMAIL`: Sender email address for contact forms

## 📄 License

This project is created for portfolio purposes. Feel free to use it as a template for your own CV website.

## 🤝 Contributing

This is a personal portfolio project, but suggestions and improvements are welcome!

## 📞 Contact

**Surya Permana**

- Email: suryapermana996@gmail.com
- LinkedIn: [linkedin.com/in/sy-permana](https://linkedin.com/in/sy-permana)
- Location: Celuk, Gianyar, Bali, Indonesia

---

Built with ❤️ using Next.js, TypeScript, shadcn/ui, OKLCH colors, and modern web technologies
