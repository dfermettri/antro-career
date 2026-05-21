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
  }

  document.addEventListener('DOMContentLoaded', function () {
    initGoals();
    initMobileMenu();
  });
})();
