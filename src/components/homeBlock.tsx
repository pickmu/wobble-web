import Image from "next/image";
import * as React from "react";

export interface HomeBlockProps {}

export default function HomeBlock(props: HomeBlockProps) {
  return (
    <div
      id="Home"
      className=" grid grid-cols-12 place-content-center  gap-10 h-screen bg-primary md:p-24  p-8"
    >
      <div className="flex flex-col gap-5 col-span-6 ">
        <p className="wobble text-[150px]"> Wobble</p>  
        
      </div>
      <div className="col-span-6">
        <Image src="/assets/care.png" alt="care" width={250} height={250} />
        <Image src="/assets/phone.png" alt="care" width={250} height={250} />
      </div>
    </div>
  );
}
