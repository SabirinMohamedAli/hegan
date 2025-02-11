import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-2xl font-bold">Heegan Technology</a>
        <ul className="flex space-x-6">
          <li><a href="#home" className="hover:text-blue-300">Home</a></li>
          <li><a href="#about" className="hover:text-blue-300">About</a></li>
          <li><a href="#services" className="hover:text-blue-300">Services</a></li>
          <li><a href="#team" className="hover:text-blue-300">Team</a></li>
          <li><a href="#contact" className="hover:text-blue-300">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;