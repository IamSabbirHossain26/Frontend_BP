import AboutUs from "../src/components/AboutUs";
import Faq from "../src/components/Faq";
import Hero from "../src/components/Hero";
import LifeSavingNetwork from "../src/components/LifeSavingNetwork";
import OurWellWisher from "../src/components/OurWellWisher";
import OurMission from "../src/components/OurWellWisher/OurMission";
import SearchDonor from "../src/components/SearchDonor";

export default function HomePage(){
    return(
        <>
            <Hero/>
            {/* <SearchDonor src={'./searchMan.svg'}/> */}
            <SearchDonor src={'./searchman2.png'}/>
            <LifeSavingNetwork/>
            <AboutUs/>
            <Faq/>
            <OurWellWisher/>
            <div className="md:hidden">
                <OurMission type={true}/>
            </div>
        </>
    )
}