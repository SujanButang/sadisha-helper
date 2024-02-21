import React from "react";

const MenuList = ({menus}: {menus:string[]}) => {
  return (
    <div className="w-[400px] h-[400px] flex flex-col items-center absolute top-[110%] bg-white text-black gap-10">
      {menus.map((menu, idx) => (
        <div key={idx} className="py-5">{menu}</div>
      ))}
    </div>
  );
};

export default MenuList;
