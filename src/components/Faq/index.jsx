import Heading from "../Heading";
import DropDownSection from "./DropDownSection";

export default function Faq(){
    return(
        <div className="py-[35px] px-10">
            <Heading className={`text-center`}>FAQ Section</Heading>
            <DropDownSection/>
        </div>
    )
}