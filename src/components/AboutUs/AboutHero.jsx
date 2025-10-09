import Description from "../Description";
import Heading from "../Heading";

export default function AboutHero(){
    return(
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 p-10">
            <div>
                <div>
                    <Heading className={`uppercase text-center md:text-start`}>about us</Heading>
                    <Description className={`text-[400] text-[18px] text-center md:text-start`}>Know About Blood Point – What, How & Why
    Blood Point is an automated blood service that instantly connects people searching for blood with voluntary donors through SMS and our website. It’s a completely free initiative, dedicated to saving lives by bridging the gap between those in need and those willing to donate. Blood Point began its journey in 2018 with a simple vision – no life should be lost due to the lack of blood.</Description>
                </div>
                <div className="mt-10">
                    <Heading className={`capitalize text-[32px] text-center md:text-start`}>Our Vision</Heading>
                    <Description className={`text-[400] text-[18px] text-center md:text-start`}>A world where no life is lost for the lack of blood.</Description>
                </div>
                <div>
                    <Heading className={`capitalize text-[32px] text-center md:text-start`}>Our Mission</Heading>
                    <Description className={`text-[400] text-[18px] text-center md:text-start`}>To instantly connect blood seekers with voluntary donors using the power of technology.</Description>
                </div>
            </div>
            <div className="mx-w-[555px]">
                <Heading className={`text-center md:text-start`}>Why Blood Point?</Heading>
                <Description className={`text-[400] text-[18px] text-center md:text-right`}>
                    Bangladesh has a population of over 160 million, yet safe and reliable blood banks are limited. Outside divisional towns, access to blood banks is rare. Every day, countless patients and accident victims struggle to arrange blood on time, which often leads to life-threatening situations.
                    At the same time, there are many generous people willing to donate blood, but they lack a way to know who needs it and where to donate. This communication gap costs precious lives.
                </Description>
                <Description className={`text-[400] text-[18px] text-center md:ext-right`}>
                    Blood Point was created to close this gap.  By using the simple yet powerful mediums of SMS, email, and our website, we ensure that anyone—regardless of their background—can quickly request blood or offer to donate.
                </Description>
            </div>
        </div>
    )
}