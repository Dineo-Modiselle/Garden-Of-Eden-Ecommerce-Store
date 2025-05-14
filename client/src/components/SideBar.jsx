import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowDown,
  ArrowUp,
  Shuffle,
} from 'lucide-react';
import { FaSpa, FaShirt, FaScissors, FaLeaf } from 'react-icons/fa6';
import { PiSmileyFill } from 'react-icons/pi';
import { TiArrowUnsorted } from 'react-icons/ti';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [selectedSort, setSelectedSort] = useState('Random');
  const [isFilterOpen, setIsFilterOpen] = useState(true);
  const sidebarRef = useRef(null);
  const navigate = useNavigate();

  const categories = [
    {
      id: 'likes',
      label: 'Sort By',
      icon: <TiArrowUnsorted className="w-5 h-5" />,
      subcategories: ['Likes', 'Price', 'Discount', 'Random']
    },
    {
      id: 'face',
      label: 'Face',
      icon: <PiSmileyFill className="w-5 h-5" />,
      subcategories: ['Cleanser', 'Toner', 'Moisturizer', 'Mask']
    },
    {
      id: 'body',
      label: 'Body',
      icon: <FaShirt className="w-5 h-5" />,
      subcategories: ['Lotion', 'Scrub', 'Oil', 'Butter']
    },
    {
      id: 'hair',
      label: 'Hair',
      icon: <FaScissors className="w-5 h-5" />,
      subcategories: ['Shampoo', 'Conditioner', 'Oil', 'Mask']
    },
    {
      id: 'herbs',
      label: 'Herbs',
      icon: <FaLeaf className="w-5 h-5" />,
      subcategories: ['Dried', 'Fresh', 'Powders', 'Extracts']
    },
    {
      id: 'wellness',
      label: 'Wellness',
      icon: <FaSpa className="w-5 h-5" />,
      subcategories: ['Supplements', 'Teas', 'Essential Oils', 'Aromatherapy']
    },
   
  ];

  const toggleCategory = (categoryId) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  const handleSortSelect = (subcategory) => {
    setSelectedSort(subcategory);
  };

  const handleClickOutside = (e) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      setExpandedCategory(null);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const clearFilters = () => {
    setSelectedSort('Random');
    setExpandedCategory(null);
  };

  const isOnlyIcons = expandedCategory === null;

  return (
    <aside
      ref={sidebarRef}
      className={`bg-[#ff9770] transition-all duration-300 overflow-y-auto p-2 mt-1 ${
        isOnlyIcons ? 'w-16' : 'w-64 sm:w-72'
      }`}
    >
      {/* Show Leave and Clear Filters only when expanded */}
      {!isOnlyIcons && (
        <div className="flex items-center gap-2 mb-2">
         
          <button
            onClick={() => navigate('/blogs')}
            className="p-2.5 bg-gray-700 text-white hover:bg-gray-600 text-sm flex items-center gap-1 whitespace-nowrap"
          >
            <FaLeaf className="w-4 h-4" /> 
          </button>
          <button
            onClick={clearFilters}
            className="px-6 py-2 bg-gray-700 text-white hover:bg-gray-600 text-sm whitespace-nowrap"
          >
            Clear Filters
          </button>
        </div>
      )}

      {/* Categories */}
      {categories.map((category) => (
        <div key={category.id}>
          <div
            className="flex items-center gap-2 p-3 cursor-pointer hover:bg-orange-200 relative group"
            onClick={() => toggleCategory(category.id)}
          >
            <span>{category.icon}</span>
            {!isOnlyIcons && <span className="text-sm">{category.label}</span>}
            {isOnlyIcons && (
              <span className="absolute left-full ml-2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100">
                {category.label}
              </span>
            )}
          </div>

          {/* Subcategories */}
          {expandedCategory === category.id && (
            <div className="pl-8 pb-3">
              {category.subcategories.map((subcategory, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-1 text-sm"
                >
                  <label className="flex items-center gap-2 cursor-pointer">
                    {category.id === 'likes' ? (
                      <input
                        type="radio"
                        name="sort"
                        checked={selectedSort === subcategory}
                        onChange={() => handleSortSelect(subcategory)}
                      />
                    ) : (
                      <input type="checkbox" />
                    )}
                    {subcategory}
                  </label>
                  {category.id === 'likes' && (
                    subcategory === 'Random' ? (
                      <Shuffle className="w-4 h-4" />
                    ) : (
                      <ArrowDown className="w-4 h-4" />
                    )
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </aside>
  );
};

export default Sidebar;
