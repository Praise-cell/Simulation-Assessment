# Classroom Simulation — Class Sorting (Scenes 1–6)

A standalone HTML/CSS/JavaScript replica prototype based on the six supplied scene references.

## Run it
1. Unzip the archive.
2. Open `index.html` in a modern desktop browser.
3. Use the on-screen controls to move through the six scenes.

No build tools, package installation, or internet connection are required.

## Sequence
1. **Introduction** — start the classroom sorting activity.
2. **Learner Profiles** — view the learner profile scene and select profile cards.
3. **Class Sorting** — drag 20 learner names from the left roster into 20 chair slots across four pods (five seats per pod). A chair can be cleared by clicking its occupied slot. Confirm becomes active only when all four pods contain exactly five learners.
4. **Arrangement Review** — review the supplied arrangement-review artwork; choose make changes to return to sorting or confirm to continue.
5. **Results** — view the supplied results scene.
6. **Completion** — view the completion scene and restart.

## Files
- `index.html`: app shell
- `styles.css`: responsive stage and interaction styling
- `app.js`: scene navigation, learner assignment and drag/drop behavior
- `assets/scene-1.png` … `scene-6.png`: supplied visual reference plates

## Notes
The supplied screenshots are used as the visual scene plates to preserve the exact Nigerian classroom art direction. Interactive controls are layered over the scene plates. The sorting screen includes working HTML drag-and-drop logic; the other scenes use clickable navigation hotspots.
