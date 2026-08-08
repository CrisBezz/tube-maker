MESH LINE REPLACER v0.8.0 — SAFARI / IPAD VERSION

NEW IN v0.8.0
- Experimental Torus per Face replacement mode.
- One torus is centred on each source face.
- Torus axis is aligned to the source face normal.
- Ring size is derived from the face centroid-to-edge inradius, so triangles, quads and irregular polygonal faces can be used.
- Controls for ring radius scale, tube radius scale, ring segments, tube facets and face-normal offset.

MESH LINE REPLACER v0.7.0 — SAFARI / IPAD VERSION


Stable replacement modes:
1. Faceted tubes, with overlap, mitre and welded-hub junctions.
2. Inset surface web: a welded, single-face-thick web following the original mesh.
3. Solid surface web: the inset web is duplicated, offset and bridged into one closed mesh while retaining all openings.

SOLID SURFACE WEB — FIRST IMPLEMENTATION
- Uses the working inset surface web as the centre surface.
- Offsets using averaged vertex normals.
- Supports Centred, Outward and Inward offset directions.
- Bridges every open boundary edge, including all hole boundaries.
- Merges and welds the result into one GLB mesh.
- Optional automatic thickness limiting reduces thickness when source edges are too short.
- Reports non-manifold edges rather than guessing complex topology.

LIMITATIONS
- Averaged-normal offsets can pinch or self-intersect at very acute folds and dense junctions.
- This first version does not yet use true mitred solid offsets at sharp creases.
- Very large web widths or solid thickness values may still create local intersections.

INSTALL / UPDATE ON GITHUB PAGES
Replace index.html, sw.js, manifest.webmanifest and README.txt in the existing repository and commit. GitHub Pages updates automatically.


VERSION HISTORY
- v0.8.0 — Experimental Torus per Face
- v0.7.1 — Bevelled watertight Solid Surface Web
- v0.7.0 — Solid Surface Web
- v0.6.0 — Stable Surface Web release
- v0.5.0 — Inset Surface Web
- v0.4.0 — Mitred and welded tube junctions
- v0.3.0 — Symmetry
- v0.2.0 — Quad reconstruction
- v0.1.0 — First tube generator


VERSION 0.7.1
- Replaces averaged-normal solidify with per-face offsets.
- Adds outer and inner bevel faces along shared edges.
- Adds triangulated junction caps.
- Removes duplicate and degenerate triangles.
- Welds vertices and unifies outward normals.
- Validates boundary and non-manifold edge counts before export.
