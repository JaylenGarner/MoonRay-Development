import Link from "next/link";
import Image from "next/image";
import { workSans } from "@/lib/fonts";

const links = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Services",
    path: "/services",
  },
  {
    label: "Contact",
    path: "/contact",
  },
  {
    label: "Portfolio",
    path: "https://jaylengarner.com",
  },
];

const Nav = () => {
  return (
    <div
      className={`${workSans.className} h-[70px] absolute w-full flex_center space-x-8 text-xl font-bold pt-8 z-30 text-white`}
    >
      <Link href="/">
        <div className="transition duration-1000 hover:opacity-75">
          <Image
            src="https://moonray-development.s3.amazonaws.com/Public/Assets/moonray-logo.svg"
            width={80}
            height={80}
          ></Image>
        </div>
      </Link>
      {links.map((link) => {
        return (
          <Link
            href={link.path}
            target={link.label === "Portfolio" ? "_blank" : undefined}
          >
            <div className="transition duration-100 hover:opacity-75">
              {link.label}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Nav;
