/**
 * Features Component
 * Handles the rendering of features in the about section
 */

class FeaturesComponent {
    constructor() {
        this.featureList = document.getElementById('feature-list');
        this.currentLang = 'en';
    }

    /**
     * Initialize the features component
     */
    init() {
        this.render();
    }

    /**
     * Render all feature items
     */
    render() {
        if (!this.featureList) return;
        
        // Clear existing content
        this.featureList.innerHTML = '';
        
        // Loop through features data and create HTML
        featuresData.forEach(feature => {
            const featureItem = this.createFeatureItem(feature);
            this.featureList.appendChild(featureItem);
        });
    }

    /**
     * Create a feature item element
     * @param {Object} feature - Feature data object
     * @returns {HTMLElement} The feature item element
     */
    createFeatureItem(feature) {
        const featureItem = document.createElement('li');
        featureItem.className = 'feature-item';
        
        const iconElement = document.createElement('div');
        iconElement.className = 'feature-icon';
        iconElement.textContent = feature.icon;
        
        const textContainer = document.createElement('div');
        textContainer.className = 'feature-text';
        
        // Create title and description for each language
        Object.keys(feature.title).forEach(lang => {
            const title = document.createElement('h3');
            title.setAttribute('lang', lang);
            title.textContent = feature.title[lang];
            if (lang === this.currentLang) title.classList.add('active');
            
            const description = document.createElement('p');
            description.setAttribute('lang', lang);
            description.textContent = feature.description[lang];
            if (lang === this.currentLang) description.classList.add('active');
            
            textContainer.appendChild(title);
            textContainer.appendChild(description);
        });
        
        featureItem.appendChild(iconElement);
        featureItem.appendChild(textContainer);
        
        return featureItem;
    }

    /**
     * Update the language for all feature items
     * @param {string} lang - Language code
     */
    updateLanguage(lang) {
        this.currentLang = lang;
        // Re-render features with the new language
        this.render();
    }
}