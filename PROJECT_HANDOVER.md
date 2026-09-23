# Fetan LED Website - Project Handover Document

**Project Name:** Fetan LED Website  
**Date:** September 22, 2026  
**Project URL:** https://fetanled.com  
**Contact:** +251913001010  
**Email:** contact@fetanled.com

---

## Project Overview

Fetan LED is a premium LED display solutions company based in Addis Ababa, Ethiopia. The website showcases their LED screen products, services, project portfolio, and provides quote request functionality.

### Key Features
- Responsive navigation with mobile menu
- Hero section with video background
- Project gallery with filtering (Indoor, Outdoor, Stage)
- Products showcase with detailed specifications
- Quote request form with email integration
- WhatsApp integration for direct communication
- SEO optimized with structured data
- Google Tag Manager integration (GTM-PQ7J9NJ5)

---

## Technology Stack

### Frontend Framework
- **Next.js 15** (App Router)
- **React 19**
- **TypeScript**

### Styling
- **Tailwind CSS**
- **Framer Motion** (animations)

### Key Dependencies
```json
{
  "next": "^15.0.0",
  "react": "^19.0.0",
  "framer-motion": "^11.0.0",
  "lucide-react": "^0.400.0",
  "nodemailer": "^6.9.0"
}
```

---

## Project Structure

```
my-app/
├── app/
│   ├── about/
│   │   └── page.tsx
│   ├── api/
│   │   └── quote/
│   │       └── route.ts          # Quote form email handler
│   ├── contact/
│   │   └── page.tsx
│   ├── layout.tsx                 # Root layout with GTM
│   ├── page.tsx                   # Homepage
│   ├── projects/
│   │   ├── [id]/
│   │   │   └── page.tsx          # Project detail pages
│   │   └── page.tsx
│   ├── services/
│   │   └── page.tsx
│   └── sitemap.ts
├── components/
│   ├── layout/
│   │   ├── footer.tsx
│   │   ├── loading-screen.tsx
│   │   └── navbar.tsx
│   ├── sections/
│   │   ├── hero.tsx
│   │   ├── location-map.tsx
│   │   ├── products-gallery.tsx
│   │   ├── project-gallery.tsx
│   │   ├── quote-form.tsx
│   │   ├── solutions-nav.tsx
│   │   └── spec-sheets.tsx
│   ├── shared/
│   │   └── section-heading.tsx
│   └── ui/
│       ├── button.tsx
│       └── whatsapp-button.tsx
├── lib/
│   ├── constants/
│   │   ├── navigation.ts
│   │   ├── projects.ts           # Project data
│   │   └── quote.ts
│   ├── contexts/
│   │   └── video-loading.tsx
│   └── utils.ts
├── public/
│   ├── images/
│   │   ├── projects/             # Project images
│   │   └── products/             # Product images
│   ├── favicon.ico
│   ├── fetan-favicon.png
│   └── logo-v2.png
└── types/
    └── index.ts
```

---

## Configuration Files

### Environment Variables
Create a `.env.local` file in the root directory:

```env
# Email Configuration (for quote form)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
EMAIL_FROM=noreply@fetanled.com

# Optional: Google Analytics
NEXT_PUBLIC_GA_ID=G-E5VK4660N9
```

### Navigation Constants
Location: `lib/constants/navigation.ts`

```typescript
export const COMPANY_NAME = "Fetan LED";
export const COMPANY_EMAIL = "contact@fetanled.com";
export const COMPANY_TAGLINE = "Premium LED Display Solutions";
```

---

## Content Management

### Adding New Projects
Location: `lib/constants/projects.ts`

```typescript
{
  id: "8",
  title: "Project Name",
  subtitle: "Brief description",
  category: "indoor", // or "outdoor" or "stage"
  size: "40 SQM",
  featured: true,
  span: "large", // or "medium" or "small"
  image: "/images/projects/project-image.jpg",
}
```

Then add details in `app/projects/[id]/page.tsx`:

```typescript
"8": {
  description: "Full project description",
  challenge: "The challenge faced",
  solution: "The solution provided",
  specs: [
    { label: "Pixel Pitch", value: "2.5 mm" },
    { label: "Display Size", value: "40 m²" },
    // ... more specs
  ],
},
```

### Adding New Products
Products are managed in the products-gallery component. Update the product data structure to add new products.

---

## Email Configuration

The quote form uses Nodemailer to send emails. Configuration is in `app/api/quote/route.ts`:

```typescript
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT || "587"),
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});
```

**Important:** For Gmail, use an App Password instead of your regular password:
1. Go to Google Account settings
2. Enable 2-Step Verification
3. Generate an App Password
4. Use the App Password in your environment variables

---

## WhatsApp Integration

WhatsApp number is configured in `components/ui/whatsapp-button.tsx`:

```typescript
const WHATSAPP_NUMBER = "251913001010";
```

To change the number, update this constant.

---

## SEO & Analytics

### Google Tag Manager
- GTM ID: `GTM-PQ7J9NJ5`
- Added in `app/layout.tsx` (head and body sections)

### Meta Tags
Configured in `app/layout.tsx` metadata object:
- Title templates
- Description
- Keywords
- Open Graph tags
- Twitter cards

### Structured Data
LocalBusiness schema is included in the head section for better local SEO.

---

## Deployment

### Vercel Deployment (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Environment Variables for Production
Add these in your hosting platform:
- `EMAIL_HOST`
- `EMAIL_PORT`
- `EMAIL_USER`
- `EMAIL_PASSWORD`
- `EMAIL_FROM`

---

## Maintenance Tasks

### Regular Updates
1. **Update project portfolio** - Add new completed projects
2. **Update product information** - Keep product specs current
3. **Review analytics** - Check GTM for user behavior
4. **Test quote form** - Ensure email delivery works
5. **Update contact info** - Verify phone/email are current

### Image Optimization
- Use WebP format for better performance
- Compress images before uploading
- Maintain consistent aspect ratios

### Performance Monitoring
- Monitor Core Web Vitals
- Check Lighthouse scores
- Optimize large images
- Review bundle size

---

## Troubleshooting

### Quote Form Not Sending
1. Check environment variables are set
2. Verify email credentials
3. Check spam folder
4. Review server logs

### Images Not Loading
1. Verify file paths in public folder
2. Check file names match exactly (case-sensitive)
3. Ensure files are not in .gitignore

### WhatsApp Button Not Working
1. Verify phone number format (country code without +)
2. Check WhatsApp is installed on device

### Favicon Not Updating
1. Clear browser cache (Ctrl+F5)
2. Update version parameter in URL
3. Verify file exists in public folder

---

## Contact Information

For technical support or questions about this project:

**Development Team:**  
- Phone: +251913001010  
- Email: contact@fetanled.com

**Hosting:** Vercel (recommended) or any Next.js-compatible platform

---

## Notes

- The site uses Next.js App Router (not Pages Router)
- All components use TypeScript
- Tailwind CSS is used for styling
- Framer Motion handles animations
- The site is fully responsive (mobile-first)
- All images should be optimized before upload
- Test all forms after deployment

---

## Version History

- **v1.0** (September 2026): Initial launch
  - Project gallery with 7 projects
  - Products showcase
  - Quote form with email integration
  - WhatsApp integration
  - GTM integration
  - SEO optimization

---

**End of Handover Document**
