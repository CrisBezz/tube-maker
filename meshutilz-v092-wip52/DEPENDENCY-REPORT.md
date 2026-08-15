# MeshUtilz WIP52 UI synchronization report

WIP52 fixes the imported-instance Size inspector losing its `Size mode` selector after navigating from Placement to Size. WIP51 remains the rollback baseline.

## Fix

- The procedural workflow now restores the imported-instance Size controls whenever the Size navigator button or Size accordion is opened.
- `Size mode` is placed first, followed by the active branch: `Scale` for relative sizing or `Constant object size` for absolute sizing.
- The refresh removes stale legacy hide classes only from these imported-instance controls.
- Inspector navigation does not replay `Use as Instance Object`, re-import the primitive, regenerate placements, or emit synthetic input/change events.
- A staged validation is therefore not invalidated merely by opening the Size panel.

## Export and geometry scope

- The scatter and placement engine is unchanged.
- Tube, Torus, Box, and Cylinder adapters are unchanged.
- Preview capture and grouping are unchanged.
- WIP52 NOM bytes must remain identical to WIP51 for identical donors and authoritative matrices.

## Manual test

1. Load and assign any supported procedural primitive, then Generate.
2. Open Placement, then Size repeatedly without pressing `Use as Instance Object` again.
3. Confirm `Size mode` is always visible and offers `Relative to local mesh` and `Constant absolute size`.
4. Switch both branches and confirm the appropriate Scale or Constant object size control appears.
5. Validate, navigate between Placement and Size, and confirm Download remains enabled until an actual export-affecting value changes.
