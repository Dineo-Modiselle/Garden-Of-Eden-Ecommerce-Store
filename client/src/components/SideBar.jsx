import React, { useState } from 'react';
import { 
  ArrowDown, 
  ArrowUp, 
  X, 
  Shuffle, 
  Smile, 
  ShoppingBag,
  Shirt, 
  Scissors, 
  Leaf, 
  Heart ,
  ArrowUpDown
} from 'lucide-react';

const Sidebar = () => {
  // State for expanded filter categories
  const [expandedCategory, setExpandedCategory] = useState(null);
  // State for selected sort option
  const [selectedSort, setSelectedSort] = useState('Random');
  // State for filter visibility
  const [isFilterOpen, setIsFilterOpen] = useState(true);
  
  
  
  // Category options with icons
  const categories = [
    { id: 'likes', 
      label: 'Sort by', 
      icon: <ArrowUpDown  className="w-5 h-5" /> , 
      subcategories: ['Likes', 'Price', 'Discount', 'Random']
     },

    
    { 
      id: 'face', 
      label: 'Face', 
      icon: <Smile className="w-5 h-5" />,
      subcategories: ['Cleanser', 'Toner', 'Moisturizer', 'Mask']
    },
    { 
      id: 'body', 
      label: 'Body', 
      icon: <Shirt className="w-5 h-5" />,
      subcategories: ['Lotion', 'Scrub', 'Oil', 'Butter']
    },
    { 
      id: 'hair', 
      label: 'Hair', 
      icon: <Scissors className="w-5 h-5" />,
      subcategories: ['Shampoo', 'Conditioner', 'Oil', 'Mask']
    },
    { 
      id: 'herbs', 
      label: 'Herbs', 
      icon: <Leaf className="w-5 h-5" />,
      subcategories: ['Dried', 'Fresh', 'Powders', 'Extracts']
    },
    { 
      id: 'wellness', 
      label: 'Wellness', 
      icon: <Heart className="w-5 h-5" />,
      subcategories: ['Supplements', 'Teas', 'Essential Oils', 'Aromatherapy']
    }
  ];

  // Toggle expanded category
  const toggleCategory = (categoryId) => {
    if (expandedCategory === categoryId) {
      setExpandedCategory(null);
    } else {
      setExpandedCategory(categoryId);
    }
  };

  // Handle sort selection
  const handleSortSelect = (sortId) => {
    setSelectedSort(sortId);
  };

  // Toggle filter visibility
  const toggleFilterVisibility = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  // Clear all filters
  const clearFilters = () => {
    setSelectedSort('Random');
    setExpandedCategory(null);
  };

  return (
    <aside className="bg-coral-100 w-64 lg:w-72 flex-shrink-0  overflow-y-auto bg-red-300 p-3 mt-2.5">
      {/* Filter controls */}
      <div className="flex items-center gap-2">
        <button 
          onClick={toggleFilterVisibility} 
          className="p-4 bg-gray-700 text-white hover:bg-gray-600 border-r border-gray-500"
          aria-label="Toggle filters"
        >
          <X className="w-4 h-4" />
        </button>
        <button 
          onClick={clearFilters}
          className="flex-grow py-3 px-4 text-center bg-gray-700 text-white hover:bg-gray-600"
        >
          Clear Filters
        </button>
      </div>
      
      {isFilterOpen && (
        <>
         
          
          {/* Categories */}
          {categories.map((category) => (
            <div key={category.id}>
              <div 
                className="flex items-center justify-between p-4 cursor-pointer hover:bg-coral-200"
                onClick={() => toggleCategory(category.id)}
              >
                <div className="flex items-center">
                  <span className="mr-3">{category.icon}</span>
                  <span className="text-lg">{category.label}</span>
                </div>
                
              </div>
              
              {/* Subcategories */}
              {expandedCategory === category.id && (
                <div className="px-4 pb-3 bg-coral-50">
                  {category.subcategories.map((subcategory, index) => (
                    <div 
                      key={index} 
                      className="flex items-center justify-between py-2 cursor-pointer"
                    >
                      <div className="flex items-center">
                        <div className="mr-3 relative">
                          <div className="w-5 h-5 border border-gray-500 rounded-full bg-white" />
                        </div>
                        <span>{subcategory}</span>
                      </div>
                      <ArrowDown className="w-4 h-4" />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          
          {/* Mosadi Pele - Special category with dark background */}
          <div className="bg-gray-700 text-white p-2 text-center ">
            <div className="cursor-pointer hover:bg-gray-600">
              <span className="text-lg">Mosadi Pele</span>
            </div>
          </div>
        </>
      )}
    </aside>
  );
};

export default Sidebar;