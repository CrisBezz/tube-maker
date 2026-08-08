MESH LINE REPLACER v0.8.2 — TORUS FRAME / NORMAL / SIZE UPDATE

NEW IN v0.8.2
- Fixes Torus per Face X/Y tilt using a deterministic local face frame.
- Adds Normal direction: As source / Force outward / Force inward.
- Positive Normal offset now follows the selected normal direction.
- Adds Relative-to-face or Constant-absolute torus size modes.
- Constant mode has independent ring radius and tube radius values.

MESH LINE REPLACER v0.8.2 — SAFARI / IPAD VERSION

NEW IN v0.8.0
- Experimental Torus per Face replacement mode.
- One torus is centred on each source face.
- Torus axis is aligned to the source face normal.
- Ring size is derived from the face centroid-to-edge inradius, so triangles, quads and irregular polygonal faces can be used.
- Controls for ring radius scale, tube radius scale, ring segments, tube facets and face-normal offset.

Stable replacement modes:
1. Faceted tubes, with overlap, mitre and welded-hub junctions.
2. Inset surface web: a welded, single-face-thick web following the original mesh.
3. Solid surface web: the inset web is duplicated, offset and bridged into one closed mesh while retaining all openings.

VERSION HISTORY
- v0.8.2 — Torus local-frame tilt fix, normal direction and constant sizing
- v0.8.1 — Local Tilt X / Tilt Y controls
- v0.8.0 — Experimental Torus per Face
- v0.7.1 — Bevelled watertight Solid Surface Web
- v0.7.0 — Solid Surface Web
- v0.6.0 — Stable Surface Web release
- v0.5.0 — Inset Surface Web
- v0.4.0 — Mitred and welded tube junctions
- v0.3.0 — Symmetry
- v0.2.0 — Quad reconstruction
- v0.1.0 — First tube generator
