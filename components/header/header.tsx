import React from "react";
import Logo from "@/components/logo";
import Nav from "@/components/header/nav";
import ContactUs from "./contact-us";
import MobileNav from "./modile-nav";

export default function Header() {
  return (
    <header className="p-8 xl:py-12 w-screen px-8 xl:px-32 mt-6 absolute  ">
      <div className="flex justify-between items-center ">
        <Logo />
        <>
          <div className="hidden xl:flex items-center gap-8 ">
            <Nav />
            <ContactUs />
          </div>
          <div className="xl:hidden">
            <MobileNav />
          </div>
        </>
      </div>
    </header>
  );
}
