# MeshUtilz WIP122 — Balloon Integration Architecture Plan

## Status

Architecture-only planning checkpoint. **No Balloon geometry is implemented by this document.**

WIP122 must be developed as a separate experimental build. **Do not modify MeshUtilz RC2.4 or the permanent `MeshUtilz/` launcher.**

## Repositories and immutable baselines

### MeshUtilz host

Repository: `CrisBezz/tube-maker`

HEAD inspected for this plan:

- `ac9750970199b0f41c190c19da366ee8d9e2b5c3` — `Bump MeshUtilz public loader for Tube validator hotfix 3`

The permanent launcher currently remains a separate public entry point and must not be touched by WIP122.

RC2.4 is the current protected host release:

- `meshutilz-v092-rc2-4/`
- frozen runtime baseline: MeshUtilz v0.9.2 RC2.4 Hair Grooming Guides
- baseline recorded by RC2.4: `MeshUtilz v0.9.2-wip.121`
- RC2.4 runtime is a frozen assembled payload and must remain unchanged.

### Balloon donor

Repository: `CrisBezz/MeshUtilz-Sweep-Lab`

Branch: `balloon-v0.6`

Immutable stable checkpoint inspected for this plan:

- commit `18e72a6bf964974591038345d68c2196a18f6af2`
- commit message: `Mark v1.1.3 as v1.1 stable checkpoint`
- stable application identity: **MeshUtilz Balloon v1.1.3 / Balloon v1.1 Stable**

Treat that branch/checkpoint as **behavioural reference only**. WIP122 must not edit, rebase, or repurpose the stable Balloon source branch.

Protected Balloon behaviour includes:

- Project naming and `.meshutilz` project save/load.
- Object names restored through project load.
- Reference filename reminder and reference transform/display persistence.
- Reference reload at saved position/orientation/scale.
- Project-name-based OBJ and NOM filenames.
- Outliner names propagated to OBJ objects and NOM Tube/Outline nodes.
- Existing v1.0/v1.1 modelling and geometry behaviour.
- Pencil/touch interaction and navigation.
- Snapping and reference-surface behaviour.
- Selection, editing, undo/redo and export behaviour.

No Balloon implementation should be copied into MeshUtilz until its behaviour is isolated behind a host adapter and regression boundaries are defined.

---

# Architectural objective

Integrate Balloon into MeshUtilz as a **first-class workflow mode**, without allowing Balloon interaction state, geometry state, document handlers, export handlers or UI patches to leak into existing MeshUtilz modes.

The integration should progress in deliberately separated layers:

1. **Mode shell and lifecycle authority.**
2. Host/adapter contract.
3. Balloon viewport interaction adapter.
4. Balloon project/reference state adapter.
5. Balloon geometry engine migration.
6. Balloon editing/selection tools.
7. Balloon OBJ/NOM/project export integration.
8. Cross-workflow persistence and release hardening.

WIP122 implements **layer 1 only**.

---

# Current MeshUtilz authorities relevant to WIP122

## Mode menu

`wip/app-v092-static/mode-menu-authority-mu092wip4.txt`

This rebuilds the visible MODE menu from the hidden/native selectors. Existing later workflow modules also decorate this menu with workflow-specific buttons.

**WIP122 rule:** do not rewrite the base mode menu, do not add a new native geometry option to `replaceMode`/`mlrMode`, and do not rely on one-time DOM insertion. Balloon should register as a workflow button through a small additive decorator that can safely re-run after the MODE menu is rebuilt.

## Workflow / inspector authority

`wip/app-v092-static/workflow-primitive-authority-mu092wip59.txt`

Current workflows use `window.__muWorkflowMode` to separate generated geometry, custom mesh and Nomad parametric workflows. Later modules such as Tube Network and Hair/Fur layer additional workflow-specific lifecycle and inspector visibility over that base.

**WIP122 rule:** Balloon must own an explicit workflow key such as:

`balloon`

It must not impersonate `generated`, `custom-mesh`, `nomad-parametric`, `nomad-tube-network` or `nomad-hair-fur`.

## Inspector system

The current inspector is composed from `.mlr10-section[data-mlr10]` sections plus workflow-specific sections inserted by later modules.

**WIP122 rule:** the first Balloon shell gets exactly one dedicated inspector section owned by WIP122. It must not relocate, mutate or reuse existing controls.

---

# WIP122 first-build scope

## Required result

Create a new experimental build, proposed path:

`meshutilz-v092-wip122/`

with a new additive module, proposed path:

`wip/app-v092-static/balloon-mode-shell-mu092wip122.txt`

and WIP122-only branding/runtime assembly as required.

The build must start from the protected RC2.4 behaviour but must **not modify files inside `meshutilz-v092-rc2-4/`**.

