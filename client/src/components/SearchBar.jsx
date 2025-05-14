import React, { useState } from 'react';
import { Search } from 'lucide-react';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="mb-6 flex justify-center">
      <div className="relative w-full max-w-md">
        <input 
          type="text" 
          placeholder="Discover natural solutions..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-full pl-10 pr-4 py-2 rounded-full border border-red-300 focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <Search 
          className="absolute  size-3.5 right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" 
        />
      </div>
    </div>
  );
}

export default SearchBar;