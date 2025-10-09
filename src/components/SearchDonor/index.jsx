import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

export default function SearchDonor({src}){
    return(
        <div className=" bg-[#EFEFEF]">
            {/* <div className="container mx-auto flex flex-col-reverse md:flex-row items-start md:items-center justify-between bg-[#EFEFEF] py-10 px-10"> */}
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 items-center p-10">
                <LeftSide src={src}/>
                <RightSide/>
            </div>
        </div>
    )
}