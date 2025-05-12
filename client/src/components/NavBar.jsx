import React, { useState } from 'react';
import { 
  ShoppingCart, 
  User, 
  Headset, 
  Menu, 
  X, 
 
} from 'lucide-react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-red-300 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <span className="text-2xl font-bold text-gray-600">Garden of Eve</span>
            </a>
          </div>

         

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-coral-700 relative">
            <User className="w-6 h-6 fill-gray-700" /> 
              <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                0
              </span>
            </button>
            <button className="text-gray-600 hover:text-coral-700 relative">
              <ShoppingCart className="w-6 h-6 fill-gray-700" />
              <span className="absolute -top-2 -right-2 bg-coral-700 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                0
              </span>
            </button>
            <button className="text-gray-600 hover:text-coral-700">
            <Headset className="w-6 h-6 " />

            </button>
          </div>

          
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-gray-700 hover:bg-coral-100 hover:text-coral-700 block px-3 py-2 rounded-md"
                >
                  {item.label}
                </a>
              ))}
              
              {/* Mobile Icons */}
              <div className="flex justify-between mt-4 border-t pt-4">
                <button className="text-gray-600 hover:text-coral-700 relative">
                  <Heart className="w-6 h-6" />
                  <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                    0
                  </span>
                </button>
                <button className="text-gray-600 hover:text-coral-700 relative">
                  <ShoppingCart className="w-6 h-6" />
                  <span className="absolute -top-2 -right-2 bg-coral-700 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                    0
                  </span>
                </button>
                <button className="text-gray-600 hover:text-coral-700">
                  <User className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;