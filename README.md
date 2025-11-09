# Feelings Tune, সুরের-অনুভূতি

A modern website for the Feelings Tune YouTube channel, featuring Bengali music and cultural content.

## Features

- 🎵 Modern, responsive design with Next.js 14 and TypeScript
- 🎨 Styled with Tailwind CSS
- 🌙 Dark/Light mode support
- 📱 Mobile-first responsive layout
- ⚡ Fast page loads with Next.js optimizations
- 🎭 Beautiful UI components with Radix UI

## Pages

- **Home** - Channel introduction and featured content
- **About** - Channel story and mission
- **Videos** - Video gallery and categories
- **Support** - Donation and sponsorship information

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Build for Production

```bash
npm run build
npm start
```

## Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/feelings-tune)

### Quick Deployment Steps

1. **Push to GitHub/GitLab/Bitbucket**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin your-repo-url
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your repository
   - Vercel will auto-detect Next.js and configure everything
   - Click "Deploy"

3. **Done!** Your site will be live at `your-project.vercel.app`

### Configuration

This project is fully optimized for Vercel deployment with:
- ✅ Optimized `next.config.mjs` for production
- ✅ `vercel.json` with security headers and caching
- ✅ Static optimization for fast page loads
- ✅ Image optimization for YouTube thumbnails
- ✅ No environment variables needed

### Custom Domain

To add a custom domain:
1. Go to your project in Vercel dashboard
2. Settings → Domains
3. Add your domain and follow DNS instructions

## Performance Optimizations

- **Image Optimization**: YouTube CDN images with Next.js Image optimization
- **Code Splitting**: Automatic route-based code splitting
- **Compression**: Gzip compression enabled
- **Caching**: Static assets cached with optimal headers
- **Security**: XSS protection, content security headers

## Contact

- YouTube: [@feelingstune](https://youtube.com/@feelingstune)
- Facebook: [Feelings Of Tune](https://www.facebook.com/FeelingsOfTune)
- Facebook: [Oporup Shilpi Gosthi](https://www.facebook.com/OporupShilpiGosthi)
- Phone: +8801795-583950

## License

© 2024 Feelings Tune. All rights reserved.
