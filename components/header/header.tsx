import Nav from "@/components/header/nav";
import Logo from "@/components/logo";
import ContactUs from "./contact-us";
import MobileNav from "./modile-nav";

export default function Header() {
  return (
    <header className="px-8 pt-8 w-wull xl:px-32 bg-transparent">
      <div className="flex justify-between items-center ">
        <Logo />
        <>
          <div className="hidden xl:flex items-center gap-8">
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
