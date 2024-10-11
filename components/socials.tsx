import Link from "next/link";
import {
  RiFacebookFill,
  RiInstagramFill,
  RiTiktokFill,
  RiYoutubeFill,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex gap-4 text-xl items-center ">
      <div>
        <Link href="/api/socials/instagram" target="_blank">
          <RiInstagramFill size={30} />
        </Link>
      </div>
      <div>
        <Link href="/api/socials/facebook" target="_blank">
          <RiFacebookFill size={30} />
        </Link>
      </div>
      <div>
        <Link href="/api/socials/youtube" target="_blank">
          <RiYoutubeFill size={30} />
        </Link>
      </div>
      <div>
        <Link href="/api/socials/tiktok" target="_blank">
          <RiTiktokFill size={30} />
        </Link>
      </div>
    </div>
  );
};

export default Socials;
