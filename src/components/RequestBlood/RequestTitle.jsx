import Description from "../Description";
import Heading from "../Heading";

export default function RequestTitle(){
    return(
        <div className="flex flex-col justify-center items-center">
            <Heading>Request Blood</Heading>
            <Description className={`text-[18px] max-w-[827px] text-center`}>In times of emergency, post your blood request here and let our donor network reach you within moments.</Description>
        </div>
    )
}