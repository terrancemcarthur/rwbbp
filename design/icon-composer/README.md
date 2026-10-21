# RWBBP — Icon Composer assets

These are import-ready SVG assets, not a completed Icon Composer `.icon` document. Icon Composer requires a Mac. No native icon package has been created or previewed here.

1. Open Apple's Icon Composer on a Mac and create an icon for iOS/iPadOS with a 1024 × 1024 canvas.
2. Set the background color to solid navy `#102847`, fully opaque. Let the system apply the corner mask.
3. Import `foreground.svg` as one foreground layer. It contains the centered R and the brand stripes, with outlined shapes and a transparent background. Preserve its full-canvas placement; do not trim to artwork bounds or auto-enlarge it.
4. Alternatively, import `letter.svg` and `stripes.svg` as separate layers, preserving their identical full-canvas coordinates. Use this option instead of the combined foreground, not in addition to it.
5. Preview default, dark, clear, and tinted appearances. Keep placement consistent; check that the white letter remains legible. Start with subtle system material effects and avoid adding baked-in shadows or highlights.
6. Save the native `.icon` document and preview it on an iOS device before using it in an Xcode app target.

The site's existing favicon and Apple touch PNG remain the browser-compatible assets. A native `.icon` document cannot replace them. If you export a flat rendition for the website, preserve an opaque square background and regenerate the required PNG sizes.

Brand colors: navy `#102847`, white `#ffffff`, red `#cf2936`, stripe gray `#aebdce`.

Official guidance: https://developer.apple.com/design/human-interface-guidelines/app-icons
Icon Composer: https://developer.apple.com/icon-composer/
