# MeshUtilz WIP53 workflow cleanup report

WIP53 keeps WIP52 as the rollback baseline and changes only the procedural workflow UI and download interaction.

## Workflow changes

- The native file input is hidden behind one compact folder/download icon with an accessible label and tooltip.
- The workflow is reduced to four visible stages: Load → Assign → Generate → Download.
- The inspector section open before Generate is restored after generation, so repeated Size edits no longer jump to Orientation.
- The WIP52 Size-mode synchronization remains active for both relative and absolute sizing.

## Procedural context cleanup

- After a Nomad primitive is assigned, the legacy imported-mesh repair status, repair/tolerance explanatory text, and Geometry / Quality inspector section are hidden.
- These controls are not deleted. They remain available when the ordinary imported mesh-object workflow is used.

## Inline validation and download

- One `Validate & Download procedural NOM` button replaces separate Validate and Download buttons.
- Each click rebuilds and validates the current export synchronously.
- Download proceeds only after validation passes and the scene signature is rechecked.
- Validation failure stops the download and shows the same explicit report/error.
- Download still uses `new File([...], filename, {type:'application/x-nomad-sculpt'})`.

## Export scope

- Scatter, placement, orientation, density, grouping, preview capture, procedural adapters, and NOM construction are unchanged.
- WIP53 export bytes must remain identical to WIP52 for identical donors and authoritative matrices.

## Manual test

1. Use the compact icon to load Tube, Torus, Box, and Cylinder donors.
2. Assign and Generate, then verify only Placement, Size, and Orientation are shown for the procedural workflow.
3. Open Size, edit a value, press Generate repeatedly, and confirm Size remains selected.
4. Switch between relative and absolute size modes and confirm the correct control remains visible.
5. Press the single download button and confirm validation passes before the NOM download starts.
6. Import into Nomad and confirm the established grouped, editable result remains unchanged.
