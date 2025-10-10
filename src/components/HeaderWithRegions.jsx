import React, { useState } from 'react';

const HeaderWithRegions = () => {
  const [isRegionDropdownOpen, setIsRegionDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const regions = [
    { name: 'Charlotte', key: 'charlotte', href: '/' },
    { name: 'Gastonia', key: 'gastonia', href: '/local/gastonia' },
    { name: 'Concord', key: 'concord', href: '/local/concord' },
    { name: 'Matthews', key: 'matthews', href: '/local/matthews' },
    { name: 'Huntersville', key: 'huntersville', href: '/local/huntersville' },
    { name: 'Rock Hill', key: 'rock-hill', href: '/local/rock-hill' },
    { name: 'All Areas', key: 'all', href: '/locations' }
  ];

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-blue-900">
              Carolina Renew
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <a href="/" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">
              Home
            </a>
            <a href="/about" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">
              About
            </a>
            <a href="/services" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">
              Services
            </a>
            <a href="/portfolio" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">
              Portfolio
            </a>
            <a href="/blog" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">
              Blog
            </a>
            <a href="/contact" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">
              Contact
            </a>
            
            {/* Region Selector */}
            <div className="relative">
              <button
                onClick={() => setIsRegionDropdownOpen(!isRegionDropdownOpen)}
                className="flex items-center text-gray-700 hover:text-blue-900 font-medium transition-colors"
              >
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                Locations
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              
              {isRegionDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  {regions.map((region) => (
                    <a
                      key={region.key}
                      href={region.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors"
                      onClick={() => setIsRegionDropdownOpen(false)}
                    >
                      {region.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-2 px-4 rounded transition-colors">
              Get Free Estimate
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-blue-900"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
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
              
              {/* Mobile Regions */}
              <div className="border-t border-gray-200 pt-4">
                <p className="text-sm font-semibold text-gray-500 mb-2">Service Areas:</p>
                {regions.map((region) => (
                  <a
                    key={region.key}
                    href={region.href}
                    className="block py-1 text-gray-600 hover:text-blue-900"
                  >
                    {region.name}
                  </a>
                ))}
              </div>
              
              <button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-4 rounded transition-colors mt-4">
                Get Free Estimate
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default HeaderWithRegions;
