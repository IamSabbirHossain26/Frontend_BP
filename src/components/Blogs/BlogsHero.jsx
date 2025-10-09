import Description from "../Description";
import Heading from "../Heading";

export default function BlogsHero(){
    return(
        <>
            <div className="flex flex-col justify-center items-center">
                <Heading>Blood Point Blog</Heading>
                <Description className={`text-center`}> Blood donation, health tips, and inspiring stories—everything you need to know.</Description>
            </div>
            <div className="border-t-2 border-black mt-[15px] md:mt-[37px]"/>
        </>
    )
}