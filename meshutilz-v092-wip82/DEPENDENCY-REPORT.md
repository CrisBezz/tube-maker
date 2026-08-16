# MeshUtilz WIP82 — Greeble Palette

WIP82 is the first multi-object Greeble Scatter build. It branches from the user-confirmed WIP81 frozen runtime; WIP81, RC2.1 and every historical build remain unchanged.

## Added

- A clear `Legacy single object` / `Greeble palette` selector inside Custom Mesh / Greeble.
- Multi-file GLB, GLTF, OBJ and STL palette loading through the existing repair and strict-manifold pipeline.
- Per-type distribution weights, weighted-random or ordered-cycle assignment, and a repeatable seed.
- Repeatable uniform scale range and local-axis roll variation.
- One preview group and one exported Nomad GLB group per greeble type.
- Shared geometry within each greeble type for grouped instance export.
- Pre-export validation of settings, palette identity, assignments, groups, mesh parts, counts and finite non-zero transforms.
- A compact live palette report with per-type counts and a deterministic build signature.

## Preserved

- The WIP81 placement, density, symmetry, local/averaged normal and shared-direction orientation engines.
- Legacy single-object Custom Mesh generation and export.
- Generated Geometry, Nomad Parametric and Nomad Tube Network workflows.
- Procedural Tube, Torus, Box and Cylinder NOM export.
- Historical files and builds.

## Export scope

Greeble Palette exports grouped GLB mesh instances intended for Nomad import. These are not Nomad procedural primitives. Editing one greeble mesh in Nomad is therefore not expected to expose Tube/Torus/Box/Cylinder procedural parameters.

## Required manual regression

1. Load a source mesh and at least two manifold greeble objects.
2. Generate weighted distribution; confirm the displayed per-type counts sum to the placement count.
3. Generate twice with the same seed and settings; confirm the signature is identical.
4. Change the seed; confirm the signature and distribution change without changing the total placement count.
5. Test scale range, extra roll, Legacy Surface and Shared World Direction orientation.
6. Export grouped instances and import into Nomad; confirm one named group per greeble type and correct placement/orientation/scale.
7. Confirm the Legacy single-object Custom Mesh workflow still generates and exports.
8. Regression-test one procedural NOM primitive and one Tube Network export.
