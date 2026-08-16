# MeshUtilz v0.9.2 RC2 release report

RC2 is a promotion of the user-confirmed WIP58 baseline. It introduces no scatter, placement, grouping or NOM-export algorithm changes.

The RC2 publication candidate also refreshes the File menu's Project Info and About surfaces. This is presentation-only and does not alter generation or export data.

## Release-candidate scope

- Separate Nomad Parametric and Custom Mesh / Greeble workflows.
- One-tap editable Nomad Box, Cylinder, Torus and straight Tube creation.
- Primitive-specific dimensions, including clean Torus defaults of Outer `1` and Inner `0.2`.
- Relative, constant and supported Nomad-dimension placement sizing.
- Grouped Nomad exports with one retained procedural master mesh.
- Inline validation followed by native `File` download using `application/x-nomad-sculpt`.
- Existing edited NOM primitive import remains available.

## Confirmed regression baseline

- Internal Tube: user pass.
- Internal Box: user pass.
- Internal Cylinder: user pass.
- Internal Torus: user pass after WIP58 numeric/default cleanup.
- WIP58 exporter, template, parameter, grouping and browser regression suites: pass.

## Known unsupported cases

- Compressed/LZ4 Tube vertex caches stop with a clear validation error rather than exporting incorrectly.
- RC2 does not add new primitive types or change the custom mesh/greeble engine.

## Feedback focus

Community testing should concentrate on iPad/mobile workflow clarity, high placement counts, unusual imported procedural NOM files, and Nomad edit/save/close/reopen reliability.
