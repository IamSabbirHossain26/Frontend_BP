import { useGSAP } from "@gsap/react";
import { cn } from "../../lib/cn";
import gsap from 'gsap'

export default function Heading({children,className}){
    // useGSAP(()=>{
    //     gsap.to('#heading',{
    //         ease:'power1.inOut',
    //         opacity:1,
    //         y:0
    //     })
    // },[])
    return(
        // <h1 id='heading' className={cn("font-bold font-700 text-[#D32F2F] text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] opacity-0 translate-y-10",className)}>
        <h1 id='heading' className={cn("font-bold font-700 text-[#D32F2F] text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px]",className)}>
            {children}
        </h1>
    );
}