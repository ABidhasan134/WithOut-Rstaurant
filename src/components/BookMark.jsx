import React from "react";
import CookedItems from "./cookedItems";
import Resipimarks from "./Resipimarks";

const BookMark = ({ resipis, handelremove, preperdItems }) => {
  return (
    <div className="w-[50%] h-auto justify-center  text-center rounded-md
     border-rose-200 border-2 p-4 mt-3">
      <h1 className="text-3xl font-bold">Want to cook:0{resipis.length}</h1>
      <div className="line-hr w-full"></div>
      <div className="flex justify-center gap-28 ">
        <p>Name</p>
        <p className="ml-4">Time</p>
        <p className="ml-4">Carlos</p>
      </div>
      {resipis.map((recipe, ind) => (
        <Resipimarks handelremove={handelremove} recipe={recipe} indx={ind} />
      ))}
      
      <CookedItems preperdItems={preperdItems} />
    </div>
  );
};

export default BookMark;
