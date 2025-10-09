import Marquee from "react-fast-marquee";
import Heading from "../Heading";
import OurMission from "./OurMission";

export default function OurWellWisher() {
  return (
    <div className="bg-[#EFEFEF] py-6 sm:py-8 md:py-10 relative z-[-1] md:z-[99]">
      <Heading className="text-center">Our Well-Wishers</Heading>
      <Marquee pauseOnHover={true} speed={150}>
        {/* <div className="flex gap-5 md:gap-10 pb-0 md:pb-20 lg:pb-24"> */}
        <div className="flex gap-5 md:gap-10 py-10">
            <img src="./sponsors/logo1.webp" alt="Sponsor 1" className="w-[100px] h-[100px] md:w-[200px] md:h-[200px]"/>
            <img src="./sponsors/logo2.webp" alt="Sponsor 2" className="w-[100px] h-[100px] md:w-[200px] md:h-[200px]"/>
            <img src="./sponsors/logo3.webp" alt="Sponsor 3" className="w-[100px] h-[100px] md:w-[200px] md:h-[200px]"/>
            <img src="./sponsors/logo4.webp" alt="Sponsor 1" className="w-[100px] h-[100px] md:w-[200px] md:h-[200px]"/>
            <img src="./sponsors/logo5.webp" alt="Sponsor 2" className="w-[100px] h-[100px] md:w-[200px] md:h-[200px]"/>
            <img src="./sponsors/logo6.webp" alt="Sponsor 3" className="w-[100px] h-[100px] md:w-[200px] md:h-[200px] scale-150"/>
            <img src="./sponsors/logo1.webp" alt="Sponsor 1" className="w-[100px] h-[100px] md:w-[200px] md:h-[200px]"/>
            <img src="./sponsors/logo2.webp" alt="Sponsor 2" className="w-[100px] h-[100px] md:w-[200px] md:h-[200px]"/>
            <img src="./sponsors/logo3.webp" alt="Sponsor 3" className="w-[100px] h-[100px] md:w-[200px] md:h-[200px]"/>
            <img src="./sponsors/logo4.webp" alt="Sponsor 1" className="w-[100px] h-[100px] md:w-[200px] md:h-[200px]"/>
            <img src="./sponsors/logo5.webp" alt="Sponsor 2" className="w-[100px] h-[100px] md:w-[200px] md:h-[200px]"/>
            <img src="./sponsors/logo6.webp" alt="Sponsor 3" className="w-[100px] h-[100px] md:w-[200px] md:h-[200px] scale-150"/>
            <img src="./sponsors/logo1.webp" alt="Sponsor 1" className="w-[100px] h-[100px] md:w-[200px] md:h-[200px]"/>
            <img src="./sponsors/logo2.webp" alt="Sponsor 2" className="w-[100px] h-[100px] md:w-[200px] md:h-[200px]"/>
            <img src="./sponsors/logo3.webp" alt="Sponsor 3" className="w-[100px] h-[100px] md:w-[200px] md:h-[200px]"/>
            <img src="./sponsors/logo4.webp" alt="Sponsor 1" className="w-[100px] h-[100px] md:w-[200px] md:h-[200px]"/>
            <img src="./sponsors/logo5.webp" alt="Sponsor 2" className="w-[100px] h-[100px] md:w-[200px] md:h-[200px]"/>
            <img src="./sponsors/logo6.webp" alt="Sponsor 3" className="w-[100px] h-[100px] md:w-[200px] md:h-[200px] scale-150"/>
            <img src="./sponsors/logo1.webp" alt="Sponsor 1" className="w-[100px] h-[100px] md:w-[200px] md:h-[200px]"/>
            <img src="./sponsors/logo2.webp" alt="Sponsor 2" className="w-[100px] h-[100px] md:w-[200px] md:h-[200px]"/>
            <img src="./sponsors/logo3.webp" alt="Sponsor 3" className="w-[100px] h-[100px] md:w-[200px] md:h-[200px]"/>
            <img src="./sponsors/logo4.webp" alt="Sponsor 1" className="w-[100px] h-[100px] md:w-[200px] md:h-[200px]"/>
            <img src="./sponsors/logo5.webp" alt="Sponsor 2" className="w-[100px] h-[100px] md:w-[200px] md:h-[200px]"/>
            <img src="./sponsors/logo6.webp" alt="Sponsor 3" className="w-[100px] h-[100px] md:w-[200px] md:h-[200px] scale-150"/>
          </div>
      </Marquee>
      <div className="hidden md:flex w-full h-44">

      </div>
      <div className="hidden md:block absolute left-1/2 bottom-[-50px] transform -translate-x-1/2">
        <OurMission type={false}/>
      </div>
    </div>
  );
}
