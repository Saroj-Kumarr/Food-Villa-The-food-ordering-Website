import React, { useEffect } from "react";
import { FaMinusSquare, FaRupeeSign } from "react-icons/fa";
import { IoCartSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import ItemListCard from "./ItemListCard";
import { clearCart } from "../Utils/ItemSlice";
import { MdDeleteForever } from "react-icons/md";

const Cart = () => {
  const cartItems = useSelector((store) => store.item.cartItems);

  const dispatch = useDispatch();

  const handleClear = () => {
    dispatch(clearCart());
  };

  return (
    <div className="flex items-center justify-center flex-col  ">
      <div className="flex flex-col items-center justify-center w-8/12 border-b-2 border-[#373737] mt-2 pb-2">
        <IoCartSharp className="text-3xl text-[#B22126]" />
        <h3 className="font-bold text-[#373737]">My Cart Items</h3>
        <div className="flex w-full justify-around">
          <h3 className="font-bold ">
            Total <span className="text-[#B22126]">{cartItems.length}</span>{" "}
            Items
          </h3>
          <button
            onClick={handleClear}
            className="bg-red-600 duration-200 px-2 py-[1px] rounded-sm bg-shadow hover:bg-red-700 text-white"
          >
            clear cart <MdDeleteForever className="inline -mt-[1px]" />
          </button>
        </div>
      </div>
      <div className="min-h-screen flex mt-4 w-full justify-center ">
        <div className=" flex flex-col w-7/12 relative -left-36">
          {cartItems.map((item) => {
            return <ItemListCard item={item} />;
          })}
        </div>
        <div className="w-3/12 border-2 p-2 h-[65vh] bg-shadow fixed right-16 top-44 rounded-sm">
          <h3 className="text-center text-lg font-bold text-[#373737] border-b-2 border-[#373737] pb-2 ">
            Price Details
          </h3>
          <div className="flex flex-col justify-center">
            <div className=" flex justify-center flex-col text-center">
              <ul className="flex mt-4 ">
                <li className="w-6/12 ">Total 3 items</li>
                <li className="w-6/12 ">
                  {" "}
                  <FaRupeeSign className="inline text-sm -mt-[2px]" />
                  860
                </li>
              </ul>
              <ul className="flex mt-4">
                <li className="w-6/12">Discount</li>
                <li className="w-6/12">
                  {" "}
                  <FaRupeeSign className="inline text-sm -mt-[2px]" />
                  860
                </li>
              </ul>
              <ul className="flex mt-4">
                <li className="w-6/12">Delivery charges</li>
                <li className="w-6/12">
                  {" "}
                  <FaRupeeSign className="inline text-sm -mt-[2px]" />
                  860
                </li>
              </ul>
              <ul className="flex mt-4">
                <li className="w-6/12 text-lg font-bold">Total Amount</li>
                <li className="w-6/12 text-xl font-bold">
                  {" "}
                  <FaRupeeSign className="inline text-sm -mt-[2px]" />
                  860
                </li>
              </ul>
            </div>

            <div className="flex items-center justify-center">
              <div>
                <input
                  type="text"
                  className="text-center border-2 p-1 focus:outline-none mt-2"
                  placeholder=" SAROJ200"
                />
                <button className="bg-[#373737]  text-white px-2 py-[5px]">
                  Apply
                </button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button className="bg-green-500 py-2 w-10/12 mt-2 text-white rounded-sm bg-shadow hover:bg-green-600 duration-200">
                Proceed to buy
              </button>
            </div>
            <div className="mt-2">
              <div className="m-1 font-bold text-center mt-2">
                Accepted payment{" "}
              </div>
              <div className="flex justify-around mt-4">
                <button>
                  <img
                    className="h-7 border-2 border-blue-400 p-1 "
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Paytm_Logo_%28standalone%29.svg/2560px-Paytm_Logo_%28standalone%29.svg.png"
                    alt="paytm"
                  />
                </button>
                <button>
                  <img
                    className="h-7 border-2 border-purple-700 p-[2px]"
                    src="https://cdn.worldvectorlogo.com/logos/phonepe-1.svg"
                    alt="phonepe"
                  />
                </button>
                <button>
                  <img
                    className="h-7 w-20 border-2 border-green-600 p-1 "
                    src="https://assets.stickpng.com/images/60e7f964711cf700048b6a6a.png"
                    alt="googlepay"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;