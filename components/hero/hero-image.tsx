import Image from "next/image";

export default function HeroImage() {
  return (
    <div className="p-10 px-8 relative xl:order-2">
      <div className="bg-[#ffd6b04d] rotate-[-4.37deg] rounded-[40px] aspect-square xl:w-[68%] mx-auto">
        <div className="bg-[#ffd6b0] rotate-[10deg] rounded-[40px] overflow-hidden absolute top-0 left-0 h-full w-full">
          <Image
            // src="/hero-pic.png"
            src="/hero.jpg"
            alt=""
            fill
            className="object-cover rotate-[-10deg] scale-[1.15]"
          />
        </div>
      </div>
    </div>
  );
}
