"use client"

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Sample food items
const foodItems = [
  {
    id: 1,
    name: 'Cheese Burst Pizza',
    price: '$12.99',
    description: 'Delicious cheesy pizza with fresh toppings.',
    image: 'https://img.freepik.com/premium-photo/quard-cheese-burst-pizza-melted_906149-24052.jpg',
  },
  {
    id: 2,
    name: 'Classic Burger',
    price: '$9.99',
    description: 'Juicy burger with fresh veggies and cheese.',
    image: 'https://img.freepik.com/premium-photo/quard-cheese-burst-pizza-melted_906149-24052.jpg',
  },
  {
    id: 3,
    name: 'Pasta Alfredo',
    price: '$8.99',
    description: 'Creamy Alfredo pasta with rich sauce.',
    image: 'https://img.freepik.com/premium-photo/quard-cheese-burst-pizza-melted_906149-24052.jpg',
  },
  {
    id: 4,
    name: 'Grilled Sandwich',
    price: '$6.99',
    description: 'Grilled sandwich with melted cheese and ham.',
    image: 'https://img.freepik.com/premium-photo/quard-cheese-burst-pizza-melted_906149-24052.jpg',
  },
  {
    id: 5,
    name: 'Tacos',
    price: '$5.99',
    description: 'Soft tacos with chicken, veggies, and salsa.',
    image: 'https://img.freepik.com/premium-photo/quard-cheese-burst-pizza-melted_906149-24052.jpg',
  },
];

const FoodCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerRow = 4;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === foodItems.length - itemsPerRow ? 0 : prevIndex + itemsPerRow
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? foodItems.length - itemsPerRow : prevIndex - itemsPerRow
    );
  };

  return (
    <div className="relative mt-12 card">
         <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 ml-10">Top dishes near to you</h2>
      <div className="flex justify-end items-center absolute w-full -top-8 right-6 space-x-2 mt-6">
        {/* Previous Button */}
        <button onClick={prevSlide} className="p-2 bg-gray-100 rounded-full shadow-lg hover:bg-gray-200 mr-10">
            <ChevronLeft className="w-6 h-6 lg:w-8 lg:h-8 text-gray-600" />
          </button>


          <button onClick={nextSlide} className="p-2 bg-gray-100 rounded-full shadow-lg hover:bg-gray-200 mr-10">
            <ChevronRight className="w-6 h-6 lg:w-8 lg:h-8 text-gray-600" />
          </button>
      </div>

      {/* Food Cards */}
      <div className="overflow-hidden w-full">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {foodItems.map((food) => (
            <div key={food.id} className="min-w-[100%] sm:min-w-[50%] lg:min-w-[25%] p-4">
              <div className="block rounded-lg p-4 shadow-sm shadow-indigo-100 bg-white cards">
                <img
                  alt={food.name}
                  src={food.image}
                  className="h-70 w-full  object-cover img"
                />
                <div className="mt-4">
                  <dl>
                    <div>
                      <dt className="sr-only">Price</dt>
                      <dd className="text-sm text-gray-500">{food.price}</dd>
                    </div>
                    <div>
                      <dt className="sr-only">Food Name</dt>
                      <dd className="font-medium text-lg">{food.name}</dd>
                    </div>
                   
                  </dl>
                 
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodCarousel;
