import React from "react";
import Logo from "@/components/logo";
import Nav from "@/components/nav";
import ContactUs from "./contact-us";

export default function Header() {
  return (
    <header className="xl:py-12 absolute w-full px-14 pt-10 ">
      <div className="flex justify-between items-center">
        <Logo />
        <>
          <div className="hidden xl:flex items-center gap-8 ">
            <Nav />
            <ContactUs />
          </div>
          <div className="xl:hidden ">Moile nav</div>
        </>
      </div>
    </header>
  );
}
