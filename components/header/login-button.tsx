import { RiLoginBoxFill } from "react-icons/ri";
import Link from "next/link";

export default function LoginButton() {
  return (
    <Link href="https://app.oneacademy.az" target="_blank">
      <RiLoginBoxFill size={30} />
    </Link>
  );
}
