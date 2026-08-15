# MeshUtilz WIP47 dependency and exclusion report

WIP47 consolidates the validated WIP46 import and bridge chain without changing exported NOM data. It does not change the scatter, placement, orientation, density, grouping, Torus adapter, or Tube localisation algorithms.

## Loaded v0.9.2 modules

| Module | Classification | Reason retained |
|---|---|---|
| `mode-menu-authority-mu092wip4.txt` | Required UI support | Preserves the established mode selector. |
| `live-nom-support-mu092wip47.txt` | Required importer and bridge | Owns Tube/Torus parsing, cached-geometry bridging, and authoritative transform capture without any exporter or `Blob` interception. |
| `live-nom-preview-mu092wip16.txt` | Required preview support | Decodes cached procedural geometry and renders the live preview. |
| `live-nom-preview-placement-fix-mu092wip17.txt` | Required preview/placement support | Publishes preview placements and refresh routing. |
| `live-nom-grouped-authority-mu092wip47.txt` | Sole visible exporter | Validates, stages, and downloads through `window.__muW47`. |

## Excluded v0.9.2 modules

- WIP1, WIP2, WIP5, WIP9–WIP14: older Tube construction/export stack; not required for importing an existing procedural Tube or Torus.
- WIP15: superseded Tube-only importer with a legacy exporter.
- WIP18 and WIP19: superseded transform exporters and unsafe `window.Blob` wrappers.
- WIP20: unsafe `window.Blob` replacement and competing export authority.
- WIP21: mixed Torus importer and obsolete competing exporter; its required parser behavior is consolidated into WIP47 support.
- WIP22: superseded authority/export interception.
- WIP23: mixed bridge and export interception; its required bridge/capture behavior is consolidated into WIP47 support.
- WIP26 and WIP31: obsolete competing exporters.
- WIP33: diagnostic-only UI.
- WIP40–WIP46: rollback/reference exporters; no fallback is loaded.

## WIP47 safeguards

- Captures native `Blob` and `File` at startup and fails if either changes.
- Requires exported nodes, authoritative placement matrices, and rendered preview meshes to have equal counts.
- Uses exactly one top-level native Nomad group.
- Uses one procedural mesh and requires every child placement node to reference mesh `0`.
- Selects the group rather than hundreds of individual children.
- Retains WIP44 Torus pass-through and Tube curve/cache localisation with matching matrix compensation.
- Rejects compressed/LZ4 Tube caches.
- Invalidates staged bytes on export-affecting input, file, assignment, or generation changes.
- Rechecks a scene signature at download time.
- Downloads only with `new File([...], filename, {type:'application/x-nomad-sculpt'})`.

## Manual tests still required

1. Torus: validate equal counts and one group; import into Nomad; verify the single group, placement, orientation, procedural editing, save, close, and reopen.
2. Tube: repeat and verify the single group, shape, origin, orientation, placement, procedural editing, save, close, and reopen.
3. Stale stage: validate, change density or regenerate, confirm Download disables, validate again, and confirm the new node count/signature.
