# MeshUtilz WIP56 Nomad-dimensions sizing report

WIP56 preserves WIP55 as the export and UI rollback baseline. Primitive generation, scatter calculations, grouping, cached-geometry adapters and NOM construction are unchanged.

## New sizing mode

Parametric primitives now offer three placement-sizing choices:

- **Relative to local mesh** — face-relative sizing using the Relative scale multiplier.
- **Constant absolute size** — uniformly fits the primitive’s largest dimension to Constant size.
- **Nomad dimensions (1:1)** — exports the procedural master at unit scale, so its native dimensions are retained independently of target-face size.

For example, a Cylinder with height `2`, bottom radius `0.5` and top radius `0.5` remains exactly twice as long while both radii remain `0.5` in Nomad-dimensions mode.

## Adapter behaviour

- Before Generate, Nomad-dimensions mode temporarily feeds the existing placement engine a constant size equal to the current procedural master’s maximum dimension.
- The existing calculation therefore resolves to uniform scale `1` without modifying the scatter engine.
- The visible selection and previous Constant-size value are restored immediately after placement matrices are calculated.
- Primitive parameter changes still rebuild the master/cache and require Generate again.
- The option is visible only in the Nomad Parametric workflow; Custom Mesh / Greeble retains its original two sizing modes.

## WIP57 scope agreed

WIP57 can introduce internal Box, Cylinder, Torus and straight Tube factories. The Tube factory only needs Nomad’s default straight primitive at the origin (radius `0.5`, length `1.0`); further curve editing remains in Nomad.

## Required manual tests

1. Cylinder: select Nomad dimensions, vary height and unequal radii, Generate and confirm each entered dimension remains independent.
2. Box and Torus: confirm native master dimensions are independent of target-face size.
3. Compare Relative, Constant overall and Nomad dimensions on the same source mesh.
4. Tube: confirm all three modes preserve its previously successful grouped procedural export.
5. Import into Nomad, edit the master, then save/close/reopen.
