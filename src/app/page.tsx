import TitleContentAssets from "@/components/TilteContentAssets";
import HomeBlock from "@/components/homeBlock";
import Services from "@/components/services";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HomeBlock />
      <TitleContentAssets
        reverse
        id="About"
        title="About Wobble"
        image={"/assets/about.png"}
        text="With Wobble App, you can easily build your own ride-hailing solution or boost your taxi business on the next level"
        button="Learn More"
      />
      <Services />
      <TitleContentAssets
       
        title="Safety All The way"
        image={"/assets/safety.jpg"}
        text="A 24/7 support team, emergency button during rides, and precise location tracking 
        are just a few of the ways technology and our dedicated team work together to keep you safe no matter what.."
      />
      <TitleContentAssets
      id="Contact-Us"
        reverse
        bgYellow
        title="Start Earning With Wobble"
        image={"/assets/driving.jpg"}
        text="Sign up as a driver or courier to earn while helping people
        get closer to what matters most."
        button="Contact US"
      />
    </>
  );
}
