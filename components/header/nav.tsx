"use client";

export default function Nav() {
  // const pathname = usePathname();
  return (
    <nav className="flex gap-6 z-10">
      {/* {links.map((link) => (
        <Link
          href={`#${link.path}`}
          key={link.name.en}
          className={`${link.path === pathname && "text-accent border-b-2 border-accent "} font-medium hover:text-accent transition-all capitalize `}
        >
          {link.name.az}
        </Link>
      ))} */}
    </nav>
  );
}
