import { Button } from "@/components/ui/button";
import Image from "next/image";
import HeroImage from "./hero-image";

export default function Hero() {
  return (
    <section className="pt-24 m-8 grid xl:grid-cols-2 bg-[#fff5f1] rounded-[40px] items-center ">
      <HeroImage />
      <div className="p-8 m-9 ">
        <h2 className=" text-[42px] xl:text-[56px] font-light leading-[70.56px]">
          A <span className="text-primary-200 font-medium">unique</span>{" "}
          approach to learning foreign languages online
        </h2>
        <p className="w-[80%] text-[#66667f] leading-[34.20px] font-light text-lg mt-[18px]">
          Learn at your own pace, with lifetime access on mobile and desktop
        </p>
        <Button className="bg-primary-200 text-white px-8 py-6 rounded-full mt-8">
          Get started
        </Button>
      </div>
    </section>
  );
}
