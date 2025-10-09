import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "../../lib/cn";

gsap.registerPlugin(ScrollTrigger);

export default function Description({ children, className }) {
//   useGSAP(() => {
//     gsap.fromTo(
//       "#para",
//       {
//         opacity: 0,
//         y: 20,
//       },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 1,
//         stagger: 0.1,
//         scrollTrigger: {
//           trigger: "#para",
//           start: "top 90%", // when top of #para hits 90% of viewport
//           toggleActions: "play none none none",
//         },
//       }
//     );
//   }, []);

  return (
    <p
      id="para"
      className={cn(
        "font-normal text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-black",
        className
      )}
    >
      {children}
    </p>
  );
}
