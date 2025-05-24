
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const UseCases = () => {
  const { t } = useLanguage();

  const useCases = [
    {
      title: t('use-case.manufacturing.title'),
      description: t('use-case.manufacturing.description'),
      metric: t('use-case.manufacturing.metric'),
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: t('use-case.finance.title'),
      description: t('use-case.finance.description'),
      metric: t('use-case.finance.metric'),
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: t('use-case.healthcare.title'),
      description: t('use-case.healthcare.description'),
      metric: t('use-case.healthcare.metric'),
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
      color: 'from-green-500 to-teal-500'
    }
  ];

  return (
    <section id="use-cases" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            {t('use-cases.title')}
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {t('use-cases.subtitle')}
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={useCase.image}
                  alt={useCase.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${useCase.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                
                {/* Metric Badge */}
                <div className="absolute top-4 right-4">
                  <div className={`bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-bold bg-gradient-to-r ${useCase.color} bg-clip-text text-transparent`}>
                    {useCase.metric}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {useCase.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {useCase.description}
                </p>
                
                {/* Learn More Button */}
                <div className="mt-6">
                  <button className={`inline-flex items-center text-sm font-semibold bg-gradient-to-r ${useCase.color} bg-clip-text text-transparent hover:opacity-80 transition-opacity duration-300`}>
                    Learn More
                    <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Hover Border */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${useCase.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
            </div>
          ))}
        </div>

        {/*
        
        <div className="mt-20 bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Projects Completed" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "60%", label: "Average Efficiency Gain" },
              { number: "24/7", label: "Support Available" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        */}
      </div>
    </section>
  );
};

export default UseCases;
