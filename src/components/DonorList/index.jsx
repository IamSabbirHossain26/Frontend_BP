import DonorHero from "./DonorHero";
import DonorPersons from "./DonorPersons";

export default function DonorList(){
    return(
        <div className="bg-white">
            <DonorHero/>
            <DonorPersons/>
        </div>
    )
}