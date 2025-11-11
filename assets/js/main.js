(function () {
    const navToggle = document.querySelector('.navbar__toggle');
    const navMenu = document.querySelector('.navbar__menu');
    const yearEl = document.getElementById('year');
    const modalButtons = document.querySelectorAll('[data-modal]');
    const closeButtons = document.querySelectorAll('[data-close]');

    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            const isOpen = navMenu.classList.toggle('is-open');
            navToggle.setAttribute('aria-expanded', String(isOpen));
        });

        navMenu.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => {
                if (navMenu.classList.contains('is-open')) {
                    navMenu.classList.remove('is-open');
                    navToggle.setAttribute('aria-expanded', 'false');
                }
            });
        });
    }

    modalButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const modalId = button.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.setAttribute('aria-hidden', 'false');
                modal.querySelector('.modal__close')?.focus();
            }
        });
    });

    closeButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const modalId = button.getAttribute('data-close');
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.setAttribute('aria-hidden', 'true');
            }
        });
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            document.querySelectorAll('.modal[aria-hidden="false"]').forEach((modal) => {
                modal.setAttribute('aria-hidden', 'true');
            });
        }
    });

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.2,
        }
    );

    document.querySelectorAll('.section, .card, .profile-card, .logo-card, .case-card, .cta, .hero__card').forEach((element) => {
        element.classList.add('reveal');
        observer.observe(element);
    });
})();
