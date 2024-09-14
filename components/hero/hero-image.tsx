import Image from "next/image";
import React from "react";

export default function HeroImage() {
  return (
    <div className="h-full px-8 pt-16 xl:p-[9rem] relative xl:order-2 ">
      <div className="bg-[#ffd6b04d] aspect-square rotate-[-4.37deg] rounded-[40px] ">
        <div className="bg-[#ffd6b0] h-full w-full rotate-[10deg] rounded-[40px] overflow-hidden absolute top-0 left-0">
          <Image
            src="/hero-pic.png"
            alt=""
            fill
            className="object-cover rotate-[-10deg] mt-12 scale-105"
          />
        </div>
      </div>
    </div>
  );
}
