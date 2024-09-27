import { Montserrat } from "next/font/google";
import Link from "next/link";

const montserrat = Montserrat({
  weight: ["900"],
  subsets: ["latin"],
});

export default function Logo() {
  return (
    <Link href="/" className={`${montserrat.className} flex`}>
      <h1 className="font-bold font flex items-center justify-center space-x-1 text-3xl text-[#181a31] bold ">
        <span className="uppercase text-primary-200 flex gap-4">
          <span className="border-b-8 border-primary-200">one</span>
          <span className="grid relative">
            <span>academy</span>
            <span className="text-[9.8px] absolute -bottom-[14.5px]  ">
              for becomıng the fırst one
            </span>
          </span>
        </span>
      </h1>
    </Link>
  );
}
