# Same Day Diplomas — layout preview concepts

Design-only facelift concepts using live samedaydiplomas.com copy + CDN images. Not the live storefront.

- [Hub](https://taylorcpace.github.io/sdd-site-previews/)
- [Noir Foil](https://taylorcpace.github.io/sdd-site-previews/noir-foil/) — **R10** dark luxury editorial; near-black, ivory, gold foil, bold Archivo display ([Shop](https://taylorcpace.github.io/sdd-site-previews/noir-foil/shop.html) · [Product](https://taylorcpace.github.io/sdd-site-previews/noir-foil/product.html))

Previous round:

- [Flow Clarity](https://taylorcpace.github.io/sdd-site-previews/flow-clarity/) — FLOW-inspired; clear, professional service-site clarity
- [Congrats Guided](https://taylorcpace.github.io/sdd-site-previews/congrats-guided/) — HeyCongrats-inspired; guided, calm, intent-based retail
- [Criquet Clean](https://taylorcpace.github.io/sdd-site-previews/criquet-clean/) — Criquet-inspired; clean, photo-led merchandise energy

## Revision 10 (Oct 6, 2026)

Taylor: "throw a few more samples on that section 1.. we can use the space from under the one to the right" and "its ok to have school names. IF they ask us not to make them we will abide by that.."

- **Policy change:** real school and institution names may now show on samples. Recipient (person) names stay placeholders or blurred, personal ID numbers are blurred, signatures are fine, and watermarked images are never used.
- **Section 01 spread:** the three-card collage is now eight overlapping, slightly rotated, gold-framed cards with no labels. It moved out of the heading column into its own row that runs from the left edge (under the big "01") across the middle column; the intro copy and trust list span both rows on the right. Tablet: full width below the heading and copy. Mobile (≤900px): a neat two-column grid with alternating slight tilts.
- **Samples (all real photographs; files in `noir-foil/img/`):**
  - `s01-pepperdine.webp`: Pepperdine University doctoral diploma (original R7 Drive photo, no recipient name on it).
  - `s01-marquette.webp`: hand-held Marquette University diploma (name already blurred in Drive).
  - `s01-auburn.webp`: hand-held Auburn University diploma (recipient name blurred).
  - `s01-national.webp`: hand-held National University diploma (recipient name blurred).
  - `s01-alberta.webp`: Alberta High School Diploma (original R7 Drive photo, name already blurred).
  - `s01-aqa.webp`: AQA General Certificate of Education (name already blurred; candidate number blurred).
  - `s01-ged.webp`: live CDN GED photo `ged-diplomas-9550291.jpg`, now un-blurred (shows the "YOUR NAME" placeholder, Penn Foster and Pennsylvania); still cropped so the "STYLE 3" overlay is gone.
  - `s01-wecloud.webp`: WeCloudData certificate of achievement (original R7 Drive photo, name already blurred).
  - Not used: INSEAD (keeps the set from leaning MBA-heavy), plus Utah, South Florida and LIM, which would need heavier name blurring.
- **Images:** WebP, 900–1150px wide, 49–100 KB each. Script: `scripts/collage_r10.py` (uses `blur_hero_r7.py`). The R9 `s01-college.webp` and `s01-high-school.webp` stay in the repo, unused.

## Revision 9 (Oct 6, 2026)

Taylor: "lets find a new image for hero" and "lets put small collage of high school, ged, college samples at 01 section"

- **Hero photo:** layout (a) is unchanged. The photo is now a smiling graduate in a black gown with a gold stole, raising her diploma.
  - Credit: photo by **olia danilevich** on **Pexels** (free to use under the Pexels licence), https://www.pexels.com/photo/a-graduate-holding-her-diploma-8093001/. Source file: `https://images.pexels.com/photos/8093001/pexels-photo-8093001.jpeg` (6000×4000).
  - Edits: lightly warm-graded, with the right 15% of empty trees trimmed. Saved as `noir-foil/img/hero-lifestyle-2.webp` (2400×1882).
  - The R8 cap-toss photo (`img/hero-lifestyle.webp`) is kept in the repo, unused. The baim-hanif photo now appears only once on the homepage, in the "reasons" section.
  - Runners-up:
    - Pexels 17615677 by Ulises Peña (parents hugging a graduate): https://www.pexels.com/photo/mother-and-father-embracing-graduate-son-17615677/. Not used because the stole has a university crest and the background shows a recognisable campus mural.
    - Pexels 14723868 by Kiptoo Addi: https://www.pexels.com/photo/portrait-of-woman-wearing-graduation-gown-and-cap-14723868/
    - Pexels 32798077 by Shalom Ejiofor: https://www.pexels.com/photo/elegant-graduation-portrait-with-sunlight-32798077/. Not used because the stole has an emblem.
- **Section 01 collage:** the engraved-covers photo is replaced by three overlapping, slightly rotated, gold-framed cards of real photographed samples, with no labels. The collage links to `shop.html`.
  - College: an MBA diploma photo from Taylor's Drive, the R7 processed INSEAD image (`img/s01-college.webp`).
  - High school: the R7 processed Alberta photo (`img/s01-high-school.webp`).
  - GED: there is no clean, unwatermarked GED photo anywhere in Taylor's Drive (only watermarked samples and cover mockups), so this uses the live CDN photo `ged-diplomas-9550291.jpg` (`img/s01-ged.webp`). It's cropped to the document, which drops the "STYLE 3" overlay. The testing-centre name, state name, Dept. of Education seal and all signatures are blurred.
  - Scripts: `scripts/collage_r9.py` (uses `blur_hero_r7.py`).

## Revision 8 (Oct 6, 2026)

Taylor: "lets add a nice lifestyle image to the hero NOT the diplomas"

- **Hero:** the 2×2 document grid is removed. The right half of the hero is now one lifestyle photo, edge to edge, inside a thin gold frame line: graduates tossing their caps at sunset.
- **Image source:** the photo is the live SDD Shopify CDN image `baim-hanif-pYWuOMhtc6k-unsplash.jpg` (photo by Baim Hanif on Unsplash, https://unsplash.com/photos/pYWuOMhtc6k). It was warm-gold graded to match the palette, with some empty sky and ground trimmed, using `scripts/grade_hero_r8.py`. It's served locally as `noir-foil/img/hero-lifestyle.webp` (2400×1277, about 106 KB).
- **Mobile:** the photo sits above the text in a 4:3 frame.
- **Unchanged:** the headline, body, kicker and buttons. The R7 document photos (`img/hero-1..4.webp`) stay in the repo, unused.

## Revision 7 (Oct 6, 2026)

Taylor: "you are using templates.. I need actual images... no need to put GED HS etc under them … just make sure the quality is good, and there are no watermarks.. if there is a name on it blur it out."

- **Hero:** the four template samples are replaced by real photos of finished, printed documents from Taylor's Drive sample archive: a doctoral diploma (flat lay), a high school diploma, an MBA diploma held in hand, and a certificate of achievement. They're saved locally as `noir-foil/img/hero-1..4.webp` (1600×1231, 80–140 KB each) and pre-cropped to the 1.3 tile ratio, so `object-fit: cover` fills each frame.
- **Privacy:** every real person name, institution name, signature and institution logo or seal text is blurred. Some photos already had the recipient name blurred; the rest was blurred with Pillow using `scripts/blur_hero_r7.py` (pixelate + Gaussian blur, feathered edges). None of the photos has a watermark.
- **Labels removed:** the GED / College / High School / Certificate labels and arrows are gone. All four tiles link to `shop.html`. The gold-framed, staggered 2×2 layout is unchanged.
- Everything else from R6 is unchanged.

## Revision 6 (Oct 6, 2026)

Taylor: "lets use real samples of GED, College, High school and a certificate for the hero banner" and "the fonts are cool but maybe not easy to read. can we do something like the sans serif from my logo?"

- **Hero:** the R5 collage is replaced by a gold-framed 2×2 grid of four real product samples from the live Shopify CDN, all generic (placeholder names, no real institutions). The right column is staggered slightly. Each tile links to its shop category (`shop.html?doc=…`) and has a Jost 600 gold label: GED ("State High School Equivalency Diploma", style 3 photo), College ("College University Style 1"), High School ("Your High Schools / Your Name Here" photo) and Certificate ("Certificate of Completion"). The photo samples are cropped to the document with CSS vars (`--x/--y/--dw/--dh`), so the wood background and "STYLE n" overlay don't show. It stays a 2×2 grid on mobile.
- **Type:** Bodoni Moda is replaced sitewide by **Archivo**: H1 is uppercase 800 at 92% width, H2/H3 are 700 with tight tracking, and section numbers 01–07, step and reason numbers, prices and pull quotes are 600–800. All display italics are removed. The gold "Diplomas" accent keeps its gradient but is upright. Body stays Jost 400, and labels stay Jost 500–600. Archivo was chosen because it's a monoline grotesque with flat terminals and regular-width round caps, close to the "SAME DAY DIPLOMAS" wordmark (which is actually a light geometric slab), and it holds up well in bold on dark backgrounds.
- Everything else from R5 is unchanged.

## Revision 5 (Oct 6, 2026)

Taylor's annotated notes on noir-foil; Bento Finder rejected.

- **Hero:** the gold-seal close-up + framed real-school diploma are gone. The right side is now a gold-framed collage on a dark panel with a soft gold glow: the graduation lifestyle photo (large tile), the generic "College University Style 1" diploma + transcript set on an ivory mat, and the gold-foil personalized cover close-up. No real institution names. The "Pl. I / Pl. II" caption was removed.
- **Readability (sitewide, incl. shop + product):** body is Jost 400 at 17px (16px on mobile) with brighter ivory/mute tones. Small-caps labels, the trust strip, nav, buttons, crumbs, form labels and footer headings are 500–600 and larger (trust strip 0.9rem/600 on a charcoal band). Bodoni headings went from 400 to 500, with a lower optical size (`opsz` 24–36) for sturdier hairlines on 1x screens. Fonts load as variable ranges (Bodoni Moda 400–700 + opsz, Jost 400–700), and Jost 300 is no longer used.
- **Section numbers:** 01–07 (plus the 01–03 how-to-order steps and the reasons numbers) use a solid gold-foil gradient fill instead of outlines.
- **Section 01:** a gold-framed photo of metallic-engraved custom covers sits under the H1, so the middle column now balances the trust list.
- **Spacing:** the Payments/Giving Back → Shop by Document gap went from about 15rem to about 6rem. Section padding is down from clamp(4rem, 9vw, 8rem) to clamp(3rem, 6vw, 5.5rem). The staggered doc offset, step and reason rows, pull quote, carbon and promise bands, shop page head and grid were tightened to match.
- **No Roman numerals:** Shop by Document uses 1–4 (upright Jost numerals in gold foil so the "1" reads clearly), product accordion steps use 1–4, the hero caption is removed, the "Pl. III" caption on the reasons photo is removed and the seal-rail labels read "No. 01…".
- **Eyebrows:** labels like "HIGH SCHOOL" are 0.88rem/600 in bright gold with a thin gold divider from the number.
- **Bento Finder removed** from the repo and the hub. The hub now lists only Noir Foil under "New alternatives", with the three R3 directions under "Previous round".

## Revision 4 (Oct 6, 2026)

Taylor felt the three R3 directions looked too much alike and too close to the live site. R4 adds two new directions that are clearly different from those three, from the live site, and from each other:

- **noir-foil:** Near-black, ivory and gold-foil palette with maroon CTAs; ivory "letterhead" header so the real logo stays in its true colors; Bodoni Moda + Jost type. Split-screen hero with an embossed gold seal and an offset diploma plate. Oversized outlined section numbers (01–07), a staggered two-column Shop by Document spread, a horizontal seal/hologram rail, a large pull-quote review plus a review rail, a vertical how-to-order timeline, two-column definition lists for Why Trust and the FAQ guide, and a deep-maroon promise band. Shop: editorial grid on ivory mats with a featured product. Product: vertical thumbnail rail, gold-rule buy box and roman-numeral accordion steps.
- **bento-finder:** Warm off-white base with ink, maroon and a #f8ecec tint, all set in Manrope. Floating rounded header. The hero is a working "What do you need?" finder (Document / Level / Country) that builds `shop.html?doc=…&level=…&country=…`; the shop shows those picks as chips, with no fake inventory filtering. Mixed-size bento mosaics for categories, trust stats, equal Payments + Giving Back tiles, reasons, reviews and seals. Shop by Document is in tabs, How to Order is a horizontal 3-step stepper, and the FAQ topics are chips/tabs. Shop: document filter chips, price sort and a featured tile. Product: segmented style picker, delivery option tiles and a live total (base + delivery) × quantity.
- **Both:** Centered top social icons, a large left logo, a Shop mega menu (GED, High School, College & University, Transcripts/Records, Degrees, Certificates, Diploma Covers), big SVG Search/Account/Cart icons and a mobile hamburger drawer. Live copy, reviews, prices and SEO text are kept, with the "You asked, we listened" covers promo dropped and no "Since 2001" under the logo. Only real CDN images plus payment-checkout.jpg, and diploma and transcript images use `object-fit: contain`. Footer legal notice kept. Comparison-table ✓/×/⚡ glyphs and the old text social bar are replaced with SVG icons.
- Hub: the new directions sit at the top under "New alternatives", and the R3 three sit under "Previous round".

## Revision 3 (Oct 5, 2026)

- **flow-clarity:** Dropped middle custom-covers promo; two equal promo cards; real payment/checkout photo; trust grid uses maroon line SVG icons.
- **congrats-guided:** Ecommerce header — logo left (~68px), Shop dropdown in center nav, Search/Account/Cart right; hamburger on mobile.
- **criquet-clean:** Full-bleed lifestyle hero kept; removed hero CTA and Diploma/Transcript/Package sample overlays (banner + copy only).
- **all three:** Centered top social icon row (Instagram, Facebook, YouTube, X, TikTok) above the promo bar.

## Revision 1 (Oct 5, 2026) — Taylor's notes

- **Flow Clarity:** single-row header (large logo far left · HOME / SHOP NOW mega menu / SUPPORT / BLOG · large Search, Account, Cart); "Since 2001" span removed under logo; mobile drawer with mega menu accordion.
- **Congrats Guided:** duplicate Shop-by-document (`shop-rows`) removed; first Shop-by-document shows whole images; lifestyle photo behind hero; promo trimmed to two equal boxes (Ways to pay w/ live payment icons + Giving Back); custom covers card removed.
- **Criquet Clean:** hero samples labeled Diploma / Transcript / Package; "You asked, we listened" removed; logo bigger with no "Since 2001"; all buttons logo maroon (#650101) with white text; merch-cats + sample-band removed; Shop by document rows moved up under "Shop By Category".
