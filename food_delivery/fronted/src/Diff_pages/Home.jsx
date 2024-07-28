import React, { useEffect, useState } from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import Cards from '../component/Cards';
import Carousal from '../component/Carousal';
import '../App.css';
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
      <div className="container">
        {foodCategories.length > 0 ? (
          foodCategories.map((category) => (
            <div key={category._id} className="category-section">
              <h3 className="category-title">{category.CategoryName}</h3>
              <hr />
              <div className="row">
                {foodItems.length > 0 ? (
                  foodItems
                    .filter((item) => item.CategoryName === category.CategoryName)
                    .map((filteredItem) => (
                      <div key={filteredItem._id} className="col-12 col-md-6 col-lg-3 mb-4">
                        <Cards foodItem={filteredItem} option={filteredItem.options[0]} />
                      </div>
                    ))
                ) : (
                  <div className="not-found">No items found in this category</div>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="no-categories">No categories found</div>
        )}
      </div>
      <Footer />
    </>
  );
}
