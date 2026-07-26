FACETED TUBE MAKER — SAFARI VERSION

This is a static web app. It does not require npm, Node.js or a command line.

EASIEST IPAD DEPLOYMENT
1. Unzip this folder in the iPad Files app.
2. Upload the contents to any static website host, such as Netlify Drop, Cloudflare Pages, GitHub Pages or Vercel.
3. Open the HTTPS address in Safari.
4. Tap Share > Add to Home Screen.
5. Open the new Tube Maker icon.

The first launch requires internet access because Three.js loads from a CDN. The service worker caches the app and Three.js modules as they are used, allowing later launches to work offline in most Safari/PWA configurations.

SUPPORTED FILES
- GLB / glTF
- OBJ
- STL

NOTES
- glTF files with separate .bin or texture files are not yet bundled automatically. GLB is recommended.
- Every source edge becomes a separate cylinder. Junctions overlap and are not welded.
- Very dense triangulated models can exceed iPad memory. Begin with Sharp Edges and increase Minimum Length.
