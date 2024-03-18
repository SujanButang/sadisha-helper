'use client'

import Footer from "@/components/Footer";

import Navbar from "@/components/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {SimpleSlider} from "./_components/SimpleSlider";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { CarouselApi } from "@/components/ui/carousel";

const page = () => {

 


  
  return (
    <div className="w-full h-[100vh] flex flex-col justify-center bg-white items-center gap-10">
      <SimpleSlider />

      
    </div>
  );
};

export default page;
