// C++ Style Class Definition - Main Application Logic
// Like C++ OOP structure with classes and methods

class MovingCompany {
    constructor() {
        // Like C++ class properties (private members)
        this.services = [
            { 
                icon: '🚚', 
                title: 'نقل الأثاث المنزلي', 
                description: 'خدمة نقل آمنة مع فريق محترف لجميع أنحاء القاهرة' 
            },
            { 
                icon: '📦', 
                title: 'التغليف والتعبئة', 
                description: 'تغليف احترافي بمواد عالية الجودة لحماية أثاثك' 
            },
            { 
                icon: '🏢', 
                title: 'نقل المكاتب', 
                description: 'نقل المعدات المكتبية بكفاءة لجميع الشركات' 
            },
            { 
                icon: '🔧', 
                title: 'فك وتركيب الأثاث', 
                description: 'فريق فني متخصص في فك وتركيب جميع أنواع الأثاث' 
            },
            { 
                icon: '🛡️', 
                title: 'التأمين على الأثاث', 
                description: 'تأمين كامل ضد الأضرار خلال عملية النقل' 
            },
            { 
                icon: '🧹', 
                title: 'التنظيف بعد النقل', 
                description: 'خدمة تنظيف شاملة للمنزل قبل التسليم' 
            }
        ];

        this.contactInfo = {
            phone: '01116870575',
            whatsapp: '201116870575',
            address: 'مدينة نصر، القاهرة',
            facebook: 'https://www.facebook.com/share/1aDxyPjtGo/'
        };

        // Initialize the application - like C++ constructor
        this.init();
    }

    // Like C++ initialization method
    init() {
        this.typeWriterEffect();
        this.loadServices();
        this.setupEventListeners();
        this.initializeCounters();
        this.setupNavigation();
        
        console.log('🚀 نظام النسر الذهبي يعمل بنجاح - C++ Style JavaScript');
    }

    // Like C++ method with parameters
    typeWriterEffect() {
        const text = "النسر الذهبي لنقل الأثاث - مدينة نصر";
        const element = document.getElementById('typing-text');
        
        if (element) {
            visualEffects.typeWriter(element, text, 100);
        }
    }

    // Like C++ array iteration and DOM manipulation
    loadServices() {
        const grid = document.getElementById('services-grid');
        if (!grid) return;

        // Clear existing content
        grid.innerHTML = '';

        // Like C++ for-each loop
        this.services.forEach((service, index) => {
            const card = this.createServiceCard(service, index);
            grid.appendChild(card);
        });
    }

    // Like C++ factory method pattern
    createServiceCard(service, index) {
        const card = document.createElement('div');
        card.className = 'service-card';
        card.setAttribute('data-index', index);
        
        card.innerHTML = `
            <div class="service-icon">${service.icon}</div>
            <h3>${service.title}</h3>
            <p>${service.description}</p>
        `;

        // Like C++ event binding
        this.addCardInteractions(card);
        
        return card;
    }

    // Like C++ event handling method
    addCardInteractions(card) {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });

        card.addEventListener('click', () => {
            this.handleServiceClick(card.getAttribute('data-index'));
        });
    }

    // Like C++ switch-case equivalent
    handleServiceClick(serviceIndex) {
        const service = this.services[serviceIndex];
        
        switch(serviceIndex) {
            case '0':
                this.contactViaWhatsApp(`أهلاً! أريد الاستفسار عن خدمة: ${service.title}`);
                break;
            case '1':
                this.contactViaPhone();
                break;
            default:
                this.showServiceDetails(service);
        }
    }

    // Like C++ utility methods
    contactViaWhatsApp(message = 'أهلاً! أريد الاستفسار عن خدمات نقل الأثاث') {
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${this.contactInfo.whatsapp}?text=${encodedMessage}`, '_blank');
    }

    contactViaPhone() {
        window.location.href = `tel:${this.contactInfo.phone}`;
    }

    showServiceDetails(service) {
        // Like C++ console output
        console.log(`📋 تفاصيل الخدمة: ${service.title}`);
        console.log(`📝 ${service.description}`);
        
        // Could be extended to show modal or detailed view
    }

    // Like C++ event listener setup
    setupEventListeners() {
        // Menu toggle for mobile
        const menuToggle = document.querySelector('.menu-toggle');
        const navMenu = document.querySelector('nav');
        
        if (menuToggle && navMenu) {
            menuToggle.addEventListener('click', () => {
                navMenu.classList.toggle('active');
            });
        }

        // Smooth scrolling for navigation links
        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                this.scrollToSection(targetId);
                
                // Close mobile menu if open
                if (navMenu) {
                    navMenu.classList.remove('active');
                }
            });
        });

        // Contact form handling
        const contactButtons = document.querySelectorAll('.btn');
        contactButtons.forEach(button => {
            button.addEventListener('click', () => {
                this.contactViaWhatsApp('أهلاً! أريد الحصول على عرض سعر لنقل الأثاث');
            });
        });
    }

    // Like C++ scroll functionality
    scrollToSection(sectionId) {
        const targetElement = document.querySelector(sectionId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }

    // Like C++ counter initialization
    initializeCounters() {
        // Start counters when stats section is visible
        const statsSection = document.querySelector('.stats');
        if (statsSection) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        visualEffects.startCounters();
                        observer.unobserve(entry.target);
                    }
                });
            });

            observer.observe(statsSection);
        }
    }

    // Like C++ navigation system
    setupNavigation() {
        // Update active navigation link on scroll
        window.addEventListener('scroll', () => {
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('nav a');
            
            let currentSection = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                
                if (window.scrollY >= sectionTop - 100) {
                    currentSection = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${currentSection}`) {
                    link.classList.add('active');
                }
            });
        });
    }

    // Like C++ getter methods
    getServiceCount() {
        return this.services.length;
    }

    getContactInfo() {
        return { ...this.contactInfo }; // Like C++ return by value
    }

    // Like C++ static method equivalent
    static getCompanyInfo() {
        return {
            name: 'النسر الذهبي',
            established: 2009,
            specialty: 'نقل الأثاث المنزلي والمكتبي',
            location: 'مدينة نصر، القاهرة'
        };
    }
}

// Like C++ global functions
function scrollToSection(sectionId) {
    const company = window.movingCompany;
    if (company) {
        company.scrollToSection(sectionId);
    }
}

function contactCompany() {
    const company = window.movingCompany;
    if (company) {
        company.contactViaWhatsApp();
    }
}

// Like C++ main function - Application entry point
function main() {
    // Create company instance - like C++ object instantiation
    window.movingCompany = new MovingCompany();
    
    // Initialize visual effects
    window.visualEffects = new VisualEffects();
    
    // Add blink animation for cursor
    const style = document.createElement('style');
    style.textContent = `
        @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
        }
        
        nav a.active {
            background: rgba(255,255,255,0.2) !important;
            color: var(--secondary-color) !important;
        }
    `;
    document.head.appendChild(style);

    console.log('🎯 تطبيق نقل الأثاث يعمل بنجاح!');
    console.log('🏢 الشركة:', MovingCompany.getCompanyInfo());
}

// Like C++ program execution start
document.addEventListener('DOMContentLoaded', main);

// Like C++ error handling
window.addEventListener('error', (event) => {
    console.error('❌ خطأ في التطبيق:', event.error);
});

// Like C++ cleanup on page unload
window.addEventListener('beforeunload', () => {
    console.log('👋 إغلاق تطبيق نقل الأثاث...');
});
