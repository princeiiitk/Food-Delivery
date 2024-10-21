import React from 'react';


export default function Carousal() {

  
  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      <div className="carousel-inner relative w-full h-full">

        <div className="carousel-item active absolute w-full h-full transition-transform duration-700 ease-in-out">
          <img
            src="https://cdn.pixabay.com/photo/2023/03/05/11/02/burger-7831128_1280.jpg"
            className="block w-full h-full object-cover"
            alt="Delicious burger with various toppings"
          />
         
         
        </div>
 
      </div>


      <button
        className="carousel-control-prev absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true">&#10094;</span>
        <span className="sr-only">Previous</span>
      </button>


      <button
        className="carousel-control-next absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true">&#10095;</span>
        <span className="sr-only">Next</span>
      </button>
    </div>
  );
}
