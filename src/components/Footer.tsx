import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col w-full items-center p-20">
      <div className="flex items-center gap-[20px] w-full flex-wrap md:flex-nowrap flex-col sm:flex-row">
        <div className="w-[40%] h-[500px] bg-cyan-50 text-black">logo</div>
        <div className="w-[40%] h-[500px] bg-cyan-50 text-black">column 1</div>
        <div className="w-[40%] h-[500px] bg-cyan-50 text-black">column 2</div>
        <div className="w-[40%] h-[500px] bg-cyan-50 text-black">column 3</div>
        <div className="w-[40%] h-[500px] bg-cyan-50 text-black">column 4</div>
      </div>
    </div>
  );
};

export default Footer;
