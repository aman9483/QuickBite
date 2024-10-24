"use client"

import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa'; // Star icon for rating

// Sample food items
const foodItems = [
  {
    id: 1,
    name: 'Cheese Burst Pizza',
    price: '$12.99',
    description: 'Delicious cheesy pizza with fresh toppings.',
    rating: 4.5, // Rating for the food item
    image: 'https://img.freepik.com/premium-photo/quard-cheese-burst-pizza-melted_906149-24052.jpg',
  },
  {
    id: 2,
    name: 'Classic Burger',
    price: '$9.99',
    description: 'Juicy burger with fresh veggies and cheese.',
    rating: 4.7,
    image: 'https://img.freepik.com/premium-photo/quard-cheese-burst-pizza-melted_906149-24052.jpg',
  },
  {
    id: 3,
    name: 'Pasta Alfredo',
    price: '$8.99',
    description: 'Creamy Alfredo pasta with rich sauce.',
    rating: 4.3,
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
  {
    id: 6,
    name: 'Veggie Wrap',
    price: '$7.49',
    description: 'Fresh veggies wrapped in a tortilla.',
    image: 'https://img.freepik.com/premium-photo/quard-cheese-burst-pizza-melted_906149-24052.jpg',
  },
  {
    id: 7,
    name: 'BBQ Chicken Wings',
    price: '$10.49',
    description: 'Spicy BBQ wings served with ranch.',
    image: 'https://img.freepik.com/premium-photo/quard-cheese-burst-pizza-melted_906149-24052.jpg',
  },
  {
    id: 8,
    name: 'Caesar Salad',
    price: '$8.49',
    description: 'Crispy romaine with Caesar dressing.',
    image: 'https://img.freepik.com/premium-photo/quard-cheese-burst-pizza-melted_906149-24052.jpg',
  },
  {
    id: 9,
    name: 'Fried Rice',
    price: '$7.99',
    description: 'Vegetable fried rice with soy sauce.',
    image: 'https://img.freepik.com/premium-photo/quard-cheese-burst-pizza-melted_906149-24052.jpg',
  },
  {
    id: 10,
    name: 'Chocolate Cake',
    price: '$4.99',
    description: 'Rich chocolate cake with cream.',
    image: 'https://img.freepik.com/premium-photo/quard-cheese-burst-pizza-melted_906149-24052.jpg',
  },
  {
    id: 11,
    name: 'Ice Cream Sundae',
    price: '$3.99',
    description: 'Delicious ice cream topped with syrup.',
    image: 'https://img.freepik.com/premium-photo/quard-cheese-burst-pizza-melted_906149-24052.jpg',
  },
  {
    id: 12,
    name: 'Fruit Salad',
    price: '$5.49',
    description: 'Fresh seasonal fruits salad.',
    image: 'https://img.freepik.com/premium-photo/quard-cheese-burst-pizza-melted_906149-24052.jpg',
  },
  
];

const FoodCarousel = () => {
  const [filter, setFilter] = useState('');
  const [priceRange, setPriceRange] = useState('');

  const filteredFoodItems = foodItems.filter(food => {
    const price = parseFloat(food.price.replace('$', ''));
    let withinPriceRange = true;

    if (priceRange === 'less than 200') {
      withinPriceRange = price < 200;
    } else if (priceRange === '200 to 300') {
      withinPriceRange = price >= 200 && price <= 300;
    } else if (priceRange === '300 to 600') {
      withinPriceRange = price > 300 && price <= 600;
    }

    return food.name.toLowerCase().includes(filter.toLowerCase()) && withinPriceRange;
  });

  return (
    <div className="relative mt-12 card">
      <h4 className="text-2xl lg:text-3xl font-bold text-gray-800 ml-10">Choose from a diverse menu featuring a delectable array of dishes.</h4>

      {/* Filter Options */}
      <div className="flex justify-start items-center space-x-4 mt-4 ml-10">
        <input
          type="text"
          placeholder="Filter by name"
          className="border rounded p-2"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        <select
          className="border rounded p-2"
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
        >
          <option value="">Select Price Range</option>
          <option value="less than 200">Less than $200</option>
          <option value="200 to 300">$200 to $300</option>
          <option value="300 to 600">$300 to $600</option>
        </select>
      </div>

      {/* Food Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        {filteredFoodItems.map((food) => (
          <div key={food.id} className="block rounded-lg p-4 shadow-md bg-white transform transition-transform duration-300 hover:scale-105">
            <img
              alt={food.name}
              src={food.image}
              className="h-60 w-full rounded-lg object-cover img"
            />
            <div className="mt-4">
              <dl>
                <div>
                  <dt className="sr-only">Food Name</dt>
                  <dd className="font-medium text-lg">{food.name}</dd>
                </div>
                <div>
                  <dt className="sr-only">Price</dt>
                  <dd className="text-sm text-gray-500">{food.price}</dd>
                </div>
                <div>
                  <dt className="sr-only">Description</dt>
                  <dd className="text-sm text-gray-500 mt-2">{food.description}</dd>
                </div>
                <div className="flex items-center mt-2">
                  <span className="text-yellow-500 flex">
                    {[...Array(5)].map((_, index) => (
                      <FaStar key={index} className={`w-4 h-4 ${index < Math.floor(food.rating) ? 'text-yellow-500' : 'text-gray-300'}`} />
                    ))}
                  </span>
                  <span className="ml-2 text-gray-500 text-sm">{food.rating}</span>
                </div>
              </dl>
              <div className="mt-4 flex justify-between text-xs">
                <p className="text-gray-500">Highly Rated</p>
                <p className="text-gray-500">30 min delivery</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodCarousel;
