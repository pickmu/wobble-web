import Image from "next/image";
import * as React from "react";

type TitleContentAssetsProps = {
  reverse?: boolean;
  text: string;
  title: string;
  bgYellow?: boolean;
  image?: any;
  button?: string;
  id:string
};

export default function TitleContentAssets(props: TitleContentAssetsProps) {
  let { reverse, text, title, bgYellow, image, button,id } = props;
  return (
    <div
    id={id}
      className={`md:gap-10 gap-5 ${
        bgYellow ? "bg-primary" : "bg-secondary"
      }  grid md:grid-cols-2 grid-cols-1 md:p-24 p-8`}
    >
      <div
        className={`col-span-1 ${
          reverse ? "order-2" : "order-1"
        } flex flex-col self-center md:gap-10 gap-5`}
      >
        <p
          className={`md:text-6xl text-3xl font-bold ${
            bgYellow ? "text-white" : " text-primary"
          }`}
        >
          {title}
        </p>
        <p className={`md:text-3xl  text-xl text-justify`}>{text}</p>
        {button && (
          <button
            className={` w-44 ${
              !bgYellow ? "bg-primary" : "bg-secondary"
            } text-white md:text-2xl text-xl rounded-3xl font-semibold px-4 py-2 `}
          >
            {button}{" "}
          </button>
        )}
      </div>
      <div className={`col-span-1 ${reverse ? "order-1" : "order-2"}`}>
        <Image
          className="object-cover rounded-md"
          width={700}
          height={700}
          src={image}
          alt="image"
        />
      </div>
    </div>
  );
}
