import Logo from "@/components/logo";
import Link from "next/link";
import {
  RiFacebookFill,
  RiInstagramFill,
  RiMapPin2Fill,
  RiPhoneFill,
  RiTiktokFill,
  RiYoutubeFill,
} from "react-icons/ri";

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
              href="/api/social/address"
              target="_blank"
              className="flex gap-2 items-center font-bold"
            >
              <RiMapPin2Fill size={20} />
              <span className="">{address}</span>
            </Link>
          </address>
          <Link
            href="/api/social/phone"
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

        <div className="flex gap-4 text-xl">
          <div className="h-10 w-auto ">
            <Link href="/api/social/instagram" target="_blank">
              <RiInstagramFill size={20} />
            </Link>
          </div>
          <div className="h-10 w-auto ">
            <Link href="/api/social/facebook" target="_blank">
              <RiFacebookFill size={20} />
            </Link>
          </div>
          <div className="h-10 w-auto ">
            <Link href="/api/social/youtube" target="_blank">
              <RiYoutubeFill size={20} />
            </Link>
          </div>
          <div className="h-10 w-auto ">
            <Link href="/api/social/tiktok" target="_blank">
              <RiTiktokFill size={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
