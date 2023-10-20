import { workSans } from "@/lib/fonts";

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
        <p className={`pt-8 text-lg  ${workSans.className}`}>{service.body}</p>
      </div>
    </div>
  );
};

export default ServiceContent;
