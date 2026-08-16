# MeshUtilz WIP55 sizing and symmetry regression report

WIP55 preserves WIP54 as the procedural-parameter and export baseline. No scatter, placement, primitive-cache, grouping or NOM exporter calculations were changed.

## Shared placement sizing restored

- Box, Cylinder, Torus and Tube all expose the shared placement-sizing selector.
- **Relative to local mesh** retains face-relative sizing and its Relative scale control.
- **Constant absolute size** exposes Constant size and produces one maximum object size across placements.
- Primitive-specific dimensions remain independent: they define the master’s proportions, while placement sizing defines how that master is scaled on the target mesh.
- Changing either primitive dimensions or placement sizing still requires Generate before download.

## Symmetry consolidation

- Make generated result symmetrical, Mirror plane, Source half and Show centre plane now live together inside the Symmetry rollout.
- The explanatory note moves with those controls.
- The former duplicate top-level Symmetry block is hidden after its controls are moved.
- Symmetry calculation and preview-plane behaviour are unchanged.

## Regression scope

- WIP54 primitive configuration/cache validation remains active.
- Native `File` download and inline validation remain unchanged.
- Unchanged parameterized exports remain byte-equivalent to WIP54 aside from versioned UI/download naming.

## Required manual checks

1. For Box, Cylinder and Torus, compare Relative to local mesh against Constant absolute size on faces of different sizes.
2. Confirm Cylinder length and unequal radii retain their proportions in Constant mode.
3. Confirm Tube retains both sizing modes and its existing successful export.
4. Confirm every symmetry control appears only inside the Symmetry rollout and the centre-plane preview still responds.
5. Export/import each primitive into Nomad and confirm grouped procedural editing and save/reopen remain intact.
