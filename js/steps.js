/**
 * Steps Component
 * Handles the rendering of the 3-step process in the about section
 */

class StepsComponent {
    constructor() {
        this.stepsContainer = document.getElementById('steps-container');
        this.currentLang = 'en';
    }

    /**
     * Initialize the steps component
     */
    init() {
        this.render();
    }

    /**
     * Render all step items
     */
    render() {
        if (!this.stepsContainer) return;
        
        // Clear existing content
        this.stepsContainer.innerHTML = '';
        
        // Loop through steps data and create HTML
        stepsData.forEach(step => {
            const stepItem = this.createStepItem(step);
            this.stepsContainer.appendChild(stepItem);
        });
    }

    /**
     * Create a step item element
     * @param {Object} step - Step data object
     * @returns {HTMLElement} The step item element
     */
    createStepItem(step) {
        const stepItem = document.createElement('div');
        stepItem.className = 'step';
        
        const numberElement = document.createElement('div');
        numberElement.className = 'step-number';
        numberElement.textContent = step.number;
        
        const contentElement = document.createElement('div');
        contentElement.className = 'step-content';
        
        // Create title and description for each language
        Object.keys(step.title).forEach(lang => {
            const title = document.createElement('h3');
            title.setAttribute('lang', lang);
            title.textContent = step.title[lang];
            if (lang === this.currentLang) title.classList.add('active');
            
            const description = document.createElement('p');
            description.setAttribute('lang', lang);
            description.textContent = step.description[lang];
            if (lang === this.currentLang) description.classList.add('active');
            
            contentElement.appendChild(title);
            contentElement.appendChild(description);
        });
        
        stepItem.appendChild(numberElement);
        stepItem.appendChild(contentElement);
        
        return stepItem;
    }

    /**
     * Update the language for all step items
     * @param {string} lang - Language code
     */
    updateLanguage(lang) {
        this.currentLang = lang;
        // Re-render steps with the new language
        this.render();
    }
}