import Description from "../Description";
import Heading from "../Heading";
import Cards from "./Cards";

export default function LifeSavingNetwork(){
    return(
        <div className="container mx-auto py-10">
            <div className="flex flex-col justify-center items-center p-10">
                <Heading>Our Lifesaving Network</Heading>
                <Description className={`text-center`}>A trusted community of donors and recipients, united to save lives every day.</Description>
            </div>
            <Cards/>
        </div>
    )
}