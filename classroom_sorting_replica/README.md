# Classroom Simulation — Class Sorting (Scenes 1–6)

An interactive HTML/CSS/JavaScript classroom sorting simulation layered over the six supplied Nigerian classroom scene references.

## Run it
- **With Vite (recommended)**: Run `npm run dev` (serves on port 3000) or `npm run build` (outputs to `dist/`).
- **Standalone**: Open `classroom_sorting_replica/index.html` directly in a modern desktop browser.

## Sequence
1. **Introduction** — Launch the classroom sorting activity or open the **Game Information** overview dialog.
2. **Learner Profiles** — Inspect all 20 learners in the 5×4 roster grid with lossless sharpened avatars, view each learner's traits and grouping notes in the left detail card, open the **View More** guidance modal, or advance via **Next Learner →**.
3. **Class Sorting** — Assign all 20 learners from the **Unassigned Learners** circular roster (with live remaining count and hover/tap detail strip) into four pods of five chairs using pointer drag-and-drop or click-to-seat/swap. Includes **Reset**, **Auto-Balance**, live per-pod occupancy badges, and **Confirm Arrangement →** (enabled when all 20 learners are seated).
4. **Arrangement Review** — Proportionally scaled pod cards, **Review Checklist**, **Teacher's Insight**, and **Group Balance Score** ring. Supports click-to-swap across pods (with cancel control), per-learner `i` profile inspection, clickable checklist breakdowns, and 1-click best-swap suggestions.
5. **Results** — Live overall balance score and per-pod avatar/status breakdown.
6. **Completion** — Final score summary with **Play Again** and **Back to Dashboard** actions.

## Files
- `index.html`: App shell and stage container
- `styles.css`: Responsive 16:9 stage, Card 0 corner masking, Scene 2–6 overlays, and dialog styling
- `app.js`: Scene navigation, lossless sharpened portrait extraction, drag/click sorting, balance scoring engine, and interactive review/results UI
- `assets/scene-1.png` … `scene-6.png`: Supplied visual reference plates

## Notes
The supplied `1672 × 941` scene plates are preserved as the base visual layer, with interactive controls, extracted sharp learner portraits, and live balance calculations layered accurately on top.
