
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              AI Automation
            </div>
            <p className="text-slate-300 mb-6 max-w-md">
              Transforming businesses through intelligent automation solutions. 
              We help companies achieve unprecedented efficiency and growth.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300">
                <span className="sr-only">LinkedIn</span>
                💼
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300">
                <span className="sr-only">Twitter</span>
                🐦
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300">
                <span className="sr-only">GitHub</span>
                💻
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('nav.services')}</h3>
            <ul className="space-y-3 text-slate-300">
              <li><a href="#" className="hover:text-white transition-colors duration-200">Process Automation</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Data Analytics</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Customer Service AI</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Document Processing</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3 text-slate-300">
              <li><a href="#" className="hover:text-white transition-colors duration-200">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © 2024 AI Automation. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors duration-200">Terms of Service</a>
              <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors duration-200">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
