import React, { useEffect, useState } from "react";
import { IoTimeOutline } from "react-icons/io5";
import { TbBrandTinder } from "react-icons/tb";
import "./line.css";

const CardList = ({heandleClick}) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("./data/selfMadeApi.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch(() => console.log("Failed to fetch"));
  }, []);
  // console.log(data);

   
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 sm:w-[70%] w-full">
      {
        data.map((items)=>{

          return   <div className="card card-compact sm:w-96 w-auto bg-base-100 shadow-xl p-4 m-4 border-2 border-gray-400">
          <figure>
            <img
              src={items.recipe_image}
              alt="Food image"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-3xl">{items.recipe_name}</h2>
            <p>{items.short_description}</p>
            <div className="card-actions justify-end"></div>
          </div>
          <div className="line-hr"></div>
          <div>
            <h1 className="text-2xl font-semibold">Ingridients:{items.ingredients.length}</h1>
            <p>{items.ingredients[0]}</p>
            <p>{items.ingredients[1]}</p>
            <p>{items.ingredients[2]}</p>
          </div>
          <div className="line-hr"></div>
          <div className="flex justify-between mb-10">
            <div className="flex text-2xl items-center gap-3">
              <IoTimeOutline />
              <p>{items.preparing_time}</p>
            </div>
            <div className="flex text-2xl items-center gap-3">
              <TbBrandTinder />
              <p>{items.calories}</p>
            </div>
          </div>
  
          <div>
            <button onClick={()=>heandleClick(items,items.recipe_id)} className="btn bg-green-400 hover:bg-green-800 hover:text-white">Want to cook</button>
          </div>
        </div>
        })
      }
    </div>
  );
};

export default CardList;
