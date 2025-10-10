import React from 'react';

const SimpleFooter = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Carolina Renew</h3>
            <p className="text-gray-300 mb-4">
              Professional painting and remodeling services in Charlotte, NC and surrounding areas.
            </p>
            <p className="text-gray-300">
              Licensed • Insured • Trusted
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/services/interior-painting" className="hover:text-white">Interior Painting</a></li>
              <li><a href="/services/exterior-painting" className="hover:text-white">Exterior Painting</a></li>
              <li><a href="/services/kitchen-remodeling" className="hover:text-white">Kitchen Remodeling</a></li>
              <li><a href="/services/bathroom-remodeling" className="hover:text-white">Bathroom Remodeling</a></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Service Areas</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/local/gastonia" className="hover:text-white">Gastonia, NC</a></li>
              <li><a href="/local/concord" className="hover:text-white">Concord, NC</a></li>
              <li><a href="/local/matthews" className="hover:text-white">Matthews, NC</a></li>
              <li><a href="/local/huntersville" className="hover:text-white">Huntersville, NC</a></li>
              <li><a href="/local/rock-hill" className="hover:text-white">Rock Hill, SC</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-2 text-gray-300">
              <p>📞 (704) 123-4567</p>
              <p>✉️ info@carolinarenew.com</p>
              <p>📍 Charlotte, NC</p>
              <p>🕒 Mon-Fri: 8AM-6PM</p>
              <p>🕒 Sat: 9AM-4PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Carolina Renew. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default SimpleFooter;
