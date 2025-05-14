import React, { useState, useEffect } from "react";
import {
  ShoppingCart,
  ShoppingBag,
  Plus,
  Share2,
} from "lucide-react";
import { BiSolidMessageRounded } from "react-icons/bi"

import { FaHeart, FaShareAlt, FaEye} from "react-icons/fa";
import { BiSolidShoppingBag } from "react-icons/bi";
//import { FaPlus } from "react-icons/fa6";
import PlaceholderImage from "../assets/placeholderImage.jpg"; // Placeholder image

function ProductCard({
  image,
  supplierName,
  name,
  description,
  originalPrice,
  currentPrice,
  discount,
  tags,
  id,

  comments = [],
}) {
  const [liked, setLiked] = useState(false);

  const storageKey = `likes-${id}`;
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    const storedLikes = localStorage.getItem(storageKey);
    if (storedLikes) {
      setLikes(parseInt(storedLikes, 10));
    }
  }, [storageKey]);

  const handleLike = () => {
    const newLikes = likes + 1;
    setLikes(newLikes);
    localStorage.setItem(storageKey, newLikes);
  };

  return (
    <div className="bg-white rounded-lg shadow-md  relative ">
      <div>
        <h3 className="font-bold rounded-t-lg p-2 text-lg text-white bg-[#ff9770] ">
          {name}
        </h3>
      </div>
      {/* Product Image */}
      <div className="relative mb-4">
        <div className="relative mb-4">
          <img
            src={PlaceholderImage}
            alt={name}
            className="w-full h-48 object-cover"
          />

          {/* Discount Badge */}
          {discount && (
            <div className="absolute top-2 right-2 bg-pink-600 text-white text-xs px-2 py-1 rounded">
              -{discount}%
            </div>
          )}

          {/* Heart + Likes */}
          <div
            onClick={handleLike}
            className="absolute bottom-2 left-2 flex items-center bg-gray-200 rounded-full px-2 py-1 shadow cursor-pointer"
          >
            <FaHeart className="w-4 h-4 text-gray-400 fill-gray-400" />
            <span className="text-xs text-gray-700 ml-1">{likes}</span>
          </div>

          {/* Share Icon */}
          <div
            className="absolute bottom-2 right-2 bg-gray-200 p-2 rounded-full shadow cursor-pointer hover:bg-gray-100 transition"
            onClick={() => alert(`Share ${name}`)} // replace with your share logic
          >
            <FaShareAlt className="w-3 h-3 text-gray-500 fill-gray-800 " />
          </div>
        </div>
      </div>

      {/* Product Details */}
      <div className="mb-4 p-2">
        {/* Supplier Name */}
        <h4 className="text-sm  text-gray-500 mb-1">{supplierName}</h4>

        <p className="text-sm text-gray-500 mb-2">{description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-red-300 text-gray-600 text-xs px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-2 mb-2">
          {/* Measurement Box 1 */}
          <div className="text-xs text-gray-600 border border-gray-300 bg-white px-3 py-1 rounded hover:bg-red-400 transition">
            100ml
          </div>

          {/* Measurement Box 2 */}
          <div className="text-xs text-gray-600 border border-gray-300 bg-white px-3 py-1 rounded hover:bg-red-400 transition">
            200ml
          </div>
        </div>

        {/* Pricing */}
        <div className="flex items-center justify-between">
          <div>
            {originalPrice && (
              <span className="line-through text-gray-400 mr-2">
                {originalPrice}
              </span>
            )}
            <span className="font-bold text-coral-700">{currentPrice}</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="p-2">
        
        <div className="flex space-x-1 ">
          <button className="bg-[#ff006e] text-white px-12 py-1 rounded flex items-center">
            <BiSolidShoppingBag className="w-4 h-4 mr-1" /> Buy Now
          </button>
          <button className="bg-red-400 px-3 py-1 rounded flex items-center">
            <Plus className="w-4 h-4 mr-1" /> 
          </button>
        </div>
      </div>
      <div className=" border-t p-2 flex justify-around ">
        <FaEye className="w-5 h-5" />

        <Plus className="w-5 h-5" />
        <BiSolidMessageRounded className="w-5 h-5 "
         />
         
      </div>
      {/* Comments Section */}
            
       
           

        
    </div>
  );
}
export default ProductCard;
