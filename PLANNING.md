# Migration Planning: Shadcn UI + Tailwind v4 + OKLCH Colors

## 🎯 Project Vision

Transform the current Next.js CV website from a custom navy-themed design to a modern, accessible, and maintainable design system using:

- **Shadcn UI components** for consistency and accessibility
- **OKLCH color space** for better color accuracy and future-proofing
- **Custom OKLCH theme** with improved color palette and professional aesthetics
- **Geist typography** for modern, readable text rendering

### Success Definition

A visually consistent, accessible, and maintainable CV website that preserves all existing functionality while leveraging modern design system principles and improved color science.

## 🏗️ Architecture Overview

### Current Architecture

```
Next.js 15.3.3 (Hybrid App + Pages Router)
├── App Router (/app)
│   ├── layout.tsx (root layout)
│   └── globals.css (Tailwind + legacy navy colors)
├── Pages Router (/pages)
│   ├── index.tsx (main CV page)
│   └── _app.tsx
├── Components (/components)
│   ├── 8 custom React components
│   └── Framer Motion animations
└── Legacy Navy Color System (HEX-based)
```

### Target Architecture

```
Next.js 15.3.3 (Hybrid App + Pages Router)
├── App Router (/app)
│   ├── layout.tsx (Geist fonts)
│   └── globals.css (Custom OKLCH theme)
├── Pages Router (/pages)
│   ├── index.tsx (updated components)
│   └── _app.tsx
├── Components
│   ├── /ui (Shadcn components)
│   ├── 8 migrated components
│   └── Preserved Framer Motion
└── Pure OKLCH Semantic Color System
```

## 🛠️ Technology Stack

### Core Technologies (Preserved)

- **Framework**: Next.js 15.3.3
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion 12.18.0
- **Package Manager**: Bun

### New Additions

- **UI Components**: Shadcn UI
- **Theme System**: Custom OKLCH theme with improved color palette
- **Color Space**: Pure OKLCH for all colors
- **Typography**: Geist (sans, serif, mono), Lora
- **Utilities**: class-variance-authority, clsx, tailwind-merge

### Dependencies to Add

```json
{
  "class-variance-authority": "latest",
  "clsx": "latest",
  "tailwind-merge": "latest",
  "lucide-react": "latest"
}
```

## 🎨 Design System Principles

### Color Philosophy

- **Pure OKLCH**: Complete removal of legacy HEX navy colors for improved color science
- **Semantic naming**: Clean semantic tokens (background/foreground/primary/secondary)
- **OKLCH benefits**: Better perceptual uniformity, wider gamut, future browser support
- **Accessibility first**: WCAG AA contrast ratios maintained with improved precision
- **Dark mode native**: Enhanced light/dark theme support with better contrast ratios

### Component Strategy

- **Progressive enhancement**: Replace custom components where Shadcn provides benefit
- **Animation preservation**: Maintain existing Framer Motion interactions
- **Accessibility improvement**: Leverage Shadcn's built-in a11y features
- **Performance focus**: Tree-shakeable components, minimal bundle impact

## 🚧 Technical Constraints

### Must Preserve

- ✅ All existing functionality and user interactions
- ✅ Responsive design across all breakpoints
- ✅ Framer Motion animations and timing
- ✅ SEO metadata and performance metrics
- ✅ Current routing structure (hybrid App/Pages)

### Must Improve

- 🎯 Color accessibility and contrast ratios
- 🎯 Component consistency and maintainability
- 🎯 Typography rendering and readability
- 🎯 Dark mode implementation quality

### Technical Limitations

- **Browser support**: OKLCH requires modern browsers (fallbacks needed)
- **Bundle size**: Monitor impact of new dependencies
- **Performance**: Maintain existing Lighthouse scores
- **Migration scope**: 8 components, legacy color cleanup, improved OKLCH implementation

## 🔄 Migration Strategy

### Phase 1: Foundation (Color System Upgrade)

**Goal**: Establish improved OKLCH theme and remove legacy colors
**Key Tool**: Custom OKLCH color system implementation and legacy color cleanup
**Risk Level**: Low (systematic color replacement)

### Phase 2: Component Migration (Manual Updates)

**Goal**: Update components to use semantic color system
**Key Tool**: Systematic color mapping and Shadcn component replacement
**Risk Level**: Medium (manual changes, potential breaking changes)

### Phase 3: Testing & Optimization (Validation)

**Goal**: Ensure quality and performance standards
**Key Tool**: Comprehensive testing across devices and browsers
**Risk Level**: Low (validation and polish)

## 📊 Success Metrics

### Performance Targets

- **Lighthouse Score**: Maintain 90+ across all categories
- **Core Web Vitals**: No regression in LCP, FID, CLS
- **Bundle Size**: <5% increase in JavaScript bundle
- **Build Time**: No significant impact on development workflow

### Quality Gates

- **Visual Regression**: Zero unintended visual changes
- **Accessibility**: WCAG AA compliance (contrast ratios 4.5:1+)
- **Browser Support**: Consistent rendering in Chrome, Firefox, Safari, Edge
- **Responsive Design**: Perfect rendering on mobile, tablet, desktop

### Functional Requirements

- **Feature Completeness**: All forms, navigation, animations preserved
- **Cross-platform**: iOS Safari, Android Chrome compatibility
- **Performance**: Sub-3s page load on 3G networks
- **SEO**: No impact on search engine indexing

## 🎯 Business Objectives

### Primary Goals

1. **Modernization**: Move to industry-standard design system
2. **Maintainability**: Reduce custom CSS, increase component reusability
3. **Accessibility**: Improve inclusivity and WCAG compliance
4. **Future-proofing**: Leverage OKLCH for better color management

### Secondary Benefits

- **Developer Experience**: Shadcn components reduce development time
- **Design Consistency**: Unified component library across potential future projects
- **Performance**: Optimized component rendering and smaller CSS footprint
- **Brand Evolution**: Professional, modern aesthetic while preserving personal brand

## 🔧 Development Workflow

### Pre-Migration Checklist

- [ ] Backup current implementation
- [ ] Document all existing color usages
- [ ] Set up development branch
- [ ] Prepare testing environments

### Quality Assurance Process

1. **Component-level testing**: Each migrated component tested in isolation
2. **Integration testing**: Full page rendering verification
3. **Cross-browser validation**: Manual testing in target browsers
4. **Performance monitoring**: Before/after metrics comparison
5. **Accessibility auditing**: Automated and manual a11y checks

### Rollback Strategy

- **Git branching**: Maintain working main branch throughout migration
- **Incremental deployment**: Component-by-component rollout capability
- **Feature flags**: Optional progressive enhancement approach
- **Documentation**: Detailed change log for easy reversal if needed

## 📅 Timeline & Resource Allocation

### Estimated Effort: 7-11 hours total

- **Phase 1**: 1-2 hours (automated theme setup)
- **Phase 2**: 4-6 hours (component migration)
- **Phase 3**: 2-3 hours (testing and polish)

### Critical Path Dependencies

1. Legacy navy color removal and OKLCH upgrade success
2. Shadcn UI component compatibility with new color system
3. Framer Motion integration preservation
4. OKLCH browser support validation

### Risk Mitigation Timeline

- **Buffer time**: 20% additional time allocated for unexpected issues
- **Color validation**: Thorough testing of new OKLCH color system
- **Checkpoint reviews**: End-of-phase validation before proceeding
- **Rollback windows**: Ability to revert at any phase boundary
- **Testing cycles**: Dedicated QA time built into each phase
