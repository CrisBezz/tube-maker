# MeshUtilz v0.9.2 RC2.2.1 patch release report

RC2.2.1 is a validation-only patch based on RC2.2. RC2.2, WIP85, WIP84 and all historical builds remain untouched.

## Fixed

- Corrected internal procedural Tube cache validation for a 6-sided Tube.
- Validation now compares the maximum radial X/Z distance with the configured Nomad radius, rather than assuming the X-axis diameter is always twice the radius.

## Preserved

- Tube geometry, cache bytes, Nomad configuration, instance matrices and export structure.
- One shared live Tube master, native `File` download and all Hair / Fur behaviour.
- No global Blob or File interception.

## Validation

1. The native 6 × 6 template has radius 0.5 and X width 0.866025; its maximum X/Z radius is exactly 0.5.
2. The corrected validator accepts matching 6 × 6 dimensions and still rejects mismatched length or radial extent.
3. The RC2.2.1 runtime manifest matches the rebuilt runtime.
