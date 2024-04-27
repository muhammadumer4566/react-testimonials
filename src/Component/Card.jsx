import React from 'react'
import{FaQuoteLeft, FaQuoteRight} from "react-icons/fa"


const Card = ({review}) => {
  return (
    <div className="flex flex-col md:relative">
      <div className="absolute top-[-7rem] z-10 mx-auto ">

        <img src= {review.image} alt="img"
        className="aspect-square rounded-full w-[140px] h-[140px] z-25" />
        
        <div className="w-[140px] h-[140px] bg-orange-500 rounded-full 
        absolute top-[-6px] z-[-10] left-[10px]"></div>

      </div>

      <div className="text-center mt-7">
         <p className="font-bold text-2xl capitalize leading-3"> {review.name} </p>
      </div>

      <div className="text-center mt-4">
        <p className="text-orange-500 text-sm uppercase font-bold"> {review.job} </p>
      </div>

      <div className=" text-orange-500 mx-auto mt-5">
        <FaQuoteLeft/>
      </div>

      <div className="text-center mt-4 text-black font-bold ">
        {review.text}
      </div>

      <div className="text-orange-500 mx-auto mt-5">
       <FaQuoteRight/>
      </div>

    </div>
  )
}

export default Card
