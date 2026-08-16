# MeshUtilz WIP57 internal primitive factory report

WIP57 preserves WIP56's scatter, placement, grouping and validated native-`File` export paths. It adds a creation layer before those existing systems.

## Added

- One-tap internal Box, Cylinder, Torus and straight Tube creation.
- Sanitized, single-mesh NOM templates bundled with the build; loading an existing edited NOM primitive remains available as a secondary path.
- Internal Tube controls expose only Length and Radius, starting at Nomad's `1.0` length and `0.5` radius defaults.
- Imported Tubes no longer offer Nomad-dimensions placement mode; their existing Relative and Constant modes remain.
- Selecting Nomad dimensions repeatedly restores the Size rollout, including after Generate.

## Data and export behaviour

- Box, Cylinder and Torus templates are reduced from the Nomad donors already validated in earlier WIPs.
- The internal straight Tube uses the known Nomad Tube procedural schema plus an origin-centred cylinder cache for immediate preview. Its Tube configuration and cache are then handled by the existing WIP56 Tube localisation/export adapter.
- Export remains grouped, retains exactly one procedural master mesh and validates immediately before download.
- Compressed/LZ4 Tube vertex caches remain unsupported and stop with a clear error.

## Required Nomad tests

For each internal Box, Cylinder, Torus and Tube: create, change its dimensions, scatter, download, import into Nomad, edit the procedural master, then save/close/reopen. Confirm placement, orientation, dimensions and grouping.

The internally generated straight Tube is a new compatibility path and must be explicitly confirmed before WIP57 or a subsequent RC2 is called successful.
