import React from "react";
import { BiSearch } from "react-icons/bi";
import MenuItem from "./MenuItem";
import ThemeComp from "./ThemeComp";
const Header = () => {
  const menu = [
    {
      name: "About",
      url: "/about",
    },
    {
      name: "Sign İn",
      url: "/login",
    },
  ];
  return (
    <div className="flex items-center gap-7 h-20 p-5">
      <div className="bg-amber-600 p-3 text-2xl font-bold rounded-lg">
        MovieApp
      </div>
      <div className="flex flex-1 gap-2 border p-3 items-center rounded-lg">
        <input
          className="outline-none flex-1 bg-transparent"
          type="text"
          placeholder="Ara"
        />
        <BiSearch size={25} />
      </div>
      <ThemeComp />
      {menu.map((menu, index) => (
        <MenuItem menu={menu} key={index} />
      ))}
    </div>
  );
};

export default Header;
