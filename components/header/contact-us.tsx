import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

export default function ContactUs() {
  return (
    <Link href="/contact">
      <Button className="">Sınaq dərsinə qoşul</Button>
    </Link>
  );
}
