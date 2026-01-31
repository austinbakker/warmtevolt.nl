# TODO: Facebook Tracking Implementation

## Pending Tasks

### ViewContent Event Tracking
- [ ] Implement ViewContent event for product/service pages
- [ ] Add client-side pixel tracking for page views on specific content pages
- [ ] Add server-side Conversion API for ViewContent events
- [ ] Pages to consider:
  - `/services` - Services overview
  - `/prijzen` - Pricing page
  - `/accessoires` - Accessories page
  - Individual product pages (if applicable)

### Schedule Event Tracking
- [ ] Implement Schedule event (currently not needed, but placeholder for future)

## Completed Tasks

- [x] Facebook Pixel integration (PageView tracking)
- [x] Facebook Conversion API for Contact events
- [x] Contact form submission tracking (offerte page)
- [x] Environment variables configured in Vercel
- [x] Deployment documentation created (DEPLOY.md)

---

## Deployment

See [DEPLOY.md](./DEPLOY.md) for full deployment instructions.

### Quick Deploy
```powershell
.\scripts\deploy.ps1
```

Or manually:
```bash
npx vercel link --project Warmtevolt-nl --yes
npx vercel --prod
```


