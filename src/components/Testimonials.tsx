
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Testimonials = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "The AI automation solutions transformed our manufacturing process. We've seen a 40% reduction in downtime and significant cost savings.",
      author: "Sarah Johnson",
      position: "Operations Director",
      company: "TechManufacturing Inc.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
    },
    {
      quote: "Implementing their document processing AI saved us 20 hours per week. The accuracy and speed improvements are remarkable.",
      author: "Michael Chen",
      position: "Finance Manager",
      company: "Global Finance Corp",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      quote: "Their customer service AI has revolutionized how we handle support tickets. Customer satisfaction increased by 35%.",
      author: "Emma Rodriguez",
      position: "Customer Success Lead",
      company: "ServiceFirst Solutions",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    },
    {
      quote: "The data analytics platform provides insights we never had before. Decision-making is now data-driven and strategic.",
      author: "David Kumar",
      position: "CEO",
      company: "DataDriven Enterprises",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('testimonials.title')}
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20">
            {/* Quote */}
            <div className="text-center mb-8">
              <svg className="w-12 h-12 text-blue-400 mx-auto mb-6 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
              </svg>
              <blockquote className="text-xl md:text-2xl leading-relaxed text-white mb-8">
                "{testimonials[currentIndex].quote}"
              </blockquote>
            </div>

            {/* Author */}
            <div className="flex items-center justify-center space-x-4">
              <img
                src={testimonials[currentIndex].avatar}
                alt={testimonials[currentIndex].author}
                className="w-16 h-16 rounded-full border-4 border-white/20"
              />
              <div>
                <div className="font-semibold text-lg text-white">
                  {testimonials[currentIndex].author}
                </div>
                <div className="text-blue-300">
                  {testimonials[currentIndex].position}
                </div>
                <div className="text-slate-300 text-sm">
                  {testimonials[currentIndex].company}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-white scale-125'
                    : 'bg-white/40 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Company Logos */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-xl text-slate-300 font-medium">Trusted by leading companies</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            {[
              { name: "TechCorp", logo: "🏢" },
              { name: "InnovateCo", logo: "🚀" },
              { name: "DataSystems", logo: "💼" },
              { name: "FutureEnterprises", logo: "⚡" }
            ].map((company, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-2">{company.logo}</div>
                <div className="text-white font-medium">{company.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
