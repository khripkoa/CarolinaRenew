import React from 'react';

const SimpleHeader = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-blue-900">
              Carolina Renew
            </a>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-700 hover:text-blue-900 font-medium">
              Home
            </a>
            <a href="/about" className="text-gray-700 hover:text-blue-900 font-medium">
              About
            </a>
            <a href="/services" className="text-gray-700 hover:text-blue-900 font-medium">
              Services
            </a>
            <a href="/portfolio" className="text-gray-700 hover:text-blue-900 font-medium">
              Portfolio
            </a>
            <a href="/blog" className="text-gray-700 hover:text-blue-900 font-medium">
              Blog
            </a>
            <a href="/contact" className="text-gray-700 hover:text-blue-900 font-medium">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-2 px-4 rounded transition-colors">
              Get Free Estimate
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-blue-900">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default SimpleHeader;
