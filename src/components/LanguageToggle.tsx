
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-1 bg-slate-100 rounded-lg p-1">
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 rounded-md text-sm font-medium transition-all duration-200 ${
          language === 'en'
            ? 'bg-white text-blue-600 shadow-sm'
            : 'text-slate-600 hover:text-slate-900'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('de')}
        className={`px-3 py-1 rounded-md text-sm font-medium transition-all duration-200 ${
          language === 'de'
            ? 'bg-white text-blue-600 shadow-sm'
            : 'text-slate-600 hover:text-slate-900'
        }`}
      >
        DE
      </button>
    </div>
  );
};
