MESH LINE REPLACER v0.8.4 — NOMAD SHARED-NODE INSTANCES

NEW IN v0.8.4
- Torus viewport remains a high-performance Three.js InstancedMesh.
- Nomad shared-node export no longer writes GPU instancing.
- Export creates one shared torus mesh and one ordinary glTF node per torus placement.
- Every exported node references the same mesh definition, matching the structure produced by Nomad Sculpt's own GLB instance export.
- Adds minimal Nomad-style node extras as a compatibility hint.
- Bake copies remains available as a fallback.

NEW IN v0.8.3
- Torus per Face uses one shared master torus in the viewport.
- Each face stores only a transform: position, rotation, tilt and scale.
- Relative-size mode uses uniform per-instance scaling, so all placements share one master topology.

NEW IN v0.8.2
- Fixes Torus per Face X/Y tilt using a deterministic local face frame.
- Adds Normal direction: As source / Force outward / Force inward.
- Positive Normal offset follows the selected normal direction.
- Adds Relative-to-face or Constant-absolute torus size modes.

Stable replacement modes:
1. Faceted tubes, with overlap, mitre and welded-hub junctions.
2. Inset surface web: a welded, single-face-thick web following the original mesh.
3. Solid surface web: a bevelled closed shell retaining all openings.
4. Torus per Face: shared master torus distributed across source faces by transforms.

VERSION HISTORY
- v0.8.4 — Nomad-compatible shared-node torus export
- v0.8.3 — Shared-master torus instances
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
