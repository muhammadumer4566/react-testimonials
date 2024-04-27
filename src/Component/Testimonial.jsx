import React, { useState } from "react";
import Card from "./Card";
import { FiChevronLeft, FiChevronRight  } from "react-icons/fi";

const Testimonial = ({ reviews }) => {

  const [index, setIndex] = useState(0);

  const lefthandler = () => {

    if (index - 1 < 0) {

      setIndex(reviews.length - 1);
    } 
    else {
      
      setIndex(index - 1);

    }
  };
  const rightHandler = () => {

    if (index + 1 >= reviews.length) {

      setIndex(0);
    } 
    else {
      
      setIndex(index + 1);

    }
  };

  const surpriseHandler = () => {

   let randomIndex = Math.floor(Math.random() * reviews.length);
   setIndex(randomIndex); 

  };

  return (
    <div className="flex flex-col w-[85vw] md:w-[700px] bg-white justify-center
     items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md">
      <Card review={reviews[index]} />

      <div className="flex text-3xl mt-5 gap-3 text-orange-500 font-bold mx-auto text-center">
        <button className="cursor-pointer hover:text-violet-500"
         onClick={lefthandler}>
          <FiChevronLeft />
        </button>

        <button className="cursor-pointer hover:text-violet-500" 
        onClick={rightHandler}>
          <FiChevronRight />
        </button>
      </div>

      <div className="mt-6">
        <button className="bg-orange-500 hover:bg-violet-500 transition-all duration-200 
        cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg"
         onClick={surpriseHandler}>
          Surprise Me</button>
      </div>
    </div>
  );
};

export default Testimonial;
