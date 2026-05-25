(function () {
  const metrikaId = 89555039;

  window.ym = window.ym || function () {};

  function initGoals() {
    document.querySelectorAll('[data-goal]').forEach(function (button) {
      button.addEventListener('click', function () {
        window.ym(metrikaId, 'reachGoal', button.dataset.goal);
      });
    });
  }

  function initMobileMenu() {
    const burger = document.querySelector('.js-burger');
    const slide = document.querySelector('.js-mobile-menu');
    const backdrop = document.querySelector('.mobile-menu__black');

    if (!burger || !slide || !backdrop) {
      return;
    }

    function setMenuState(isOpen) {
      burger.classList.toggle('mobile-menu__burger_open', isOpen);
      slide.classList.toggle('mobile-menu__slide_open', isOpen);
      backdrop.classList.toggle('mobile-menu__black_show', isOpen);
      document.body.classList.toggle('menu-open', isOpen);
      burger.setAttribute('aria-expanded', String(isOpen));
    }

    burger.addEventListener('click', function () {
      setMenuState(!burger.classList.contains('mobile-menu__burger_open'));
    });

    backdrop.addEventListener('click', function () {
      setMenuState(false);
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        setMenuState(false);
      }
    });

    slide.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        setMenuState(false);
      });
    });
  }

  function initHeaderScroll() {
    const header = document.querySelector('.header');

    if (!header) {
      return;
    }

    function updateHeader() {
      header.classList.toggle('header_scroll', window.scrollY > 24);
    }

    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });
  }

  function initCareerForm() {
    const form = document.querySelector('.career-form');

    if (!form) {
      return;
    }

    form.addEventListener('submit', function (event) {
      event.preventDefault();
      form.reset();
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    initGoals();
    initHeaderScroll();
    initMobileMenu();
    initCareerForm();
  });
})();
