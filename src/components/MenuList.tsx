import React from "react";

const MenuList = ({menus}: {menus:string[]}) => {
  return (
    <div className="w-[400px] h-[400px] flex flex-col items-center absolute top-[110%] bg-white text-black">
      {menus.map((menu, idx) => (
        <span key={idx}>{menu}</span>
      ))}
    </div>
  );
};

export default MenuList;
