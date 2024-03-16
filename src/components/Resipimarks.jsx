import React from 'react'

const Resipimarks = () => {
  return (
    <div>
      <div className="w-[50%] h-auto justify-center  text-center border-2 border-green-500">
      <h1>Want to cook: {}</h1>
      <div className="line-hr w-full"></div>
      <div className="flex border-2 border-purple-500 justify-center gap-28">
        <p>Name</p>
        <p>Time</p>
        <p>Carlos</p>
      </div>
      <div className="flex border-2 border-purple-500  justify-center ">
        <p className=" bg-red-600 relative left-">1</p>

        <div className="flex gap-28 ml-28 mr-8">
          <p>{}</p>
          <p className="relative ">Time</p>
          <p className="relative ">Carlos</p>
        </div>
        <button className="btn">Preparing</button>
      </div>
    </div>
    </div>
  )
}

export default Resipimarks
