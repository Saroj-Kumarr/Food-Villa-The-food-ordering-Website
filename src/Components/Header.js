import React from "react";
import foodlogo from "../Images/logo.png";
import { FiSearch } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { setTheme } from "../Utils/ItemSlice";
import { ReactComponent as Sun } from "../Images/Sun.svg";
import { ReactComponent as Moon } from "../Images/Moon.svg";
import { getAuth, signOut } from "firebase/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Header = () => {
  const theme = useSelector((store) => store.item.theme);
  const cartItems = useSelector((store) => store.item.cartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleTheme = (e) => {
    dispatch(setTheme());
  };

  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        toast.success("You're logged out", {
          position: "top-center",
          theme: "dark",
        });
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div
      className={`flex justify-between px-10 items-center border-b-2 bg-shadow ${
        theme ? "bg-[#373737]" : "bg-white border-black"
      }`}
    >
      <div className=" flex items-center">
        <img className="w-28" src={foodlogo} alt="" />
        <h3
          className={`text-2xl font-bold -ml-2 ${
            theme ? "text-white" : "text-[#373737]"
          }`}
        >
          Food <span className="text-[#B22126]">Villa</span>{" "}
        </h3>
      </div>

      <ul className="flex gap-2 font-bold items-center justify-center relative z-50">
        <div className="dark_mode">
          <input
            className="dark_mode_input"
            type="checkbox"
            id="darkmode-toggle"
            onChange={handleTheme}
          />
          <label className="dark_mode_label" for="darkmode-toggle">
            <Sun />
            <Moon />
          </label>
        </div>
        <li className="bg-[#B22126] px-2 py-[2px] text-white rounded-sm hover:bg-[#a31b1f]">
          <Link to="/body">Home</Link>
        </li>
        <li
          className={`px-2 py-[2px] rounded-sm ${
            theme ? "bg-white text-[#373737]" : "bg-[#373737] text-white"
          }`}
        >
          <Link to="/cart">
            Cart{" "}
            <span
              className={` px-1 rounded-full ${
                theme ? "bg-[#373737] text-white " : "bg-white text-[#373737]"
              }`}
            >
              {cartItems.length}
            </span>
          </Link>
        </li>
        <li
          className={`px-2 py-[2px] rounded-sm ${
            theme ? "bg-white text-[#373737]" : "bg-[#373737] text-white"
          }`}
        >
          <Link to="/contact">Contact</Link>
        </li>
        <li
          className={`px-2 py-[2px] rounded-sm ${
            theme ? "bg-white text-[#373737]" : "bg-[#373737] text-white"
          }`}
        >
          <Link to="/about">About</Link>
        </li>
        <li
          onClick={() => handleSignOut()}
          className="bg-[#B22126] px-2 py-[2px] text-white rounded-sm hover:bg-[#a31b1f]"
        >
          <Link to="/">Logout</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
