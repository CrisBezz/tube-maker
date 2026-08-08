MESH LINE REPLACER v0.8.1 — SAFARI / IPAD VERSION

NEW IN v0.8.1
- Adds local Tilt X and Tilt Y controls to Torus per Face.
- 0° / 0° keeps each torus axis aligned to its source face normal.
- X and Y tilt are applied in the face-local coordinate frame before normal alignment, so behaviour remains consistent across differently oriented faces.

CURRENT REPLACEMENT MODES
1. Faceted tubes, with overlap, mitre and welded-hub junctions.
2. Inset surface web: a welded, single-face-thick web following the original mesh.
3. Solid surface web: bevelled closed mesh retaining the inset openings.
4. Torus per Face (experimental): one torus centred and oriented from each source face.

TORUS PER FACE CONTROLS
- Ring radius scale
- Tube radius scale
- Ring segments
- Tube facets
- Face-normal offset
- Tilt X: -90° to +90°
- Tilt Y: -90° to +90°
- Faceted shading

INSTALL / UPDATE ON GITHUB PAGES
The main branch is published through the existing GitHub Pages configuration. Safari/Home Screen installations may need one direct Safari refresh after an update so the new service worker takes control.

VERSION HISTORY
- v0.8.1 — Local X/Y torus tilt controls
- v0.8.0 — Experimental Torus per Face
- v0.7.1 — Bevelled watertight Solid Surface Web
- v0.7.0 — Solid Surface Web
- v0.6.0 — Stable Surface Web release
- v0.5.0 — Inset Surface Web
- v0.4.0 — Mitred and welded tube junctions
- v0.3.0 — Symmetry
- v0.2.0 — Quad reconstruction
- v0.1.0 — First tube generator
