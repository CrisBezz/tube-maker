FACETED TUBE MAKER — SAFARI QUAD VERSION

This is a static web app. It does not require npm, Node.js or a command line.

NEW QUAD MODES
- Original OBJ quads: preserves the four perimeter edges of true four-vertex OBJ faces.
- Reconstructed quads: pairs adjacent, nearly coplanar triangles in GLB, glTF, OBJ and STL meshes and removes the likely triangulation diagonal.
- Unmatched triangles can be retained or ignored.
- Quad Matching Angle controls how closely aligned the paired triangle normals must be.

GITHUB PAGES UPDATE
1. Unzip this folder in Files.
2. Open the existing GitHub repository in Safari.
3. Select Add file > Upload files.
4. Upload index.html, manifest.webmanifest, sw.js and README.txt from this folder.
5. Choose Commit changes. Uploading files with the same names replaces the old versions.
6. Wait for GitHub Pages to deploy, then reload the live app.
7. If the old app remains, close the Home Screen app completely and reopen it, or clear Safari website data for the GitHub Pages site.

SUPPORTED FILES
- GLB / glTF
- OBJ
- STL

NOTES
- GLB is recommended over glTF files that depend on separate .bin or texture files.
- Every resulting edge becomes a separate cylinder. Junctions overlap and are not welded.
- Quad reconstruction is inferred. Regular architectural and subdivision meshes work best. Irregular triangulations may need a lower matching angle or unmatched triangles set to Ignore.
- Very dense models can exceed iPad memory. Increase Minimum Length or simplify the source mesh first.
