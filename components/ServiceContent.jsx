import { workSans } from "@/lib/fonts";
import Link from "next/link";

const ServiceContent = ({ service }) => {
  return (
    <div className="grid grid-cols-6 gap-16 w-[50vw] mx-auto pt-16">
      <div className="col-span-2">
        <img
          className="object-cover h-[500px] w-full"
          src={service.contentImg}
        />
      </div>
      <div className="col-span-4 ">
        <div className="border-l-4 border-black flex flex-col">
          <h2 className="text-2xl font-bold pl-8 border-black">
            {service.heading}
          </h2>
        </div>

        <div
          className={`pt-8 text-lg flex flex-col space-y-8 ${workSans.className}`}
        >
          <p>{service.body}</p>
          <span>
            <Link
              href={"/contact"}
              className="underline font-semibold hover:opacity-60 transition duration-300"
            >
              Contact Us
            </Link>{" "}
            to learn more.
          </span>
        </div>
      </div>
    </div>
  );
};

export default ServiceContent;
