"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: { en: "courses", az: "kurslar" }, path: "#courses" },
  { name: { en: "about us", az: "haqqımızda" }, path: "#about" },
  { name: { en: "teachers", az: "müəllimlər" }, path: "#teachers" },
  { name: { en: "pricing", az: "qiymətlər" }, path: "#pricing" },
  { name: { en: "careers", az: "karyera" }, path: "#careers" },
  { name: { en: "blogs", az: "bloqlar" }, path: "#blogs" },
];

export default function Nav() {
  const pathname = usePathname();
  return (
    <nav className="flex gap-6 z-10">
      {links.map((link) => (
        <Link
          href={link.path}
          key={link.name.en}
          className={`${link.path === pathname && "text-accent border-b-2 border-accent "} font-medium hover:text-accent transition-all `}
        >
          {link.name.az}
        </Link>
      ))}
    </nav>
  );
}
