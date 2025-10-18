# Deployment Guide - Vercel

## 🚀 Deploy to Vercel

Follow these steps to deploy your La Salamanca website to Vercel:

### Step 1: Push to GitHub

1. **Create a new repository on GitHub:**
   - Go to https://github.com/new
   - Repository name: `la-salamanca` (or any name you prefer)
   - Description: "Static website for La Salamanca land lots"
   - Choose: **Public** or **Private** (your choice)
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
   - Click "Create repository"

2. **Push your code to GitHub:**

   Copy and run these commands in your terminal:

   ```bash
   git remote add origin https://github.com/YOUR-USERNAME/la-salamanca.git
   git branch -M main
   git push -u origin main
   ```

   Replace `YOUR-USERNAME` with your actual GitHub username.

### Step 2: Deploy on Vercel

1. **Go to Vercel:**
   - Visit https://vercel.com
   - Click "Log in" (or you're already logged in)

2. **Import your project:**
   - Click "Add New..." → "Project"
   - You'll see your GitHub repositories
   - Find `la-salamanca` and click "Import"

3. **Configure your project:**
   - **Project Name**: `la-salamanca` (or customize)
   - **Framework Preset**: Leave as "Other" (it's a static site)
   - **Root Directory**: `./` (leave default)
   - **Build Command**: Leave empty (no build needed)
   - **Output Directory**: Leave empty (files are in root)
   - Click "Deploy"

4. **Wait for deployment:**
   - Vercel will deploy your site (takes ~30 seconds)
   - You'll get a URL like: `https://la-salamanca.vercel.app`

### Step 3: Enable Analytics

1. **In your Vercel project:**
   - Click on your project name
   - Go to "Analytics" tab
   - Click "Enable Analytics"
   - That's it! Analytics will start tracking immediately

2. **View your analytics:**
   - Page views
   - Unique visitors
   - Top pages (index.html vs precios.html)
   - Countries, devices, etc.

### Step 4: Custom Domain (Optional)

If you want a custom domain like `lasalamanca.com`:

1. **In Vercel project settings:**
   - Go to "Settings" → "Domains"
   - Add your domain
   - Follow the DNS instructions

## 📊 What You'll Track

With Vercel Analytics, you'll see:
- ✅ Total visitors to the site
- ✅ Page views for each page:
  - `/` (index.html - landing page)
  - `/precios.html` (prices page)
- ✅ Unique visitors
- ✅ Geographic data
- ✅ Device breakdown (mobile/desktop)

## 🔄 Updating Your Site

After the initial deployment, any time you want to update the site:

```bash
# Make your changes (edit data.json, HTML, CSS, etc.)
git add .
git commit -m "Description of changes"
git push
```

Vercel will automatically detect the push and redeploy your site!

## 📝 Quick Reference

**Your Vercel URL:** `https://la-salamanca.vercel.app` (or whatever Vercel assigns)

**Update prices:** Edit `data.json` → commit → push → auto-deploys

**View analytics:** Vercel dashboard → Your project → Analytics

## ⚠️ Important Notes

- Vercel Analytics is **FREE** for up to 2,500 events/month (more than enough)
- Analytics are **privacy-friendly** (no cookies, GDPR compliant)
- Deployments are **instant** (automatic on every git push)
- You get **HTTPS** automatically (secure)

## 🆘 Need Help?

If you have issues:
1. Check Vercel deployment logs in the dashboard
2. Make sure all files are committed: `git status`
3. Verify the site works locally first: `npm start`

---

**You're all set!** 🎉

Your site will be live at a Vercel URL in minutes, with analytics tracking every visitor.
