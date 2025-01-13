import React from 'react';
import { Link } from 'react-router-dom';
import { Microscope, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Microscope className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">Neurosketch</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link>
            <Link to="/tests" className="text-gray-600 hover:text-blue-600">Tests</Link>
            <Link to="/about" className="text-gray-600 hover:text-blue-600">About</Link>
            <Link to="/reviews" className="text-gray-600 hover:text-blue-600">Reviews</Link>
            <Link to="/login" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Login
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Home</Link>
            <Link to="/tests" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Tests</Link>
            <Link to="/about" className="block px-3 py-2 text-gray-600 hover:text-blue-600">About</Link>
            <Link to="/reviews" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Reviews</Link>
            <Link to="/login" className="block px-3 py-2 text-blue-600 font-medium">Login</Link>
          </div>
        </div>
      )}
    </nav>
  );
}