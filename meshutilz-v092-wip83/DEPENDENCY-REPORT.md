# MeshUtilz WIP83 — Nomad Hair / Fur MVP

WIP83 branches from the user-confirmed WIP81 frozen runtime. The experimental WIP82 Greeble Palette is deliberately not included; it remains available unchanged for later work.

## Added

- A separate `Nomad Hair / Fur` object workflow.
- Area-weighted deterministic root sampling across source surface triangles.
- Strand count, distribution seed and minimum root spacing.
- Strand length, LIVE Tube radius, root offset, length variation and width variation.
- One internally generated procedural Nomad Tube master shared by every strand.
- Per-strand length and width encoded only in instance matrices.
- A single `MeshUtilz - LIVE Nomad Hair Fur` group in the exported NOM.
- Validation of root attachment, node count, Tube identity, length and width scales, finite matrices and deterministic signature before download.

## Preserved

- WIP81, WIP82, RC2.1 and all historical builds.
- Legacy placement and scatter engines.
- Generated Geometry, Custom Mesh, Nomad Parametric and Nomad Tube Network workflows.
- Existing procedural Tube, Torus, Box and Cylinder export behavior.

## Deferred

- Comb direction and interactive grooming.
- Clumping and stray strands.
- Curled, frizzed or multi-style Tube masters.
- Painted masks, collision, dynamics and hair cards.

## Required Nomad test

1. Load a closed source mesh and select `Mode → Nomad Hair / Fur`.
2. Generate with no variation; confirm roots cover the surface and strands point outward.
3. Change length, width variation, spacing and seed; regenerate and confirm the displayed signature is repeatable for identical settings.
4. Download the validated NOM and import it into Nomad.
5. Confirm all strands are inside one Hair / Fur group.
6. Edit the LIVE Tube master and confirm every strand updates while individual matrix-driven lengths and widths remain different.
7. Save, close and reopen the Nomad project and repeat the edit check.
