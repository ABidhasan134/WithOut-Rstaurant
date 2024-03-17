import React from "react";
import Total from "./total";

const CookedItems = ({ preperdItems }) => {
  return (
    <div className="mt-10 grid">
      <h1 className="sm:text-3xl text-2xl font-bold">
        Currently cooking: 0{preperdItems.length}
      </h1>
      <div className="line-hr"></div>
      <div className="flex  justify-center  sm:gap-32 gap-12  relative sm:left-0 left-6">
        <p className="relative sm:left-20 left-0">Name</p>
        <p className="relative ml-10 sm:left-20 left-0">Time</p>
        <p className="relative sm:left-[65px] left-0">Carlos</p>
      </div>
      {preperdItems.map((item, index) => (
        <div
          key={index}
          className="flex bg-green-100 shadow-md
         mt-2 rounded-md gap-2 justify-center items-center"
        >
          <p className="text-2xl font-bold relative sm:left-6 pl-2">
            {index + 1}
          </p>
          <div className="flex relative sm:gap-24 gap-4 sm:ml-28 ml-4 mr-8  justify-center items-center">
            <p className="text-wrap sm:w-[180px] w-[166px]">{item.recipe_name}</p>
            <p className="relative">{item.preparing_time}min</p>
            <p className="relative">{item.calories} calories</p>
          </div>
        </div>
      ))}
      {/* <Total preperdItems ={preperdItems }/> */}
    </div>
  );
};

export default CookedItems;
