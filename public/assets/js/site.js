(function () {
  'use strict';
  const cfg = window.BLUEHATCH_CONFIG || {};
  const menuButton = document.querySelector('[data-menu-toggle]');
  const menu = document.querySelector('[data-mobile-menu]');
  if (menuButton && menu) {
    menuButton.addEventListener('click', function () {
      const open = menu.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(open));
    });
  }

  document.querySelectorAll('[data-faq-button]').forEach(function (button) {
    button.addEventListener('click', function () {
      const open = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', String(!open));
    });
  });

  const filters = document.querySelectorAll('[data-filter]');
  const searchInput = document.querySelector('[data-product-search]');
  const cards = document.querySelectorAll('[data-product-card]');
  const count = document.querySelector('[data-results-count]');
  const emptyState = document.querySelector('[data-empty-state]');
  let activeFilter = 'all';
  function applyFilters() {
    if (!cards.length) return;
    const query = (searchInput ? searchInput.value : '').trim().toLowerCase();
    let visible = 0;
    cards.forEach(function (card) {
      const category = card.getAttribute('data-category');
      const searchable = (card.getAttribute('data-search') || '').toLowerCase();
      const matches = (activeFilter === 'all' || activeFilter === category) && searchable.includes(query);
      card.classList.toggle('hide', !matches);
      if (matches) visible++;
    });
    if (count) count.textContent = visible + ' toolkit' + (visible === 1 ? '' : 's') + ' found';
    if (emptyState) emptyState.classList.toggle('hide', visible !== 0);
  }
  filters.forEach(function (button) {
    button.addEventListener('click', function () {
      activeFilter = button.getAttribute('data-filter');
      filters.forEach(function (other) {
        const selected = other === button;
        other.classList.toggle('active', selected);
        other.setAttribute('aria-pressed', String(selected));
      });
      applyFilters();
    });
  });
  if (searchInput) searchInput.addEventListener('input', applyFilters);
  applyFilters();

  // Only connect checkout buttons to URLs configured by the site owner.
  // Payhip processes payments and provides digital delivery.
  document.querySelectorAll('[data-checkout-slug]').forEach(function (element) {
    const slug = element.getAttribute('data-checkout-slug');
    const raw = (cfg.checkoutUrls && cfg.checkoutUrls[slug]) || '';
    let url;
    try { url = new URL(raw); } catch (e) { return; }
    if (url.protocol !== 'https:' || !['payhip.com', 'www.payhip.com'].includes(url.hostname)) return;
    element.setAttribute('href', url.href);
    element.setAttribute('target', '_blank');
    element.setAttribute('rel', 'noopener noreferrer');
    element.textContent = 'Buy now — secure checkout ↗';
    element.classList.remove('btn-disabled');
    element.removeAttribute('aria-disabled');
    const note = document.querySelector('[data-checkout-notice]');
    if (note) note.textContent = 'Secure checkout and digital delivery are handled by Payhip. You will open Payhip in a new tab.';
    document.querySelectorAll('[data-product-status="'+slug+'"]').forEach(function (label) {
      label.textContent = 'Available now';
    });
  });
  document.querySelectorAll('[data-product-status]').forEach(function (element) {
    const slug = element.getAttribute('data-product-status');
    const raw = (cfg.checkoutUrls && cfg.checkoutUrls[slug]) || '';
    try {
      const url = new URL(raw);
      if (url.protocol === 'https:' && ['payhip.com', 'www.payhip.com'].includes(url.hostname)) {
        element.textContent = 'Available now';
      }
    } catch (e) { /* no active checkout for this product */ }
  });
  document.querySelectorAll('[data-checkout-slug][aria-disabled="true"]').forEach(function (element) {
    element.addEventListener('click', function (event) { event.preventDefault(); });
  });

  document.querySelectorAll('[data-config-link]').forEach(function (element) {
    const key = element.getAttribute('data-config-link');
    const raw = cfg[key] || '';
    try {
      const url = new URL(raw);
      if (!['https:', 'http:'].includes(url.protocol)) throw new Error('protocol');
      element.href = url.href;
      element.classList.remove('hide');
      element.target = '_blank';
      element.rel = 'noopener noreferrer';
    } catch (e) { element.remove(); }
  });

  document.querySelectorAll('[data-email-link]').forEach(function (element) {
    const email = (cfg.contactEmail || '').trim();
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      element.href = 'mailto:' + email;
      element.textContent = email;
    } else {
      element.textContent = 'Email address available at launch';
      element.removeAttribute('href');
    }
  });

  const contactForm = document.querySelector('[data-contact-form]');
  if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault();
      const message = document.querySelector('[data-form-feedback]');
      const email = (cfg.contactEmail || '').trim();
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        if (message) message.textContent = 'Contact form is not connected yet. Please configure the business email before launch.';
        return;
      }
      const fields = new FormData(contactForm);
      const subject = 'BlueHatch enquiry: ' + String(fields.get('subject') || 'General enquiry');
      const body = 'Name: ' + String(fields.get('name') || '') + '\nEmail: ' + String(fields.get('email') || '') + '\n\n' + String(fields.get('message') || '');
      window.location.href = 'mailto:' + email + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
      if (message) message.textContent = 'Your email app should open with the message prepared. Please send it from there.';
    });
  }

  document.querySelectorAll('[data-copy-text]').forEach(function (button) {
    button.addEventListener('click', async function () {
      const text = button.getAttribute('data-copy-text') || '';
      try {
        await navigator.clipboard.writeText(text);
        const old = button.textContent;
        button.textContent = 'Copied!';
        setTimeout(function () { button.textContent = old; }, 1800);
      } catch (error) {
        button.textContent = 'Select text to copy';
      }
    });
  });
})();
