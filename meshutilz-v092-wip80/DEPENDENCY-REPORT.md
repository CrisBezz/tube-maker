# MeshUtilz WIP80 — Shared-direction orientation

WIP80 branches from WIP59. WIP59, RC2 and all earlier builds remain unchanged.

## Added

- Separate **Surface direction** and **Roll alignment** controls for Torus and imported/Nomad-parametric placement.
- **Legacy surface direction** remains the default and preserves the existing per-face/per-node roll.
- **Shared world direction** projects World X, Y or Z onto every placement's tangent plane. The surface-normal axis remains aligned to the local or neighbour-smoothed normal.
- A stable fallback guide is selected when the requested world direction is parallel to a placement normal.
- A common roll offset plus optional deterministic random roll, with variation and seed controls.
- Read-only `window.__muW80Orientation` diagnostics for active settings, fallback use and frame validity.

## Preserved

- Placement positions, density, scale, symmetry, tilt, axis correction and export matrices outside the new roll calculation.
- Existing Local and Neighbour-smoothed surface modes.
- WIP59 Nomad Tube Network matrices remain edge-aligned and bypass WIP80 roll processing.
- Existing grouped procedural export and native `File` validation path.

## Behaviour and limitations

- A random variation of `0°` is identical to no randomisation.
- Random roll is derived from placement position and the orientation seed, so identical input/settings regenerate identically.
- Shared direction aligns roll in each local tangent plane; it does not force all objects to the same world-space rotation because their surface normals still differ.
- At poles where the selected guide is parallel to the normal, WIP80 uses the least-parallel world axis as a deterministic fallback. A visible change of tangent direction around that singular region is mathematically unavoidable.
- WIP80 does not alter Tube Network orientation, scatter density or object placement.

## Required tests

1. Generate the same scene with **Legacy surface direction** and compare it with WIP59.
2. Select **Shared world direction**, test World X, Y and Z, and confirm the normal-facing axis remains attached to the surface while roll becomes coherent.
3. For a Nomad Tube scatter, confirm later Tube edits occur along a sensible shared plane.
4. Enable random roll, regenerate twice with the same seed and confirm identical results; change the seed and confirm only roll changes.
5. Export to Nomad, confirm linked procedural editing and grouping, then save, close and reopen.
6. Smoke-test Nomad Tube Network and confirm it remains aligned to source edges.
