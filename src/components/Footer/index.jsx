import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

export default function Footer(){
    return(
        <section className="z-[99]">
            <div className="bg-[#D32F2F] pt-20 pb-10 px-10">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-10">
                    <LeftSide/>
                    <RightSide/>
                </div>
            </div>
            <div className="bg-black h-10 md:h-40 text-9xl flex justify-center overflow-hidden padding-0 px-10">
                <span className="capitalize italic text-white font-bold text-center text-[50px] md:text-[300px]">Blood point</span>
            </div>
        </section>
    )
}