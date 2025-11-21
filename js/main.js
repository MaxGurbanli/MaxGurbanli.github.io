document.addEventListener('DOMContentLoaded', () => {
    // Dynamic Year
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Scroll Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    // Elements to animate
    const revealElements = document.querySelectorAll('section h2, .card, .timeline-item, .hero-content');
    
    revealElements.forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });

    // Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Mouse Tracker (Hero Section Only)
    const heroSection = document.getElementById('hero-section');
    const mouseTracker = document.getElementById('mouse-tracker');

    if (heroSection && mouseTracker) {
        heroSection.addEventListener('mousemove', (e) => {
            const rect = heroSection.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            mouseTracker.style.left = `${x}px`;
            mouseTracker.style.top = `${y}px`;
        });
    }


    // Typewriter Effect
    const typewriterElement = document.getElementById('typewriter-text');
    const textToType = "Maksud Gurbanli";
    let charIndex = 0;

    function typeWriter() {
        if (charIndex < textToType.length) {
            typewriterElement.textContent += textToType.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, 100); // Typing speed
        }
    }

    if (typewriterElement) {
        // Start typing after a small delay
        setTimeout(typeWriter, 500);
    }
});
