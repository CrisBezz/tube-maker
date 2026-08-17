# MeshUtilz v0.9.2 RC2.2 release report

RC2.2 promotes the user-confirmed WIP85 Hair / Fur workflow. WIP85, WIP84, RC2.1 and all historical builds remain untouched.

## Included release changes

- Deterministic area-weighted Hair / Fur roots with count, seed and minimum spacing.
- Length, width, variation, root offset and global comb direction.
- Deterministic clump centres with adjustable radius and strength.
- One shared editable LIVE Nomad Tube master for every strand.
- Native `File` NOM export and a verified 6 × 6 native Tube template as the default.
- Updated About and FILE → Project Info content for the RC2.2 feature set.

## Preserved authorities

- Instance matrices remain the export authority.
- Root attachment, shared Tube identity and native NOM export remain unchanged from the confirmed WIP85 path.
- No global Blob or File interception.
- Historical builds remain separate and immutable.

## Validation completed

- WIP85 Hair generation, combing, clumping, 6 × 6 default import and export were user-confirmed in MeshUtilz and Nomad.
- RC2.2 runtime is rebuilt from 57 frozen source fragments and has a matching manifest checksum.
- The release page loads its own consolidated runtime only.

## Release-candidate smoke test

1. Open Nomad Hair / Fur and generate a 6 × 6 Tube result.
2. Confirm zero clump strength matches the combed result; then increase clump strength and regenerate.
3. Use FILE → Project Info and About to confirm RC2.2 details.
4. Export, edit the shared Tube in Nomad, save, close, reopen, and verify all strands.
