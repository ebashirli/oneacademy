import Header from "@/components/header/header";
import HeroImage from "@/components/hero/hero-image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="p-8 xl:h-screen">
      <div className="bg-[#fff5f1] rounded-[40px] h-full">
        <Header />
        <div className="grid xl:grid-cols-2 items-center ">
          <HeroImage />
          <div className="p-8 xl:ml-48 text-center xl:text-left ">
            <h2 className="xl:max-w-[580px] text-[42px] xl:text-[56px] font-light leading-[70.56px] ">
              Dil biliklərinizi inkişaf etdirmək üçün{" "}
              <span className="text-primary-200 font-medium">unikal</span>{" "}
              yanaşma
            </h2>
            <p className="xl:w-[80%] text-[#66667f] leading-[34.20px] font-light text-lg mt-[18px] xl:max-w-96 ">
              Təcrübəli müəllimlərlə, müasir şəraitdə öyrənməyə elə indi başlaya
              bilərsən
            </p>
            <Link href="/api/socials/whatsapp" target="_blank">
              <Button className="bg-primary-200 text-white px-8 py-6 rounded-full mt-8">
                Sınaq dərsinə qoşul
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
