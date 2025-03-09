/**
 * Stats Component
 * Handles the rendering of statistics in the stats section
 */

class StatsComponent {
    constructor() {
        this.statsContainer = document.getElementById('stats-container');
        this.currentLang = 'en';
    }

    /**
     * Initialize the stats component
     */
    init() {
        this.render();
    }

    /**
     * Render all stat items
     */
    render() {
        if (!this.statsContainer) return;
        
        // Clear existing content
        this.statsContainer.innerHTML = '';
        
        // Loop through stats data and create HTML
        statsData.forEach(stat => {
            const statItem = this.createStatItem(stat);
            this.statsContainer.appendChild(statItem);
        });
    }

    /**
     * Create a stat item element
     * @param {Object} stat - Stat data object
     * @returns {HTMLElement} The stat item element
     */
    createStatItem(stat) {
        const statItem = document.createElement('div');
        statItem.className = 'stat-item';
        
        const numberElement = document.createElement('h3');
        numberElement.textContent = stat.number;
        
        // Create label for each language
        Object.keys(stat.label).forEach(lang => {
            const label = document.createElement('p');
            label.setAttribute('lang', lang);
            label.textContent = stat.label[lang];
            if (lang === this.currentLang) label.classList.add('active');
            
            statItem.appendChild(label);
        });
        
        // Insert number element at the beginning
        statItem.insertBefore(numberElement, statItem.firstChild);
        
        return statItem;
    }

    /**
     * Update the language for all stat items
     * @param {string} lang - Language code
     */
    updateLanguage(lang) {
        this.currentLang = lang;
        // Re-render stats with the new language
        this.render();
    }
}