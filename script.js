/* ════════════════════════════════════════════════════════════════
   ASHU MOBILE — Interactive Scripts
   Smooth scroll, reveal animations, sticky header, mobile nav
   ════════════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

    // ─── MOBILE NAVIGATION TOGGLE ──────────────────────────────
    const navToggle = document.getElementById('navToggle');
    const navMenu   = document.getElementById('navMenu');
    const navLinks  = document.querySelectorAll('.nav__link');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('open');
            document.body.style.overflow = navMenu.classList.contains('open') ? 'hidden' : '';
        });

        // Close menu on link click
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navMenu.classList.remove('open');
                document.body.style.overflow = '';
            });
        });

        // Close menu on outside click
        document.addEventListener('click', (e) => {
            if (navMenu.classList.contains('open') &&
                !navMenu.contains(e.target) &&
                !navToggle.contains(e.target)) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('open');
                document.body.style.overflow = '';
            }
        });
    }


    // ─── STICKY HEADER ─────────────────────────────────────────
    const header = document.getElementById('header');
    let lastScroll = 0;

    const handleScroll = () => {
        const currentScroll = window.scrollY;

        // Add scrolled class for solid background
        if (currentScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Run on load


    // ─── SCROLL REVEAL ANIMATION ───────────────────────────────
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Stagger animations for siblings
                const siblings = entry.target.parentElement.querySelectorAll('.reveal');
                let delay = 0;

                siblings.forEach((sibling, i) => {
                    if (sibling === entry.target) {
                        delay = i * 100; // 100ms stagger
                    }
                });

                setTimeout(() => {
                    entry.target.classList.add('active');
                }, Math.min(delay, 400)); // Cap max delay at 400ms

                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));


    // ─── ACTIVE NAV LINK ON SCROLL ─────────────────────────────
    const sections = document.querySelectorAll('section[id]');

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '-80px 0px -50% 0px'
    });

    sections.forEach(section => sectionObserver.observe(section));


    // ─── SMOOTH SCROLL FOR ALL ANCHOR LINKS ────────────────────
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });


    // ─── PARALLAX GLOW EFFECT ON MOUSE MOVE (DESKTOP) ─────────
    const glows = document.querySelectorAll('.hero__glow');

    if (window.matchMedia('(min-width: 768px)').matches && glows.length) {
        document.addEventListener('mousemove', (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 30;
            const y = (e.clientY / window.innerHeight - 0.5) * 30;

            glows.forEach((glow, i) => {
                const factor = i === 0 ? 1 : -1;
                glow.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
            });
        }, { passive: true });
    }


    // ─── COUNTER ANIMATION FOR STATS ───────────────────────────
    const statNumbers = document.querySelectorAll('.stat__number');

    const animateCounter = (el) => {
        const text = el.textContent;
        const match = text.match(/(\d+)/);
        if (!match) return;

        const target = parseInt(match[1]);
        const suffix = text.replace(match[1], '');
        const duration = 2000;
        const startTime = performance.now();

        const update = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(eased * target);

            el.textContent = current + suffix;

            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                el.textContent = text; // Ensure final value matches exactly
            }
        };

        requestAnimationFrame(update);
    };

    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(el => statsObserver.observe(el));


    // ─── PRELOAD COMPLETE — SHOW PAGE ──────────────────────────
    document.body.classList.add('loaded');

});
