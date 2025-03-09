/**
 * UI Component
 * Handles general UI interactions like mobile menu, smooth scrolling, 
 * header effects, and animations
 */

class UIComponent {
    constructor() {
        this.menuBtn = document.querySelector('.menu-btn');
        this.navMenu = document.querySelector('nav ul');
        this.header = document.querySelector('header');
        this.languageOptions = document.querySelectorAll('.language-option');
        this.currentLang = 'en';
        
        // Components that need language updates
        this.componentCallbacks = [];
    }

    /**
     * Initialize the UI component
     */
    init() {
        this.setupMobileMenu();
        this.setupSmoothScrolling();
        this.setupHeaderScroll();
        this.setupAnimations();
        this.setupLanguageSwitcher();
    }

    /**
     * Register a component that needs language updates
     * @param {Function} callback - The function to call when language changes
     */
    registerForLanguageUpdates(callback) {
        this.componentCallbacks.push(callback);
    }

    /**
     * Setup mobile menu toggle
     */
    setupMobileMenu() {
        if (this.menuBtn && this.navMenu) {
            this.menuBtn.addEventListener('click', () => {
                this.navMenu.classList.toggle('active');
            });
        }
    }

    /**
     * Setup smooth scrolling for anchor links
     */
    setupSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                
                const target = document.querySelector(anchor.getAttribute('href'));
                
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu after click
                    if (this.navMenu) {
                        this.navMenu.classList.remove('active');
                    }
                }
            });
        });
    }

    /**
     * Setup header scroll effect
     */
    setupHeaderScroll() {
        if (this.header) {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    this.header.style.padding = '10px 0';
                    this.header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
                } else {
                    this.header.style.padding = '20px 0';
                    this.header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
                }
            });
        }
    }

    /**
     * Setup animations for elements as they scroll into view
     */
    setupAnimations() {
        const elements = document.querySelectorAll('.service-card, .feature-item, .testimonial-slide');
        
        // Set initial styles
        elements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        });
        
        // Animate elements as they scroll into view
        const animateOnScroll = () => {
            elements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.2;
                
                if (elementPosition < screenPosition) {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }
            });
        };
        
        // Call animation function on load and scroll
        window.addEventListener('load', animateOnScroll);
        window.addEventListener('scroll', animateOnScroll);
    }

    /**
     * Setup language switcher functionality
     */
    setupLanguageSwitcher() {
        if (this.languageOptions) {
            this.languageOptions.forEach(option => {
                option.addEventListener('click', () => {
                    const selectedLang = option.getAttribute('data-lang');
                    this.updateLanguage(selectedLang);
                });
            });
        }
    }

    /**
     * Update the displayed language
     * @param {string} lang - Language code (en, fr, ht)
     */
    updateLanguage(lang) {
        // Update active class on language selector
        this.languageOptions.forEach(opt => {
            opt.classList.remove('active');
            if (opt.getAttribute('data-lang') === lang) {
                opt.classList.add('active');
            }
        });
        
        // Show/hide content based on language
        document.querySelectorAll('[lang]').forEach(element => {
            if (element.getAttribute('lang') === lang) {
                element.classList.add('active');
                element.style.display = '';
            } else {
                element.classList.remove('active');
                element.style.display = 'none';
            }
        });
        
        // Update current language
        this.currentLang = lang;
        
        // Notify registered components about language change
        this.componentCallbacks.forEach(callback => {
            callback(lang);
        });
    }
}