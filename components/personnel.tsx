import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { Button } from "./ui/button";

const cards = [
  {
    name: "Christian Howard",
    flag: "it",
    position: "Italian teacher",
  },
  {
    name: "Sandra Wilson",
    flag: "es",
    position: "Spanish teacher",
  },
  {
    name: "Jimmy Cooper",
    flag: "en",
    position: "English teacher",
  },
];

export default function Personnel() {
  return (
    <section className="grid gap-12 px-16 xl:px-32 ">
      <div className="grid xl:grid-cols-2 items-end ">
        <div className="text-center xl:text-left">
          <h3 className="text-[#b0b0c0] text-lg font-bold uppercase leading-[34.20px]">
            komandamız
          </h3>
          <h4 className="text-[#181a31] text-5xl font-light leading-[62.40px]">
            Heyətimizlə tanış olun
          </h4>
        </div>
        <div className="hidden xl:flex gap-6 justify-end ">
          <Button className="border rounded-full h-14 w-14 p-0 ">
            <ChevronLeftIcon height={44} width={44} />
          </Button>
          <Button className="border rounded-full bg-primary-200 text-white h-14 w-14 p-0 ">
            <ChevronRightIcon height={44} width={44} />
          </Button>
        </div>
      </div>

      <ul className="w-full grid gap-32 xl:justify-between xl:grid-cols-3 ">
        {cards.map(({ name, flag, position }, index) => (
          <li key={name} className="grid gap-8  ">
            <div className="relative aspect-[6/7] rounded-[40px] ">
              <Image
                src={`/key-persons/${index + 1}.png`}
                alt=""
                fill
                className="object-cover rounded-[40px]  "
              />
            </div>
            <div className="">
              <h5>{name}</h5>
              <div className="flex items-end ">
                <div className="h-10 w-10 relative ">
                  <Image
                    src={`/key-persons/flags/${flag}.png`}
                    alt=""
                    fill
                    className="object-cover rounded-full "
                  />
                </div>
                <p className="text-[#66667f] text-lg leading-[34.20px] ">
                  {position}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
