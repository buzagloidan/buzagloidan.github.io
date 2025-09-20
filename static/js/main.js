// Minimalist JavaScript for hero-only portfolio site

document.addEventListener('DOMContentLoaded', function() {
    // Add background pattern and blobs to the body
    const body = document.body;

    // Add background pattern
    const bgPattern = document.createElement('div');
    bgPattern.classList.add('bg-pattern');
    body.appendChild(bgPattern);

    // Add decorative blobs
    const blob1 = document.createElement('div');
    blob1.classList.add('shape-blob', 'blob-1');
    body.appendChild(blob1);

    const blob2 = document.createElement('div');
    blob2.classList.add('shape-blob', 'blob-2');
    body.appendChild(blob2);

    // Animate hero section
    const heroSection = document.querySelector('#hero');
    if (heroSection) {
        animateHeroSection(heroSection);
    }

    // Hero section animation
    function animateHeroSection(section) {
        const elements = {
            heading: section.querySelector('h1'),
            subheading: section.querySelector('h2'),
            buttons: section.querySelectorAll('.btn')
        };

        // Apply staggered animations
        if (elements.heading) {
            elements.heading.classList.add('fade-in');
            elements.heading.style.animationDelay = '0.2s';
        }

        if (elements.subheading) {
            elements.subheading.classList.add('fade-in');
            elements.subheading.style.animationDelay = '0.4s';
        }

        if (elements.buttons) {
            elements.buttons.forEach((btn, index) => {
                btn.classList.add('fade-in');
                btn.style.animationDelay = `${0.6 + (index * 0.1)}s`;
            });
        }

        // Add gradient animation to the heading
        const gradientText = section.querySelector('.text-gradient');
        if (gradientText) {
            gradientText.style.animation = 'gradient 8s ease infinite';
        }
    }

    // Parallax effect for mouse movement
    document.addEventListener('mousemove', function(e) {
        const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
        const moveY = (e.clientY - window.innerHeight / 2) * 0.01;

        // Apply subtle parallax to blobs
        blob1.style.transform = `translate(${moveX * 2}px, ${moveY * 2}px)`;
        blob2.style.transform = `translate(${-moveX * 3}px, ${-moveY * 3}px)`;

        // Apply to hero content
        const hero = document.querySelector('#hero .row');
        if (hero) {
            hero.style.transform = `translate(${moveX * 0.5}px, ${moveY * 0.5}px)`;
        }
    });

    // Initialize any tooltips
    if (typeof bootstrap !== 'undefined' && bootstrap.Tooltip) {
        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
        [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
    }
});