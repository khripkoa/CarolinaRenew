import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { MapPin, Users, Clock } from 'lucide-react'
import { localAreas } from '@/data/localAreas'

const LocalAreasGrid = ({ service, title = "We Serve These Areas" }) => {
  const servicePath = service ? `/services/${service}` : ''

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional {service || 'painting and remodeling'} services throughout the Charlotte metropolitan area
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {localAreas.map((area, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow group">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-blue-600 mr-2" />
                    <div>
                      <h3 className="font-semibold text-gray-900">{area.name}</h3>
                      <p className="text-sm text-gray-500">{area.state}</p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {area.distance} mi
                  </Badge>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="h-4 w-4 mr-2" />
                    <span>{area.population.toLocaleString()} residents</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>Same-day estimates</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Link 
                    to={`${servicePath}/${area.key}`}
                    className="block w-full text-center bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors text-sm font-medium"
                  >
                    View {area.name} Services
                  </Link>
                  <Link 
                    to={`/gastonia`}
                    className="block w-full text-center border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-50 transition-colors text-sm"
                  >
                    Learn More
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Don't see your city? We serve the entire Charlotte metropolitan area!
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors font-medium"
          >
            Contact Us for Service in Your Area
          </Link>
        </div>
      </div>
    </section>
  )
}

export default LocalAreasGrid
