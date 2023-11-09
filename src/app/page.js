'use client'


import React, { useState } from 'react';

export default function Home() {
  const [price, setPrice] = useState('');
  const [sellingPrice, setSellingPrice] = useState('');
  const [discountPercentage, setDiscountPercentage] = useState(0);

  const handlePriceChange = (event) => {
    const newPrice = parseFloat(event.target.value);
    setPrice(newPrice);
    calculateDiscountPercentage(newPrice, sellingPrice);
  };

  const handleSellingPriceChange = (event) => {
    const newSellingPrice = parseFloat(event.target.value);
    setSellingPrice(newSellingPrice);
    calculateDiscountPercentage(price, newSellingPrice);
  };

  const calculateDiscountPercentage = (price, sellingPrice) => {
    if (price && sellingPrice) {
      const discount = ((price - sellingPrice) / price) * 100;
      setDiscountPercentage(discount.toFixed(2));
    } else {
      setDiscountPercentage(0);
    }
  };

  return (
    <div className="min-h-screen flex text-black bg-green-100">
      <div className="p-6 rounded-lg shadow-md bg-red-100 max-w-md">
        <h1 className="text-2xl font-semibold mb-4">Discount Percentage Calculator</h1>
        <input
          type="number"
          placeholder="Price"
          className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          value={price}
          onChange={handlePriceChange}
        />
        <input
          type="number"
          placeholder="Selling Price"
          className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          value={sellingPrice}
          onChange={handleSellingPriceChange}
        />
        <h2 className="text-lg text-black font-semibold">
          Discount in % : <span className='text-4xl'>{discountPercentage}%</span>
        </h2>
      </div>
    </div>
  );
}
