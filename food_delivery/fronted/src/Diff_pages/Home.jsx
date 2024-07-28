import React, { useEffect, useState } from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import Cards from '../component/Cards';
import Carousal from '../component/Carousal';
import '../App.css';
import axios from 'axios';

export default function Home() {
  const [fooditem, setFooditem] = useState([]);
  const [foodcat, setFoodcat] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const reload = async () => {
    try {
      const url = 'https://fooddelivery-j1hz.onrender.com/foodItem';
      const response = await axios.get(url);
      setFoodcat(response.data[1]);
      setFooditem(response.data[0]);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    reload();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <div><Navbar /></div>
      <div><Carousal /></div>
      <div className='container'>
        {
          foodcat.length > 0
            ? foodcat.map((category) => (
                <div key={category._id} className='fs-3 m-2 row mb-3 align-center'>
                  {category.CategoryName}
                  <hr />
                  {
                    fooditem.length > 0
                      ? fooditem.filter((item) => item.CategoryName === category.CategoryName)
                          .map((filteredItem) => (
                            <div key={filteredItem._id} className='col-12 col-md-6 col-lg-3'>
                              <Cards foodItem={filteredItem} option={filteredItem.options[0]} />
                            </div>
                          ))
                      : <div> not found</div>
                  }
                </div>
              ))
            : <div>No categories found</div>
        }
      </div>
      <div><Footer /></div>
    </>
  );
}
