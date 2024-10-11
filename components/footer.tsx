import Logo from "@/components/logo";
import Link from "next/link";
import { RiMapPin2Fill, RiPhoneFill } from "react-icons/ri";
import Socials from "./socials";

const footerLinks = [
  { title: "Mərkəzimiz", links: ["Kariyera", "Müəllimlər", "Dəstək", "Əlaqə"] },
  { title: "Məhsullarımız", links: ["Kurslar", "Qiymətlər", "Bloqlar"] },
  { title: "Sənədlər", links: ["Qayda və Şərtlər", "Məxfilik siyasəti"] },
];

const address = `Masallı şəhəri, "Prospekt" Biznes Mərkəzi (2-ci mərtəbə)`;

export default function Footer() {
  return (
    <section className="p-4 xl:px-32 mb-20 w-full">
      <div className="bg-[#f8fafe] rounded-[40px] xl:p-14 xl:pt-16 xl:pb-28 border flex gap-10 flex-col xl:flex-row justify-between p-8 pt-10">
        <div>
          <Logo />
          <address className="mt-8">
            <Link
              href="/api/socials/address"
              target="_blank"
              className="flex gap-2 items-center font-bold"
            >
              <RiMapPin2Fill size={20} />
              <span className="">{address}</span>
            </Link>
          </address>
          <Link
            href="/api/socials/phone"
            target="_blank"
            className="flex gap-2 items-center font-bold"
          >
            <RiPhoneFill />
            (+994) 51 388 64 11
          </Link>
        </div>

        {footerLinks.map(({ title, links }, index) => (
          <div key={index}>
            <h6 className="font-bold">{title}</h6>
            <ul>
              {links.map((link, i) => (
                <li key={i}>
                  <Link href={link}>{link}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="h-4">
          <Socials />
        </div>
      </div>
    </section>
  );
}
