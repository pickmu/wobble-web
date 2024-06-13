import Image from "next/image";
import * as React from "react";

type ServicesProps = {};

export default function Services(props: ServicesProps) {
  const data: any[] = [
    { title: "Rides", icon: "/assets/rides.png" },
    { title: "Delivery", icon: "/assets/delivery.png" },
    { title: "Wobble Pro", icon: "/assets/pro.png" },
  ];
  return (
    <div id="Services" className="bg-white md:p-24 p-8 flex flex-col md:gap-10 gap-5 ">
      <p className="md:text-6xl text-3xl font-bold text-secondary self-center">
        Our services
      </p>
      <p className="md:text-3xl text-xl items-center text-secondary self-center md:mb-10 ">
        Send packages and rides anywhere with Wobble
      </p>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
        {data?.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 col-span-1 p-10 bg-gray-100 rounded-3xl"
          >
            <p className="md:text-5xl text-2xl text-secondary font-semibold ">
              <i>{item.title}</i>{" "}
            </p>
            <div className="md:self-end self-center ">
              <Image src={item.icon} alt="icon" width={200} height={200} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
