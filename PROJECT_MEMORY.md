# Walk Business Website — Project Memory
# Last updated: 2026-05-02
# DO NOT DELETE — permanent reference for all sessions

## Website Info
- Domain:        https://walk-business.com
- Owner/Friend:  Mohamed's friend (Walk Academy)
- Purpose:       Accounting Academy + Consulting + Odoo ERP + Audit

## Brand
- Primary color: #0D3B5C (dark navy)
- Accent color:  #F58220 (orange)
- Background:    #F5F5F5 (light grey)
- Text:          #1A1A1A (near black)
- Languages:     Arabic (default, RTL) / English / French
- Logo:          assets/images/logo.jpg

## Server / Hosting
- VPS IP:            46.225.54.61
- VPS Owner:         Mohamed (same server as Odoo ERP)
- Nginx site config: /etc/nginx/sites-available/walk-business
- Web root:          /var/www/walk-business
- SSL:               Let's Encrypt (expires 2026-07-31, auto-renews)
- Ports open:        80, 443

## GitHub
- Username:  khaledwaleed-arch
- PAT:       ghp_****REDACTED****
- Repo:      https://github.com/khaledwaleed-arch/walk-academy-website
- Branch:    main
- Remote URL set in /var/www/walk-business with PAT embedded

## Hostinger
- API Token:    3JjqhMFCJIIg06ybXJ38mAVpwUnawcnEAjotUJeo5242535b
- Domains owned: walk-business.com, tawasolexport.com, dahabmarbre.com, lumerramarble.com, papremis.com
- DNS:          A record @ + www → 46.225.54.61 (added 2026-05-02)
- Nameservers:  Hostinger nameservers (changed from parking 2026-05-02)
- Plan:         Domain registration only (no traditional hosting plan)

## Telegram Notifications
- Bot Token: 8608317579:AAGrokYt0liSg97AM48DFxypwnnv3BVDvtQ
- Chat ID:   35871544
- Bot Name:  Zaki (@migoClaudeCode_bot)

## Deployment Workflow (Claude does all of this — user does NOT push)
1. Edit source files in:  /root/walk-business-website/
2. Copy to VPS web root:  cp -r /root/walk-business-website/. /var/www/walk-business/
3. Push to GitHub:        cd /var/www/walk-business && git add -A && git commit -m "..." && git push origin main
4. Auto-deploy script:    /root/deploy-walk-business.sh
5. Notify Mohamed:        Telegram message sent automatically

## File Structure
/root/walk-business-website/
├── index.html              # Main page (trilingual AR/EN/FR)
├── thankyou.html           # Post-registration success page
├── assets/
│   ├── css/style.css       # All styles, CSS variables, RTL support
│   ├── js/
│   │   ├── main.js         # Navbar, animations, forms, counters
│   │   └── i18n.js         # Trilingual translation system
│   └── images/
│       └── logo.jpg        # Walk Academy logo
├── php/
│   ├── contact.php         # Contact form handler (sends to info@walk-business.com)
│   └── register.php        # Stripe payment handler
├── .gitignore
└── PROJECT_MEMORY.md       # This file

## Services Offered (from PDFs)
1. Accounting Services
2. Training Academy (for fresh graduates)
3. Business Consulting
4. Audit & Assurance
5. Odoo ERP Implementation

## Key Stats (from PDFs)
- 85% of graduates get jobs within 6 months
- 7M+ EGP in client savings
- 70% of clients return for more services

## Social Media (TO BE ADDED — awaiting handles from user)
- LinkedIn:   https://www.linkedin.com/company/walk-academy/
- Instagram:  https://www.instagram.com/walk.academy
- YouTube:    https://www.youtube.com/@walkacademy (not yet created)
- Facebook:   https://www.facebook.com/share/1FWUU3yLs7/
- TikTok:     https://www.tiktok.com/@walkacademy

## Contact Info (TO BE ADDED — awaiting from user)
- Phone:      +201143706993
- Email:      info@walk-business.com
- WhatsApp:   +201143706993
- Address:    152 st King Faisal, Giza, Egypt

## Pending Tasks
- [ ] Get social media handles/URLs from user
- [ ] Get contact info (phone, email, address, WhatsApp)
- [ ] Add full SEO meta tags + schema.org structured data
- [ ] Add social media icons in footer + hero
- [ ] Add Google Analytics or Hotjar
- [ ] Replace Stripe placeholder key in register.php
- [ ] Set up GitHub Actions auto-deploy webhook
- [ ] FAQ section
- [ ] Blog posts (real content)
- [ ] Arabic/French full translation review

## Completed
- [x] Full website built (index.html, CSS, JS, i18n)
- [x] GitHub repo created and pushed
- [x] VPS nginx configured for walk-business.com
- [x] DNS A records added (@ + www → 46.225.54.61)
- [x] Firewall ports 80 + 443 opened
- [x] SSL certificate installed (Let's Encrypt)
- [x] Website live at https://walk-business.com (HTTP 200)
- [x] Telegram notification sent on deploy
