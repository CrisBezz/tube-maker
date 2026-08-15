# MeshUtilz WIP54 workflow and primitive-adapter report

WIP54 preserves WIP53 as the rollback baseline. Scatter, placement, orientation, grouping, preview capture and native `File` download authority are unchanged.

## Workflow separation

- MODE now presents **Nomad Parametric** and **Custom Mesh / Greeble** as explicit object workflows.
- Nomad Parametric shows only its editable NOM loader, procedural controls and validated NOM download.
- Custom Mesh / Greeble retains imported-mesh sizing, repair and quality controls.
- Existing generated-geometry modes remain available under a separate Generated Geometry heading.

## Primitive adapter registry

- Box: `size_x`, `size_y`, `size_z` exposed as Width, Height and Depth.
- Cylinder: `height`, `radius_start`, `radius_end` exposed as Length, Bottom radius and Top radius.
- Torus: `radius_outer`, `radius_inner` exposed as Outer radius and Inner radius.
- Tube: retains uniform instance Scale because its procedural shape is curve-defined.
- Each adapter owns its parameter schema and cached-vertex mapping; future primitives can register without changing the scatter engine.

## Geometry and validation

- Parameter edits update the actual Nomad procedural configuration and derive cached vertices from an immutable copy of the loaded cache.
- Preview/custom-master geometry is rebuilt after every accepted parameter edit.
- Existing placements are invalidated so Generate must run again.
- Download validation checks parameter/config agreement and primitive cache dimensions before the WIP53 structural validation runs.
- Edited compressed/LZ4 primitive caches stop with a clear unsupported message.
- Unchanged inputs retain the WIP53 export path and bytes.

## Required manual tests

1. Confirm MODE cleanly switches between Nomad Parametric, Custom Mesh / Greeble and generated geometry.
2. Box: change Width, Height and Depth; Generate, export, import into Nomad, edit the master, save/reopen.
3. Cylinder: change Length and unequal top/bottom radii; repeat the Nomad test.
4. Torus: change outer and inner radii; repeat the Nomad test.
5. Tube: confirm uniform Scale, placement, grouped export and editable curve remain unchanged.
6. Confirm Custom Mesh / Greeble still exposes its repair and Geometry / Quality controls.

Do not treat WIP54 as fully proven until all four Nomad primitive tests pass.
