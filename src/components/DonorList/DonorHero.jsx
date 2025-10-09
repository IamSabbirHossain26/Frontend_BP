import Description from "../Description";
import Heading from "../Heading";

export default function DonorHero(){
    return (
        <div className="container mx-auto flex flex-col justify-center items-center py-5 space-y-5 mt-[60px] px-10">
            <Heading className={`text-center`}>Total Donors Found 542.</Heading>
            <Description className={`font-[400] text-[18px] text-center max-w-[878px]`}>At this moment, 542 registered donors are available and ready to donate blood whenever needed—standing by to save lives across Bangladesh.</Description>
            <div className="border-t-1 border-black w-full"/>        
        </div>
    )
}