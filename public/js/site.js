'use strict';

(() => {
  const root = document.documentElement;
  const body = document.body;
  const shell = document.querySelector('.app-shell');
  const mobileBreakpoint = window.matchMedia('(max-width: 1020px)');
  const safeStore = {
    get(key) { try { return window.localStorage.getItem(key); } catch (_) { return null; } },
    set(key, value) { try { window.localStorage.setItem(key, value); } catch (_) { /* Storage may be unavailable; the page still works. */ } }
  };

  // If a future image is renamed or removed, swap it for a bundled local landscape.
  // This keeps cards and hero panels from showing a broken-image icon.
  document.querySelectorAll('img').forEach((img) => {
    img.addEventListener('error', () => {
      if (img.dataset.fallbackAttempted === 'true') return;
      img.dataset.fallbackAttempted = 'true';
      const fallback = img.dataset.fallback || (img.classList.contains('brand-logo') ? '/img/logo.svg' : '/img/global-ranges.svg');
      if (img.getAttribute('src') !== fallback) img.src = fallback;
    }, { once: true });
  });

  // Theme: light is the default, and a returning visitor's choice is remembered locally.
  const themeButton = document.querySelector('[data-theme-toggle]');
  function applyTheme(theme, persist = true) {
    const next = theme === 'dark' ? 'dark' : 'light';
    root.dataset.theme = next;
    if (themeButton) themeButton.setAttribute('aria-label', next === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
    const themeColor = document.querySelector('meta[name="theme-color"]');
    if (themeColor) themeColor.setAttribute('content', next === 'dark' ? '#151b18' : '#f6f7f2');
    if (persist) safeStore.set('mountain-atlas-theme', next);
  }
  if (themeButton) {
    applyTheme(safeStore.get('mountain-atlas-theme') || 'light', false);
    themeButton.addEventListener('click', () => applyTheme(root.dataset.theme === 'dark' ? 'light' : 'dark'));
  }

  // Sidebar uses a collapsed desktop rail and a modal drawer on smaller screens.
  const sidebarButton = document.querySelector('[data-sidebar-toggle]');
  const backdrop = document.querySelector('[data-sidebar-backdrop]');
  function openMobileSidebar(open) {
    body.classList.toggle('sidebar-mobile-open', open);
    if (sidebarButton) sidebarButton.setAttribute('aria-expanded', String(open));
    if (open && sidebarButton) {
      const firstLink = document.querySelector('.sidebar a');
      if (firstLink) firstLink.focus({ preventScroll: true });
    }
  }
  if (shell && sidebarButton) {
    const storedCollapsed = safeStore.get('mountain-atlas-sidebar-collapsed') === 'true';
    if (!mobileBreakpoint.matches && storedCollapsed) shell.classList.add('is-sidebar-collapsed');
    sidebarButton.setAttribute('aria-expanded', String(!shell.classList.contains('is-sidebar-collapsed')));
    sidebarButton.addEventListener('click', () => {
      if (mobileBreakpoint.matches) {
        openMobileSidebar(!body.classList.contains('sidebar-mobile-open'));
      } else {
        shell.classList.toggle('is-sidebar-collapsed');
        const expanded = !shell.classList.contains('is-sidebar-collapsed');
        sidebarButton.setAttribute('aria-expanded', String(expanded));
        sidebarButton.setAttribute('aria-label', expanded ? 'Collapse navigation' : 'Expand navigation');
        safeStore.set('mountain-atlas-sidebar-collapsed', String(!expanded));
      }
    });
  }
  if (backdrop) backdrop.addEventListener('click', () => openMobileSidebar(false));
  document.querySelectorAll('.sidebar a').forEach((link) => link.addEventListener('click', () => openMobileSidebar(false)));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      openMobileSidebar(false);
      document.querySelectorAll('.nav-dropdown[open]').forEach((menu) => menu.removeAttribute('open'));
    }
  });
  mobileBreakpoint.addEventListener?.('change', (event) => {
    if (!event.matches) openMobileSidebar(false);
    if (sidebarButton) sidebarButton.setAttribute('aria-expanded', String(event.matches ? body.classList.contains('sidebar-mobile-open') : !shell?.classList.contains('is-sidebar-collapsed')));
  });

  // Dropdowns close when the user clicks outside them.
  const dropdowns = [...document.querySelectorAll('.nav-dropdown')];
  document.addEventListener('click', (event) => {
    dropdowns.forEach((menu) => { if (!menu.contains(event.target)) menu.removeAttribute('open'); });
  });
  dropdowns.forEach((menu) => menu.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowDown') {
      const links = [...menu.querySelectorAll('.dropdown-panel a')];
      if (links.length) { event.preventDefault(); links[0].focus(); }
    }
  }));

  // Gentle reveal animations (with a safe fallback for older browsers).
  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -35px 0px' });
    revealItems.forEach((item) => revealObserver.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  }

  // Reading progress line.
  const progressBar = document.getElementById('reading-progress-bar');
  let ticking = false;
  function updateProgress() {
    if (!progressBar) return;
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollable > 0 ? Math.max(0, Math.min(100, (window.scrollY / scrollable) * 100)) : 0;
    progressBar.style.width = `${progress}%`;
    ticking = false;
  }
  window.addEventListener('scroll', () => {
    if (!ticking) { window.requestAnimationFrame(updateProgress); ticking = true; }
  }, { passive: true });
  window.addEventListener('resize', updateProgress);
  updateProgress();

  // Keep the current contents entry visible in the reading rail.
  const tocLinks = [...document.querySelectorAll('.toc-link')];
  const tocTargets = tocLinks.map((link) => document.getElementById(decodeURIComponent(link.hash.slice(1)))).filter(Boolean);
  if (tocLinks.length && 'IntersectionObserver' in window) {
    const tocObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          tocLinks.forEach((link) => link.classList.toggle('is-active', link.hash === `#${entry.target.id}`));
        }
      });
    }, { rootMargin: '-14% 0px -75% 0px' });
    tocTargets.forEach((target) => tocObserver.observe(target));
  }

  // Small, accessible toast for non-navigation feedback.
  let toastTimer;
  function toast(message) {
    let node = document.getElementById('atlas-toast');
    if (!node) {
      node = document.createElement('div');
      node.id = 'atlas-toast'; node.className = 'atlas-toast'; node.setAttribute('role', 'status'); node.setAttribute('aria-live', 'polite');
      document.body.appendChild(node);
    }
    node.textContent = message;
    node.classList.add('is-visible');
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => node.classList.remove('is-visible'), 2500);
  }
  async function copyText(text) {
    try {
      if (navigator.clipboard && window.isSecureContext) await navigator.clipboard.writeText(text);
      else {
        const area = document.createElement('textarea'); area.value = text; area.setAttribute('readonly', '');
        area.style.position = 'fixed'; area.style.opacity = '0'; document.body.appendChild(area); area.select();
        const copied = document.execCommand('copy'); area.remove();
        if (!copied) throw new Error('Copy command unavailable');
      }
      toast('Copied to clipboard.');
    } catch (_) { toast('Copy is unavailable here. Select the text to copy it.'); }
  }
  document.querySelectorAll('[data-copy-link]').forEach((button) => button.addEventListener('click', () => copyText(window.location.href)));
  document.querySelectorAll('[data-copy-text]').forEach((button) => button.addEventListener('click', () => copyText(button.getAttribute('data-copy-text') || '')));
  document.querySelectorAll('[data-feedback]').forEach((button) => button.addEventListener('click', () => {
    button.parentElement.querySelectorAll('[data-feedback]').forEach((other) => other.classList.remove('is-selected'));
    button.classList.add('is-selected');
    toast(button.dataset.feedback === 'helpful' ? 'Thank you for the feedback.' : 'Try the reference library for a deeper trail.');
  }));
  document.querySelectorAll('[data-back-to-top]').forEach((link) => link.addEventListener('click', (event) => { event.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }));

  // Regional atlas filters; range labels can contain more than one region.
  const rangeButtons = [...document.querySelectorAll('[data-region-filter]')];
  const rangeItems = [...document.querySelectorAll('#range-grid [data-region]')];
  const rangeCount = document.getElementById('range-count');
  const rangeEmpty = document.getElementById('range-empty');
  if (rangeButtons.length && rangeItems.length) {
    rangeButtons.forEach((button) => button.addEventListener('click', () => {
      const selected = button.dataset.regionFilter;
      rangeButtons.forEach((other) => {
        const active = other === button;
        other.classList.toggle('is-active', active); other.setAttribute('aria-pressed', String(active));
      });
      let visible = 0;
      rangeItems.forEach((item) => {
        const labels = item.dataset.region.split('&').map((value) => value.trim());
        const match = selected === 'all' || labels.includes(selected) || (selected === 'Europe' && labels.includes('Europe & Asia')) || (selected === 'Asia' && labels.includes('Europe & Asia'));
        item.hidden = !match; if (match) visible += 1;
      });
      if (rangeCount) rangeCount.textContent = `${visible} regional ${visible === 1 ? 'study' : 'studies'}`;
      if (rangeEmpty) rangeEmpty.hidden = visible > 0;
    }));
  }

  // Glossary instant filter.
  const glossarySearch = document.getElementById('glossary-search');
  const glossaryEntries = [...document.querySelectorAll('.glossary-entry')];
  const glossaryCount = document.getElementById('glossary-count');
  const glossaryNoResults = document.getElementById('glossary-no-results');
  if (glossarySearch) glossarySearch.addEventListener('input', () => {
    const term = glossarySearch.value.trim().toLocaleLowerCase(); let shown = 0;
    glossaryEntries.forEach((entry) => {
      const match = entry.dataset.term.includes(term); entry.hidden = !match; if (match) shown += 1;
    });
    document.querySelectorAll('.glossary-letter-heading').forEach((heading) => {
      const next = heading.nextElementSibling;
      let any = false; let sibling = next;
      while (sibling && !sibling.classList.contains('glossary-letter-heading')) { if (sibling.classList.contains('glossary-entry') && !sibling.hidden) any = true; sibling = sibling.nextElementSibling; }
      heading.hidden = !any;
    });
    if (glossaryCount) glossaryCount.textContent = `${shown} ${shown === 1 ? 'term' : 'terms'}`;
    if (glossaryNoResults) glossaryNoResults.hidden = shown > 0;
  });

  // Elevation explorer: conceptual bands, not a universal altitude classification.
  const elevationSlider = document.getElementById('elevation-slider');
  if (elevationSlider) {
    const valueNode = document.getElementById('elevation-value');
    const bandNode = document.getElementById('elevation-band');
    const marker = document.getElementById('elevation-marker');
    const indexNode = document.getElementById('elevation-index');
    const subtitleNode = document.getElementById('elevation-subtitle');
    const descriptionNode = document.getElementById('elevation-description');
    const bands = [
      { max:800, label:'Foothills', index:'ZONE 01', title:'Foothills & lower slopes', text:'Warmer slopes may support broadleaf forest, scrub, farms or grassland. Water and soil from the highlands connect these lower landscapes to the rest of the watershed.' },
      { max:2000, label:'Montane forest', index:'ZONE 02', title:'Montane forests', text:'Cooler air, forest canopies and diverse understory habitats often dominate suitable middle elevations. Species and forest types vary with latitude, rainfall and slope exposure.' },
      { max:3000, label:'Subalpine', index:'ZONE 03', title:'Subalpine woodland & tree line', text:'Trees may become shorter and more scattered as cold, wind and a shorter growing season constrain growth. Tree-line height differs greatly across mountains and climates.' },
      { max:4200, label:'Alpine meadows', index:'ZONE 04', title:'Alpine meadows & open slopes', text:'Low shrubs, grasses, cushion plants, lichens and specialised invertebrates can exploit the short season between snow events. Exposure and soil depth strongly shape local communities.' },
      { max:6000, label:'Nival / high rock', index:'ZONE 05', title:'Bare rock, snow & ice', text:'At the highest levels, cold, thin air, unstable surfaces and limited soil restrict plant life. Some organisms persist in specialised microsites, while ice and snow continue to influence water and sediment below.' }
    ];
    const updateElevation = () => {
      const height = Number(elevationSlider.value); const band = bands.find((item) => height <= item.max) || bands[bands.length - 1];
      if (valueNode) valueNode.innerHTML = `${height.toLocaleString('en-US')} <small>m</small>`;
      if (bandNode) bandNode.textContent = band.label;
      if (marker) marker.style.left = `${(height / Number(elevationSlider.max)) * 100}%`;
      if (indexNode) indexNode.textContent = band.index;
      if (subtitleNode) subtitleNode.textContent = band.title;
      if (descriptionNode) descriptionNode.textContent = band.text;
    };
    elevationSlider.addEventListener('input', updateElevation); updateElevation();
  }

  // Quiz: immediate explanations, progress, score and restart.
  const quizRoot = document.querySelector('[data-quiz]');
  if (quizRoot) {
    const panels = [...quizRoot.querySelectorAll('.quiz-question')];
    const questions = panels.map((panel) => ({ correct: Number(panel.dataset.correct), explain: panel.dataset.explain || '' }));
    const nextButton = document.getElementById('quiz-next');
    const restartButton = document.getElementById('quiz-restart');
    const progressLabel = document.getElementById('quiz-progress-label');
    const scoreLabel = document.getElementById('quiz-score-label');
    const progress = document.getElementById('quiz-progress-bar');
    const resultsBox = document.getElementById('quiz-results');
    let current = 0; let score = 0; let answered = new Set();
    function showQuestion(index) {
      current = index;
      panels.forEach((panel, panelIndex) => { panel.hidden = panelIndex !== index; });
      if (progressLabel) progressLabel.textContent = `QUESTION ${String(index + 1).padStart(2,'0')} / ${questions.length}`;
      if (progress) progress.style.width = `${((index + 1) / questions.length) * 100}%`;
      if (nextButton) { nextButton.disabled = true; nextButton.hidden = index >= questions.length; nextButton.innerHTML = index === questions.length - 1 ? 'See your results <span>→</span>' : 'Next question <span>→</span>'; }
      if (resultsBox) resultsBox.hidden = true;
    }
    function finishQuiz() {
      panels.forEach((panel) => { panel.hidden = true; });
      if (nextButton) nextButton.hidden = true;
      if (restartButton) restartButton.hidden = false;
      if (progressLabel) progressLabel.textContent = 'FIELD CHECK COMPLETE';
      if (progress) progress.style.width = '100%';
      if (resultsBox) {
        const percent = questions.length ? Math.round((score / questions.length) * 100) : 0;
        const message = percent >= 90 ? 'An excellent reading of the mountain systems.' : percent >= 70 ? 'A strong foundation — keep connecting the ideas.' : percent >= 50 ? 'Good progress. Revisit a few field notes and try again.' : 'You have a new trail to explore. Start with the foundations and return soon.';
        resultsBox.innerHTML = `<div class="result-score">${score}<small> / ${questions.length}</small></div><h2>${message}</h2><p>You answered ${score} ${score === 1 ? 'question' : 'questions'} correctly. Each explanation is a doorway to a deeper topic.</p><button type="button" class="button button-primary" data-quiz-again>Try again <span>↺</span></button>`;
        resultsBox.hidden = false;
      }
      if (scoreLabel) scoreLabel.textContent = `${score} correct in total`;
    }
    panels.forEach((panel, index) => {
      const explanation = panel.querySelector('.quiz-explanation');
      panel.querySelectorAll('[data-option]').forEach((button) => button.addEventListener('click', () => {
        if (answered.has(index)) return;
        const selected = Number(button.dataset.option); const question = questions[index];
        const isCorrect = question && selected === Number(question.correct);
        answered.add(index); if (isCorrect) score += 1;
        panel.querySelectorAll('[data-option]').forEach((option) => {
          option.disabled = true;
          const optionIndex = Number(option.dataset.option);
          if (optionIndex === Number(question.correct)) option.classList.add('is-correct');
          if (optionIndex === selected) option.classList.add(isCorrect ? 'is-selected' : 'is-wrong');
        });
        if (explanation) { explanation.textContent = `${isCorrect ? 'Correct. ' : 'Not quite. '}${question ? question.explain : ''}`; explanation.hidden = false; }
        if (nextButton) nextButton.disabled = false;
        if (scoreLabel) scoreLabel.textContent = `${score} correct so far`;
      }));
    });
    if (nextButton) nextButton.addEventListener('click', () => { if (current >= questions.length - 1) finishQuiz(); else showQuestion(current + 1); });
    if (restartButton) restartButton.addEventListener('click', resetQuiz);
    resultsBox?.addEventListener('click', (event) => { if (event.target.closest('[data-quiz-again]')) resetQuiz(); });
    function resetQuiz() {
      score = 0; current = 0; answered = new Set();
      panels.forEach((panel) => { const exp = panel.querySelector('.quiz-explanation'); if (exp) { exp.textContent = ''; exp.hidden = true; } panel.querySelectorAll('[data-option]').forEach((option) => { option.disabled = false; option.classList.remove('is-selected','is-correct','is-wrong'); }); });
      if (scoreLabel) scoreLabel.textContent = '0 correct so far';
      if (restartButton) restartButton.hidden = true;
      if (nextButton) nextButton.hidden = false;
      if (resultsBox) resultsBox.hidden = true;
      showQuestion(0);
    }
    if (questions.length) showQuestion(0);
  }

  // A custom photo with the right filename takes priority; if it is corrupt, use the bundled local SVG.
  document.querySelectorAll('img[data-image-fallback]').forEach((img) => {
    img.addEventListener('error', () => {
      const fallback = img.getAttribute('data-image-fallback');
      if (!fallback || img.dataset.fallbackUsed === 'true') return;
      img.dataset.fallbackUsed = 'true';
      img.src = fallback;
    }, { once: true });
  });

  // Complete topic library: filter cards without making a server request.
  const topicLibrarySearch = document.getElementById('topic-library-search');
  if (topicLibrarySearch) {
    const cards = [...document.querySelectorAll('[data-topic-search]')];
    const groups = [...document.querySelectorAll('[data-topic-group]')];
    const empty = document.getElementById('topic-library-empty');
    topicLibrarySearch.addEventListener('input', () => {
      const term = topicLibrarySearch.value.trim().toLocaleLowerCase();
      let visibleTotal = 0;
      cards.forEach((card) => {
        const matched = !term || (card.dataset.topicSearch || '').includes(term);
        card.hidden = !matched;
        if (matched) visibleTotal += 1;
      });
      groups.forEach((group) => { group.hidden = !group.querySelector('[data-topic-search]:not([hidden])'); });
      if (empty) empty.hidden = visibleTotal > 0;
    });
  }

})();
