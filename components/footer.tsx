import Logo from "@/components/logo";
import Link from "next/link";

const footerLinks = [
  { title: "Company", links: ["Careers", "Teachers", "Support", "Contact"] },
  { title: "Product", links: ["Courses", "Pricing", "Blog"] },
  { title: "Legal", links: ["Terms & Conditions", "Privacy policy"] },
];

export default function Footer() {
  return (
    <section className="px-16 xl:px-32 mb-20">
      <div className="bg-[#f8fafe] rounded-[40px] xl:p-14 xl:pt-16 xl:pb-28 border flex gap-10 flex-col xl:flex-row justify-between ">
        <div>
          <Logo />
          <address>
            <Link
              href={
                "https://www.google.com/maps/place/ONE+Academy/@39.0341552,48.6677413,219m/data=!3m1!1e3!4m6!3m5!1s0x402323998f6c81a5:0x8bc3cf93099b9735!8m2!3d39.0343889!4d48.6675238!16s%2Fg%2F11kj4q7lw8?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D"
              }
              target="_blank"
            >
              Masallı şəhəri, "Prospekt" Biznes Mərkəzi (2-ci mərtəbə)
            </Link>
          </address>
          <Link href="tel:+994513886411" target="_blank">
            (+994) 51 388 64 11
          </Link>
        </div>

        {footerLinks.map(({ title, links }, index) => (
          <div key={index}>
            <h6>{title}</h6>
            <ul>
              {links.map((link) => (
                <li>
                  <Link href={link}>{link}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="flex gap-4">
          <div className="h-10 w-auto "></div>
          <div className="h-10 w-auto "></div>
          <div className="h-10 w-auto "></div>
        </div>
      </div>
    </section>
  );
}
