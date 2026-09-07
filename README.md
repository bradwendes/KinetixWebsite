# Team Kinetix website

Commercial performance, event support and consultancy website built with the Next.js App Router API through Vinext, React, TypeScript, Tailwind CSS and Shadcn-compatible components.

## Local development

Use Node.js 22+, copy `.env.example` to `.env`, add the Resend credentials, then run:

```bash
pnpm install
pnpm dev
```

## Production and Docker

```bash
pnpm build
pnpm start
```

Or run `docker compose up --build`. The container serves the Cloudflare-compatible production build on port 8787.

The enquiry endpoint remains intentionally unavailable until `RESEND_API_KEY` and a verified `CONTACT_FROM_EMAIL` are configured.

## Media provenance

- `performance-primary.jpg`, `team-kinetix-about.jpg` and `kinetix-logo.png` are approved assets retrieved from the existing Team Kinetix website.
- Video preview images are YouTube thumbnails for videos published on the official Team Kinetix channel.
- Archive labels identify older footage; no Academy tutorials, class content or community-project footage is used.
