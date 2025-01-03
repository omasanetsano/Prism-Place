import React from 'react';
import { Wifi, Shield, Shirt, UtensilsCrossed, Power } from 'lucide-react';

const services = [
  {
    icon: Wifi,
    title: '24/7 Internet Service',
    description: 'Stay connected with our high-speed internet access available throughout the property. Perfect for both business and leisure travelers.',
  },
  {
    icon: Shield,
    title: '24hrs Security',
    description: 'Your safety is our priority. Our professional security team provides round-the-clock surveillance and protection.',
  },
  {
    icon: Shirt,
    title: 'Laundry Service',
    description: 'Professional laundry and dry cleaning services to keep your garments fresh and pristine during your stay.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Restaurant',
    description: 'Experience culinary excellence at our restaurant.',
  },
  {
    icon: Power,
    title: '24hr Power Supply',
    description: 'Enjoy uninterrupted power supply throughout your stay, ensuring comfort and convenience at all times.',
  },
];

const Services = () => {
  return (
    <div className="min-h-screen pt-20 bg-white">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-serif text-center mb-12">Our Services</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 border border-[#8B4513] rounded-lg hover:bg-[#8B4513]/5 transition-colors"
            >
              <service.icon className="h-12 w-12 text-[#8B4513] mb-4" />
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Additional Services Information */}
        <div className="mt-16">
          <h2 className="text-2xl font-serif mb-8">Why Choose Our Services?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Professional Staff</h3>
              <p className="text-gray-700">
                Our highly trained staff is dedicated to providing exceptional service and ensuring your comfort throughout your stay.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Premium Amenities</h3>
              <p className="text-gray-700">
                Enjoy access to top-quality amenities designed to enhance your experience and make your stay memorable.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">24/7 Support</h3>
              <p className="text-gray-700">
                Our front desk is available around the clock to assist you with any requests or concerns you may have.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;