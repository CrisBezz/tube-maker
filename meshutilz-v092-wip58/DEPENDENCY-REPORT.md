# MeshUtilz WIP58 Torus default cleanup

WIP58 preserves WIP57's internal primitive factory, scatter, placement, grouping and validated export paths.

## Changed

- The internal Torus template now explicitly starts with Outer radius `1` and Inner radius `0.2`.
- Primitive parameter inputs display values rounded to at most six decimal places, preventing binary floating-point noise such as `0.20000000298023224` from appearing in the interface.

## Unchanged

- No scatter or placement calculations changed.
- The cached Torus geometry and exporter architecture are unchanged.
- Internal Tube, Box and Cylinder behaviour remains the WIP57 implementation confirmed by the user.
- Existing NOM primitive import remains available.

## Required manual test

Create an internal Torus and confirm the Size panel shows Outer radius `1` and Inner radius `0.2`. Scatter, export and import it into Nomad, then confirm procedural editing and save/close/reopen still pass. RC2 remains gated on that final Torus confirmation.
