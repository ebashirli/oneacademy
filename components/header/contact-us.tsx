import Link from "next/link";
import { MdWhatsapp } from "react-icons/md";
import { Button } from "../ui/button";

export default function ContactUs() {
  return (
    <Link
      href="https://api.whatsapp.com/send?text=Salam, ONE Academy! &amp;phone=+994513886411"
      target="_blank"
    >
      <Button className="text-primary-200 border-accent border flex gap-3 p-6 ">
        <MdWhatsapp size={30} />
        Sınaq dərsinə qoşul
      </Button>
    </Link>
  );
}
