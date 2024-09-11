import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex">
      <h1 className="flex items-center justify-center space-x-3 text-3xl text-[#181a31] bold ">
        <span className="h-7 w-7 bg-[#ffa500] rounded-full" />
        <span className="">
          one academy
          <span className="text-accent">.</span>
        </span>
      </h1>
    </Link>
  );
}
