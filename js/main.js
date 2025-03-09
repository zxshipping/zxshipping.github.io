/**
 * Main Application
 * Initializes and coordinates all components of the ZX Shipping website
 */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize UI component
    const ui = new UIComponent();
    ui.init();
    
    // Initialize services component
    const services = new ServicesComponent();
    services.init();
    
    // Initialize features component
    const features = new FeaturesComponent();
    features.init();
    
    // Initialize steps component
    const steps = new StepsComponent();
    steps.init();
    
    // Initialize stats component
    const stats = new StatsComponent();
    stats.init();
    
    // Initialize testimonials component
    const testimonials = new TestimonialsComponent();
    testimonials.init();
    
    // Register components for language updates
    ui.registerForLanguageUpdates((lang) => {
        services.updateLanguage(lang);
    });
    
    ui.registerForLanguageUpdates((lang) => {
        features.updateLanguage(lang);
    });
    
    ui.registerForLanguageUpdates((lang) => {
        steps.updateLanguage(lang);
    });
    
    ui.registerForLanguageUpdates((lang) => {
        stats.updateLanguage(lang);
    });
    
    ui.registerForLanguageUpdates((lang) => {
        testimonials.updateLanguage(lang);
    });
});