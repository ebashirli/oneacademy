import Logo from "@/components/logo";
import maintenance from "@/public/maintenance.png";
import Image from "next/image";
import Link from "next/link";

function NotFound() {
  return (
    <main className="text-center space-y-6 mt-4 h-[calc(100vh-100px)] grid justify-around items-center ">
      <div className="flex flex-col gap-5 items-center ">
        <Logo />
        <Image alt="" src={maintenance} />
        <h1 className="text-3xl font-semibold grid grid-rows-2 gap-4">
          <span>Vebsaytımız üzərində səylə çalışırıq.</span>
          <span>Bu hissə ən yaxın zamanda hazır olacaq.</span>
        </h1>
        <Link
          href="/"
          className="inline-block bg-accent-500 text-primary-800 px-6 py-3 text-lg"
        >
          Geri qayıt
        </Link>
      </div>
    </main>
  );
}

export default NotFound;
