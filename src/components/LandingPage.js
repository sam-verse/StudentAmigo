import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

const Landingpage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen flex flex-col items-center">
      <Header />
      <div className="flex flex-col md:flex-row justify-between items-center mt-10 md:mt-20 px-5 md:px-20 max-w-6xl w-full">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight">
            Find and become a 
            <span className="text-blue-500"> professional </span> 
            with passion
          </h1>
          <p className="text-lg md:text-xl mt-6 font-medium text-gray-600">
          Make smart decisions with our revolutionary AI enabled career guidance tools and expert career counsellors
          </p>
          <button
            onClick={() => navigate("/login")}
            className="bg-blue-500 hover:bg-blue-600 text-white text-lg md:text-xl rounded-lg py-4 px-10 mt-8 shadow-lg transform hover:scale-105 transition-transform duration-200"
          >
            Get Started
          </button>
        </div>
        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
          {/* Placeholder for the image */}
          <img
            src="https://your-image-source.com/your-image.png" // Replace with your image source
            alt="Career Guidance"
            className="w-full md:w-3/4"
          />
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
