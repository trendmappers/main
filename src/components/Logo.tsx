import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <a
        aria-label="Go to home page"
        className={"flex h-full items-center gap-2 text-inherit"} 
      >
        <Image src="/../public/nwtmlg.png" alt="Trend Mappers" width={260} height={100} />
      </a>
    </Link>
  );
};

export default Logo;
