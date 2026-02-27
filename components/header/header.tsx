import ContactUs from "@/components/header/contact-us";
import MobileNav from "@/components/header/modile-nav";
import Nav from "@/components/header/nav";
import Logo from "@/components/logo";
import Socials from "@/components/socials";
// import LoginButton from "./login-button";

export default function Header() {
  return (
    <header className="px-8 pt-8 w-wull xl:px-32 bg-transparent">
      <div className="flex justify-between items-center ">
        <Logo />
        <>
          <div className="hidden xl:flex items-center gap-8 ">
            <Nav />
            <ContactUs />
            <Socials />
            <div className="h-10 border  border-primary-200"></div>
            {/* <LoginButton /> */}
          </div>
          <div className="xl:hidden">
            <MobileNav />
          </div>
        </>
      </div>
    </header>
  );
}
