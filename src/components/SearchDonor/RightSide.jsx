import Description from "../Description";
import Heading from "../Heading";
import SelectForm from "./SelectForm";

export default function RightSide(){
    return(
        // <div className="flex flex-col justify-between items-end max-w-[739px] min-w-[500px] text-right pr-40">
        // <div className="flex flex-col justify-between items-end w-full md:max-w-[739px] text-center md:text-right pr-40">
        // <div className="flex flex-col md:items-end">
        //     <div className="flex flex-col gap-5 justify-center md:justify-end items-center md:items-end">
        //         <Heading className={`lg:text-[60px]`}>Search Donors</Heading>
        //         <Description className={`lg:text-[20px] text-center md:text-right`}>Use the donor search below to find available blood donors in your area. Filter by blood group and location, and connect with lifesavers who are ready to help.</Description>
        //     </div>
        //     <div className="mt-10">
        //         <SelectForm/>
        //     </div>
        // </div>
        <div className="flex flex-col md:items-end">
            <div className="flex flex-col gap-5 justify-center md:justify-end items-center md:items-end">
                <Heading className={`lg:text-[60px]`}>Search Donors</Heading>
                <Description className={`lg:text-[20px] text-center md:text-right`}>Use the donor search below to find available blood donors in your area. Filter by blood group and location, and connect with lifesavers who are ready to help.</Description>
                <SelectForm/>
            </div>
        </div>
    )
}