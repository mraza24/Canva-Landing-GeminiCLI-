import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <a className="text-xl font-semibold text-gray-700" href="#">
            Canva
          </a>
        </div>
        <div className="flex items-center -mx-2">
          <a href="#" className="px-2 py-2 text-gray-700 hover:text-gray-900">Design</a>
          <a href="#" className="px-2 py-2 text-gray-700 hover:text-gray-900">Product</a>
          <a href="#" className="px-2 py-2 text-gray-700 hover:text-gray-900">Plans</a>
          <a href="#" className="px-2 py-2 text-gray-700 hover:text-gray-900">Business</a>
          <a href="#" className="px-2 py-2 text-gray-700 hover:text-gray-900">Education</a>
          <a href="#" className="px-2 py-2 text-gray-700 hover:text-gray-900">Help</a>
        </div>
        <div className="flex items-center">
            <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700">Login</button>
            <button className="ml-4 bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700">Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
