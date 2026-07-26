MESH LINE REPLACER — SAFARI / IPAD VERSION

This static web app converts imported models into either:
1. Faceted cylinders / tubes, with overlap, mitre and welded-hub junction modes.
2. Inset surface web geometry.

INSET SURFACE WEB MODE
- The app returns to the original mesh faces instead of orienting independent ribbons.
- Each usable face is inset inside its own plane.
- The centre opening is removed.
- The remaining border ring is kept.
- All face rings are merged and vertices are welded into one exported mesh object.
- The result is single-face-thick surface geometry that follows the original faceted mesh.
- If the requested web width is too large for a face, the width is reduced locally to avoid collapse.

NOTES
- Original OBJ quads are preserved when the source OBJ file contains real quad faces.
- Reconstructed quads are available for GLB, STL and triangulated OBJ files.
- Inset surface web also works on triangulated faces when Topology mode is set to Sharp edges or All triangle edges.

INSTALL / UPDATE ON GITHUB PAGES
Replace index.html, sw.js, manifest.webmanifest and README.txt in the existing repository and commit. GitHub Pages will update automatically.
