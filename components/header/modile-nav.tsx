"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import Logo from "@/components/logo";
import { links } from "@/lib/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center ">
        <CiMenuFries className="text-[32px]" />
      </SheetTrigger>
      <SheetContent className="flexk flex-col bg-white ">
        <div className="mt-24 mb-40 flex justify-center">
          <Logo />
        </div>
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link) => (
            <Link
              href={`#${link.path}`}
              key={link.name.en}
              className={`${
                link.path === pathname
              } capitalize text-xl hover:text-accent transition-all`}
            >
              {link.name.az}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
