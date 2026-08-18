# MeshUtilz WIP102 — native Tube-cache reference intake

WIP102 extends the verified WIP86 baseline. WIP86, WIP101, and all historical builds remain untouched.

## Verified safe path

WIP102 retains exact native Nomad templates for 4×6, 6×6, 8×8, 10×6, 12×6, 14×6, and 6×12. The supplied 4×6, 10×6, and 14×6 files were copied byte-for-byte into `templates/`.

## WIP102 evidence

- Side-surface topology is regular: `X × Y` quads over `X × (Y + 1)` ring vertices.
- Native endpoint caps are resolution-specific. The references contain 2 cap faces for X=4, 18 for X=6, 38 for X=8, 46 for X=10, 48 for X=12, and 80 for X=14.
- The 8×8 reference contains `-1` face sentinel indices; it is not equivalent to a simple fan or regular quad cap.
- Therefore arbitrary cache writing remains blocked. It must not synthesize vertices, face indices, LZ4 blocks or offsets from incomplete rules.

## Writer boundary

The added references prove that endpoint cap tessellation varies by X count, including a distinct 4×6 layout. Arbitrary cache writing stays blocked until every affected NOM field (vertices, UVs, faces, face-UVs, groups and LZ4 container blocks) is independently derived and round-trip verified. The preset-template route remains the export authority.

## Preserved

- Native `File` NOM download, one shared LIVE Tube master, root attachment, combing and clumping.
- No global Blob or File interception.
