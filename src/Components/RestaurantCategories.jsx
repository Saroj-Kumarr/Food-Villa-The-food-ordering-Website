import React, { useState } from "react";
import ItemList from "./ItemList";
import { BiSolidDownArrow } from "react-icons/bi";
import { BiSolidUpArrow } from "react-icons/bi";

const RestaurantCategories = ({ data }) => {
  const [showItems, setShowItems] = useState(false);
  const [isDown, setIsDown] = useState(true);

  const handleClick = () => {
    setShowItems((prev) => !prev);
    setIsDown((prev) => !prev);
  };

  return (
    <div className="w-7/12 flex flex-col mx-auto" onClick={() => handleClick()}>
      <div className=" mx-auto my-4 w-full bg-[#373737] bg-shadow p-4 flex justify-between">
        <span className="font-bold text-white">
          {data.title}
          <span className="text-[#B22126] "> {data.itemCards.length}</span> Items
        </span>
        <span className="text-white">
          {isDown ? (
            <BiSolidDownArrow className="inline" />
          ) : (
            <BiSolidUpArrow />
          )}
        </span>
      </div>
      <div>{showItems && <ItemList items={data.itemCards} />}</div>
    </div>
  );
};

export default RestaurantCategories;
