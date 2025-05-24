
import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'de';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.services': 'Services',
    'nav.use-cases': 'Use Cases',
    'nav.testimonials': 'Testimonials',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'Transform Your Business with AI Automation',
    'hero.subtitle': 'Unlock unprecedented efficiency and growth through intelligent automation solutions tailored to your industry needs.',
    'hero.cta': 'Start Your Automation Journey',
    'hero.learn-more': 'Learn More',
    
    // Services
    'services.title': 'Our AI Automation Services',
    'services.subtitle': 'Comprehensive solutions to streamline your operations',
    'services.process.title': 'Process Automation',
    'services.process.description': 'Automate repetitive tasks and workflows to increase efficiency and reduce human error.',
    'services.data.title': 'Data Analysis & Insights',
    'services.data.description': 'Transform raw data into actionable insights with AI-powered analytics and reporting.',
    'services.customer.title': 'Customer Service AI',
    'services.customer.description': 'Enhance customer experience with intelligent chatbots and automated support systems.',
    'services.document.title': 'Document Processing',
    'services.document.description': 'Automatically extract, process, and organize information from documents and forms.',
    
    // Use Cases
    'use-cases.title': 'Real-World Success Stories',
    'use-cases.subtitle': 'See how businesses like yours are achieving remarkable results',
    'use-case.manufacturing.title': 'Manufacturing Optimization',
    'use-case.manufacturing.description': 'Reduced production downtime by 40% through predictive maintenance AI.',
    'use-case.manufacturing.metric': '40% Downtime Reduction',
    'use-case.finance.title': 'Financial Process Automation',
    'use-case.finance.description': 'Automated invoice processing saving 20 hours per week.',
    'use-case.finance.metric': '20 Hours Saved Weekly',
    'use-case.healthcare.title': 'Healthcare Workflow',
    'use-case.healthcare.description': 'Streamlined patient data processing with 99.5% accuracy.',
    'use-case.healthcare.metric': '99.5% Accuracy Rate',
    
    // Testimonials
    'testimonials.title': 'What Our Clients Say',
    'testimonials.subtitle': 'Trusted by forward-thinking companies worldwide',
    
    // Contact
    'contact.title': 'Ready to Transform Your Business?',
    'contact.subtitle': 'Get in touch to discuss your automation needs',
    'contact.name': 'Full Name',
    'contact.email': 'Email Address',
    'contact.company': 'Company Name',
    'contact.service': 'Service Interest',
    'contact.message': 'Tell us about your automation needs',
    'contact.submit': 'Send Message',
    'contact.services.process': 'Process Automation',
    'contact.services.data': 'Data Analysis',
    'contact.services.customer': 'Customer Service AI',
    'contact.services.document': 'Document Processing',
    'contact.services.custom': 'Custom Solution',
  },
  de: {
    // Navigation
    'nav.services': 'Dienstleistungen',
    'nav.use-cases': 'Anwendungsfälle',
    'nav.testimonials': 'Referenzen',
    'nav.contact': 'Kontakt',
    
    // Hero
    'hero.title': 'Transformieren Sie Ihr Unternehmen mit KI-Automatisierung',
    'hero.subtitle': 'Erschließen Sie beispiellose Effizienz und Wachstum durch intelligente Automatisierungslösungen, die auf Ihre Branchenbedürfnisse zugeschnitten sind.',
    'hero.cta': 'Starten Sie Ihre Automatisierungsreise',
    'hero.learn-more': 'Mehr erfahren',
    
    // Services
    'services.title': 'Unsere KI-Automatisierungsdienstleistungen',
    'services.subtitle': 'Umfassende Lösungen zur Optimierung Ihrer Abläufe',
    'services.process.title': 'Prozessautomatisierung',
    'services.process.description': 'Automatisieren Sie wiederkehrende Aufgaben und Arbeitsabläufe, um die Effizienz zu steigern und menschliche Fehler zu reduzieren.',
    'services.data.title': 'Datenanalyse & Erkenntnisse',
    'services.data.description': 'Verwandeln Sie Rohdaten in umsetzbare Erkenntnisse mit KI-gestützter Analytik und Berichterstattung.',
    'services.customer.title': 'Kundenservice-KI',
    'services.customer.description': 'Verbessern Sie die Kundenerfahrung mit intelligenten Chatbots und automatisierten Support-Systemen.',
    'services.document.title': 'Dokumentenverarbeitung',
    'services.document.description': 'Extrahieren, verarbeiten und organisieren Sie automatisch Informationen aus Dokumenten und Formularen.',
    
    // Use Cases
    'use-cases.title': 'Erfolgsgeschichten aus der Praxis',
    'use-cases.subtitle': 'Sehen Sie, wie Unternehmen wie Ihres bemerkenswerte Ergebnisse erzielen',
    'use-case.manufacturing.title': 'Fertigungsoptimierung',
    'use-case.manufacturing.description': 'Reduzierung der Produktionsausfälle um 40% durch vorausschauende Wartungs-KI.',
    'use-case.manufacturing.metric': '40% Weniger Ausfälle',
    'use-case.finance.title': 'Finanzprozess-Automatisierung',
    'use-case.finance.description': 'Automatisierte Rechnungsverarbeitung spart 20 Stunden pro Woche.',
    'use-case.finance.metric': '20 Stunden Wöchentlich Gespart',
    'use-case.healthcare.title': 'Gesundheitswesen-Workflow',
    'use-case.healthcare.description': 'Optimierte Patientendatenverarbeitung mit 99,5% Genauigkeit.',
    'use-case.healthcare.metric': '99,5% Genauigkeitsrate',
    
    // Testimonials
    'testimonials.title': 'Was unsere Kunden sagen',
    'testimonials.subtitle': 'Vertraut von zukunftsorientierten Unternehmen weltweit',
    
    // Contact
    'contact.title': 'Bereit, Ihr Unternehmen zu transformieren?',
    'contact.subtitle': 'Kontaktieren Sie uns, um Ihre Automatisierungsbedürfnisse zu besprechen',
    'contact.name': 'Vollständiger Name',
    'contact.email': 'E-Mail-Adresse',
    'contact.company': 'Firmenname',
    'contact.service': 'Service-Interesse',
    'contact.message': 'Erzählen Sie uns von Ihren Automatisierungsbedürfnissen',
    'contact.submit': 'Nachricht senden',
    'contact.services.process': 'Prozessautomatisierung',
    'contact.services.data': 'Datenanalyse',
    'contact.services.customer': 'Kundenservice-KI',
    'contact.services.document': 'Dokumentenverarbeitung',
    'contact.services.custom': 'Individuelle Lösung',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferred-language') as Language;
    if (savedLanguage && ['en', 'de'].includes(savedLanguage)) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
    localStorage.setItem('preferred-language', newLanguage);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
