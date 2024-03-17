import React from "react";
import CookedItems from "./cookedItems";
import Resipimarks from "./Resipimarks";

const BookMark = ({ resipis, handelremove, preperdItems }) => {
  return (
    <div className="sm:w-[50%] w-full h-auto justify-center text-center rounded-md
     border-rose-200 border-2 p-4 sm:mt-3 m-0">
      <h1 className="sm:text-3xl text-2xl font-bold">Want to cook:0{resipis.length}</h1>
      <div className="line-hr w-full"></div>
      <div className="flex justify-center sm:gap-28 gap-12 ">
        <p>Name</p>
        <p className="ml-4 relative sm:left-3 left-7">Time</p>
        <p className="ml-4 relative sm:left-0 left-2">Carlos</p>
      </div>
      {resipis.map((recipe, ind) => (
        <Resipimarks handelremove={handelremove} recipe={recipe} indx={ind} />
      ))}
      
      <CookedItems preperdItems={preperdItems} />
    </div>
  );
};

export default BookMark;
