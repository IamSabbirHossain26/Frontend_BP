import Countdown from "../../../lib/Coundown"
import Description from "../Description"
import Heading from "../Heading"

export default function Cards(){
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[107px] px-10">
            <div className="shadow-md flex flex-col justify-center items-center rounded-3xl p-[33px] hover:shadow-[#D32F2F] hover:scale-105">
                <img src="./people.svg" alt="people icon" className="w-[82px] h-[82px]"/>
                <Heading className={`flex`}>
                    <Countdown target={1000}/>
                   <span>+</span>
                    </Heading>
                <Heading className={`uppercase font-bold text-[60px]`}>doner</Heading>
                <Description className={`text-center text-[20px]`}>Verified individuals ready to donate when needed</Description>
            </div>
            <div className="shadow-md flex flex-col justify-center items-center rounded-3xl p-[33px] hover:shadow-[#D32F2F] hover:scale-105">
                <img src="./location.svg" alt="people icon" className="w-[82px] h-[82px]"/>
                <Heading>
                    <Countdown target={64}/>
                </Heading>
                <Heading className={`uppercase font-bold text-[60px]`}>district</Heading>
                <Description className={`text-center text-[20px]`}>Reaching patients and donors across the country</Description>
            </div>
            <div className="shadow-md flex flex-col justify-center items-center rounded-3xl p-[33px] hover:shadow-[#D32F2F] hover:scale-105">
                <img src="./mask_blood.svg" alt="people icon" className="w-[82px] h-[82px]"/>
                <Heading className={`capitalize`}>blood</Heading>
                <Heading className={`uppercase font-bold text-[60px]`}>Group</Heading>
                <Description className={`text-center text-[20px]`}>Covering all major blood groups for every emergency</Description>
            </div>
        </div>
    )
}