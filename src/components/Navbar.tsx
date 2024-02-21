"use client";

import React, { useState } from "react";
import MenuList from "./MenuList";

const Navbar = () => {
  const aboutMenu = ["menu1", "menu2", "menu3"];
  const serviceMenu = ["sermenu1", "sermenu2", "sermenu3"];

  const [isAboutHovered, setIsAboutHovered] = useState(false);
  const [isServiceHovered, setIsServiceHovered] = useState(false);
  return (
    <div className="flex w-full items-center justify-between p-10">
      <a href="/home" className="w-[50%]">
        LOGO
      </a>
      <ul className="flex list-none items-center justify-evenly w-[50%] gap-10">
        <li
          className="cursor-pointer relative hover:underline"
          onMouseEnter={() => setIsAboutHovered(true)}
          onMouseLeave={() => setIsAboutHovered(false)}
        >
          home
          {isAboutHovered && <MenuList menus={aboutMenu} />}
        </li>
        <li
          className="cursor-pointer relative hover:underline"
          onMouseEnter={() => setIsServiceHovered(true)}
          onMouseLeave={() => setIsServiceHovered(false)}
        >
          services
          {isServiceHovered && <MenuList menus={serviceMenu} />}
        </li>
        <li className="cursor-pointer relative hover:underline">about</li>
        <li className="cursor-pointer relative hover:underline">contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
