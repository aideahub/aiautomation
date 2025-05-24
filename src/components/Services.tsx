
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      title: t('services.process.title'),
      description: t('services.process.description'),
      icon: '⚙️',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: t('services.data.title'),
      description: t('services.data.description'),
      icon: '📊',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: t('services.customer.title'),
      description: t('services.customer.description'),
      icon: '🤖',
      gradient: 'from-green-500 to-teal-500'
    },
    {
      title: t('services.document.title'),
      description: t('services.document.description'),
      icon: '📄',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            {t('services.title')}
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              {/* Content */}
              <div className="relative p-8">
                {/* Icon */}
                <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Hover Border */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Process Flow */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Our Process</h3>
            <p className="text-lg text-slate-600">How we transform your business operations</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Analysis", description: "We analyze your current processes" },
              { step: "02", title: "Design", description: "Create tailored automation solutions" },
              { step: "03", title: "Implementation", description: "Deploy and integrate AI systems" },
              { step: "04", title: "Optimization", description: "Continuous improvement and scaling" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto text-white font-bold text-lg">
                    {item.step}
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-200 to-purple-200"></div>
                  )}
                </div>
                <h4 className="text-xl font-semibold text-slate-900 mb-2">{item.title}</h4>
                <p className="text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
