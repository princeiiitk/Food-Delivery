import React, { useEffect, useState } from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import Cards from '../component/Cards';
import Carousal from '../component/Carousal';

import axios from 'axios';

export default function Home() {
  const [foodItems, setFoodItems] = useState([]);
  const [foodCategories, setFoodCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchFoodData = async () => {
    try {
      const url = 'https://fooddelivery-j1hz.onrender.com/foodItem';
      const response = await axios.get(url);
      setFoodCategories(response.data[1]);
      setFoodItems(response.data[0]);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFoodData();
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error.message}</div>;
  }

  return (
    <>
      <Navbar />
      <Carousal />
      <div className="container mx-auto px-4">
        {foodCategories.length > 0 ? (
          foodCategories.map((category) => (
            <div key={category._id} className="my-8">
              <h3 className="text-2xl font-semibold text-gray-800">{category.CategoryName}</h3>
              <hr className="my-2 border-gray-300" />
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {foodItems.length > 0 ? (
                  foodItems
                    .filter((item) => item.CategoryName === category.CategoryName)
                    .map((filteredItem) => (
                      <div key={filteredItem._id} className="bg-white shadow-md rounded-lg overflow-hidden">
                        <Cards foodItem={filteredItem} option={filteredItem.options[0]} />
                      </div>
                    ))
                ) : (
                  <div className="col-span-4 text-center text-gray-500">No items found in this category</div>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-500">No categories found</div>
        )}
      </div>
      <Footer />
    </>
  );
}
