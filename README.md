# Surya Permana - Professional CV Website

A modern, professional CV website built with Next.js, TypeScript, and Tailwind CSS, featuring smooth scroll animations and internationalization support.

## 🌟 Features

- **Modern Design**: Clean, professional design with navy-based color scheme
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
  - Contact form with social links

## 🚀 Tech Stack

- **Framework**: Next.js 15.3.3 with Pages Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.0
- **Animations**: Framer Motion
- **Icons**: Heroicons (embedded SVGs)
- **Fonts**: Inter (Google Fonts)
- **Package Manager**: npm

## 📁 Project Structure

```
nextjs-cv-website/
├── components/           # Reusable React components
│   ├── About.tsx        # Professional summary section
│   ├── Certifications.tsx # Certifications and achievements
│   ├── Contact.tsx      # Contact form and information
│   ├── Education.tsx    # Education background
│   ├── Experience.tsx   # Work experience timeline
│   ├── Hero.tsx         # Hero section with photo
│   ├── Navigation.tsx   # Navigation bar with language switcher
│   ├── ScrollAnimation.tsx # Reusable scroll animation wrapper
│   ├── Section.tsx      # Section layout component
│   └── Skills.tsx       # Technical skills grid
├── lib/                 # Utility functions and data
│   ├── locales/         # Internationalization content
│   │   ├── en.ts       # English translations
│   │   └── id.ts       # Indonesian translations
│   ├── cv-data.ts      # CV content data
│   └── i18n.ts         # Internationalization utilities
├── pages/              # Next.js pages (Pages Router)
│   ├── _app.tsx        # App wrapper with global styles
│   └── index.tsx       # Main home page
├── types/              # TypeScript type definitions
│   └── index.ts        # All project types
├── app/                # App Router files (globals only)
│   ├── globals.css     # Global styles and CSS variables
│   └── layout.tsx      # Root layout (metadata only)
└── public/             # Static assets
```

## 🎨 Design Features

### Color Scheme
- **Primary**: Navy blue variations (#1e40af, #1d4ed8, #1e3a8a)
- **Secondary**: Light blue and slate colors
- **Background**: Gradient from slate to blue tones
- **Text**: Professional dark grays and navy

### Typography
- **Font**: Inter (clean, professional sans-serif)
- **Hierarchy**: Clear font sizes and weights
- **Readability**: Optimized line heights and spacing

### Animations
- **Scroll Animations**: Elements fade in with smooth transitions
- **Hover Effects**: Interactive buttons and cards
- **Page Transitions**: Smooth section transitions
- **Loading States**: Professional loading indicators

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
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   npm run start
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

## 📧 Contact Form

The contact form uses `mailto:` links to open the user's default email client with pre-filled information. For production use, you may want to integrate with:
- Email services (SendGrid, Mailgun)
- Form handlers (Formspree, Netlify Forms)
- Backend API endpoints

## 🔧 Development Commands

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Lint code
npm run lint

# Type checking
npx tsc --noEmit
```

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

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS