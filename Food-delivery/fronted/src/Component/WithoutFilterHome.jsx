import React, { useEffect, useState } from 'react';
import Cards from '../Component/Cards';
import axios from 'axios';
import Filter from './FilterSidebar';

export default function WithoutFilterHome() {
    const [foodItems, setFoodItems] = useState([]);
    const [foodCategories, setFoodCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchFoodData = async () => {
        try {
           
           
            const url = `${process.env.REACT_APP_URL}/foodItems`
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
        <div className="flex flex-col lg:flex-row">

            <div className="w-full lg:w-[20%] lg:block mb-4 lg:mb-0">
                <Filter />
            </div>

            <div className="container mx-auto px-4 lg:px-8">
                {foodCategories.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {foodItems.length > 0 ? (
                            foodItems.map((filteredItem) => (
                                <div key={filteredItem._id} className="bg-white shadow-md rounded-lg overflow-hidden">
                                    <Cards foodItem={filteredItem} option={filteredItem.options[0]} />
                                </div>
                            ))
                        ) : (
                            <div className="col-span-full text-center text-gray-500">No items found in this category</div>
                        )}
                    </div>
                ) : (
                    <div className="text-center text-gray-500">No categories found</div>
                )}
            </div>
        </div>
    );
}
