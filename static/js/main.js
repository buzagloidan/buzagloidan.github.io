// Main JavaScript file for personal website

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
    
    // Enhanced section animations with different effects
    const sections = document.querySelectorAll('section');
    
    // Create intersection observer for advanced animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Apply different animation types based on section
                const section = entry.target;
                const sectionId = section.getAttribute('id');
                
                // Make sure content is visible
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
                
                // Apply specific animations to elements within the section
                if (sectionId === 'hero') {
                    animateHeroSection(section);
                } else if (sectionId === 'about') {
                    animateAboutSection(section);
                } else if (sectionId === 'projects') {
                    animateProjectsSection(section);
                } else if (sectionId === 'publications') {
                    animatePublicationsSection(section);
                } else if (sectionId === 'contact') {
                    animateContactSection(section);
                }
                
                // Unobserve after animation
                observer.unobserve(section);
            }
        });
    }, {
        threshold: 0.2
    });
    
    // Update section headings to have the section-heading class
    sections.forEach(section => {
        const heading = section.querySelector('h2');
        if (heading) {
            heading.classList.add('section-heading');
        }
        
        // Add tech badges to projects
        if (section.id === 'projects') {
            const techStacks = section.querySelectorAll('.tech-stack');
            techStacks.forEach(techStack => {
                const text = techStack.innerHTML;
                const technologies = text.replace('<strong>Tech Stack:</strong> ', '').split(', ');
                
                let badgesHTML = '<strong>Tech Stack:</strong> <div class="mt-2">';
                technologies.forEach(tech => {
                    badgesHTML += `<span class="tech-badge">${tech}</span>`;
                });
                badgesHTML += '</div>';
                
                techStack.innerHTML = badgesHTML;
            });
        }
        
        // Apply glass card style to appropriate cards
        const cards = section.querySelectorAll('.card');
        cards.forEach(card => {
            if (!card.classList.contains('project-card')) {
                card.classList.add('glass-card');
            }
        });
        
        // Prepare each section for animation
        section.classList.add('section-to-animate');
        observer.observe(section);
    });
    
    // Section-specific animations
    function animateHeroSection(section) {
        const elements = {
            heading: section.querySelector('h1'),
            subheading: section.querySelector('h2'),
            text: section.querySelector('p'),
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
        
        if (elements.text) {
            elements.text.classList.add('fade-in');
            elements.text.style.animationDelay = '0.6s';
        }
        
        if (elements.buttons) {
            elements.buttons.forEach((btn, index) => {
                btn.classList.add('fade-in');
                btn.style.animationDelay = `${0.8 + (index * 0.1)}s`;
            });
        }
        
        // Add typing animation to the heading if it contains gradients
        const gradientText = section.querySelector('.text-gradient');
        if (gradientText) {
            // Add subtle pulse animation
            gradientText.style.animation = 'gradient 8s ease infinite';
        }
    }
    
    function animateAboutSection(section) {
        const elements = {
            heading: section.querySelector('h2'),
            text: section.querySelector('p.fs-5'),
            leftCard: section.querySelector('.card:first-of-type, .glass-card:first-of-type'),
            rightCard: section.querySelector('.card:last-of-type, .glass-card:last-of-type')
        };
        
        if (elements.heading) {
            elements.heading.classList.add('fade-in');
        }
        
        if (elements.text) {
            elements.text.classList.add('fade-in');
            elements.text.style.animationDelay = '0.2s';
        }
        
        if (elements.leftCard) {
            elements.leftCard.classList.add('fade-in-left');
            elements.leftCard.style.animationDelay = '0.4s';
        }
        
        if (elements.rightCard) {
            elements.rightCard.classList.add('fade-in-right');
            elements.rightCard.style.animationDelay = '0.4s';
        }
        
        // Animate education items
        const educationItems = section.querySelectorAll('.education-item');
        educationItems.forEach((item, index) => {
            item.classList.add('fade-in-left');
            item.style.animationDelay = `${0.5 + (index * 0.15)}s`;
        });
        
        // Animate skill tags with a staggered effect
        const skillTags = section.querySelectorAll('.skill-tag');
        skillTags.forEach((tag, index) => {
            tag.classList.add('scale-in');
            tag.style.animationDelay = `${0.6 + (index * 0.05)}s`;
            tag.style.opacity = '0';
            
            setTimeout(() => {
                tag.style.opacity = '1';
            }, 600 + (index * 50));
        });
    }
    
    function animateProjectsSection(section) {
        const cards = section.querySelectorAll('.project-card');
        
        cards.forEach((card, index) => {
            card.classList.add('scale-in');
            card.style.animationDelay = `${0.2 + (index * 0.15)}s`;
        });
    }
    
    function animatePublicationsSection(section) {
        const timelineItems = section.querySelectorAll('.timeline-item');
        
        timelineItems.forEach((item, index) => {
            if (index % 2 === 0) {
                item.querySelector('.timeline-content').classList.add('fade-in-right');
            } else {
                item.querySelector('.timeline-content').classList.add('fade-in-left');
            }
            item.querySelector('.timeline-content').style.animationDelay = `${0.2 + (index * 0.15)}s`;
        });
    }
    
    function animateContactSection(section) {
        const elements = {
            heading: section.querySelector('h2'),
            text: section.querySelector('p'),
            buttons: section.querySelectorAll('.btn')
        };
        
        if (elements.heading) {
            elements.heading.classList.add('fade-in');
        }
        
        if (elements.text) {
            elements.text.classList.add('fade-in');
            elements.text.style.animationDelay = '0.2s';
        }
        
        if (elements.buttons) {
            elements.buttons.forEach((btn, index) => {
                btn.classList.add('scale-in');
                btn.style.animationDelay = `${0.4 + (index * 0.1)}s`;
            });
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
    
    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Adjust for navbar height
                    behavior: 'smooth'
                });
                
                // Update active state in navbar
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                });
                this.classList.add('active');
            }
        });
    });
    
    // Active navigation based on scroll position
    window.addEventListener('scroll', () => {
        let current = '';
        const scrollPos = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (current && link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
        
        // Change navbar style on scroll
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            if (scrollPos > 100) {
                navbar.classList.add('navbar-scrolled');
                navbar.style.padding = '0.5rem 0';
                navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
            } else {
                navbar.classList.remove('navbar-scrolled');
                navbar.style.padding = '1rem 0';
                navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.08)';
            }
        }
    });
    
    // Handle form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // In a real app, you would handle form submission to a server here
            e.preventDefault();
            const formSuccess = document.getElementById('form-success');
            if (formSuccess) {
                formSuccess.classList.remove('d-none');
                formSuccess.classList.add('scale-in');
                
                setTimeout(() => {
                    this.reset();
                }, 200);
                
                setTimeout(() => {
                    formSuccess.classList.add('d-none');
                }, 3000);
            }
        });
    }
    
    // Initialize any tooltips
    if (typeof bootstrap !== 'undefined' && bootstrap.Tooltip) {
        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
        [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
    }
    
    // Add year to copyright in footer if needed
    const yearEl = document.getElementById('copyright-year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
}); 