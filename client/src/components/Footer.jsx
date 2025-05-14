import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#ff9770] text-gray-600 text-center py-3 mt-auto text-sm">
      &copy; {new Date().getFullYear()} Garden of Eve. All rights reserved.
    </footer>
  );
};

export default Footer;