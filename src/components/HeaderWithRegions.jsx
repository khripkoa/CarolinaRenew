import React, { useState } from 'react';

const HeaderWithRegions = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isRegionsOpen, setIsRegionsOpen] = useState(false);

  const regions = [
    { name: 'Charlotte', slug: 'charlotte' },
    { name: 'Gastonia', slug: 'gastonia' },
    { name: 'Concord', slug: 'concord' },
    { name: 'Matthews', slug: 'matthews' },
    { name: 'Huntersville', slug: 'huntersville' },
    { name: 'Rock Hill', slug: 'rock-hill' }
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-blue-900">
              Carolina Renew
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Home
            </a>
            <a href="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              About
            </a>
            <a href="/services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Services
            </a>
            <a href="/portfolio" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Portfolio
            </a>
            <a href="/blog" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Blog
            </a>
            
            {/* Regions Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsRegionsOpen(!isRegionsOpen)}
                className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Service Areas
                <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              
              {isRegionsOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-[60]">
                  <a href="/locations" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium">
                    All Service Areas
                  </a>
                  <div className="border-t border-gray-200 my-2"></div>
                  {regions.map((region) => (
                    <a
                      key={region.slug}
                      href={`/local/${region.slug}`}
                      className="block px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      {region.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
            
            <a href="/contact" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Get Quote
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-700 hover:border-gray-700"
          >
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              <a href="/" className="text-gray-700 hover:text-blue-600 font-medium">
                Home
              </a>
              <a href="/about" className="text-gray-700 hover:text-blue-600 font-medium">
                About
              </a>
              <a href="/services" className="text-gray-700 hover:text-blue-600 font-medium">
                Services
              </a>
              <a href="/portfolio" className="text-gray-700 hover:text-blue-600 font-medium">
                Portfolio
              </a>
              <a href="/blog" className="text-gray-700 hover:text-blue-600 font-medium">
                Blog
              </a>
              
              {/* Mobile Regions */}
              <div className="border-t border-gray-200 pt-4">
                <div className="text-gray-900 font-medium mb-2">Service Areas:</div>
                <div className="grid grid-cols-2 gap-2">
                  {regions.map((region) => (
                    <a
                      key={region.slug}
                      href={`/local/${region.slug}`}
                      className="text-gray-600 hover:text-blue-600 text-sm"
                    >
                      {region.name}
                    </a>
                  ))}
                </div>
                <a href="/locations" className="text-blue-600 hover:text-blue-800 font-medium text-sm mt-2 inline-block">
                  View All Areas →
                </a>
              </div>
              
              <a href="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium text-center">
                Get Free Quote
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default HeaderWithRegions;
