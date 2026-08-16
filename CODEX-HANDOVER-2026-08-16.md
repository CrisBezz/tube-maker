# MeshUtilz Codex handover — 2026-08-16

## Purpose

This file is the transfer point for continuing MeshUtilz development in a new ChatGPT/Codex Pro account. Treat the repository as the source of truth and preserve all historical builds.

## Current repository position

- Repository: `CrisBezz/tube-maker`
- Latest inspected commit: `e30430635f92f2ff361c6735a65c2a6c3d3da88d` — **Expose WIP83 strand width control**
- Previous ChatGPT handover point: `acbbe5ddeece2192bf88a7c8b91152d946a3874d` — **WIP41 shared clean exporter build**
- The repository is **50 commits ahead** of that WIP41 handover point.
- Current experimental build: **MeshUtilz v0.9.2-wip.83**
- Frozen engineering baseline: **WIP81**
- User-confirmed release-candidate baseline: **MeshUtilz v0.9.2 RC2.1**

Do not rewrite history or delete old WIP builds. They are valuable regression points and document the reverse-engineering path.

## Major progress since WIP41

### WIP42–47 — consolidated and hardened procedural NOM export

The exporter was moved away from fragile primitive-specific / global interception behavior toward a consolidated procedural NOM path. Work included NOM metadata hardening, validation, placement authority isolation, grouped procedural instances, and consolidated procedural NOM support.

Important historical root cause: an older WIP20 module globally patched `window.Blob` and could silently rewrite NOM matrices at download time. Later clean exporters bypassed that behavior with native `File`-based downloads. Do not reintroduce global Blob interception as export architecture.

### WIP48–49 — Box and Cylinder procedural adapters

Editable Nomad procedural support was extended beyond Tube/Torus:

- WIP48: procedural **Box** adapter.
- WIP49: procedural **Cylinder** adapter.

The intended architecture is one procedural master plus linked scene nodes, not a complete procedural mesh duplicate per instance.

### WIP50–58 — unified parametric workflow

This phase consolidated the workflow and UI around procedural primitives:

- WIP50: consolidated primitive workflow UI.
- WIP51: consolidated procedural preview.
- WIP52: imported-instance Size inspector synchronization fix.
- WIP53: streamlined procedural workflow.
- WIP54: workflow and primitive parameter adapters.
- WIP55: constant sizing and symmetry consolidation.
- WIP56: native Nomad dimension sizing.
- WIP57: internal Nomad primitive factory.
- WIP58: clean Torus defaults.

By this point the intended editable procedural primitive family was Tube, Torus, Box and Cylinder.

### RC2

Commit `51c21a72fa600002730db82fee9e7fb32553a993` released **MeshUtilz v0.9.2 RC2**.

### WIP59 — Nomad Tube Network

Commit `f830389aa8f8f809949078d84e655680fb08c35a` added **Nomad Tube Network**.

The network uses one linked procedural Tube master across differently scaled/oriented edge instances. It intentionally creates straight overlapping Tube instances rather than welded/mitred junctions.

### WIP80 / RC2.1 — orientation architecture

WIP80 added shared-direction orientation. It was promoted to **RC2.1** at commit `0d704bd52528795ae2ff0ca88f60b1f5107ebdc1`.

RC2.1 is an important user-confirmed stable baseline and includes:

- Generated Geometry workflows.
- Custom Mesh / Greeble scattering.
- Editable Nomad Tube, Torus, Box and Cylinder instances.
- Nomad Tube Network.
- Separate **Surface direction** and **Roll alignment** controls.
- Legacy surface roll as default.
- Shared World X/Y/Z roll projected onto the local tangent plane.
- Deterministic optional random roll with variation and seed.
- Orientation diagnostics.

Known RC2.1 limitations include Tube Network non-welded junctions and unsupported compressed/LZ4 Tube caches.

### WIP81 — frozen runtime consolidation

Commit `557f705d1d6058a710edcf2e1eaac0138a324fa0` created the current engineering baseline.

WIP81 takes the user-confirmed RC2.1 source graph and freezes it into one versioned runtime payload:

- `meshutilz-v092-wip81/runtime.txt`
- `meshutilz-v092-wip81/runtime-manifest.json`
- `meshutilz-v092-wip81/build-runtime.ps1`
- `meshutilz-v092-wip81/DEPENDENCY-REPORT.md`

The runtime manifest records every source fragment, byte length and SHA-256 hash. The PowerShell script deterministically rebuilds the runtime. This was done to stop historical-module drift and reduce dozens of startup requests to one local runtime request.

**Recommendation:** use WIP81 as the baseline for new experimental branches unless a later user-confirmed build explicitly supersedes it.

### WIP82 — Greeble Palette (experimental branch from WIP81)

Commit `28de3d55ee29ac9ca325b46908fcc46e68294cbd` added the first multi-object **Greeble Palette** workflow.

Features:

- Legacy single-object / Greeble palette selector.
- Multi-file GLB, GLTF, OBJ and STL palette loading.
- Existing repair and strict-manifold pipeline.
- Per-type distribution weights.
- Weighted-random or ordered-cycle assignment.
- Deterministic seed.
- Uniform scale range and local-axis roll variation.
- One preview/exported Nomad GLB group per greeble type.
- Shared geometry within each greeble type.
- Pre-export validation and deterministic build signature.

Important: Greeble Palette exports grouped GLB mesh instances. They are **not** editable Nomad procedural primitives.

WIP82 remains available but is deliberately not included in WIP83.