The permanent launcher `MeshUtilz/index.html` must remain unchanged and continue pointing at the existing release.

## User-visible Balloon shell

MODE should gain a new workflow entry:

**Balloon**  
`Draw and edit inflated Outline / Tube forms`

Selecting Balloon should:

- set the WIP122 Balloon workflow active;
- close the MODE popup;
- change the visible current-mode label to `Balloon`;
- show a Balloon-specific workflow badge, e.g. `MODELLING · BALLOON`;
- show a dedicated Balloon inspector shell;
- hide controls belonging to other workflows only while Balloon is active;
- leave the source/reference viewport and camera intact;
- **not create geometry**;
- **not install Balloon pointer handlers**;
- **not import Balloon source modules**;
- **not modify export behaviour**.

The Balloon inspector shell should contain only static lifecycle information for this build, for example:

> Balloon integration shell  
> No geometry in WIP122. This build validates mode entry/exit and inspector ownership before the Balloon engine is migrated.

No sliders, drawing controls, creation-type controls, reference controls or export buttons are permitted in WIP122.

---

# Safe lifecycle contract

WIP122 exists primarily to prove this contract.

## State

The module should own private state similar to:

- `selected` / `active` boolean
- previous workflow identifier
- references to its own inspector section only
- references needed to restore visibility it changed

It must expose a narrow diagnostic API only if useful, e.g.:

`window.__muW122BalloonShell`

with read-only/current operations such as:

- `active()`
- `activate()`
- `deactivate()`
- `syncUI()`

Do not publish Balloon geometry state yet.

## Activate

Activation must:

1. record enough host state to restore cleanly;
2. set `window.__muWorkflowMode = 'balloon'`;
3. apply a unique body class such as `muz122-balloon`;
4. reveal only the WIP122 Balloon inspector section;
5. hide incompatible workflow-specific sections using scoped display rules/classes;
6. update mode label and workflow badge;
7. perform no geometry or camera mutation.

Activation must be idempotent. Repeated activation must not duplicate DOM, listeners, styles or state.

## Deactivate

Deactivation must:

1. remove Balloon body classes;
2. hide the Balloon inspector section;
3. restore all host UI that WIP122 hid;
4. clear Balloon-only transient state;
5. leave camera, source mesh, generated geometry and live Nomad state unchanged;
6. allow the newly selected MeshUtilz workflow to become authoritative immediately.

No delayed callback from Balloon may re-assert Balloon UI after deactivation.

## Mode switching

The first build must explicitly test:

- Generated Geometry → Balloon → Generated Geometry
- Nomad Parametric → Balloon → Nomad Parametric
- Custom Mesh / Greeble → Balloon → Custom Mesh / Greeble
- Nomad Tube Network → Balloon → Tube Network
- Nomad Hair / Fur → Balloon → Hair / Fur
- repeated Balloon → other → Balloon cycles

There must be no stale Balloon badge, inspector, hidden controls, event capture or workflow key after exit.

---

# Inspector authority rules

WIP122 must avoid the historical pattern of multiple modules competing to hide/show the same inspector controls.

For the shell build:

1. Balloon owns only `#muzW122Balloon` (or equivalent).
2. Balloon may temporarily hide other inspector sections while active, but it must not edit their markup or values.
3. Balloon must never move existing sections into its own section.
4. Balloon must not reuse the existing Size, Orientation, Geometry / Quality, Hair/Fur or procedural export sections.
5. On exit, Balloon removes only its own visibility override and lets the destination workflow's existing `syncUI()`/authority restore itself.
6. Any MutationObserver used must be narrowly scoped and must not continuously rewrite unrelated UI.
7. Prefer explicit mode events / click hooks and a small `syncUI()` over broad DOM mutation authority.

---

# Donor boundary: what WIP122 must NOT copy yet

Do not migrate any of the following from Balloon v1.1 Stable in the first build:

- `main095.js` or its patch chain;
- `balloonGeometry.js`;
- `outlineGeometry.js`;
- reference-surface logic;
- pointer/touch/Pencil handlers;
- orbit/select logic;
- two-finger pan/pinch/twist logic;
- drawing state;
- selection state;
- point editing;
- radius editing;
- Universal Gizmo logic;
- undo/redo stacks;
- `.meshutilz` project parsing or writing;
- OBJ export;
- NOM export;
- object naming/outliner implementation.

Those belong to later adapter/migration stages.

The stable Balloon branch contains a patch-layer architecture over earlier Balloon sources. It should be treated as a specification to untangle, not injected wholesale into MeshUtilz.

---

# Proposed future adapter boundary

After WIP122 passes, create a host-neutral Balloon adapter rather than exposing MeshUtilz globals directly to donor code.

