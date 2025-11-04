import React from "react";
import bookImage from '../../assets/books.jpg'

const Banner = () => {
  return (
    <div className="bg-black text-white w-full">
      <div className="flex flex-col lg:flex-row items-center justify-between px-8 lg:px-16 py-16">
        
        {/* Text + button */}
        <div className="font-serif flex flex-col items-start space-y-6 lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl font-bold leading-snug">
            A sanctuary of stories, curated for gentle minds.
          </h1>
          <button className="rounded-lg bg-[#23BE0A] text-white font-semibold px-6 py-3  hover:bg-green-700 transition-colors">
            View The List
          </button>
        </div>

        {/* Image */}
        <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
          <img className="w-full max-w-md object-cover rounded-lg shadow-lg" src={bookImage} alt="Books" />
        </div>

      </div>
    </div>
  );
};

export default Banner;
