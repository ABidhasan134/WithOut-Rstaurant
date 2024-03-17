import React, { useState } from "react";

const Total = ({ preperdItems }) => {
  const [totalCalories, setTotalCalories] = useState(0);

  const number=()=> preperdItems.map(item =>{
   let sum=totalCalories+item.calories;
    return (setTotalCalories(sum));
  })
  number();
  return (
    <div className="flex justify-end pr-4 m-4">
      <p>Total Calories: {totalCalories}</p>
    </div>
  );
};

export default Total;
