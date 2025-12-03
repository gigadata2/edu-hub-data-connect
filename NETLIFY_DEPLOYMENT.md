# Netlify Deployment Guide

This guide will help you deploy your Edu-Hub Data Connect app to Netlify.

## Prerequisites

1. A Netlify account ([sign up here](https://app.netlify.com/signup))
2. Your code pushed to GitHub/GitLab/Bitbucket
3. Environment variables ready

## Quick Deploy

### Option 1: Deploy via Netlify UI

1. **Connect Repository:**
   - Go to [Netlify Dashboard](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your Git provider (GitHub/GitLab/Bitbucket)
   - Select your repository

2. **Configure Build Settings:**
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - Click "Deploy site"

3. **Add Environment Variables:**
   - Go to Site settings → Environment variables
   - Add the following:
     ```
     VITE_SUPABASE_URL=your_supabase_url
     VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
     VITE_PAYSTACK_PUBLIC_KEY=your_paystack_public_key
     VITE_EMAIL_API_URL=https://your-email-api-url.com
     ```

4. **Redeploy:**
   - Go to Deploys tab
   - Click "Trigger deploy" → "Clear cache and deploy site"

### Option 2: Deploy via Netlify CLI

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login:**
   ```bash
   netlify login
   ```

3. **Initialize:**
   ```bash
   netlify init
   ```

4. **Deploy:**
   ```bash
   npm run build
   netlify deploy --prod
   ```

## Configuration Files

### `netlify.toml`
This file is already configured with:
- ✅ Build command and publish directory
- ✅ SPA redirect rules (all routes → index.html)
- ✅ Correct MIME types for JavaScript modules
- ✅ Security headers

### `public/_headers`
Additional headers file for MIME type configuration (backup).

## Common Issues & Fixes

### Issue: "Expected a JavaScript module script but server responded with MIME type of 'application/octet-stream'"

**Solution:** The `netlify.toml` file should fix this. If it persists:

1. Clear Netlify cache and redeploy
2. Check that `netlify.toml` is in the root directory
3. Verify build output includes `.js` files in `dist/`

### Issue: 404 on Routes

**Solution:** The SPA redirect rule in `netlify.toml` should handle this. If routes still 404:

1. Verify the redirect rule is present:
   ```toml
   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200
   ```

### Issue: Environment Variables Not Working

**Solution:**
1. Make sure variables are prefixed with `VITE_`
2. Redeploy after adding variables (they're injected at build time)
3. Check Netlify build logs for errors

### Issue: Build Fails

**Common causes:**
- Missing dependencies → Check `package.json`
- TypeScript errors → Fix before deploying
- Missing environment variables → Add to Netlify

**Fix:**
1. Test build locally: `npm run build`
2. Check build logs in Netlify dashboard
3. Fix errors and redeploy

## Environment Variables Setup

Add these in Netlify Dashboard → Site settings → Environment variables:

### Required:
```
VITE_SUPABASE_URL
VITE_SUPABASE_ANON_KEY
VITE_PAYSTACK_PUBLIC_KEY
VITE_EMAIL_API_URL
```

### Optional (if using Resend directly):
```
VITE_RESEND_API_KEY
VITE_RESEND_FROM_EMAIL
```

## Email API Server Deployment

Since you have a separate email API server, you need to deploy it separately:

### Option 1: Deploy to Railway/Render/Fly.io
1. Push `server/` directory to a separate repo or subdirectory
2. Deploy using their platform
3. Update `VITE_EMAIL_API_URL` in Netlify with the deployed URL

### Option 2: Deploy as Netlify Function
Convert the Express server to Netlify Functions (see Netlify Functions docs).

## Post-Deployment Checklist

- [ ] All environment variables set
- [ ] Site loads without errors
- [ ] Routes work (no 404s)
- [ ] Authentication works
- [ ] Payments work (test with Paystack test mode)
- [ ] Emails are sending (if email API is deployed)
- [ ] Mobile responsive
- [ ] SSL certificate active (automatic on Netlify)

## Custom Domain

1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Follow DNS configuration instructions
4. SSL certificate will be auto-provisioned

## Performance Optimization

Netlify automatically:
- ✅ CDN distribution
- ✅ Asset optimization
- ✅ Gzip compression
- ✅ HTTP/2

For better performance:
- Enable Netlify Image Optimization (if using images)
- Use Netlify Edge Functions for API calls (optional)

## Monitoring

- **Build logs:** Deploys tab → Click on deploy
- **Function logs:** Functions tab (if using Netlify Functions)
- **Analytics:** Enable in Site settings → Analytics

## Support

- [Netlify Docs](https://docs.netlify.com/)
- [Netlify Community](https://community.netlify.com/)
- [Netlify Status](https://www.netlifystatus.com/)

