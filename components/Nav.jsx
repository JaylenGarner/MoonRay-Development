import Link from "next/link";
import Image from "next/image";

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
];

const Nav = () => {
  return (
    <div className="h-[70px] absolute w-full flex_center space-x-8 text-xl font-semibold pt-8 z-20">
      <Image
        src="https://moonray-development.s3.amazonaws.com/Public/Assets/moonray-logo.svg"
        width={80}
        height={80}
      ></Image>
      {links.map((link) => {
        return <Link href={link.path}>{link.label}</Link>;
      })}
    </div>
  );
};

export default Nav;
