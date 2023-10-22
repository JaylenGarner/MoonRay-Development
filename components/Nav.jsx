"use client";

import Link from "next/link";
import Image from "next/image";
import ServicesDropDown from "./ServicesDropDown";
import { workSans } from "@/lib/fonts";
import { motion } from "framer-motion";

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
        <motion.div initial={{ opacity: 1 }} whileHover={{ opacity: 0.5 }}>
          <Image
            src="https://moonray-development.s3.amazonaws.com/Public/Assets/moonray-logo.svg"
            width={80}
            height={80}
          ></Image>
        </motion.div>
      </Link>
      {links.map((link) => {
        return link.label === "Services" ? (
          <div className="">Services</div>
        ) : (
          <Link
            href={link.path}
            target={link.label === "Portfolio" ? "_blank" : undefined}
          >
            <motion.div initial={{ opacity: 1 }} whileHover={{ opacity: 0.5 }}>
              {link.label}
            </motion.div>
          </Link>
        );
      })}
    </div>
  );
};

export default Nav;
