import { Link } from "react-router-dom";
import Button from "../Button";
import Description from "../Description";
import Heading from "../Heading";
import Services from "./Services";

export default function Hero() {
  return (
    <div className="max-w-[1536px] mx-auto">
      <div className="w-full bg-[url('/herobg.svg')] bg-cover bg-center md:py-[57px]">
        <div className="container mx-auto pt-10 md:pt-20 flex flex-col md:flex-row justify-between items-center px-10">
          <div className="">
            <p className="text-[28px] sm:text-[40px] md:text-[54px] lg:text-[67px] font-bold uppercase leading-[1.1]">
              Connecting
              <br />
              <span className="text-[#D32F2F]">Donors &Patients</span> <br />
              Saving Lives <br />
              Together
            </p>
            <Description>
              Find blood donors instantly or become a lifesaver by donating
              blood.
            </Description>
            <div className="flex flex-col md:flex-row gap-2 my-3">
              <Button className={`w-full md:w-max cursor-pointer`}>
                <Link to="/request-blood">Request Blood</Link>
              </Button>
              <Button
                className={`w-full md:w-max border border-[#D32F2F] bg-white text-black hover:text-white hover:bg-[#D32F2F]`}
              >
                <Link to="/register">Become a Donor</Link>
              </Button>
            </div>
          </div>
          <div>
            <img
              src="/blood2.svg"
              alt="hero right image"
              className="w-[250px] md:w-[501px] h-[250px] md:h-[501px]"
            />
          </div>
        </div>
        <div className="flex flex-wrap justify-center py-5 px-10">
          <Services />
        </div>
      </div>
    </div>
  );
}
