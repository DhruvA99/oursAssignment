import React from "react";

function Navigation() {
  return (
    <div className="w-full px-3 py-3 flex flex-row justify-between sticky top-0 left-0 bg-white">
      <div className="flex justify-between items-center">
        <span className="font-semibold text-xl ">OURS</span>
      </div>
      <div className="flex px-2 ">
        <button className="px-2 py-3 w-full text-gray-700">Log In</button>
        <button className="py-3 px-3  bg-gray-800 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-2xl ">
          Wishlist
        </button>
      </div>
    </div>
  );
}

export default Navigation;
