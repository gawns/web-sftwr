/**
 * Mobile Navigation Module
 * Handles hamburger menu, drawer open/close, and keyboard navigation
 */

(function () {
  'use strict';

  var drawer = document.getElementById('mobile-drawer');
  var hamburger = document.querySelector('.nav-hamburger');
  var closeBtn = document.querySelector('.mobile-drawer-close');
  var drawerLinks = document.querySelectorAll('.mobile-drawer-link');
  var body = document.body;
  var lastFocused = null;

  if (!drawer || !hamburger || !closeBtn) return;

  function openDrawer() {
    lastFocused = document.activeElement;
    drawer.hidden = false;
    hamburger.setAttribute('aria-expanded', 'true');
    body.style.overflow = 'hidden';
    // Focus first link for keyboard navigation
    setTimeout(function () {
      var firstLink = drawer.querySelector('.mobile-drawer-link');
      if (firstLink) firstLink.focus();
    }, 50);
    document.addEventListener('keydown', handleKeydown);
  }

  function closeDrawer() {
    drawer.hidden = true;
    hamburger.setAttribute('aria-expanded', 'false');
    body.style.overflow = '';
    document.removeEventListener('keydown', handleKeydown);
    if (lastFocused) lastFocused.focus();
  }

  function handleKeydown(e) {
    if (e.key === 'Escape') {
      closeDrawer();
      return;
    }
    // Trap focus within drawer
    if (e.key === 'Tab') {
      var focusableElements = drawer.querySelectorAll(
        'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
      );
      var firstElement = focusableElements[0];
      var lastElement = focusableElements[focusableElements.length - 1];

      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    }
  }

  // Event listeners
  hamburger.addEventListener('click', function () {
    var expanded = hamburger.getAttribute('aria-expanded') === 'true';
    expanded ? closeDrawer() : openDrawer();
  });

  closeBtn.addEventListener('click', closeDrawer);

  // Close on backdrop click
  drawer.querySelector('.mobile-drawer-backdrop').addEventListener('click', closeDrawer);

  // Close on link click (navigation)
  drawerLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      // Small delay to allow navigation to start
      setTimeout(closeDrawer, 100);
    });
  });

  // Close on resize if desktop
  window.addEventListener('resize', function () {
    if (window.innerWidth > 640 && !drawer.hidden) {
      closeDrawer();
    }
  });
})();