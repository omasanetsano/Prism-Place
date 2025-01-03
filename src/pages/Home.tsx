import React from 'react';
import { Wifi, Shield, Shirt, UtensilsCrossed, Power, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  { icon: Wifi, title: '24/7 Internet Service', description: 'High-speed internet access throughout the property' },
  { icon: Shield, title: '24hrs Security', description: 'Round-the-clock security for your peace of mind' },
  { icon: Shirt, title: 'Laundry Service', description: 'Professional laundry and dry cleaning services' },
  { icon: UtensilsCrossed, title: 'Restaurant', description: 'Exquisite dining experience' },
  { icon: Power, title: '24hr Power Supply', description: 'Uninterrupted power supply for your comfort' },
];

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0 bg-[url('/images/Background-image.svg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative h-full flex items-center justify-center text-white">
          <div className="text-center space-y-6 px-4">
            <h1 className="text-5xl md:text-7xl font-serif">Prism Place</h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto">
              A new thinking in hospitality with absolutely you in mind
              Privacy | Comfort | Serenity
            </p>
            <Link
              to="/gallery"
              className="inline-flex items-center space-x-2 bg-[#8B4513] px-6 py-3 rounded-full hover:bg-[#8B4513]/80 transition-colors"
            >
              <span>Explore Our Gallery</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-serif text-black">Welcome to Prism Place</h2>
              <p className="text-lg text-gray-700">
                At Prism Place, we combine elegance with comfort. Whether you're here for a stay,
                a celebration, or a relaxing meal at our bush bar, we provide a memorable experience
                that exceeds expectations.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                src="/images/building-prism.png"
                alt="Hotel Building"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((Service, index) => (
              <div
                key={index}
                className="p-6 border border-[#8B4513] rounded-lg hover:bg-[#8B4513]/10 transition-colors"
              >
                <Service.icon className="h-12 w-12 text-[#8B4513] mb-4" />
                <h3 className="text-xl font-semibold mb-2">{Service.title}</h3>
                <p className="text-gray-400">{Service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;