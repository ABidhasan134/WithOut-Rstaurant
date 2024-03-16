import React from "react";

const CookedItems = ({resipis}) => {
  // console.log(resipis);
  return (
    <div className="border-2 border-blue-700">
      <div className="flex border-2 border-purple-500 justify-center gap-28">
        <p>Name</p>
        <p>Time</p>
        <p>Carlos</p>
      </div>
      <div className="flex border-2 border-purple-500 gap-6  justify-center ">
        <p className=" bg-red-600 relative -left-6">1</p>

        <div className="flex gap-28 ml-0 mr-8">
          <p>Name</p>
          <p className="relative ">Time</p>
          <p className="relative ">Carlos</p>
        </div>
      </div>
    </div>
  );
};

export default CookedItems;
