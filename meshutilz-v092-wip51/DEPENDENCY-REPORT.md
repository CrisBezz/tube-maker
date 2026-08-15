# MeshUtilz WIP51 dependency and exclusion report

WIP51 consolidates the validated WIP50 procedural preview into the primitive workflow module. It does not change NOM data, scatter, placement, orientation, density, grouping, or any primitive adapter.

## Loaded v0.9.2 modules

| Module | Classification | Reason retained |
|---|---|---|
| `mode-menu-authority-mu092wip4.txt` | Required UI support | Preserves the established mode selector. |
| `procedural-primitive-workflow-mu092wip51.txt` | Sole importer, bridge, capture, and preview authority | Owns Tube/Torus/Box/Cylinder parsing, cached-geometry bridging, authoritative transform capture, and rendered procedural preview. |
| `procedural-primitive-export-mu092wip51.txt` | Sole visible exporter | Validates, stages, and downloads through `window.__muW51`. |

## Preview consolidation

- WIP16 and WIP17 are no longer loaded. Their required cached-mesh preview rendering now lives in the WIP51 workflow module.
- The preview consumes only `window.__muLiveAuthoritativeTransforms`, the same generated matrix array used by export validation.
- The WIP17 source-face-centre fallback is retired; it was a second placement authority and is unnecessary after Generate.
- Before generation, one unplaced master preview is shown. After generation, the preview contains exactly one mesh per authoritative transform.
- Refresh removes only preview groups named `MeshUtilz Live NOM Preview`; it does not modify the source mesh, result root, or scatter engine.

## Export-data regression guarantee

- The WIP51 exporter is mechanically versioned from WIP50; primitive adapters and project construction are unchanged.
- Tube still localises its curve and cached vertices together and receives matching matrix compensation.
- Torus, Box, and Cylinder remain pass-through.
- Compressed/LZ4 Tube vertex caches remain clearly unsupported.
- Output must be byte-identical to WIP50 for identical donor bytes and authoritative matrices.

## Manual tests still required

1. Tube, Torus, Box, and Cylinder: load, assign, generate, and confirm the preview count equals the placement count.
2. Validate and download each primitive; import into Nomad and confirm one group, placement, orientation, editable procedural master, save, close, and reopen.
3. Confirm loading a primitive shows one master preview and Generate replaces it with the complete scatter preview without duplicate meshes.
4. Validate, regenerate or change density, and confirm the staged download is invalidated until validation is run again.
