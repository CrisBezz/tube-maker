# MeshUtilz WIP81 — Frozen runtime consolidation

WIP81 is an internal consolidation build based on the user-confirmed RC2.1 release candidate. RC2.1, WIP80 and all historical builds remain unchanged.

## What changed

- The RC2.1 source graph is assembled into one versioned `runtime.txt` payload.
- The page loader now makes one local application-runtime request instead of fetching 53 historical source fragments at startup.
- `runtime-manifest.json` records every frozen source path, byte length and SHA-256 hash plus the resulting runtime hash.
- `build-runtime.ps1` deterministically rebuilds the payload from the recorded source list.
- A read-only `window.__muW81Runtime` diagnostic reports payload requests, direct historical-module requests, native Blob/File integrity, workflow buttons and export globals.
- WIP81 has its own branding and orientation authority; it does not overwrite RC2.1 or WIP80 modules.

## What did not change

- Scatter, placement, symmetry, density, scale, orientation and grouping algorithms.
- Generated Geometry, Custom Mesh / Greeble, Nomad Parametric or Nomad Tube Network behaviour.
- Procedural Tube, Torus, Box and Cylinder templates.
- NOM scene construction, binary rebasing, validation or native `File` download behaviour.
- Shared-direction alignment, neighbour smoothing, deterministic random roll or Tube Network edge alignment.

## Why this matters

- WIP81 cannot drift if a historical source module is edited later; its runtime payload is an immutable snapshot.
- Startup has fewer same-origin requests and fewer missing-file failure points.
- Future Greeble work can branch from a documented, reproducible dependency baseline.

## Required regression

1. Confirm all Mode-menu workflows open and preserve their RC2.1 controls.
2. Generate Legacy, Shared Direction, neighbour-smoothed and seeded-random orientations.
3. Confirm equal seeds produce equal roll signatures and no invalid frames.
4. Validate and download a grouped editable Nomad Tube, Torus, Box and Cylinder.
5. Generate and export a Nomad Tube Network, confirming its orientation bypass.
6. Confirm Project Info reports `runtime.txt` and zero direct legacy-module requests.
7. Import representative exports into Nomad and confirm editing plus save/close/reopen behaviour.
