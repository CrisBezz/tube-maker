# MeshUtilz v0.9.2 RC2.1 release report

RC2.1 promotes the user-confirmed WIP80 baseline. It introduces no generation, placement, grouping, primitive or NOM-export algorithm changes beyond that confirmed build. RC2, WIP80 and all earlier builds remain unchanged.

## Included workflows

- Generated Geometry: faceted tubes, inset/solid surface webs and Torus placement.
- Custom Mesh / Greeble scattering.
- Editable Nomad Tube, Torus, Box and Cylinder instances.
- Nomad Tube Network using one linked procedural Tube master across differently scaled edge instances.

## RC2.1 additions over RC2

- Nomad Tube Network from WIP59.
- Separate **Surface direction** and **Roll alignment** controls.
- Legacy surface roll retained as the default.
- Shared World X/Y/Z roll alignment projected onto each placement tangent plane.
- Deterministic optional random roll with variation and seed controls.
- Orientation diagnostics covering processed frames, pole fallbacks and invalid frames.

## Validation completed

- WIP80 was confirmed by the user in MeshUtilz and Nomad.
- Legacy orientation remains a pass-through when roll offset and randomisation are disabled.
- Shared frames are right-handed and retain their local or neighbour-smoothed surface normal.
- Identical random seeds reproduce identical roll signatures; changing the seed changes the roll signature.
- Tube Network bypasses shared-roll processing and remains source-edge aligned.
- Grouped procedural Tube export passed inherited bounds, matrix, mesh-count, native `File` and procedural-retention validation.
- Desktop and narrow touch layouts were checked without browser warnings or errors.

## Known limitations

- A shared guide parallel to a placement normal requires a deterministic least-parallel fallback axis. A tangent-direction transition near that pole is mathematically unavoidable.
- Randomisation changes roll only; it intentionally does not disturb surface-normal alignment or placement.
- Tube Network creates straight overlapping Tube instances rather than welded or mitred junctions.
- Compressed/LZ4 Tube caches remain unsupported.

## Release-candidate smoke test

1. Confirm each workflow opens from the Mode menu.
2. Generate Legacy and Shared World Direction scatters and verify expected orientation.
3. Export a linked Nomad primitive group and verify editing, grouping and save/close/reopen behaviour.
4. Generate a Nomad Tube Network and confirm edge alignment remains unchanged.
