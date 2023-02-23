import React from 'react';
import { FaDollarSign } from "react-icons/fa";

function Card({title, price, images, description, category }) {


  return (
    <div className="card w-[70%] h-[165px] bg-white shadow-[0px_0px_30px_var(--card-shadow)] rounded-l-[100px] rounded-r-[10px] mx-auto relative">
      <span className="absolute top-[-15px] right-[10px] text-white bg-[black] py-[5px] px-[10px] rounded-[20px]">{category.name}</span>
      <div className="card__container flex gap-[10px] items-center h-full p-[10px]">
        <div style={{backgroundImage: `url(${images[0]})`}} className="flex-none card__image w-[150px] h-[150px] bg-cover  rounded-full" />
        <div className="card__info flex flex-col ">
          <h2 className="font-bold text-[20px]">{title}</h2>
          <div className="flex items-center gap-[5px]">
            <span className="font-bold text-[30px]">{price}</span>
            <FaDollarSign />
          </div>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;