"use client";
import ContactUs from "@/components/header/contact-us";
import Logo from "@/components/logo";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import Socials from "../socials";

export default function MobileNav() {
  // const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center ">
        <CiMenuFries className="text-[32px]" />
      </SheetTrigger>
      <SheetContent className="pt-24 flex flex-col bg-white overflow-scroll items-center gap-12">
        <Logo />
        <ContactUs />
        <Socials />
        <nav className="flex flex-col justify-center items-center gap-8">
          {/* {links.map((link) => (
            <Link
              href={`#${link.path}`}
              key={link.name.en}
              className={`${
                link.path === pathname
              } capitalize text-xl hover:text-accent transition-all`}
            >
              {link.name.az}
            </Link>
          ))} */}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
