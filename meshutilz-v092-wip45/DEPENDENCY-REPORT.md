# MeshUtilz WIP45 dependency and exclusion report

WIP45 is an export-authority isolation build. It does not change the scatter, placement, orientation, density, Torus adapter, or Tube localisation algorithms.

## Loaded v0.9.2 modules

| Module | Classification | Reason retained |
|---|---|---|
| `mode-menu-authority-mu092wip4.txt` | Required UI support | Preserves the established mode selector. |
| `live-nom-import-mu092wip15.txt` | Required importer/UI base | Creates the Live NOM controls and base parser lifecycle. Its legacy export control is hidden by WIP45. |
| `live-nom-preview-mu092wip16.txt` | Required preview support | Decodes cached procedural geometry and renders the live preview. |
| `live-nom-preview-placement-fix-mu092wip17.txt` | Required preview/placement support | Publishes preview placements and refresh routing. |
| `live-nom-torus-mu092wip21.txt` | Required Torus importer | Extends the WIP15 importer to procedural Torus. Its competing export button is hidden. |
| `live-nom-master-bridge-mu092wip23.txt` | Required Imported Instance support | Bridges cached Tube/Torus geometry into the unchanged placement engine and captures its matrices. |
| `live-nom-isolated-authority-mu092wip45.txt` | Sole visible exporter | Validates, stages, and downloads through `window.__muW45`. |

## Excluded v0.9.2 modules

- WIP1, WIP2, WIP5, WIP9–WIP14: older Tube construction/export stack; not required for importing an existing procedural Tube or Torus.
- WIP18 and WIP19: superseded transform exporters and unsafe `window.Blob` wrappers.
- WIP20: unsafe `window.Blob` replacement and competing export authority.
- WIP22: superseded authority/export interception.
- WIP26 and WIP31: obsolete competing exporters.
- WIP33: diagnostic-only UI.
- WIP40–WIP44: rollback/reference exporters; no fallback is loaded.

## WIP45 safeguards

- Captures native `Blob` and `File` at startup and fails if either changes.
- Requires exported nodes, authoritative placement matrices, and rendered preview meshes to have equal counts.
- Uses one procedural mesh and requires every node to reference mesh `0`.
- Retains WIP44 Torus pass-through and Tube curve/cache localisation with matching matrix compensation.
- Rejects compressed/LZ4 Tube caches.
- Invalidates staged bytes on export-affecting input, file, assignment, or generation changes.
- Rechecks a scene signature at download time.
- Downloads only with `new File([...], filename, {type:'application/x-nomad-sculpt'})`.

## Manual tests still required

1. Torus: validate equal counts and native constructors; import into Nomad; verify placement, orientation, procedural editing, save, close, and reopen.
2. Tube: repeat and verify shape, origin, orientation, placement, procedural editing, save, close, and reopen.
3. Stale stage: validate, change density or regenerate, confirm Download disables, validate again, and confirm the new node count/signature.
