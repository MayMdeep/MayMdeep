Deployment guide — Vercel (recommended)

Why Vercel:
- Instant HTTPS and global CDN for static Vite apps.
- Automatic builds from GitHub/GitLab/Bitbucket.
- Free personal tier suitable for portfolios.

Quick steps (recommended):

1) Push your repo to GitHub (or Git provider):

```bash
git init
git add .
git commit -m "initial"
# create repo on GitHub then:
git remote add origin <your-git-remote-url>
git push -u origin main
```

2) Deploy on Vercel:
- Go to https://vercel.com and sign up / log in with GitHub.
- Choose "New Project" → Import your repository.
- For "Framework Preset" choose `Other` or `Vite` if available.
- Build Command: `npm run build`
- Output Directory: `dist`
- Root Directory: (leave blank unless your project is in a subfolder)
- Click "Deploy". Vercel will build and assign a `*.vercel.app` domain with HTTPS.

3) Add a custom domain (optional):
- In Vercel dashboard → Domains → Add domain `may-deeb.com` (or your chosen domain).
- Follow DNS instructions: add `A`/`CNAME` records as Vercel requests.
- Enable "Enforce HTTPS" in the domain settings.
- Update `index.html` canonical link to use your chosen domain (already present, update if needed).

4) Submit sitemap to Google Search Console & Bing:
- Register the domain in Google Search Console (https://search.google.com/search-console).
- Verify ownership (DNS TXT or other method).
- In Search Console: "Sitemaps" → add `https://<your-domain>/sitemap.xml` and submit.
- Do likewise in Bing Webmaster Tools.

5) Optional Netlify steps (if you'd prefer Netlify):
- Push to GitHub.
- In Netlify dashboard choose "New site from Git" and connect your repo.
- Build command: `npm run build` and Publish directory: `dist`.
- Netlify will give a site with HTTPS; add custom domain and set DNS.

Local checks:
- Build locally: `npm run build` then `npm run preview` (or `vite preview`) to check production build.
- Ensure `public/sitemap.xml` and `public/robots.txt` are present and accessible at `https://<domain>/sitemap.xml`.

SEO & canonical notes:
- `index.html` already contains meta tags and a canonical link; update the canonical href to match your final domain.
- After deployment and verification, submit sitemap and request indexing in Search Console.

If you want I can:
- Create a `vercel.json` with redirects or headers.
- Add a GitHub Actions workflow to auto-deploy (not necessary with Vercel's direct integration).
- Draft outreach messages for backlink requests.

Which follow-up would you like? (I can add `vercel.json`, or draft outreach messages next.)
