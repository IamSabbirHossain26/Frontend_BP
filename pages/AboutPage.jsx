import AboutHero from "../src/components/AboutUs/AboutHero";
import SearchDonor from "../src/components/SearchDonor";

export default function AboutPage(){
    return(
        <div>
            <AboutHero/>
            <SearchDonor src={'./blood.svg'}/>
        </div>
    )
}