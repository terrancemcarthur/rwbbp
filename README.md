# RWBBP website

A responsive red, white, and blue building products website, built with HTML, CSS, and JavaScript. No package installation is required.

## Run

From `/workspace/rwbbp`, run `npm start`. The server listens on port 3000 (override with `PORT`). Run `npm run check` for JavaScript syntax validation.

## Content and contact

The business name is RWBBP. RWBBP distributes roofing, drywall, and insulation across the United States. Website copy reflects that distributor role. Specific availability, order terms, delivery coverage, and contact details need business confirmation before launch.

The inquiry form validates input and prepares a copyable message. It does not deliver inquiries or store submissions. Connect a delivery service or add an approved business email before launch.

## Sitemap

The footer links to `/sitemap.html`, which lists the site’s main sections for visitors. Submit `https://rwbbp.com/sitemap.xml` to search engines. The checked-in XML file works with both static hosting and the Node server, and `robots.txt` advertises its location. It lists the homepage and sitemap page; section anchors are not separate indexed pages. If the public domain changes, update the XML URLs, robots.txt, and canonical/social metadata together.

## Apple home screen icons

The browser favicon and Apple touch icon share the centered R and brand stripes. `assets/app-icon.svg` is the unmasked, full-bleed square artwork; `assets/app-icon-1024.png` is the high-resolution master and `assets/apple-touch-icon.png` is the opaque 180px web clip icon. iOS applies the home screen corner mask. The browser SVG/ICO retain their own rounded silhouette for browser tabs. The site sets the home screen name to RWBBP.

Reviewed against Apple's [App icons guidance](https://developer.apple.com/design/human-interface-guidelines/app-icons) and [Safari web clip documentation](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html). Native layered Liquid Glass icons require Icon Composer/Xcode; the website supplies a flattened PNG, not a native icon package. Actual iOS 26 appearance should be checked on a physical device after deployment.

## Suggested Instagram bio

Roofing, drywall & insulation distributed across the U.S. Building materials. Personal service. Talk supply & delivery at rwbbp.com.
