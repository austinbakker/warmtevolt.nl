# Deployment Guide for Warmtevolt.nl

This guide is for AI assistants and developers to deploy the website to Vercel.

## Prerequisites

- Vercel CLI installed (`npm i -g vercel`)
- Logged in to Vercel (`vercel login`)

---

## Quick Deploy Commands

### 1. Link to the correct Vercel project

```bash
npx vercel link --project Warmtevolt-nl --yes
```

### 2. Deploy to Production

```bash
npx vercel --prod
```

---

## Environment Variables

The following environment variables must be set in Vercel for the Facebook Pixel and Conversion API to work:

| Variable | Value | Environments |
|----------|-------|--------------|
| `NEXT_PUBLIC_FACEBOOK_PIXEL_ID` | `848579814762047` | Production, Preview, Development |
| `FACEBOOK_ACCESS_TOKEN` | (see below) | Production, Preview, Development |

### Facebook Access Token

```
EAARkLOK2jcIBQXZCG8YZAGSJkKCA9WnwAwROIPidNSHjyAZCHaLLS6jXWqZBYUSPwBGDpoPqGFyum6l8kd87pqPZAiowfm9s9sXBJuZANfEsNOxhXadGX0AijWxBoaKKMyhCNuUT5SeXPhUEo4S8UBQINZCYROPjVLVJFjbwwRJQaiKZCRNG6lsRX0gWGwKPFJT8KAZDZD
```

### Add Environment Variables (if not already set)

```bash
# Pixel ID
echo "848579814762047" | npx vercel env add NEXT_PUBLIC_FACEBOOK_PIXEL_ID production
echo "848579814762047" | npx vercel env add NEXT_PUBLIC_FACEBOOK_PIXEL_ID preview
echo "848579814762047" | npx vercel env add NEXT_PUBLIC_FACEBOOK_PIXEL_ID development

# Access Token
echo "EAARkLOK2jcIBQXZCG8YZAGSJkKCA9WnwAwROIPidNSHjyAZCHaLLS6jXWqZBYUSPwBGDpoPqGFyum6l8kd87pqPZAiowfm9s9sXBJuZANfEsNOxhXadGX0AijWxBoaKKMyhCNuUT5SeXPhUEo4S8UBQINZCYROPjVLVJFjbwwRJQaiKZCRNG6lsRX0gWGwKPFJT8KAZDZD" | npx vercel env add FACEBOOK_ACCESS_TOKEN production
echo "EAARkLOK2jcIBQXZCG8YZAGSJkKCA9WnwAwROIPidNSHjyAZCHaLLS6jXWqZBYUSPwBGDpoPqGFyum6l8kd87pqPZAiowfm9s9sXBJuZANfEsNOxhXadGX0AijWxBoaKKMyhCNuUT5SeXPhUEo4S8UBQINZCYROPjVLVJFjbwwRJQaiKZCRNG6lsRX0gWGwKPFJT8KAZDZD" | npx vercel env add FACEBOOK_ACCESS_TOKEN preview
echo "EAARkLOK2jcIBQXZCG8YZAGSJkKCA9WnwAwROIPidNSHjyAZCHaLLS6jXWqZBYUSPwBGDpoPqGFyum6l8kd87pqPZAiowfm9s9sXBJuZANfEsNOxhXadGX0AijWxBoaKKMyhCNuUT5SeXPhUEo4S8UBQINZCYROPjVLVJFjbwwRJQaiKZCRNG6lsRX0gWGwKPFJT8KAZDZD" | npx vercel env add FACEBOOK_ACCESS_TOKEN development
```

### Verify Environment Variables

```bash
npx vercel env ls
```

### Pull Environment Variables to Local

```bash
npx vercel env pull .env.local --yes
```

---

## Full Deployment Script (Copy & Paste)

Run this entire block to deploy:

```powershell
# Link to project
npx vercel link --project Warmtevolt-nl --yes

# Deploy to production
npx vercel --prod
```

---

## Vercel Projects Overview

| Project Name | URL | Purpose |
|--------------|-----|---------|
| `Warmtevolt-nl` | https://www.Warmtevolt.nl | **Main production site** |
| `warmtevolt-app` | https://warmtevolt-app.vercel.app | Development/staging |

---

## Verification After Deployment

### 1. Check Facebook Pixel is working

Open browser DevTools → Console and run:

```javascript
console.log('fbq exists:', typeof fbq !== 'undefined');
console.log('fbq loaded:', fbq && fbq.loaded);
```

### 2. Check Network Requests

Filter by "facebook" in Network tab. You should see:
- `connect.facebook.net/en_US/fbevents.js`
- `connect.facebook.net/signals/config/848579814762047`

### 3. Meta Events Manager

Go to [Meta Events Manager](https://business.facebook.com/events_manager) → Pixel 848579814762047 → Test Events

---

## Tracking Events

| Event | Trigger | Type |
|-------|---------|------|
| `PageView` | Every page load | Client-side (Pixel) |
| `Contact` | Form submission on `/offerte` | Client-side (Pixel) + Server-side (CAPI) |

---

## Troubleshooting

### Pixel not loading
1. Check if `NEXT_PUBLIC_FACEBOOK_PIXEL_ID` is set: `npx vercel env ls`
2. Redeploy: `npx vercel --prod`

### CAPI not working
1. Check server logs: `npx vercel logs --follow`
2. Verify `FACEBOOK_ACCESS_TOKEN` is set
3. Check Meta Events Manager → Test Events for errors

### Clear Vercel cache and redeploy
```bash
npx vercel --prod --force
```


