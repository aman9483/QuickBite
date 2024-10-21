"use client";

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import placeholderImage from '../.././public/burger.png'; 


const dishes = [
  { id: 1, name: 'All', image: placeholderImage },
  { id: 2, name: 'Burger', image: placeholderImage },
  { id: 3, name: 'Pizza', image: placeholderImage },
  { id: 4, name: 'Rolls', image: placeholderImage },
  { id: 5, name: 'Sandwich', image: placeholderImage },
  { id: 6, name: 'Fries', image: placeholderImage },
  { id: 7, name: 'Pasta', image: placeholderImage },
  { id: 8, name: 'Noodles', image: placeholderImage },
  { id: 9, name: 'Biryani', image: placeholderImage },
  { id: 10, name: 'Salads', image: placeholderImage },
  { id: 11, name: 'Ice Cream', image: placeholderImage },
  { id: 12, name: 'Sushi', image: placeholderImage },
  { id: 13, name: 'Tacos', image: placeholderImage },
  { id: 14, name: 'Steak', image: placeholderImage },
  { id: 15, name: 'Wraps', image: placeholderImage },
  { id: 16, name: 'Cakes', image: placeholderImage },
  { id: 17, name: 'Drinks', image: placeholderImage },
  { id: 18, name: 'Soups', image: placeholderImage },
  { id: 19, name: 'Desserts', image: placeholderImage },
  { id: 20, name: 'Waffles', image: placeholderImage },
];

const CrousalDishList = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const scrollRight = () => {
    if (currentIndex < dishes.length - 4) {  
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="mt-8 mb-8">
      {/* Title with Arrows */}
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 ml-10">What's on your mind?</h2>
        <div className="flex space-x-2 mr-4"> 
   
          <button onClick={scrollLeft} className="p-2 bg-gray-100 rounded-full shadow-lg hover:bg-gray-200 mr-10">
            <ChevronLeft className="w-6 h-6 lg:w-8 lg:h-8 text-gray-600" />
          </button>

         
          <button onClick={scrollRight} className="p-2 bg-gray-100 rounded-full shadow-lg hover:bg-gray-200 mr-10">
            <ChevronRight className="w-6 h-6 lg:w-8 lg:h-8 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Dish List */}
      <div className="relative w-full">
        <div className="overflow-hidden w-full max-w-full px-4">
          <div
            className="flex space-x-8 transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {dishes.map((dish) => (
              <div key={dish.id} className="flex-shrink-0">
                <div className="relative shadow-lg ">
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    width={130}
                    height={130}
                    className="object-cover rounded-lg" 
                  />
                </div>
                <p className="mt-4 text-base lg:text-lg font-bold text-gray-800 text-center">
                  {dish.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrousalDishList;
