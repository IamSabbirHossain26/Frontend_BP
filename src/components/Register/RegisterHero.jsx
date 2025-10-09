import Description from "../Description";
import Heading from "../Heading";

export default function RegisterHero(){
    return(
        <div className="container mx-auto mt-10 p-10">
            <Heading className={`text-center md:text-start`}>Register with Blood Point</Heading>
            <Description className={`text-[18px] text-center md:text-start`}>Join our lifesaving network today and become a hero by donating blood when it’s needed most.</Description>
        </div>
    )
}