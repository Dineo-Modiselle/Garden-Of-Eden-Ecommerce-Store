import React from 'react';
import ProductCard from './ProductCard';
import { ArrowDown } from 'lucide-react';

// Sample product data (you'd typically fetch this from an API)
const products = [
  {
    id: 1,
    name: 'Sulfate-Free Shampoo',
    supplierName: 'Lush Locks',
    description: 'Gentle shampoo with argan oil for shiny, healthy hair.',
    image: '/api/placeholder/300/200',
    originalPrice: 20.99,
    currentPrice: 14.94,
    discount: 30,
    tags: ['Cleansing', 'Nourishing', 'Shine-Enhancing'],
    comments: [
      { author: 'Liam K.', text: 'Absorbs quickly, great for daily use.' }
    ]
  },
  {
    id: 2,
    name: 'Hydra Glow Cream',
    supplierName: 'Green Harvest',
    description: 'Luminous skin care cream',
    image: '/api/placeholder/300/200',
    currentPrice: 19.99,
    tags: ['Luminous Skin'],
    comments: [
      { author: 'Olivia P.', text: 'My skin feels so soft and glowy!' }
    ]
  },
  {
    id: 3,
    name: 'Moringa Leaf Powder',
    supplierName: 'Earthly Herbs',
    description: 'Rich in antioxidants, vitamins, and minerals',
    image: '/api/placeholder/300/200',
    originalPrice: 180.00,
    currentPrice: 180.00,
    discount: 14,
    tags: ['Energy', 'Immunity', 'Detox']
  },
  {
    id: 4,
    name: 'Neem Scalp Treatment',
    supplierName: 'Herbal Essence',
    description: 'Scalp treatment with neem and tea tree oil',
    image: '/api/placeholder/300/200',
    currentPrice: 19.49,
    discount: 35,
    tags: ['Scalp-Soothing', 'Anti-Dandruff', 'Growth-Promoting']
  }
];

function ProductGrid() {
  return (
    <div>
     
      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map(product => (
          <ProductCard 
            key={product.id}
            name={product.name}
            supplierName={product.supplierName}
            description={product.description}
            image={product.image}
            originalPrice={product.originalPrice}
            currentPrice={product.currentPrice}
            discount={product.discount}
            tags={product.tags}
            comments={product.comments}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductGrid;