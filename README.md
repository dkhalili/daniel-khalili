# Daniel Khalili

Personal portfolio and resume website for Daniel Khalili, Engineering Manager. Built with Next.js, React, TypeScript, Tailwind CSS, and Framer Motion.

[Visit the website](https://danielkhalili.com)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Portfolio content lives in `src/data/`, with page sections in `src/components/`. The editable resume and PDF build instructions are in `resume/`. The published download is `public/DanielKhalili_Resume.pdf`.

Run `npm run build` to validate a production build. The contact form uses `RESEND_API_KEY` and an optional `ADMIN_EMAIL` environment variable. Configure these in your hosting environment; never commit credentials.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