Proposed conceptual contract:

`BalloonHostAdapter`

Host services eventually provided by MeshUtilz:

- viewport/canvas registration;
- camera access;
- render invalidation;
- selection notification;
- status reporting;
- file open/save request;
- reference mesh access;
- lifecycle enter/leave;
- inspector mount point;
- undo transaction hooks if/when unified.

Balloon engine responsibilities eventually isolated behind the adapter:

- Balloon object model;
- Outline/Tube creation;
- stroke sampling;
- geometry generation;
- Balloon-specific edit state;
- Balloon project serialization;
- Balloon OBJ/NOM conversion.

This separation prevents Balloon's current page-level assumptions from becoming new global MeshUtilz authorities.

---

# Event ownership plan

No Balloon event handlers in WIP122.

For the later interaction build, handlers must be installed only on `activate()` and removed on `deactivate()`, or remain permanently installed but return immediately unless the Balloon lifecycle token is active.

Required future event classes include:

- viewport pointer down/move/up/cancel;
- touch gesture handling;
- keyboard shortcuts;
- Pencil-only filtering;
- resize/render events.

Do not install global handlers that call `stopImmediatePropagation()` unless Balloon is active and the specific event belongs to Balloon interaction.

---

# Camera/navigation integration principle

Balloon v1.1 Stable's Pencil/touch navigation is protected behaviour, but it must not be copied into WIP122.

Later integration should decide between:

1. adopting MeshUtilz camera/navigation as the host authority and adapting Balloon selection/drawing to it; or
2. temporarily delegating the viewport interaction layer to Balloon while Balloon mode is active.

The decision must be validated against Balloon's protected one-/two-finger/Pencil behaviour before geometry migration.

WIP122 deliberately leaves the current MeshUtilz viewport navigation untouched so this decision can be made independently.

---

# Geometry migration order after WIP122

Recommended sequence, each as a separately testable WIP:

- **WIP123:** Balloon viewport interaction adapter only; no object creation. Establish Pencil/touch/orbit ownership and clean exit.
- **WIP124:** Tube Balloon creation in memory/viewport only, using donor behaviour behind adapter.
- **WIP125:** Outline Balloon creation and protected shape/roundness behaviour.
- **WIP126:** selection/deselect and creation-type-next-object lifecycle.
- **WIP127:** edit points, insert/delete/reduce, local radius editing and gizmo behaviour.
- **WIP128:** reference mesh load/show/hide/transform and surface snapping.
- **WIP129:** Balloon object naming/outliner integration.
- **WIP130:** `.meshutilz` Balloon project save/load integration.
- **WIP131:** OBJ export parity.
- **WIP132:** NOM Tube/Outline export parity.

Numbers are planning placeholders; preserve behavioural checkpoints rather than forcing the sequence if testing exposes a safer split.

---

# WIP122 regression requirements

WIP122 is a PASS only if all of the following are true:

- RC2.4 files are byte-for-byte untouched.
- `MeshUtilz/index.html` permanent launcher is untouched.
- Balloon donor repository/branch is untouched.
- Balloon appears once in MODE after repeated menu opens/rebuilds.
- Balloon can be entered repeatedly without duplicate inspector sections or event listeners.
- Balloon inspector is the only Balloon-owned visible UI.
- Generate does not create Balloon geometry.
- No Balloon geometry modules are loaded.
- Existing source mesh remains visible and unchanged.
- Existing camera position/orientation survives Balloon enter/exit.
- Existing generated/parametric/hair/network state survives Balloon enter/exit.
- Switching out restores destination workflow controls correctly.
- Existing Nomad export and other workflow buttons are not rebound by Balloon.
- Browser console has no warnings/errors caused by Balloon mode switching.
- Narrow iPad/touch layout remains usable.

---

# Build strategy

Recommended implementation for the first build:

1. Create `meshutilz-v092-wip122/` as an experimental build derived from the RC2.4 frozen runtime without modifying RC2.4.
2. Add exactly one new functional module: `balloon-mode-shell-mu092wip122.txt`.
3. Add WIP122 branding/diagnostic module only if required to prove build identity.
4. Register Balloon through the existing workflow menu layer rather than through native geometry selectors.
5. Implement explicit `activate / deactivate / syncUI / decorate` lifecycle functions.
6. Add no Balloon geometry, donor scripts, exports or pointer handlers.
7. Do not update the permanent launcher.

---

# Stop condition for WIP122

Once the Balloon MODE entry, lifecycle and inspector ownership are stable, **stop**.

Do not take advantage of a successful shell build to begin geometry work in the same WIP. The purpose of WIP122 is to establish a clean integration seam before the immutable Balloon v1.1 Stable behaviour is migrated.
