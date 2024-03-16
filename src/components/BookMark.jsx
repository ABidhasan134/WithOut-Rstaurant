import React from "react";
import CookedItems from "./cookedItems";

const BookMark = ({ resipis }) => {
  console.log(resipis);
  return (
    <div className="w-[50%] h-auto justify-center  text-center border-2 border-green-500">
      <h1>Want to cook:{resipis.length}</h1>
      <div className="line-hr w-full"></div>
      <div className="flex border-2 border-purple-500 justify-center gap-28">
        <p>Name</p>
        <p>Time</p>
        <p>Carlos</p>
      </div>
      {resipis.map((recipe) => (
        <div key={recipe.recipe_id} className="flex border-2 border-purple-500 justify-center">
          <p className=" bg-red-600 relative left-">1</p>
          <div className="flex gap-28 ml-28 mr-8">
            <p>{recipe.recipe_name}</p>
            <p className="relative ">{recipe.preparing_time}</p> {/* You can replace "Time" with the actual preparing time */}
            <p className="relative ">{recipe.calories}</p> {/* Replace "Carlos" with the actual calories */}
          </div>
          <button className="btn">Preparing</button>
        </div>
      ))}
      <CookedItems resipis={resipis} />
    </div>
  );
};

export default BookMark;
