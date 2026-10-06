# Same Day Diplomas — layout preview concepts

Design-only facelift concepts using live samedaydiplomas.com copy + CDN images. Not the live storefront.

- [Hub](https://taylorcpace.github.io/sdd-site-previews/)
- [Noir Foil](https://taylorcpace.github.io/sdd-site-previews/noir-foil/) — **R6** dark luxury editorial; near-black, ivory, gold foil, bold Archivo display ([Shop](https://taylorcpace.github.io/sdd-site-previews/noir-foil/shop.html) · [Product](https://taylorcpace.github.io/sdd-site-previews/noir-foil/product.html))

Previous round:

- [Flow Clarity](https://taylorcpace.github.io/sdd-site-previews/flow-clarity/) — FLOW-inspired; clear, professional service-site clarity
- [Congrats Guided](https://taylorcpace.github.io/sdd-site-previews/congrats-guided/) — HeyCongrats-inspired; guided, calm, intent-based retail
- [Criquet Clean](https://taylorcpace.github.io/sdd-site-previews/criquet-clean/) — Criquet-inspired; clean, photo-led merchandise energy

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
