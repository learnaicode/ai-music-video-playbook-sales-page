# AI Music Video Playbook · sales page

Static sales page for Videogrammer's first ebook, The AI Music Video Playbook, in the videogrammer.com design system
(the site's own `site.css` and 3D `world.js` engine, "reels" world: a helix of film frames you fly through on scroll).

Every buy button links to the live products on shop.namatma.com (OwnStreet, Razorpay checkout, USD):

| Product | Price | Link |
|---|---|---|
| The AI Music Video Playbook (PDF, 115 pages) | $10 | https://shop.namatma.com/namatma/buy/1967d5d5-764a-41d8-9737-9e03ce61f6b3 |
| The Workbook (editable DOCX + print PDF) | $10 | https://shop.namatma.com/namatma/buy/a7a9548f-4f4a-443e-8968-1e25878e28ad |
| Complete Kit (Playbook + Workbook + shot sheet kit) | $15 (separately $20) | https://shop.namatma.com/namatma/buy/0cd81bf0-3a4f-471d-b57b-a0cae6c5ccb0 |

## Files
- `index.html`: the page (all copy, layout and page styles)
- `assets/site.css`, `assets/world.js`: copied from videogrammer.com (world.js has storage calls wrapped in try/catch)
- `assets/*.jpg`: Grok ad images, covers, founder photo; `assets/films/`: the 14 NAMA film thumbnails (16:9, uncropped)
- three.js r128 and its post-processing passes load from cdnjs / jsDelivr

## Deploy on Bolt
Import this repo into Bolt as a static site (no build step). Publish, then point the videogrammer.com subdomain at it.
Test locally: `python3 -m http.server 8765` in this folder, open http://127.0.0.1:8765/

## Rules for edits
No fake reviews, ratings, view counts or urgency. Every claim must be true of the book. Images keep their natural
aspect ratio (no object-fit cover). Keep "No printed book is shipped" and the no-promise footer line.
