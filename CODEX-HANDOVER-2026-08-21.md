# MeshUtilz project handover — 2026-08-21

## Purpose

This is the transfer brief for continuing `CrisBezz/tube-maker` in another GPT/Codex session. Treat the repository and the frozen runtime manifests as the source of truth. Preserve every historical release and WIP build.

## Current release position

- Repository: `https://github.com/CrisBezz/tube-maker`
- GitHub default branch: `main`
- Current public release: **MeshUtilz v0.9.2 RC2.4 — Hair Grooming Guides**
- RC2.4 pull request: `https://github.com/CrisBezz/tube-maker/pull/6`
- RC2.4 release commit: `50e88322ab793bf9c561e8793d8ee66fff7a5668`
- RC2.4 merge commit on `main`: `0a1cfc95aa399fe305977a510b6684e276f576cb`
- Public page: `https://crisbezz.github.io/tube-maker/meshutilz-v092-rc2-4/`
- Release directory: `meshutilz-v092-rc2-4/`
- Frozen manifest: `meshutilz-v092-rc2-4/runtime-manifest.json`
- Frozen runtime SHA-256: `e7c0c3034e37d5cd594cf32d5cc55512e2088fe3d852cb1b0392c5f021e82f72`
- RC2.4 contains 73 frozen source fragments and rebuilds with `meshutilz-v092-rc2-4/build-runtime.ps1`.

The local checkout used to prepare this handover is still on `codex/rc2-4-hair-grooming-guides` at `50e8832`, even though PR #6 is merged. A new session should fetch and inspect `origin/main` before making a branch.

## User-confirmed state

The user tested WIP121 and explicitly confirmed that everything worked perfectly before promotion to RC2.4. Confirmed behavior includes:

- Hair/Fur generation and live preview.
- Native NOM export and Nomad import.
- Global combing.
- Clumping.
- Parting.
- Groom presets.
- Length gradient/mask prototype.
- Visual groom-guide placement.
- Guide direction visibly moves nearby hairs.
- Guide radius changes the affected area.
- Guide strength changes influence.
- Preview and export share the guide result.
- Default Hair/Fur Tube dimensions are Length `0.1` and Width/Radius `0.001`.

RC2.4's File → About content now documents both RC2.3 Hair Grooming and RC2.4 Hair Grooming Guides.

## Current architecture

The application is a static, browser-based modelling utility assembled from frozen text fragments into one `runtime.txt`. Each release directory contains a small loader, templates, deterministic build script and SHA-256 manifest.

Major workflows currently present:

1. **Generated Geometry** — faceted tubes, surface webs and torus placement.
2. **Custom Mesh / Greeble** — legacy single-object mesh scattering and grouped geometry export.
3. **Nomad Parametric** — editable Tube, Torus, Box and Cylinder masters with linked scene nodes.
4. **Nomad Tube Network** — one shared procedural Tube fitted to source edges.
5. **Nomad Hair / Fur** — one shared editable procedural Tube instanced as deterministic rooted strands.

The intended Nomad architecture is one procedural master plus independently transformed linked scene nodes. Do not duplicate a complete procedural mesh for every instance.

## Active Hair/Fur authority stack in RC2.4

Read the RC2.4 manifest/build script for exact ordering. The important late-stage modules are:

- `nomad-hair-fur-mu092wip83.txt` — deterministic surface roots, strand records, base matrices and validation.
- `nomad-hair-fur-comb-mu092wip84.txt` — global tangent-plane combing.
- `nomad-hair-fur-clump-mu092wip85.txt` — seeded clump centres and influence.
- `nomad-hair-fur-parting-mu092wip106.txt` — parting direction.
- `nomad-hair-fur-live-mu092wip110.txt` — live control regeneration.
- `nomad-hair-fur-live-input-guard-mu092wip110.txt` — prevents transient invalid number-entry errors during live preview.
- `nomad-hair-fur-length-mask-mu092wip111.txt` and `nomad-hair-fur-length-mask-apply-mu092wip111.txt` — axis-based length gradient prototype.
- `nomad-hair-fur-presets-mu092wip108.txt` — groom presets.
- `hair-realworld-defaults-mu092wip115.txt` — defaults Hair/Fur length/radius to `0.1`/`0.001`.
- `nomad-hair-fur-guide-authority-mu092wip121.txt` — the successful visual-guide authority.
- `meshutilz-rc24-brand-mu092rc24.txt` — final version and About authority.

