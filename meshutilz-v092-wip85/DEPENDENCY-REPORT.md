# MeshUtilz WIP85 — Hair / Fur deterministic clumping

WIP85 is a separate experimental build based on frozen WIP84. WIP84 and all earlier builds remain untouched.

## Added

- Seeded clump-centre selection from the generated root set.
- Clump centre count, radius, and strength controls.
- Matrix-only strand redirection toward the closest in-range clump centre.
- Default 0% clump strength, preserving the WIP84 result until enabled.

## Preserved

- WIP83 area-weighted roots, seed, spacing, length, width, root offset, native `File` NOM export, and one shared live Tube master.
- WIP84 global comb direction and tube-resolution controls.
- Root attachment and the existing live preview update path.
- No global Blob or File interception.

## Required manual regression

1. Generate with 0% clump strength and confirm the WIP84 combed result is unchanged.
2. Generate twice with the same settings and confirm the signature is identical.
3. Raise clump strength and confirm strands pull toward visible local clusters while roots stay attached.
4. Change radius and centre count, regenerate, and confirm the cluster pattern changes deterministically.
5. Export, edit the shared Tube master in Nomad, save, close, reopen, and recheck all strands.
