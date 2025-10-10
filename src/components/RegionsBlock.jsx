import React from 'react';

const RegionsBlock = ({ title = "Service Areas", subtitle = "We proudly serve these communities" }) => {
  const regions = [
    { name: 'Charlotte', state: 'NC', href: '/' },
    { name: 'Gastonia', state: 'NC', href: '/local/gastonia' },
    { name: 'Concord', state: 'NC', href: '/local/concord' },
    { name: 'Matthews', state: 'NC', href: '/local/matthews' },
    { name: 'Huntersville', state: 'NC', href: '/local/huntersville' },
    { name: 'Rock Hill', state: 'SC', href: '/local/rock-hill' },
    { name: 'Cornelius', state: 'NC', href: '/local/cornelius' },
    { name: 'Davidson', state: 'NC', href: '/local/davidson' },
    { name: 'Mooresville', state: 'NC', href: '/local/mooresville' },
    { name: 'Kannapolis', state: 'NC', href: '/local/kannapolis' },
    { name: 'Mint Hill', state: 'NC', href: '/local/mint-hill' },
    { name: 'Fort Mill', state: 'SC', href: '/local/fort-mill' }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {regions.map((region) => (
            <a
              key={`${region.name}-${region.state}`}
              href={region.href}
              className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105 border border-gray-200 hover:border-blue-300"
            >
              <svg className="w-5 h-5 text-blue-900 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              <p className="font-medium text-gray-900">{region.name}</p>
              <p className="text-sm text-gray-500">{region.state}</p>
            </a>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <p className="text-gray-600 mb-4">Don't see your area? We serve 100+ communities!</p>
          <a 
            href="/locations" 
            className="inline-flex items-center text-blue-900 hover:text-blue-700 font-medium transition-colors"
          >
            View all service areas
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default RegionsBlock;
