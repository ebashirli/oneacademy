import Link from "next/link";
import { Button } from "../ui/button";

export default function ContactUs() {
  return (
    <Link
      href="https://api.whatsapp.com/send?text=Salam, ONE Academy! &amp;phone=+994513886411"
      target="_blank"
    >
      <Button className="text-primary-200 border-accent border ">
        Sınaq dərsinə qoşul
      </Button>
    </Link>
  );
}
