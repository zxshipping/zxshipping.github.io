/**
 * Services Component
 * Handles the rendering of services cards in the services section
 */

class ServicesComponent {
    constructor() {
        this.servicesGrid = document.getElementById('services-grid');
        this.currentLang = 'en';
    }

    /**
     * Initialize the services component
     */
    init() {
        this.render();
    }

    /**
     * Render all service cards
     */
    render() {
        if (!this.servicesGrid) return;
        
        // Clear existing content
        this.servicesGrid.innerHTML = '';
        
        // Loop through services data and create HTML
        servicesData.forEach(service => {
            const serviceCard = this.createServiceCard(service);
            this.servicesGrid.appendChild(serviceCard);
        });
    }

    /**
     * Create a service card element
     * @param {Object} service - Service data object
     * @returns {HTMLElement} The service card element
     */
    createServiceCard(service) {
        const serviceCard = document.createElement('div');
        serviceCard.className = 'service-card';
        
        const iconContainer = document.createElement('div');
        iconContainer.className = 'service-icon-container';
        iconContainer.innerHTML = service.icon;
        
        const content = document.createElement('div');
        content.className = 'service-content';
        
        // Create title and content for each language
        Object.keys(service.title).forEach(lang => {
            const title = document.createElement('h3');
            title.setAttribute('lang', lang);
            title.textContent = service.title[lang];
            if (lang === this.currentLang) title.classList.add('active');
            
            const description = document.createElement('p');
            description.setAttribute('lang', lang);
            description.textContent = service.description[lang];
            if (lang === this.currentLang) description.classList.add('active');
            
            const link = document.createElement('a');
            link.href = '#';
            link.className = 'service-link';
            link.setAttribute('lang', lang);
            link.innerHTML = `${service.link[lang]} <span>→</span>`;
            if (lang === this.currentLang) link.classList.add('active');
            
            content.appendChild(title);
            content.appendChild(description);
            content.appendChild(link);
        });
        
        serviceCard.appendChild(iconContainer);
        serviceCard.appendChild(content);
        
        return serviceCard;
    }

    /**
     * Update the language for all service cards
     * @param {string} lang - Language code
     */
    updateLanguage(lang) {
        this.currentLang = lang;
        // Re-render services with the new language
        this.render();
    }
}