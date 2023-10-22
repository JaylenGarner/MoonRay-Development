"use client";

import { workSans } from "@/lib/fonts";
import Link from "next/link";
import { motion } from "framer-motion";

const ServiceCard = ({ service, i }) => {
  const isEven = i % 2 === 0;
  let cardPosition = "right-0";
  let imgMargin = "mr-[200px]";
  let descPosition = "text-left";
  let buttonPosition = "left-8";

  if (!isEven) {
    cardPosition = "left-0";
    imgMargin = "ml-[200px]";
    descPosition = "text-right";
    buttonPosition = "right-8";
  }

  return (
    <div className="flex items-center z-0 relative">
      <Link href={service.page}>
        <motion.img
          initial={{ opacity: 1, scale: 1 }}
          whileHover={{
            opacity: 0.75,
            scale: 1.02,
          }}
          transition={{ duration: 1 }}
          src={service.previewImg}
          className={`w-[900px] h-[600px] ${imgMargin}`}
        />
      </Link>

      <div
        className={`w-[350px] h-[500px] bg-[#212121] absolute z-10 ${cardPosition}`}
      >
        <div className="b text-slate-200">
          <h3 className="text-3xl p-4 pr-8 pl-8 text-center font-semibold">
            {service.name}
          </h3>
          <div className="border border-bottom border-slate-200 right-0"></div>
          <div>
            <p
              className={`p-4 pr-8 pl-8 font-bold ${descPosition} ${workSans.className} `}
            >
              {service.description}
            </p>
          </div>
          <div className={`absolute bottom-8 ${buttonPosition} flex `}>
            <Link href={service.page}>
              <motion.button
                initial={{ scale: 1, backgroundColor: "transparent" }}
                whileHover={{
                  scale: 1.08,
                  backgroundColor: "white",
                  color: "black",
                }}
                transition={{ duration: 0.8 }}
                className="border-2 border-white pt-2 pb-2 pr-6 pl-6 font-bold text-lg"
              >
                Learn More
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