### WIP83 — Nomad Hair / Fur MVP (current experimental head)

Commit `bc045f6e8386380de0221439163b3e1cd09b749a` added **Nomad Hair / Fur**. Latest commit `e30430635f92f2ff361c6735a65c2a6c3d3da88d` exposes the strand width control.

WIP83 branches from WIP81, not WIP82.

Current Hair / Fur scope:

- Separate `Nomad Hair / Fur` workflow.
- Area-weighted deterministic root sampling over source triangles.
- Strand count.
- Distribution seed.
- Minimum root spacing.
- Strand length.
- Strand width / Tube radius.
- Root offset.
- Length variation.
- Width variation.
- One internally generated procedural Nomad Tube master shared by every strand.
- Per-strand length and width encoded in instance matrices.
- One `MeshUtilz - LIVE Nomad Hair Fur` group in exported NOM.
- Pre-download validation for root attachment, node count, Tube identity, length/width scales, finite matrices and deterministic signature.

Deferred Hair / Fur features:

- Comb direction / grooming.
- Clumping.
- Stray strands.
- Curl/frizz/multiple strand styles.
- Painted masks.
- Collision/dynamics.
- Hair cards.

Latest WIP83 runtime is built from 54 frozen source fragments and includes its own runtime manifest/build script.

## Current build relationships

- **RC2.1**: user-confirmed release-candidate behavior; safest functional reference.
- **WIP81**: frozen/reproducible version of RC2.1; preferred engineering baseline.
- **WIP82**: independent Greeble Palette experiment branching from WIP81.
- **WIP83**: independent Hair / Fur experiment branching from WIP81; does NOT include WIP82.

Do not casually merge WIP82 and WIP83. First review their added modules and UI/workflow authority for conflicts, then create a deliberate combined build.

## Key architectural rules learned during development

1. **Never duplicate a complete procedural Nomad mesh per instance.** A single procedural master can be referenced by many scene nodes with independent matrices.
2. **Avoid global browser primitive monkey-patches for export authority.** The old global Blob interception caused severe false debugging signals.
3. **Use native `File`-based NOM download paths** for clean exports.
4. **Preview and export transforms must share one authoritative transform set.**
5. Preserve procedural editability in Nomad wherever possible: Tube, Torus, Box and Cylinder should remain live procedural masters with linked nodes.
6. Keep WIP builds immutable once user-confirmed; branch forward instead of rewriting known-good references.
7. The frozen-runtime approach introduced in WIP81 should be retained for reproducibility.

## Files to inspect first in a new Codex session

Start with:

- `CODEX-HANDOVER-2026-08-16.md`
- `meshutilz-v092-wip83/DEPENDENCY-REPORT.md`
- `meshutilz-v092-wip83/runtime-manifest.json`
- `meshutilz-v092-wip83/build-runtime.ps1`
- `wip/app-v092-static/nomad-hair-fur-mu092wip83.txt`
- `meshutilz-v092-wip82/DEPENDENCY-REPORT.md`
- `wip/app-v092-static/greeble-palette-mu092wip82.txt`
- `meshutilz-v092-wip81/DEPENDENCY-REPORT.md`
- `meshutilz-v092-wip81/runtime-manifest.json`
- `meshutilz-v092-rc2-1/DEPENDENCY-REPORT.md`
- `wip/app-v092-static/nomad-tube-network-mu092wip59.txt`
- `wip/app-v092-static/orientation-roll-authority-mu092rc21.txt`

For historical export debugging, inspect WIP39–47 and the old WIP20 transform/Blob authority modules, but do not use those old monkey-patch patterns as the new architecture.

## Required first task for the new Pro/Codex account

Do not modify code immediately.

1. Confirm repository HEAD and read this handover.
2. Inspect WIP83, WIP82, WIP81 and RC2.1 dependency reports/manifests.
3. Verify that WIP83 really branches functionally from WIP81 and does not silently include WIP82.
4. Build a concise workflow/module authority map: Generated Geometry, Custom Mesh/Greeble, Nomad Parametric, Tube Network, Greeble Palette, Hair/Fur.
5. Report any global monkey patches or event-handler overrides still present in the WIP81/WIP83 runtime.
6. Do not refactor until the current user-confirmed baselines are reproducible.
7. Ask the user which branch to continue: Hair/Fur, Greeble Palette, or deliberate WIP82+WIP83 integration.

## Suggested first prompt to Codex

> Read `CODEX-HANDOVER-2026-08-16.md` and treat it as the project transfer brief. Inspect the repository at current HEAD without changing anything. Verify the stated WIP81/82/83 relationships from the manifests and source modules, then report the current architecture, active workflow authorities, known-good rollback points, and the smallest safe next step. Preserve all historical builds and do not reintroduce global Blob-based NOM export interception.

## Progress scale

Relative to the previous WIP41 handover, this is not a small continuation. The repository is 50 commits ahead and has moved from a Torus-focused clean exporter into a multi-workflow procedural modelling utility with:

- consolidated/hardened NOM export,
- editable Tube/Torus/Box/Cylinder procedural workflows,
- grouped procedural instances,
- native dimension sizing,
- internal primitive factory,
- Tube Network,
- shared-direction and deterministic roll controls,
- RC2 and RC2.1 milestones,
- frozen reproducible runtime packaging,
- multi-object Greeble Palette,
- and an experimental live procedural Hair/Fur system.

The new account should therefore continue from the repository, not from old chat history alone.
