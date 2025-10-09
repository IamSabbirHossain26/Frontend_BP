import RequestBloodForm from "./RequestBloodForm";
import RequestTitle from "./RequestTitle";

export default function RequestBlood(){
    return(
        <div className="px-10">
            <div className="container mx-auto py-10 md:py-20 shadow-2xl rounded-4xl my-[50px] px-[46px]">
                <RequestTitle/>
                <RequestBloodForm/>
            </div>
        </div>
    )
}