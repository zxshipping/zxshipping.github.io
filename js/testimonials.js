/**
 * Testimonials Component
 * Handles the rendering of testimonials in the testimonials section
 */

class TestimonialsComponent {
    constructor() {
        this.testimonialsContainer = document.getElementById('testimonials-container');
        this.currentLang = 'en';
    }

    /**
     * Initialize the testimonials component
     */
    init() {
        this.render();
    }

    /**
     * Render all testimonial slides
     */
    render() {
        if (!this.testimonialsContainer) return;
        
        // Clear existing content
        this.testimonialsContainer.innerHTML = '';
        
        // Loop through testimonials data and create HTML
        testimonialsData.forEach(testimonial => {
            const testimonialSlide = this.createTestimonialSlide(testimonial);
            this.testimonialsContainer.appendChild(testimonialSlide);
        });
    }

    /**
     * Create a testimonial slide element
     * @param {Object} testimonial - Testimonial data object
     * @returns {HTMLElement} The testimonial slide element
     */
    createTestimonialSlide(testimonial) {
        const slideElement = document.createElement('div');
        slideElement.className = 'testimonial-slide';
        
        // Create testimonial text for each language
        Object.keys(testimonial.text).forEach(lang => {
            const textElement = document.createElement('div');
            textElement.className = 'testimonial-text';
            textElement.setAttribute('lang', lang);
            textElement.textContent = testimonial.text[lang];
            if (lang === this.currentLang) textElement.classList.add('active');
            
            slideElement.appendChild(textElement);
        });
        
        // Author details
        const authorElement = document.createElement('div');
        authorElement.className = 'testimonial-author';
        
        const imageElement = document.createElement('img');
        imageElement.className = 'author-img';
        imageElement.src = '/api/placeholder/60/60';
        imageElement.alt = testimonial.author;
        
        const infoElement = document.createElement('div');
        infoElement.className = 'author-info';
        
        const nameElement = document.createElement('h4');
        nameElement.textContent = testimonial.author;
        
        // Create role for each language
        Object.keys(testimonial.role).forEach(lang => {
            const roleElement = document.createElement('p');
            roleElement.setAttribute('lang', lang);
            roleElement.textContent = testimonial.role[lang];
            if (lang === this.currentLang) roleElement.classList.add('active');
            
            infoElement.appendChild(roleElement);
        });
        
        // Insert name at beginning of info element
        infoElement.insertBefore(nameElement, infoElement.firstChild);
        
        authorElement.appendChild(imageElement);
        authorElement.appendChild(infoElement);
        
        slideElement.appendChild(authorElement);
        
        return slideElement;
    }

    /**
     * Update the language for all testimonial slides
     * @param {string} lang - Language code
     */
    updateLanguage(lang) {
        this.currentLang = lang;
        // Re-render testimonials with the new language
        this.render();
    }
}