`nomad-hair-fur-guide-authority-mu092wip121.txt` is intentionally last in the grooming stack before release branding. It captures completed strand records/matrices after the `mu:wip83-hair-generated` event, applies distance-weighted tangent guidance, then updates all of:

- `window.__muW83Hair.state.records`
- the deterministic strand signature
- `window.__muLiveAuthoritativeTransforms`
- `window.__muLivePreviewPlacements`
- `window.lastPlacements`
- the preview `InstancedMesh` matrices

This shared write path is why the guide finally affects both visible hairs and exported NOM nodes.

## Export authority and non-negotiable rules

1. **Never reintroduce global `Blob` interception or monkey-patching.** An old WIP20-era approach patched `window.Blob` and silently altered NOM output. It caused severe preview/export divergence and false debugging signals.
2. Use the existing native `File`-based procedural NOM exporter.
3. `window.__muLiveAuthoritativeTransforms` is the placement source of truth. Preview and export must consume the same matrices.
4. Preserve WIP83 validation: finite matrices, rooted placement, node/preview count, Tube identity, scale/length consistency and deterministic signatures.
5. Keep procedural Tube resolution/cache validation. The verified native Tube template set includes 4×6, 6×6, 8×8, 10×6, 12×6, 14×6 and 6×12 references.
6. Preserve all frozen source fragments and release directories. Branch forward; never rewrite a user-confirmed WIP or RC.
7. Never bulk-stage the current dirty worktree. Stage only explicitly selected paths.

## Known-good rollback points

- **RC2.4** — current user-confirmed release; authoritative visual groom guide and full grooming stack.
- **WIP121** — exact user-confirmed pre-release test build. It exists locally as `meshutilz-v092-wip121/`; RC2.4 is its tracked reproducible promotion.
- **RC2.3.3** (`3caab6f`) — restored grooming presets after RC2.3 export/count regressions.
- **RC2.2.2** (`977e7ce`) — verified Tube-cache release.
- **RC2.1** (`0d704bd`) / **WIP81** (`557f705`) — older orientation and frozen-runtime baselines.

Avoid WIP114–WIP119 visual-guide prototypes. They displayed a gizmo but did not reliably influence authoritative hair matrices, or lost controls/defaults while layering experimental overrides. They remain historical evidence only.

## Local worktree warning

The transfer worktree contains numerous untracked historical WIP directories and abandoned experimental guide fragments. They belong to project history and must not be deleted, cleaned, or swept into a commit. In particular, do not run `git clean`, `git add .`, `git add -A`, or destructive reset commands.

RC2.4 deliberately tracked only its release directory and the frozen source dependencies required by its manifest. The abandoned WIP114–119 guide modules are not part of RC2.4.

## Known limitations and sensible roadmap

RC2.4 has one visual groom guide. It is not yet a multi-guide painting system and does not persist an authored guide network as a separate project asset.

The Hair/Fur roadmap discussed with the user includes:

- painted density and length masks (the current axis gradient is only a safe prototype),
- multiple visual guides / braid and parting guide networks,
- stray-hair controls implemented without breaking signatures,
- colour variation,
- collision avoidance,
- hair cards,
- expanded groom presets.

Frizz was deliberately removed: the user prefers adding spiral/frizz inside Nomad Sculpt. Do not restore the abandoned Frizz feature without a new explicit request.

The smallest safe next feature is either a second/multiple authoritative guide using the WIP121 matrix path, or a genuinely visual painted density/length mask. Do not start with another invisible numeric-only mask UI.

## Required first task in the new GPT session

Do not modify code immediately.

1. Read this file completely and treat it as the transfer brief.
2. Fetch/inspect current `main` and verify merge commit `0a1cfc9`.
3. Inspect `meshutilz-v092-rc2-4/runtime-manifest.json`, `build-runtime.ps1`, the WIP121 guide module and RC2.4 brand module.
4. Rebuild RC2.4 and verify the generated runtime SHA-256.
5. Report the active workflow authorities and confirm that no global Blob-based export interception was introduced.
6. Preserve the dirty historical worktree and create a new branch/build directory for any change.
7. Ask the user which visible Hair/Fur roadmap feature to build next.

## Suggested opening prompt

> Read `CODEX-HANDOVER-2026-08-21.md` completely and treat it as the project transfer brief. Inspect current `main` without changing anything. Verify RC2.4 from its manifest and source modules, confirm the Hair/Fur preview/export authority path and rollback points, and report the smallest safe next Hair/Fur feature. Preserve all historical builds, do not bulk-stage the dirty worktree, and never reintroduce global Blob-based NOM export interception.


