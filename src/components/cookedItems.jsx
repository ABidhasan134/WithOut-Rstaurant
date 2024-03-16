import React from "react";

const CookedItems = ({ preperdItems }) => {
  return (
    <div className="mt-10 grid">
      <h1 className="text-3xl font-bold">
        Currently cooking: {preperdItems.length}
      </h1>
      <div className="line-hr"></div>
      <div className="flex  justify-center  sm:gap-32 gap-12  relative sm:left-0 left-6">
        <p className="relative sm:left-20 left-0">Name</p>
        <p className="relative ml-10 sm:left-14 left-0">Time</p>
        <p className="relative sm:left-[40px] left-0">Carlos</p>
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
          <div className="flex relative sm:gap-24  sm:ml-28 ml-4 mr-8  justify-center items-center">
            <p>{item.recipe_name}</p>
            <p className="relative">{item.preparing_time}</p>
            <p className="relative">{item.calories}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CookedItems;
