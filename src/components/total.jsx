import React from "react";

const Total = ({ preperdItems }) => {
  let countCalories = 0;
  let countTime=0;
  for (const item of preperdItems) {
    countCalories += item.calories;
    countTime += JSON.parse(item.preparing_time);
  }

  return (
    <div className="flex justify-end sm:pr-4  sm:gap-16 gap-4 font-semibold sm:p-4 p-2 text-center">
      <p >Total Time: <br /> {countTime}</p>
      <p className="">Total Calories: <br /> {countCalories}</p>
    </div>
  );
};

export default Total;
