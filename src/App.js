import React from 'react'
import Testimonial from './Component/Testimonial'
import reviews from './data'

const App = () => {
  return (
    <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200">
    <div className="text-center">
      <h1 className="text-4xl font-bold">
        Our testimonial
      </h1>
      <div className="bg-orange-500 h-[4px] w-1/5 mt-1 mx-auto"></div>
    <Testimonial reviews = {reviews}/>
    </div>
    </div>
  )
}

export default App
