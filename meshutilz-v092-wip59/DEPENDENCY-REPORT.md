# MeshUtilz WIP59 — Nomad Tube Network

WIP59 branches from the confirmed RC2 baseline. RC2 and all earlier WIP builds remain unchanged.

## Added

- A separate **Nomad Tube Network** workflow in the Mode menu.
- One internal unit-length procedural Tube master shared by every generated network node.
- Source-edge matrices that translate to the edge midpoint, rotate local `+Y` onto the edge direction, and scale only local `Y` to the edge length.
- A network Tube-radius control that edits the shared procedural master without changing node length scales.
- Validation that every Tube retains unit transverse scale, matches its source-edge length, and reconstructs the intended endpoints.
- Grouped NOM export through the existing native `File` validation/download path.

## Preserved

- Original Faceted Tubes, inset web, solid web and Torus generated-geometry workflows.
- Custom Mesh / Greeble workflow.
- Internal and imported Nomad Tube, Torus, Box and Cylinder workflows.
- RC2 scatter, placement, grouping and procedural export behavior outside the new Tube Network workflow.

## Current limitations

- WIP59 creates straight overlapping Tube instances. It does not create welded, mitred or procedural junction objects.
- Tube length is controlled by each node matrix. Editing the shared master length in Nomad multiplies all network lengths and can move endpoints.
- Radius, profile, caps and subdivision edits are intended to remain shared across the network.
- Compressed/LZ4 Tube caches remain unsupported.

## Required Nomad test

1. Load a source mesh and select **Mode → Nomad Tube Network**.
2. Choose the desired topology and minimum-edge settings, set the Tube radius, then Generate.
3. Confirm all preview Tubes follow the intended source edges with a constant radius.
4. Download and import the grouped NOM into Nomad.
5. Confirm differing edge lengths, orientation, grouping and shared instance status.
6. Edit one Tube's radius/profile and confirm all linked Tubes update.
7. Save, close and reopen the Nomad project and confirm the network remains procedural and linked.
