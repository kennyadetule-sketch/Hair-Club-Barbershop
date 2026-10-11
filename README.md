# Hair Club Barbershop Website

A responsive, multi-page website preview for Hair Club Barbershop in San Antonio, Texas, built with HTML, CSS and vanilla JavaScript.

## Pages
- `index.html` — homepage, services preview, business photos, selected customer reviews, map and hours
- `about.html` — business overview and approach
- `services.html` — service descriptions and call-to-confirm pricing
- `gallery.html` — Google Maps-hosted business photos with a lightbox
- `reviews.html` — selected public review excerpts and a link to Google Maps
- `faq.html` — practical visitor questions
- `contact.html` — contact details, map and contact form preview
- `privacy.html` and `terms.html` — site-specific starter notices for owner review

## Business details currently configured
- Address: 7211 Green Glen Dr, Suite 105, San Antonio, TX 78255
- Phone: (210) 943-0044
- Facebook: https://www.facebook.com/profile.php?id=100050299957308
- Google Maps: https://www.google.com/maps/place/Hair+Club+Barbershop/@29.5892254,-98.6354164,17z/data=!4m6!3m5!1s0x865c675e20c0a069:0x5369341b22e1cfbe!8m2!3d29.5892254!4d-98.6309103!16s%2Fg%2F11ft7866py

## Before going live
1. Ask the business owner to confirm phone, email, opening hours, current service list and pricing. Public directories can disagree about hours.
2. Confirm permission to use the Google Maps photos and selected review excerpts on the website. Direct image URLs are Google-hosted and may change or stop working; local, owner-approved image files are more reliable long term.
3. The contact form currently validates fields in the browser but does not send messages. Connect it to a real form endpoint or remove it before public launch. The form displays a clear message telling visitors to call instead.
4. Have the business owner review the privacy and terms pages before publication, especially if a live form, analytics or a booking service is added.
5. Replace the empty `siteUrl` value in `js/config.js` with the final website domain after deployment. Canonical tags pointing to a fake example domain have been removed.
6. Check the live page on a phone and desktop after deployment.

## Sources used for service/review research
- Business listing and customer review excerpts: https://reviews.birdeye.com/hair-club-barbershop-170231474451262
- Service and appointment listing: https://zipappointments.com/san-antonio-tx/hair-club-barbershop-jq8hk
- Additional local service information: https://www.bestprosintown.com/tx/san-antonio/hair-club-barbershop-/

Public listings are secondary sources and can be outdated. Confirm details directly with the business before publication.
