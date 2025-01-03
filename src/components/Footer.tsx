import React from 'react';
import { Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center space-x-2">
            <img src="/new-logo.svg" alt="Prism Place Logo" className="h-10 w-26" />
            
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-[#8B4513]" />
              <span>Agagaragha Street Behind Merit School,Off Mtn Road, Okirigwe Sapele.</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5 text-[#8B4513]" />
              <span>08166809382, 08066064508, 07068020130, 08039532941</span>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p>© 2025. PRISM PLACE</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
