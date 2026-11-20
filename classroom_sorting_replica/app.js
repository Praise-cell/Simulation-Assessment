(() => {
  const sceneArt = document.getElementById('sceneArt');
  const overlay = document.getElementById('overlay');
  const toastEl = document.getElementById('toast');

  const LEARNERS = [
    {
      name: 'Amaka Eze',
      ability: 'High',
      style: 'Visual',
      personality: 'Confident',
      social: 'High',
      behaviour: 'Cooperative',
      about: 'Often leads group activities and helps classmates.',
      tip: 'Pairs well with quiet or developing peers to model steady leadership.',
    },
    {
      name: 'Daniel Okafor',
      ability: 'Medium',
      style: 'Kinesthetic',
      personality: 'Curious',
      social: 'High',
      behaviour: 'Energetic',
      about: 'Learns best through hands-on demonstrations and group building tasks.',
      tip: 'Benefits from structured roles and calm, focused teammates.',
    },
    {
      name: 'Chioma Nwosu',
      ability: 'High',
      style: 'Reading/Writing',
      personality: 'Analytical',
      social: 'Moderate',
      behaviour: 'Focused',
      about: 'Enjoys organizing notes and breaking down multi-step problems.',
      tip: 'Thrives when paired with expressive or kinesthetic classmates.',
    },
    {
      name: 'Emeka Uche',
      ability: 'Developing',
      style: 'Auditory',
      personality: 'Reflective',
      social: 'Emerging',
      behaviour: 'Quiet',
      about: 'Listens attentively and opens up quickly in smaller, supportive groups.',
      tip: 'Gains confidence alongside patient, encouraging peers.',
    },
    {
      name: 'Funke Adebayo',
      ability: 'High',
      style: 'Auditory',
      personality: 'Collaborative',
      social: 'High',
      behaviour: 'Cooperative',
      about: 'Explains concepts clearly in discussions and keeps peers engaged.',
      tip: 'Great anchor for discussion-driven pods.',
    },
    {
      name: 'Ibrahim Musa',
      ability: 'Medium',
      style: 'Visual',
      personality: 'Methodical',
      social: 'Moderate',
      behaviour: 'Focused',
      about: 'Strong at sketching diagrams and spotting patterns in classwork.',
      tip: 'Balances lively pods with steady, task-oriented habits.',
    },
    {
      name: 'Tosin Durojaiye',
      ability: 'High',
      style: 'Kinesthetic',
      personality: 'Inventive',
      social: 'Moderate',
      behaviour: 'Focused',
      about: 'Enjoys experimenting with models and testing practical examples.',
      tip: 'Combines well with note-takers and verbal communicators.',
    },
    {
      name: 'Peace Nwosu',
      ability: 'Medium',
      style: 'Reading/Writing',
      personality: 'Empathetic',
      social: 'High',
      behaviour: 'Cooperative',
      about: 'Checks in on teammates and makes sure everyone’s voice is heard.',
      tip: 'Helps bridge shy and outgoing learners in any pod.',
    },
    {
      name: 'Segun Adeyemi',
      ability: 'Developing',
      style: 'Visual',
      personality: 'Curious',
      social: 'High',
      behaviour: 'Energetic',
      about: 'Quickly grasps ideas when shown charts, flashcards, or sketches.',
      tip: 'Needs clear visual anchors and a cooperative pod leader.',
    },
    {
      name: 'Zainab Bello',
      ability: 'Medium',
      style: 'Auditory',
      personality: 'Reflective',
      social: 'Moderate',
      behaviour: 'Cooperative',
      about: 'Asks thoughtful follow-up questions during group conversations.',
      tip: 'Works smoothly with both high-energy and quiet classmates.',
    },
    {
      name: 'Tunde Akinola',
      ability: 'Medium',
      style: 'Kinesthetic',
      personality: 'Confident',
      social: 'High',
      behaviour: 'Energetic',
      about: 'Volunteers first for role-play and classroom demonstrations.',
      tip: 'Avoid placing too many energetic learners in the same pod.',
    },
    {
      name: 'Rita Okafor',
      ability: 'High',
      style: 'Visual',
      personality: 'Collaborative',
      social: 'High',
      behaviour: 'Cooperative',
      about: 'Synthesizes ideas cleanly and encourages quieter classmates.',
      tip: 'Strong peer mentor for developing learners.',
    },
    {
      name: 'David Ibeh',
      ability: 'Developing',
      style: 'Kinesthetic',
      personality: 'Practical',
      social: 'Moderate',
      behaviour: 'Focused',
      about: 'Stays deeply engaged when manipulating physical objects or cards.',
      tip: 'Flourishes with visual and verbal partners who narrate steps.',
    },
    {
      name: 'Blessing Eze',
      ability: 'Medium',
      style: 'Auditory',
      personality: 'Warm',
      social: 'High',
      behaviour: 'Cooperative',
      about: 'Keeps group morale positive and summarizes team consensus.',
      tip: 'Ideal social glue in mixed-ability pods.',
    },
    {
      name: 'Michael Ibrahim',
      ability: 'High',
      style: 'Reading/Writing',
      personality: 'Analytical',
      social: 'Emerging',
      behaviour: 'Quiet',
      about: 'Produces thorough written work and prefers calm work environments.',
      tip: 'Grows socially when paired with welcoming, cooperative peers.',
    },
    {
      name: 'Ada Nwachukwu',
      ability: 'Medium',
      style: 'Visual',
      personality: 'Creative',
      social: 'Moderate',
      behaviour: 'Cooperative',
      about: 'Draws clear visual summaries and remembers colour-coded cues.',
      tip: 'Adds visual clarity to auditory-heavy groups.',
    },
    {
      name: 'Kingsley Okoro',
      ability: 'Developing',
      style: 'Auditory',
      personality: 'Playful',
      social: 'High',
      behaviour: 'Energetic',
      about: 'Retains facts well through chants, rhymes, and peer storytelling.',
      tip: 'Stays on track best beside focused, cooperative teammates.',
    },
    {
      name: 'Fatima Sule',
      ability: 'High',
      style: 'Reading/Writing',
      personality: 'Confident',
      social: 'Moderate',
      behaviour: 'Focused',
      about: 'Writes structured outlines and double-checks group answers carefully.',
      tip: 'Great academic anchor when balanced with kinesthetic peers.',
    },
    {
      name: 'Chinedu Nwosu',
      ability: 'Medium',
      style: 'Kinesthetic',
      personality: 'Reflective',
      social: 'Emerging',
      behaviour: 'Quiet',
      about: 'Works steadily at his own pace and shines in 1-on-1 pair tasks.',
      tip: 'Benefits from supportive, high-social-skill teammates.',
    },
    {
      name: 'Tiffany Peters',
      ability: 'Developing',
      style: 'Visual',
      personality: 'Curious',
      social: 'Moderate',
      behaviour: 'Cooperative',
      about: 'Asks eager questions and responds well to illustrated examples.',
      tip: 'Thrives alongside patient high-ability visual/verbal peers.',
    },
  ];

  // Exact normalized crop boxes [x0, y0, x1, y1] of the 20 learner cards in scene-2.png
  const S2_COLS = [
    [0.4019, 0.4910],
    [0.5191, 0.6059],
    [0.6334, 0.7195],
    [0.7470, 0.8337],
    [0.8612, 0.9474],
  ];
  const S2_ROWS = [
    [0.2019, 0.3262],
    [0.3804, 0.4857],
    [0.5515, 0.6621],
    [0.7078, 0.8108],
  ];

  let scene = 1;
  let activeProfileIndex = 0;
  let profileDetailOpen = true;
  let assignments = Array(20).fill(null); // null or { pod: 0..3, seat: 0..4 }
  let selectedPickIndex = null;
  let reviewSwapIndex = null;
  let avatarUrls = [];
  let pointerDrag = null; // { index, fromPodSeat: {pod, seat}|null, ghost, startX, startY, active }

  const say = (msg) => {
    toastEl.textContent = msg;
    toastEl.classList.add('show');
    clearTimeout(say.timer);
    say.timer = setTimeout(() => toastEl.classList.remove('show'), 2300);
  };

  function sharpenImageData(ctx, w, h, amount = 0.42) {
    const imgData = ctx.getImageData(0, 0, w, h);
    const src = imgData.data;
    const out = new Uint8ClampedArray(src);
    for (let y = 1; y < h - 1; y++) {
      for (let x = 1; x < w - 1; x++) {
        const idx = (y * w + x) * 4;
        for (let c = 0; c < 3; c++) {
          const center = src[idx + c];
          const avg =
            (src[idx - 4 + c] +
              src[idx + 4 + c] +
              src[idx - w * 4 + c] +
              src[idx + w * 4 + c]) *
            0.25;
          out[idx + c] = Math.max(0, Math.min(255, center + (center - avg) * amount));
        }
      }
    }
    imgData.data.set(out);
    ctx.putImageData(imgData, 0, 0);
  }

  // Extract all 20 portraits losslessly from scene-2.png with crisp sharpening
  function loadAvatars() {
    const img = new Image();
    img.src = 'assets/scene-2.png';
    img.onload = () => {
      const w = img.naturalWidth;
      const h = img.naturalHeight;
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d', { willReadFrequently: true });
      if (!ctx) return;

      const extracted = [];
      for (let r = 0; r < 4; r++) {
        for (let c = 0; c < 5; c++) {
          const [x0, x1] = S2_COLS[c];
          const [y0, y1] = S2_ROWS[r];
          const sx = Math.round(x0 * w);
          const sy = Math.round(y0 * h);
          const sw = Math.round((x1 - x0) * w);
          const sh = Math.round((y1 - y0) * h);
          canvas.width = sw;
          canvas.height = sh;
          ctx.imageSmoothingEnabled = false;
          ctx.clearRect(0, 0, sw, sh);
          ctx.drawImage(img, sx, sy, sw, sh, 0, 0, sw, sh);
          sharpenImageData(ctx, sw, sh, 0.42);
          extracted.push(canvas.toDataURL('image/png'));
        }
      }
      avatarUrls = extracted;
      if (scene === 2 || scene === 3 || scene === 4 || scene === 5) {
        render();
      }
    };
  }

  function go(nextScene) {
    selectedPickIndex = null;
    reviewSwapIndex = null;
    clearPointerDrag();
    scene = nextScene;
    if (scene === 2) profileDetailOpen = true;
    render();
  }

  function addHotspot(x, y, w, h, fn, label) {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'hotspot';
    Object.assign(b.style, {
      left: x + '%',
      top: y + '%',
      width: w + '%',
      height: h + '%',
    });
    b.setAttribute('aria-label', label);
    b.title = label;
    b.addEventListener('click', fn);
    overlay.appendChild(b);
  }

  function showDialog(title, body, actions = [], meta = []) {
    const back = document.createElement('div');
    back.className = 'dialog-backdrop';
    const box = document.createElement('section');
    box.className = 'dialog';

    const h = document.createElement('h2');
    h.textContent = title;
    box.appendChild(h);

    const p = document.createElement('p');
    p.textContent = body;
    box.appendChild(p);

    if (meta.length > 0) {
      const grid = document.createElement('div');
      grid.className = 'dialog-meta-grid';
      meta.forEach(([k, v]) => {
        const item = document.createElement('div');
        item.className = 'dialog-meta-item';
        const sp = document.createElement('span');
        sp.textContent = k;
        const st = document.createElement('strong');
        st.textContent = v;
        item.append(sp, st);
        grid.appendChild(item);
      });
      box.appendChild(grid);
    }

    const actWrap = document.createElement('div');
    actWrap.className = 'dialog-actions';
    actions.forEach((a) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.textContent = a.label;
      b.className = a.secondary ? 'secondary' : '';
      b.onclick = () => {
        back.remove();
        a.run?.();
      };
      actWrap.appendChild(b);
    });
    box.appendChild(actWrap);

    back.appendChild(box);
    overlay.appendChild(back);
    back.addEventListener('click', (e) => {
      if (e.target === back) back.remove();
    });
  }

  function addCommonTopNav(currentScene) {
    // Home button top-left
    addHotspot(1.2, 1.4, 5.2, 7.6, () => go(1), 'Return to Introduction');
    if (currentScene >= 2 && currentScene !== 3) {
      // Top Stepper navigation (Steps 1..5 in scene-2, scene-4, scene-5, scene-6)
      addHotspot(30.5, 1.5, 7.5, 7.5, () => go(1), 'Step 1: Introduction');
      addHotspot(38.5, 1.5, 9.5, 7.5, () => go(2), 'Step 2: Learner Profiles');
      addHotspot(48.5, 1.5, 8.5, 7.5, () => go(3), 'Step 3: Class Sorting');
      if (assignments.every(Boolean)) {
        addHotspot(57.5, 1.5, 6.2, 7.5, () => go(4), 'Step 4: Review');
      }
    }
  }

  function render() {
    overlay.innerHTML = '';

    // Note: scene-6.png is Results (Step 5) and scene-5.png is Completion (Play Again)
    const artByScene = {
      1: 'assets/scene-1.png',
      2: 'assets/scene-2.png',
      3: 'assets/scene-3.png',
      4: 'assets/scene-4.png',
      5: 'assets/scene-6.png',
      6: 'assets/scene-5.png',
    };
    sceneArt.src = artByScene[scene] || 'assets/scene-1.png';

    if (scene === 1) {
      addHotspot(47, 56, 27, 15, () => go(2), "Let's begin");
      addHotspot(
        81.5,
        18.5,
        15.5,
        52,
        () =>
          showDialog(
            'Class Sorting Simulation',
            'Study all 20 learners first, then organize them into 4 balanced working pods of 5. Aim for a thoughtful mix of ability levels, learning styles, personalities, and cooperative behaviour.',
            [{ label: 'Start Exploring Profiles', run: () => go(2) }, { label: 'Close', secondary: true }]
          ),
        'Game information'
      );
    } else if (scene === 2) {
      addCommonTopNav(2);
      buildLearnerProfiles();
    } else if (scene === 3) {
      addHotspot(1.2, 1.4, 5.2, 7.6, () => go(1), 'Return to Introduction');
      addHotspot(6.8, 1.4, 18.5, 7.6, () => go(2), 'Back to Learner Profiles');
      buildSorting();
    } else if (scene === 4) {
      addCommonTopNav(4);
      buildReview();
    } else if (scene === 5) {
      addCommonTopNav(5);
      buildResults();
    } else if (scene === 6) {
      addCommonTopNav(6);
      buildCompletion();
    }
  }

  /* ===========================
     SCENE 2: LEARNER PROFILES
     =========================== */
  // Exact card boxes relative to .s2-grid (left: 39.05%, top: 19.45%, width: 56.65%, height: 65.0%)
  const S2_GRID_COLS = [
    { left: 0.0, width: 19.4 },
    { left: 20.8, width: 18.8 },
    { left: 41.0, width: 18.8 },
    { left: 61.0, width: 18.8 },
    { left: 81.1, width: 18.8 },
  ];
  const S2_GRID_ROWS = [
    { top: 0.0, height: 25.6 },
    { top: 27.5, height: 24.4 },
    { top: 53.8, height: 22.8 },
    { top: 78.0, height: 22.0 },
  ];

  function buildLearnerProfiles() {
    // 5x4 interactive learner card grid matching the exact 20 cards on scene-2.png
    const grid = document.createElement('div');
    grid.className = 's2-grid';
    LEARNERS.forEach((learner, i) => {
      const r = Math.floor(i / 5);
      const c = i % 5;
      const col = S2_GRID_COLS[c];
      const row = S2_GRID_ROWS[r];

      const btn = document.createElement('button');
      btn.type = 'button';
      const isCard0 = i === 0;
      const isCard0Inactive = isCard0 && activeProfileIndex !== 0;
      btn.className =
        's2-card-btn' +
        (isCard0 ? ' card-0' : '') +
        (i === activeProfileIndex ? ' active' : '') +
        (isCard0Inactive ? ' card-0-reset' : '');
      Object.assign(btn.style, {
        left: `${col.left}%`,
        top: `${row.top}%`,
        width: `${col.width}%`,
        height: `${row.height}%`,
      });
      btn.setAttribute('aria-label', `Inspect profile of ${learner.name}`);
      btn.title = `${learner.name} · ${learner.ability} Ability · ${learner.style}`;

      if (isCard0) {
        const outerPatch = document.createElement('span');
        outerPatch.className = 's2-card0-outer-patch';
        outerPatch.setAttribute('aria-hidden', 'true');
        const innerPatch = document.createElement('span');
        innerPatch.className = 's2-card0-inner-patch';
        innerPatch.setAttribute('aria-hidden', 'true');
        btn.append(outerPatch, innerPatch);
      } else {
        const check = document.createElement('span');
        check.className = 's2-card-check';
        check.textContent = '✓';
        btn.appendChild(check);
      }

      btn.addEventListener('click', () => {
        activeProfileIndex = i;
        profileDetailOpen = true;
        render();
      });
      grid.appendChild(btn);
    });
    overlay.appendChild(grid);

    // Left Detail Card: keep Amaka's native high-res scene-2 card when activeProfileIndex === 0,
    // and render the dynamic sharp 4:3 card when any other learner is selected.
    const active = LEARNERS[activeProfileIndex];
    const openViewMore = () => {
      showDialog(
        `${active.name} — Grouping Guidance`,
        `${active.about} ${active.tip}`,
        [
          {
            label: 'Next Learner',
            run: () => {
              activeProfileIndex = (activeProfileIndex + 1) % LEARNERS.length;
              render();
            },
          },
          { label: 'Close', secondary: true },
        ],
        [
          ['Ability Level', active.ability],
          ['Learning Style', active.style],
          ['Personality', active.personality],
          ['Social Skill & Behaviour', `${active.social} · ${active.behaviour}`],
        ]
      );
    };

    if (profileDetailOpen && activeProfileIndex === 0) {
      addHotspot(3.9, 75.5, 14.4, 6.4, openViewMore, 'View more about Amaka Eze');
      addHotspot(
        20.1,
        75.5,
        13.5,
        6.4,
        () => {
          activeProfileIndex = 1;
          render();
        },
        'Inspect next learner'
      );
    } else if (profileDetailOpen) {
      const firstName = active.name.split(' ')[0];

      const card = document.createElement('section');
      card.className = 's2-detail-card';
      card.setAttribute('aria-label', `${active.name} learner profile`);

      const top = document.createElement('div');
      top.className = 's2-detail-top';

      const portraitCol = document.createElement('div');
      portraitCol.className = 's2-portrait-col';

      const portraitWrap = document.createElement('div');
      portraitWrap.className = 's2-portrait-wrap';
      if (avatarUrls[activeProfileIndex]) {
        const img = document.createElement('img');
        img.className = 's2-portrait-img';
        img.src = avatarUrls[activeProfileIndex];
        img.alt = active.name;
        portraitWrap.appendChild(img);
      }
      const badge = document.createElement('span');
      badge.className = 's2-selected-pill';
      badge.textContent = '✓ Selected';
      portraitWrap.appendChild(badge);

      const tipBox = document.createElement('div');
      tipBox.className = 's2-tip-card';
      const tipLabel = document.createElement('div');
      tipLabel.className = 's2-tip-label';
      tipLabel.textContent = 'Grouping Note';
      const tipText = document.createElement('div');
      tipText.className = 's2-tip-text';
      tipText.textContent = active.tip;
      tipBox.append(tipLabel, tipText);

      portraitCol.append(portraitWrap, tipBox);

      const statsCol = document.createElement('div');
      statsCol.className = 's2-stats-col';

      const title = document.createElement('h2');
      title.className = 's2-learner-name';
      title.textContent = active.name;
      statsCol.appendChild(title);

      const traitList = document.createElement('div');
      traitList.className = 's2-trait-list';
      const traits = [
        ['ability', '▮', 'Ability Level', active.ability],
        ['style', '◉', 'Learning Style', active.style],
        ['personality', '★', 'Personality', active.personality],
        ['social', '⚑', 'Social Skill', active.social],
        ['behaviour', '▲', 'Behaviour', active.behaviour],
      ];
      traits.forEach(([cls, glyph, label, val]) => {
        const row = document.createElement('div');
        row.className = 's2-trait-item';

        const ico = document.createElement('span');
        ico.className = `s2-trait-icon ${cls}`;
        ico.textContent = glyph;

        const txt = document.createElement('div');
        txt.className = 's2-trait-text';
        const lbl = document.createElement('span');
        lbl.className = 's2-trait-label';
        lbl.textContent = label;
        const valEl = document.createElement('span');
        valEl.className = 's2-trait-val';
        valEl.textContent = val;
        txt.append(lbl, valEl);

        row.append(ico, txt);
        traitList.appendChild(row);
      });
      statsCol.appendChild(traitList);

      top.append(portraitCol, statsCol);
      card.appendChild(top);

      // About box
      const about = document.createElement('div');
      about.className = 's2-about-box';
      const aboutIco = document.createElement('span');
      aboutIco.className = 's2-about-icon';
      aboutIco.textContent = 'i';
      const aboutBody = document.createElement('div');
      const aboutTitle = document.createElement('div');
      aboutTitle.className = 's2-about-title';
      aboutTitle.textContent = `About ${firstName}`;
      const aboutDesc = document.createElement('div');
      aboutDesc.className = 's2-about-desc';
      aboutDesc.textContent = active.about;
      aboutBody.append(aboutTitle, aboutDesc);
      about.append(aboutIco, aboutBody);
      card.appendChild(about);

      // Actions: View More + Next Learner
      const actions = document.createElement('div');
      actions.className = 's2-detail-actions';

      const viewMore = document.createElement('button');
      viewMore.type = 'button';
      viewMore.className = 's2-btn-secondary';
      viewMore.textContent = 'View More';
      viewMore.addEventListener('click', openViewMore);

      const closeBtn = document.createElement('button');
      closeBtn.type = 'button';
      closeBtn.className = 's2-btn-primary';
      closeBtn.textContent = 'Next Learner →';
      closeBtn.addEventListener('click', () => {
        activeProfileIndex = (activeProfileIndex + 1) % LEARNERS.length;
        render();
      });

      actions.append(viewMore, closeBtn);
      card.appendChild(actions);

      overlay.appendChild(card);
    }

    // Start Sorting button bottom-right
    addHotspot(75.2, 87.5, 22.4, 9.6, () => go(3), 'Start sorting');
  }

  /* ===========================
     SCENE 3: CLASS SORTING
     =========================== */
  function clearPointerDrag() {
    if (pointerDrag?.ghost) {
      pointerDrag.ghost.remove();
    }
    pointerDrag = null;
    window.removeEventListener('pointermove', onPointerMove);
    window.removeEventListener('pointerup', onPointerUp);
    window.removeEventListener('pointercancel', onPointerUp);
  }

  function createDragGhost(index, x, y) {
    const ghost = document.createElement('div');
    ghost.className = 'drag-ghost';
    if (avatarUrls[index]) {
      const img = document.createElement('img');
      img.src = avatarUrls[index];
      img.alt = '';
      ghost.appendChild(img);
    }
    const label = document.createElement('span');
    label.textContent = LEARNERS[index].name.split(' ')[0];
    ghost.appendChild(label);
    ghost.style.left = `${x}px`;
    ghost.style.top = `${y}px`;
    document.body.appendChild(ghost);
    return ghost;
  }

  function onPointerMove(e) {
    if (!pointerDrag) return;
    const dx = e.clientX - pointerDrag.startX;
    const dy = e.clientY - pointerDrag.startY;
    if (!pointerDrag.active && Math.hypot(dx, dy) > 6) {
      pointerDrag.active = true;
      pointerDrag.ghost = createDragGhost(pointerDrag.index, e.clientX, e.clientY);
    }
    if (pointerDrag.active && pointerDrag.ghost) {
      pointerDrag.ghost.style.left = `${e.clientX}px`;
      pointerDrag.ghost.style.top = `${e.clientY}px`;
      overlay.querySelectorAll('.seat.over').forEach((el) => el.classList.remove('over'));
      const under = document.elementFromPoint(e.clientX, e.clientY);
      const seat = under?.closest?.('.seat');
      if (seat) seat.classList.add('over');
    }
  }

  function onPointerUp(e) {
    if (!pointerDrag) return;
    const drag = pointerDrag;
    const wasActive = drag.active;
    clearPointerDrag();
    overlay.querySelectorAll('.seat.over').forEach((el) => el.classList.remove('over'));

    if (!wasActive) {
      // Treated as a click
      if (drag.fromPodSeat) {
        // Clicked an occupied chair -> return learner to unassigned list
        assignments[drag.index] = null;
        selectedPickIndex = null;
        render();
        say(`${LEARNERS[drag.index].name} returned to Unassigned Learners`);
      } else {
        // Clicked an unassigned avatar -> select/deselect for click-to-seat
        selectedPickIndex = selectedPickIndex === drag.index ? null : drag.index;
        render();
      }
      return;
    }

    // Drop onto seat if pointer released over a chair
    const under = document.elementFromPoint(e.clientX, e.clientY);
    const seatEl = under?.closest?.('.seat');
    if (seatEl) {
      const targetPod = Number(seatEl.dataset.pod);
      const targetSeat = Number(seatEl.dataset.seat);
      placeOrSwap(drag.index, targetPod, targetSeat);
    } else if (drag.fromPodSeat) {
      // Dragged out of a chair onto empty space / left panel -> unassign
      const leftPanel = under?.closest?.('.dnd-source');
      if (leftPanel) {
        assignments[drag.index] = null;
        render();
        say(`${LEARNERS[drag.index].name} returned to Unassigned Learners`);
      }
    }
  }

  function startPointerDrag(e, index, fromPodSeat = null) {
    if (e.button !== 0 && e.pointerType === 'mouse') return;
    e.preventDefault();
    clearPointerDrag();
    pointerDrag = {
      index,
      fromPodSeat,
      startX: e.clientX,
      startY: e.clientY,
      active: false,
      ghost: null,
    };
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
    window.addEventListener('pointercancel', onPointerUp);
  }

  function placeOrSwap(learnerIdx, pod, seat) {
    if (!Number.isInteger(learnerIdx) || learnerIdx < 0 || learnerIdx >= LEARNERS.length) return;
    const prevPos = assignments[learnerIdx];
    const occupantIdx = assignments.findIndex((a) => a && a.pod === pod && a.seat === seat);

    if (occupantIdx === learnerIdx) return;

    if (occupantIdx >= 0) {
      if (prevPos) {
        // Swap two seated learners
        assignments[occupantIdx] = { ...prevPos };
        assignments[learnerIdx] = { pod, seat };
        selectedPickIndex = null;
        render();
        say(`Swapped ${LEARNERS[learnerIdx].name} and ${LEARNERS[occupantIdx].name}`);
      } else {
        // Replace seat occupant back to unassigned
        assignments[occupantIdx] = null;
        assignments[learnerIdx] = { pod, seat };
        selectedPickIndex = null;
        render();
        say(`${LEARNERS[learnerIdx].name} seated in Pod ${pod + 1} (${LEARNERS[occupantIdx].name} unassigned)`);
      }
      return;
    }

    assignments[learnerIdx] = { pod, seat };
    selectedPickIndex = null;
    render();
    say(`${LEARNERS[learnerIdx].name} seated in Pod ${pod + 1}`);
  }

  function autoBalancePods() {
    // Sort learners deterministically to spread ability levels, styles, and energetic behaviours evenly
    const abilityRank = { High: 0, Medium: 1, Developing: 2 };
    const order = LEARNERS.map((l, idx) => ({ l, idx })).sort((a, b) => {
      const diff = abilityRank[a.l.ability] - abilityRank[b.l.ability];
      if (diff !== 0) return diff;
      return a.l.behaviour.localeCompare(b.l.behaviour);
    });

    const next = Array(20).fill(null);
    const seatCursor = [0, 0, 0, 0];
    order.forEach((item, rank) => {
      const round = Math.floor(rank / 4);
      const pod = round % 2 === 0 ? rank % 4 : 3 - (rank % 4);
      const seat = seatCursor[pod]++;
      next[item.idx] = { pod, seat };
    });
    assignments = next;
    selectedPickIndex = null;
    render();
    say('All 20 learners balanced across 4 pods');
  }

  // Exact circular avatar coordinates [left%, top%, width%, height%] on scene-3.png
  const S3_COLS = [
    { left: 2.28, width: 4.82 },
    { left: 7.65, width: 4.82 },
    { left: 12.92, width: 4.82 },
    { left: 18.02, width: 4.82 },
  ];
  const S3_ROWS = [
    { top: 28.65, height: 8.85 },
    { top: 38.40, height: 8.85 },
    { top: 47.95, height: 8.75 },
    { top: 57.25, height: 8.75 },
    { top: 66.90, height: 9.05 },
  ];

  function buildSorting() {
    const remaining = assignments.filter((a) => a === null).length;

    // Seamless Unassigned Learners header bar with live count
    const headerBar = document.createElement('div');
    headerBar.className = 's3-unassigned-header';
    headerBar.textContent = `Unassigned Learners (${remaining})`;
    overlay.appendChild(headerBar);

    // Live learner inspector strip inside bottom margin of Unassigned Learners card
    const footerStrip = document.createElement('div');
    footerStrip.className = 's3-unassigned-footer';
    const updateFooterText = (idx) => {
      if (idx === null || idx === undefined) {
        footerStrip.textContent =
          remaining === 0
            ? 'All 20 learners seated'
            : 'Hover or tap an avatar to see details';
      } else {
        const l = LEARNERS[idx];
        footerStrip.textContent = `${l.name} · ${l.ability} · ${l.style}`;
      }
    };
    updateFooterText(selectedPickIndex);
    overlay.appendChild(footerStrip);

    // Dynamic instruction / selection status bar
    const hintBar = document.createElement('div');
    hintBar.className = 's3-hint-bar' + (selectedPickIndex !== null ? ' has-selection' : '');
    if (selectedPickIndex !== null) {
      const l = LEARNERS[selectedPickIndex];
      hintBar.textContent = `Selected: ${l.name} (${l.ability} · ${l.style}) — click any chair`;
    } else if (remaining === 0) {
      hintBar.textContent = 'All 20 learners seated! Click Confirm Arrangement.';
    } else {
      hintBar.textContent = 'Drag or click a learner avatar, then select a chair.';
    }
    overlay.appendChild(hintBar);

    // 20 transparent circular hit targets directly atop the 4x5 avatars in scene-3.png
    const source = document.createElement('div');
    source.className = 'dnd-source';
    LEARNERS.forEach((learner, i) => {
      const r = Math.floor(i / 4);
      const c = i % 4;
      const col = S3_COLS[c];
      const row = S3_ROWS[r];
      const isAssigned = assignments[i] !== null;

      const card = document.createElement('button');
      card.type = 'button';
      card.className =
        'learner' +
        (c === 0 ? ' col-first' : '') +
        (r === 0 ? ' row-first' : '') +
        (isAssigned ? ' assigned' : '') +
        (selectedPickIndex === i ? ' selected-pick' : '');
      Object.assign(card.style, {
        left: `${col.left}%`,
        top: `${row.top}%`,
        width: `${col.width}%`,
        height: `${row.height}%`,
      });
      card.setAttribute('aria-label', `${learner.name} — ${learner.ability} ability, ${learner.style}`);

      const tip = document.createElement('span');
      tip.className = 's3-avatar-tooltip';
      tip.textContent = isAssigned
        ? `${learner.name} (Pod ${assignments[i].pod + 1})`
        : `${learner.name} · ${learner.ability} · ${learner.style}`;
      card.appendChild(tip);

      card.addEventListener('pointerenter', () => updateFooterText(i));
      card.addEventListener('pointerleave', () => updateFooterText(selectedPickIndex));

      if (!isAssigned) {
        card.addEventListener('pointerdown', (e) => startPointerDrag(e, i, null));
      } else {
        card.addEventListener('click', () => {
          say(`${learner.name} is seated in Pod ${assignments[i].pod + 1}. Click their chair to remove.`);
        });
      }

      source.appendChild(card);
    });
    overlay.appendChild(source);

    // 4 Pods x 5 Chairs
    const pods = [
      ['p1', 0],
      ['p2', 1],
      ['p3', 2],
      ['p4', 3],
    ];
    pods.forEach(([cls, pod]) => {
      const grid = document.createElement('div');
      grid.className = 'pod-drop ' + cls;

      for (let s = 0; s < 5; s++) {
        const seat = document.createElement('div');
        seat.className = 'seat' + (selectedPickIndex !== null ? ' can-drop' : '');
        seat.dataset.pod = pod;
        seat.dataset.seat = s;

        const learnerIdx = assignments.findIndex((v) => v && v.pod === pod && v.seat === s);
        if (learnerIdx >= 0) {
          const learner = LEARNERS[learnerIdx];
          const placed = document.createElement('div');
          placed.className = 'placed';
          placed.title = `${learner.name} — click to remove or drag to another chair`;

          if (avatarUrls[learnerIdx]) {
            const img = document.createElement('img');
            img.className = 'placed-avatar';
            img.src = avatarUrls[learnerIdx];
            img.alt = learner.name;
            placed.appendChild(img);
          }

          const nm = document.createElement('span');
          nm.className = 'placed-name';
          nm.textContent = learner.name.split(' ')[0];
          placed.appendChild(nm);

          placed.addEventListener('pointerdown', (e) =>
            startPointerDrag(e, learnerIdx, { pod, seat: s })
          );
          seat.appendChild(placed);
        } else {
          seat.setAttribute('role', 'button');
          seat.tabIndex = 0;
          seat.setAttribute('aria-label', `Pod ${pod + 1}, empty chair ${s + 1}`);
          seat.addEventListener('click', () => {
            if (selectedPickIndex !== null) {
              placeOrSwap(selectedPickIndex, pod, s);
            } else {
              say(`Select or drag a learner first, then place them on Pod ${pod + 1}`);
            }
          });
        }

        grid.appendChild(seat);
      }
      overlay.appendChild(grid);
    });

    // Live Pod Occupancy Counts cleanly replacing "(5 learners)" inside each colored Pod pill
    const counts = [0, 1, 2, 3].map((p) => assignments.filter((a) => a && a.pod === p).length);
    counts.forEach((n, i) => {
      const c = document.createElement('div');
      c.className = 'pod-count ' + ['count1', 'count2', 'count3', 'count4'][i];
      c.textContent = `(${n}/5 seated)`;
      overlay.appendChild(c);
    });

    // Bottom Actions: Reset, Auto-Balance, Confirm Arrangement
    const actions = document.createElement('div');
    actions.className = 'dnd-actions';

    const reset = document.createElement('button');
    reset.type = 'button';
    reset.className = 'small-action';
    reset.textContent = '↻  Reset';
    reset.addEventListener('click', () => {
      assignments = Array(20).fill(null);
      selectedPickIndex = null;
      render();
      say('All learners returned to Unassigned Learners');
    });

    const autoBtn = document.createElement('button');
    autoBtn.type = 'button';
    autoBtn.className = 'autobalance-action';
    autoBtn.textContent = 'Auto-Balance';
    autoBtn.addEventListener('click', autoBalancePods);

    const ready = assignments.filter(Boolean).length === 20 && counts.every((n) => n === 5);
    const confirm = document.createElement('button');
    confirm.type = 'button';
    confirm.className = 'confirm-action' + (ready ? ' ready' : '');
    confirm.textContent = '✓  Confirm Arrangement  →';
    confirm.disabled = !ready;
    confirm.addEventListener('click', () => {
      if (ready) {
        go(4);
      } else {
        say('Place all 20 learners into four pods of five first');
      }
    });

    actions.append(reset, autoBtn, confirm);
    overlay.appendChild(actions);
  }

  /* ===========================
     BALANCE SCORING ENGINE
     =========================== */
  function evaluateArrangement() {
    const pods = [0, 1, 2, 3].map((p) =>
      assignments
        .map((a, idx) => (a && a.pod === p ? { idx, seat: a.seat, ...LEARNERS[idx] } : null))
        .filter(Boolean)
        .sort((a, b) => a.seat - b.seat)
    );

    const podMetrics = pods.map((members) => {
      if (members.length < 5) return { score: 0, label: 'Incomplete' };
      const abilities = new Set(members.map((m) => m.ability)).size;
      const styles = new Set(members.map((m) => m.style)).size;
      const hasHigh = members.some((m) => m.ability === 'High');
      const hasCooperative = members.some((m) => m.behaviour === 'Cooperative');
      const energeticCount = members.filter((m) => m.behaviour === 'Energetic').length;

      let s = 60;
      s += abilities === 3 ? 16 : abilities === 2 ? 9 : 0;
      s += styles >= 3 ? 12 : styles === 2 ? 6 : 0;
      s += hasHigh ? 6 : 0;
      s += hasCooperative ? 6 : 0;
      if (energeticCount >= 3) s -= 10;

      const clamped = Math.max(55, Math.min(99, s));
      return {
        score: clamped,
        label: clamped >= 85 ? 'Well Balanced' : clamped >= 72 ? 'Good Mix' : 'Needs Balance',
      };
    });

    const overall = Math.round(
      podMetrics.reduce((acc, m) => acc + m.score, 0) / Math.max(1, podMetrics.length)
    );
    const rating = overall >= 85 ? 'Excellent!' : overall >= 72 ? 'Good Balance' : 'Needs Review';

    let insight =
      'Great! Your groups look balanced and well-rounded. This will encourage peer learning!';
    if (overall < 72) {
      insight =
        'Some pods cluster similar abilities or energy levels. Try mixing High and Developing learners across pods.';
    } else if (overall < 85) {
      insight =
        'Solid arrangement! Mixing one more learning style or cooperative mentor into lighter pods will boost peer support.';
    }

    return { pods, podMetrics, overall, rating, insight };
  }

  function findBestSwapSuggestion() {
    const baseScore = evaluateArrangement().overall;
    let best = null;
    let bestScore = baseScore;
    for (let i = 0; i < LEARNERS.length; i++) {
      for (let j = i + 1; j < LEARNERS.length; j++) {
        if (!assignments[i] || !assignments[j] || assignments[i].pod === assignments[j].pod) continue;
        const a = assignments[i];
        const b = assignments[j];
        assignments[i] = b;
        assignments[j] = a;
        const score = evaluateArrangement().overall;
        assignments[i] = a;
        assignments[j] = b;
        if (score > bestScore) {
          bestScore = score;
          best = { i, j, gain: score - baseScore, newScore: score };
        }
      }
    }
    return best;
  }

  /* ===========================
     SCENE 4: ARRANGEMENT REVIEW
     =========================== */
  function buildReview() {
    const { pods, podMetrics, overall, rating, insight } = evaluateArrangement();

    // Interactive swap status pill above pods
    const swapBanner = document.createElement('div');
    swapBanner.className = 's4-swap-banner' + (reviewSwapIndex !== null ? ' active' : '');
    if (reviewSwapIndex !== null) {
      const sel = LEARNERS[reviewSwapIndex];
      const selPod = assignments[reviewSwapIndex].pod + 1;
      const msg = document.createElement('span');
      msg.textContent = `Swapping ${sel.name.split(' ')[0]} (Pod ${selPod}) — pick target`;
      const cancelBtn = document.createElement('button');
      cancelBtn.type = 'button';
      cancelBtn.className = 's4-swap-cancel';
      cancelBtn.textContent = 'Cancel';
      cancelBtn.addEventListener('click', () => {
        reviewSwapIndex = null;
        render();
      });
      swapBanner.append(msg, cancelBtn);
    } else {
      swapBanner.textContent = 'Click any two learners across pods to swap & rebalance';
    }
    overlay.appendChild(swapBanner);

    const podsWrap = document.createElement('div');
    podsWrap.className = 's4-pods';

    pods.forEach((members, pIdx) => {
      const col = document.createElement('div');
      col.className = `s4-pod-col pod-${pIdx}`;

      const podOk = members.length === 5 && podMetrics[pIdx].score >= 72;
      const head = document.createElement('div');
      head.className = 's4-pod-head';
      head.innerHTML = `<span class="s4-pod-check${podOk ? '' : ' warn'}" title="${podMetrics[pIdx].label}">${podOk ? '✓' : '!'}</span><div class="s4-pod-head-text"><h3>Pod ${pIdx + 1}</h3><span>(${members.length} learners)</span></div>`;
      col.appendChild(head);

      const list = document.createElement('div');
      list.className = 's4-pod-list';

      members.forEach((m) => {
        const row = document.createElement('div');
        row.role = 'button';
        row.tabIndex = 0;
        row.className =
          's4-learner-row' + (reviewSwapIndex === m.idx ? ' swap-active' : '');

        if (avatarUrls[m.idx]) {
          const img = document.createElement('img');
          img.src = avatarUrls[m.idx];
          img.alt = m.name;
          row.appendChild(img);
        }

        const txt = document.createElement('div');
        txt.className = 's4-row-text';
        const strong = document.createElement('strong');
        strong.textContent = m.name;
        const small = document.createElement('small');
        small.textContent = `${m.ability} · ${m.style}`;
        txt.append(strong, small);
        row.appendChild(txt);

        const infoBtn = document.createElement('button');
        infoBtn.type = 'button';
        infoBtn.className = 's4-info-btn';
        infoBtn.textContent = 'i';
        infoBtn.setAttribute('aria-label', `Inspect ${m.name}'s profile`);
        infoBtn.title = `Inspect ${m.name}`;
        infoBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          showDialog(
            m.name,
            `${m.about} ${m.tip}`,
            [{ label: 'Close' }],
            [
              ['Assigned Pod', `Pod ${pIdx + 1}`],
              ['Ability Level', m.ability],
              ['Learning Style', m.style],
              ['Behaviour', `${m.personality} · ${m.behaviour}`],
            ]
          );
        });
        row.appendChild(infoBtn);

        const handleRowSelect = () => {
          if (reviewSwapIndex === null) {
            reviewSwapIndex = m.idx;
            render();
            return;
          }
          if (reviewSwapIndex === m.idx) {
            reviewSwapIndex = null;
            render();
            return;
          }
          const firstIdx = reviewSwapIndex;
          const posA = assignments[firstIdx];
          const posB = assignments[m.idx];
          assignments[firstIdx] = posB;
          assignments[m.idx] = posA;
          reviewSwapIndex = null;
          render();
          say(`Swapped ${LEARNERS[firstIdx].name} and ${LEARNERS[m.idx].name}`);
        };

        row.addEventListener('click', handleRowSelect);
        row.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleRowSelect();
          }
        });

        list.appendChild(row);
      });

      col.appendChild(list);
      podsWrap.appendChild(col);
    });
    overlay.appendChild(podsWrap);

    // Dynamic Review Checklist
    const allHaveFive = pods.every((p) => p.length === 5);
    const balancedAbility = pods.every((p) => new Set(p.map((m) => m.ability)).size >= 2);
    const diverseStyles = pods.every((p) => new Set(p.map((m) => m.style)).size >= 3);

    const checklistBox = document.createElement('div');
    checklistBox.className = 's4-checklist-overlay';
    checklistBox.innerHTML = `<div class="s4-checklist-title"><span class="s4-card-icon" aria-hidden="true">💡</span><span>Review Checklist</span></div>`;
    const itemsWrap = document.createElement('div');
    itemsWrap.className = 's4-checklist-items';

    const criteria = [
      {
        ok: allHaveFive,
        label: 'Each pod has 5 learners',
        detail: pods.map((p, idx) => `Pod ${idx + 1}: ${p.length}/5 learners`).join(' · '),
      },
      {
        ok: balancedAbility,
        label: 'Abilities are well mixed',
        detail: pods
          .map((p, idx) => `Pod ${idx + 1}: ${new Set(p.map((m) => m.ability)).size}/3 levels`)
          .join(' · '),
      },
      {
        ok: diverseStyles,
        label: 'Diverse learning styles',
        detail: pods
          .map((p, idx) => `Pod ${idx + 1}: ${new Set(p.map((m) => m.style)).size} styles`)
          .join(' · '),
      },
    ];
    criteria.forEach((c) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 's4-check-row';
      btn.innerHTML = `<span class="s4-check-dot${c.ok ? '' : ' warn'}">${c.ok ? '✓' : '!'}</span><span>${c.label}</span>`;
      btn.addEventListener('click', () => say(c.detail));
      itemsWrap.appendChild(btn);
    });
    checklistBox.appendChild(itemsWrap);
    overlay.appendChild(checklistBox);

    // Dynamic Teacher's Insight text + optional 1-click best swap
    const insightBox = document.createElement('div');
    insightBox.className = 's4-insight-overlay';
    const insightText = document.createElement('div');
    insightText.className = 's4-insight-text';
    insightText.textContent = insight;
    insightBox.appendChild(insightText);

    const bestSwap = findBestSwapSuggestion();
    if (bestSwap && bestSwap.gain >= 2) {
      const optBtn = document.createElement('button');
      optBtn.type = 'button';
      optBtn.className = 's4-insight-btn';
      optBtn.textContent = `Swap ${LEARNERS[bestSwap.i].name.split(' ')[0]} & ${LEARNERS[bestSwap.j].name.split(' ')[0]} (+${bestSwap.gain}%)`;
      optBtn.addEventListener('click', () => {
        const posA = assignments[bestSwap.i];
        const posB = assignments[bestSwap.j];
        assignments[bestSwap.i] = posB;
        assignments[bestSwap.j] = posA;
        reviewSwapIndex = null;
        render();
        say(`Applied suggested swap — Balance Score now ${bestSwap.newScore}%`);
      });
      insightBox.appendChild(optBtn);
    }
    overlay.appendChild(insightBox);

    // Dynamic Group Balance Score card
    const scoreBox = document.createElement('div');
    scoreBox.className = 's4-score-overlay';
    const badgeClass = overall >= 85 ? '' : overall >= 72 ? ' good' : ' warn';
    scoreBox.innerHTML = `
      <div class="s4-score-title"><span class="s4-card-icon" aria-hidden="true">⚖️</span><span>Group Balance Score</span></div>
      <div class="s4-score-row">
        <div class="s4-score-ring" style="--pct: ${overall}%">
          <div class="s4-score-ring-inner">${overall}%</div>
        </div>
        <span class="s4-score-badge${badgeClass}">✓ ${rating}</span>
      </div>
    `;
    overlay.appendChild(scoreBox);

    addHotspot(2.1, 87.3, 15.6, 7.4, () => go(3), 'Make changes');
    addHotspot(72.1, 86.0, 26.0, 10.6, () => go(5), 'Confirm arrangement');
  }

  /* ===========================
     SCENE 5: RESULTS
     =========================== */
  function buildResults() {
    const { pods, podMetrics, overall } = evaluateArrangement();

    const scoreEl = document.createElement('div');
    scoreEl.className = 's5-score-val';
    scoreEl.textContent = `${overall}%`;
    overlay.appendChild(scoreEl);

    const podsWrap = document.createElement('div');
    podsWrap.className = 's5-pods-preview';
    pods.forEach((members, pIdx) => {
      const box = document.createElement('div');
      box.className = 's5-pod-box';

      const h4 = document.createElement('h4');
      h4.textContent = `Pod ${pIdx + 1} (${members.length})`;
      box.appendChild(h4);

      const avatars = document.createElement('div');
      avatars.className = 's5-pod-avatars';
      members.forEach((m) => {
        if (avatarUrls[m.idx]) {
          const img = document.createElement('img');
          img.src = avatarUrls[m.idx];
          img.alt = m.name;
          img.title = m.name;
          avatars.appendChild(img);
        }
      });
      box.appendChild(avatars);

      const status = document.createElement('span');
      const metric = podMetrics[pIdx];
      status.className = 's5-pod-status' + (metric.score < 72 ? ' warn' : '');
      status.textContent = `✓ ${metric.label}`;
      box.appendChild(status);

      podsWrap.appendChild(box);
    });
    overlay.appendChild(podsWrap);

    addHotspot(75, 86, 22, 10, () => go(6), 'Continue to Reflection');
  }

  /* ===========================
     SCENE 6: COMPLETION
     =========================== */
  function buildCompletion() {
    const { overall } = evaluateArrangement();

    const scoreEl = document.createElement('div');
    scoreEl.className = 's6-score-val';
    scoreEl.textContent = `${overall}%`;
    overlay.appendChild(scoreEl);

    addHotspot(
      75,
      76,
      22,
      10,
      () => {
        assignments = Array(20).fill(null);
        activeProfileIndex = 0;
        go(2);
      },
      'Play again'
    );
    addHotspot(75, 87, 22, 9, () => go(1), 'Back to dashboard');
  }

  loadAvatars();
  render();
})();