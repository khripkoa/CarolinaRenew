import React from 'react';

// Simple Card component without external dependencies
const Card = ({ children, className = '' }) => (
  <div className={`bg-white rounded-lg shadow-md border border-gray-200 ${className}`}>
    {children}
  </div>
);

const CardContent = ({ children, className = '' }) => (
  <div className={`p-6 ${className}`}>
    {children}
  </div>
);

// Simple Badge component without external dependencies
const Badge = ({ children, variant = 'default', className = '' }) => {
  const baseClasses = 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium';
  const variantClasses = {
    default: 'bg-blue-100 text-blue-800',
    secondary: 'bg-gray-100 text-gray-800',
    success: 'bg-green-100 text-green-800'
  };
  
  return (
    <span className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  );
};

// Local areas data
const localAreas = [
  {
    id: 1,
    name: 'Charlotte',
    state: 'NC',
    population: '874,579',
    description: 'North Carolina\'s largest city with a thriving economy and growing residential market',
    services: ['Interior Painting', 'Exterior Painting', 'Kitchen Remodeling'],
    slug: 'charlotte'
  },
  {
    id: 2,
    name: 'Gastonia',
    state: 'NC', 
    population: '80,411',
    description: 'Historic city with expanding residential developments and renovation opportunities',
    services: ['Interior Painting', 'Exterior Painting', 'Bathroom Remodeling'],
    slug: 'gastonia'
  },
  {
    id: 3,
    name: 'Concord',
    state: 'NC',
    population: '105,240',
    description: 'Fast-growing suburb with new residential communities and modern homes',
    services: ['Interior Painting', 'Exterior Painting', 'Kitchen Remodeling'],
    slug: 'concord'
  },
  {
    id: 4,
    name: 'Matthews',
    state: 'NC',
    population: '32,684',
    description: 'Family-friendly town with high quality of life and beautiful neighborhoods',
    services: ['Interior Painting', 'Exterior Painting'],
    slug: 'matthews'
  },
  {
    id: 5,
    name: 'Huntersville',
    state: 'NC',
    population: '61,376',
    description: 'Upscale suburb with luxury homes and premium residential properties',
    services: ['Interior Painting', 'Exterior Painting', 'Kitchen Remodeling'],
    slug: 'huntersville'
  },
  {
    id: 6,
    name: 'Rock Hill',
    state: 'SC',
    population: '75,048',
    description: 'Growing city in South Carolina, close to Charlotte with expanding market',
    services: ['Interior Painting', 'Exterior Painting'],
    slug: 'rock-hill'
  }
];

const LocalAreasGrid = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Service Areas
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide professional painting and remodeling services throughout Charlotte and surrounding areas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {localAreas.map((area) => (
            <Card key={area.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent>
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {area.name}
                  </h3>
                  <Badge variant="secondary">
                    {area.state}
                  </Badge>
                </div>
                
                <p className="text-sm text-gray-500 mb-2">
                  Population: {area.population}
                </p>
                
                <p className="text-gray-600 mb-4 text-sm">
                  {area.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">
                    Available Services:
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {area.services.map((service, index) => (
                      <Badge key={index} variant="default" className="text-xs">
                        {service}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <a 
                  href={`/local/${area.slug}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  Learn More →
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Don't see your city? We serve additional areas throughout the Charlotte region!
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default LocalAreasGrid;