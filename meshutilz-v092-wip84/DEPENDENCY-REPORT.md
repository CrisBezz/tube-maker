# MeshUtilz WIP84 — Hair / Fur global comb direction

WIP84 is a separate experimental build based on WIP83. WIP83 and all earlier builds remain untouched.

## Added

- Deterministic global comb direction (X, Y, Z) and strength controls.
- Per-root tangent-plane projection of the guide, blended with the outward surface normal.
- Safe fallback to the normal for a zero guide or a guide parallel to the local normal.
- Matrix-only strand reorientation while preserving one editable LIVE Nomad Tube master.
- Comb-direction validation for finite, unit-length directions.

## Preserved

- WIP83 area-weighted root sampling, deterministic seed, spacing, length, width, and root offset.
- Root attachment along the source normal.
- One shared procedural Tube master and validated native `File` NOM download.
- No global Blob or File interception.

## Required manual regression

1. Generate with 0% comb strength and confirm WIP83-equivalent normal strands.
2. Generate twice with the same settings and confirm the signature is identical.
3. Use a nonzero guide and confirm roots remain attached while strands lean tangentially.
4. Test a guide parallel to a local normal and confirm it safely falls back to normal direction.
5. Export, edit the shared Tube master in Nomad, save, close, reopen, and recheck all strands.
