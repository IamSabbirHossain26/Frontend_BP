import { Link } from "react-router-dom";
import Button from "../Button";
import Description from "../Description";
import Heading from "../Heading";

export default function AboutUs(){
    return(
        <div className="bg-[#EFEFEF] p-10">
            <div className="container mx-auto flex flex-col justify-center items-center space-y-4">
                <Heading>About Us</Heading>
                <Description className={`text-center max-w-[994px]`}>Blood point is an automated blood service that instantly connects blood seekers with voluntary blood donors through SMS. It is a not-for-profit initiative dedicated to raising awareness and promoting voluntary blood donation across Bangladesh.</Description>
                <Link to='/about' className="cursor-pointer">
                    <Button>Learn More</Button>
                </Link>
            </div>
        </div>
    )
}