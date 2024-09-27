import Header from "@/components/header/header";
import HeroImage from "@/components/hero/hero-image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="p-8 h-screen">
      <div className="bg-[#fff5f1] rounded-[40px]  h-full">
        <Header />
        <div className="grid xl:grid-cols-2 items-center ">
          <HeroImage />
          <div className="p-8 xl:ml-48 text-center xl:text-left ">
            <h2 className="xl:max-w-[580px] text-[42px] xl:text-[56px] font-light leading-[70.56px] ">
              A <span className="text-primary-200 font-medium">unique</span>{" "}
              approach to learning foreign languages online
            </h2>
            <p className="xl:w-[80%] text-[#66667f] leading-[34.20px] font-light text-lg mt-[18px] xl:max-w-96 ">
              Learn at your own pace, with lifetime access on mobile and desktop
            </p>
            <Button className="bg-primary-200 text-white px-8 py-6 rounded-full mt-8">
              Get started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
