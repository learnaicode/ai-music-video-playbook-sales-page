# AI Music Video Playbook · sales page

Static sales page for Videogrammer's first ebook, The AI Music Video Playbook, in the videogrammer.com design system
(the site's own `site.css` and 3D `world.js` engine, "reels" world: a helix of film frames you fly through on scroll).

We sell ONE product: the Complete Kit (Playbook PDF + editable Workbook DOCX/PDF + shot sheet kit).
Launch price $15 for the first 100 copies, then the regular $30 (Playbook $10 + Workbook $10 + Shot Sheet Kit $10). Every buy button goes to
https://shop.namatma.com/namatma/buy/0cd81bf0-3a4f-471d-b57b-a0cae6c5ccb0 (OwnStreet, Razorpay, USD).
When the 100th copy sells: change the price to $30 on OwnStreet and remove the launch wording on this page.

Films play in an on-page player (youtube-nocookie embed, related videos off). The page never links out to YouTube.

## Files
- `index.html`: the page (all copy, layout and page styles)
- `assets/site.css`, `assets/world.js`: copied from videogrammer.com (world.js has storage calls wrapped in try/catch)
- `assets/*.jpg`: kit image (Grok), covers, founder photo; `assets/book/`: images from inside the book (day openers, diagrams); `assets/films/`: the 14 NAMA film thumbnails (16:9, uncropped)
- three.js r128 and its post-processing passes load from cdnjs / jsDelivr

## Deploy on Bolt
Import this repo into Bolt as a static site (no build step). Publish, then point the videogrammer.com subdomain at it.
Test locally: `python3 -m http.server 8765` in this folder, open http://127.0.0.1:8765/

## Rules for edits
No fake reviews, ratings, view counts or countdowns. No dashes or bullet lists in copy (house style). Every claim must be true of the book. Images keep their natural
aspect ratio (no object-fit cover). Keep "No printed book is shipped" and the no-promise footer line.
