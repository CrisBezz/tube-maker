MESH LINE REPLACER — SAFARI / IPAD VERSION

Replacement modes:
1. Faceted tubes with overlap, mitre and welded-hub junctions.
2. Inset surface web: insets source faces and removes their centres.
3. Triangulated tubes: builds a closed three-sided tube along each manifold source edge.

TRIANGULATED TUBES
- Works from the actual adjacent source-face planes, not a global ribbon normal.
- Every edge shared by exactly two faces receives a triangular cross-section.
- Two faces follow the adjacent source faces.
- The third closing face bridges the two face-aligned inset lines.
- Closed manifold meshes are the ideal source.
- Open boundary edges may be skipped or generated as a single-face wedge.
- Non-manifold edges shared by more than two faces are skipped and reported.
- Endpoint caps are optional.
- The generated result is merged and welded into one GLB mesh object.

INSTALL / UPDATE ON GITHUB PAGES
Replace index.html, sw.js, manifest.webmanifest and README.txt in the existing repository and commit. GitHub Pages will update automatically.

WELDED TRIANGULATED-TUBE JUNCTIONS
- Incident triangular tubes are trimmed back from shared mesh vertices.
- Their triangular end sections are joined with a faceted convex junction hull.
- The merged result is vertex-welded before export.
- Junction Trim controls how far tubes are cut back before the welded junction is generated.
- Open endpoints can still be capped independently.
