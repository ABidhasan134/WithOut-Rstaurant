import React from "react";

const CookedItems = ({ preperdItems }) => {
 

  return (
    <div className="mt-10 grid">
      <h1 className="text-3xl font-bold">Currently cooking: {preperdItems.length}</h1>
      <div className="line-hr"></div>
      <div className="flex  justify-center gap-32 relative">
        <p className="relative left-10">Name</p>
        <p className="relative left-20">Time</p>
        <p className="relative left-[70px]">Carlos</p>
      </div>
      {preperdItems.map((item, index) => (
        <div key={index} className="flex bg-green-100 shadow-md
         mt-2 rounded-md gap-2 justify-center items-center">
          <p className="text-2xl font-bold relative left-6">{index+1}</p>
          <div className="flex relative gap-24 ml-28 mr-8 justify-center items-center">
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
