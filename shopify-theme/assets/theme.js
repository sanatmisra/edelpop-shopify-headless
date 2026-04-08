(() => {
  const storageKey = 'edelpop-theme';
  const root = document.documentElement;
  const syncBodyLock = () => {
    const hasOpenDrawer = document.querySelector('.drawer.is-open');
    document.body.style.overflow = hasOpenDrawer ? 'hidden' : '';
  };

  const setTheme = (theme) => {
    root.setAttribute('data-theme', theme);
    localStorage.setItem(storageKey, theme);
    document.querySelectorAll('[data-theme-toggle-label]').forEach((node) => {
      node.textContent = theme === 'dark' ? node.dataset.darkLabel : node.dataset.lightLabel;
    });
  };

  document.addEventListener('click', (event) => {
    const toggle = event.target.closest('[data-theme-toggle]');
    if (toggle) {
      const nextTheme = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      setTheme(nextTheme);
    }

    const openTrigger = event.target.closest('[data-open-drawer]');
    if (openTrigger) {
      const id = openTrigger.getAttribute('data-open-drawer');
      const drawer = document.getElementById(id);
      if (drawer) {
        drawer.classList.add('is-open');
        drawer.setAttribute('aria-hidden', 'false');
        syncBodyLock();
      }
    }

    const closeTrigger = event.target.closest('[data-close-drawer], .drawer__scrim');
    if (closeTrigger) {
      const drawer = closeTrigger.closest('.drawer');
      if (drawer) {
        drawer.classList.remove('is-open');
        drawer.setAttribute('aria-hidden', 'true');
        syncBodyLock();
      }
    }

    const accordionButton = event.target.closest('[data-accordion-button]');
    if (accordionButton) {
      const item = accordionButton.closest('.accordion__item');
      const isOpen = item.classList.contains('is-open');
      item.classList.toggle('is-open', !isOpen);
      accordionButton.setAttribute('aria-expanded', String(!isOpen));
    }

    const qtyButton = event.target.closest('[data-qty-button]');
    if (qtyButton) {
      const field = qtyButton.closest('.qty-selector')?.querySelector('input');
      if (!field) return;
      const delta = Number(qtyButton.dataset.qtyButton);
      const current = Number(field.value || 1);
      field.value = Math.max(1, current + delta);
      field.dispatchEvent(new Event('change', { bubbles: true }));
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;
    document.querySelectorAll('.drawer.is-open').forEach((drawer) => {
      drawer.classList.remove('is-open');
      drawer.setAttribute('aria-hidden', 'true');
    });
    syncBodyLock();
  });

  document.querySelectorAll('[data-slider]').forEach((slider) => {
    const prev = slider.parentElement.querySelector('[data-slider-prev]');
    const next = slider.parentElement.querySelector('[data-slider-next]');
    const distance = () => Math.max(slider.clientWidth * 0.88, 240);
    prev?.addEventListener('click', () => slider.scrollBy({ left: -distance(), behavior: 'smooth' }));
    next?.addEventListener('click', () => slider.scrollBy({ left: distance(), behavior: 'smooth' }));
  });

  document.querySelectorAll('form[data-localization-form]').forEach((form) => {
    const select = form.querySelector('select');
    select?.addEventListener('change', () => form.submit());
  });

  document.querySelectorAll('.product-form').forEach((form) => {
    const stickyButton = document.querySelector('[data-sticky-atc]');
    if (!stickyButton) return;
    stickyButton.addEventListener('click', () => form.requestSubmit());
  });
})();
