// C++ Style Effects and Animations
// Like C++ utility functions and algorithms

class VisualEffects {
    constructor() {
        this.initFloatingElements();
        this.initScrollEffects();
        this.initConsoleEffect();
    }

    // Like C++ dynamic memory allocation for floating elements
    initFloatingElements() {
        const container = document.querySelector('.floating-elements');
        if (!container) return;

        // Clear existing elements
        container.innerHTML = '';

        // Create new floating elements
        for (let i = 0; i < 8; i++) {
            const element = document.createElement('div');
            element.className = 'floating-element';
            
            // Random properties - like C++ random number generation
            const size = Math.random() * 100 + 50;
            const top = Math.random() * 100;
            const left = Math.random() * 100;
            const delay = Math.random() * 6;
            const opacity = Math.random() * 0.1;

            element.style.cssText = `
                width: ${size}px;
                height: ${size}px;
                top: ${top}%;
                left: ${left}%;
                animation-delay: ${delay}s;
                background: rgba(255,255,255,${opacity});
            `;

            container.appendChild(element);
        }
    }

    // Like C++ event-driven programming
    initScrollEffects() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Like C++ object property modification
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe service cards
        document.querySelectorAll('.service-card').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(50px)';
            card.style.transition = 'all 0.6s ease-out';
            observer.observe(card);
        });

        // Observe contact items
        document.querySelectorAll('.contact-item').forEach(item => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(30px)';
            item.style.transition = 'all 0.6s ease-out 0.2s';
            observer.observe(item);
        });
    }

    // Like C++ console output simulation
    initConsoleEffect() {
        const consoleElement = document.getElementById('console-output');
        if (!consoleElement) return;

        const messages = [
            ">> نظام النقل الذكي جاهز",
            ">> تحميل بيانات الخدمات...",
            ">> الاتصال بخوادم النظام...",
            ">> جميع الأنظمة تعمل بشكل طبيعي",
            ">> جاهز لاستقبال طلباتكم 📞",
            ">> مدينة نصر - القاهرة 🏙️",
            ">> خدمة 24 ساعة ⏰"
        ];

        let messageIndex = 0;
        
        // Like C++ setInterval equivalent
        setInterval(() => {
            consoleElement.textContent = messages[messageIndex];
            messageIndex = (messageIndex + 1) % messages.length;
        }, 3000);
    }

    // Like C++ utility function for typewriter effect
    typeWriter(element, text, speed = 100) {
        let i = 0;
        
        function type() {
            if (i < text.length) {
                element.innerHTML = text.substring(0, i + 1) + '<span style="border-right: 2px solid white; animation: blink 1s infinite;">|</span>';
                i++;
                setTimeout(type, speed);
            } else {
                element.innerHTML = text;
            }
        }
        type();
    }

    // Like C++ counter increment algorithm
    startCounters() {
        const counters = document.querySelectorAll('.stat-number');
        const speed = 200;

        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                const increment = target / speed;

                if (count < target) {
                    counter.innerText = Math.ceil(count + increment);
                    setTimeout(updateCount, 1);
                } else {
                    counter.innerText = target;
                }
            };
            updateCount();
        });
    }

    // Like C++ mouse tracking system
    initMouseEffects() {
        document.addEventListener('mousemove', (e) => {
            const cursor = document.querySelector('.custom-cursor') || this.createCursor();
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });
    }

    createCursor() {
        const cursor = document.createElement('div');
        cursor.className = 'custom-cursor';
        cursor.style.cssText = `
            position: fixed;
            width: 20px;
            height: 20px;
            background: var(--secondary-color);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            mix-blend-mode: difference;
            transition: transform 0.1s;
        `;
        document.body.appendChild(cursor);
        return cursor;
    }
}

// Like C++ namespace for utility functions
const AnimationUtils = {
    // Like C++ template function for fade in
    fadeIn(element, duration = 600) {
        element.style.opacity = '0';
        element.style.transition = `opacity ${duration}ms ease-out`;
        
        setTimeout(() => {
            element.style.opacity = '1';
        }, 100);
    },

    // Like C++ template function for slide in
    slideIn(element, from = 'bottom', duration = 600) {
        const translations = {
            'bottom': 'translateY(50px)',
            'top': 'translateY(-50px)',
            'left': 'translateX(-50px)',
            'right': 'translateX(50px)'
        };

        element.style.transform = translations[from] || translations['bottom'];
        element.style.opacity = '0';
        element.style.transition = `all ${duration}ms ease-out`;
        
        setTimeout(() => {
            element.style.transform = 'translate(0)';
            element.style.opacity = '1';
        }, 100);
    },

    // Like C++ function for parallax effect
    initParallax() {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('.parallax');
            
            parallaxElements.forEach(element => {
                const speed = element.dataset.speed || 0.5;
                element.style.transform = `translateY(${scrolled * speed}px)`;
            });
        });
    }
};

// Like C++ performance optimization class
class PerformanceOptimizer {
    constructor() {
        this.initOptimizations();
    }

    initOptimizations() {
        // Optimize CSS transitions
        this.optimizeAnimations();
        // Preload critical resources
        this.preloadResources();
    }

    optimizeAnimations() {
        // Force GPU acceleration
        const styles = `
            .btn, .bottom-nav-btn, .quick-btn, .service-card, .contact-item {
                transform: translateZ(0);
                backface-visibility: hidden;
                perspective: 1000px;
            }
        `;
        
        const styleSheet = document.createElement('style');
        styleSheet.textContent = styles;
        document.head.appendChild(styleSheet);
    }

    preloadResources() {
        // Preload critical resources
        const preloadLinks = [
            'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
            'https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700&display=swap'
        ];

        preloadLinks.forEach(href => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.href = href;
            link.as = 'style';
            document.head.appendChild(link);
        });
    }
}

// Like C++ global initialization
const visualEffects = new VisualEffects();

// Initialize performance optimizations
const performanceOptimizer = new PerformanceOptimizer();