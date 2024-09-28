import { Montserrat } from "next/font/google";
import Link from "next/link";

const montserrat = Montserrat({
  weight: ["900"],
  subsets: ["latin"],
});

export default function Logo() {
  return (
    <Link href="/" className={`${montserrat.className} flex`}>
      <h1 className="font-bold font flex items-center justify-center space-x-1 text-[40px] text-[#181a31] bold ">
        <span className="bg-[#ffa500] h-[120px] w-[120px] flex flex-col items-center justify-center rounded-full ">
          <span className="uppercase text-primary-200  ">
            <span className="leading-none flex justify-between">
              <span>o</span>
              <span>n</span>
              <span>e</span>
            </span>
            <span className="leading-none text-primary-200 text-[16px] flex justify-between rounded-sm  ">
              <span>a</span>
              <span>c</span>
              <span>a</span>
              <span>d</span>
              <span>e</span>
              <span>m</span>
              <span>y</span>
            </span>
          </span>
        </span>
      </h1>
    </Link>
  );
}
