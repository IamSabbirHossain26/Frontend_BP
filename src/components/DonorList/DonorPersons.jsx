import { useState } from "react";
import { donorpersonelist } from "./donorpersonlist"

export default function DonorPersons(){
  const [data,setData] = useState('')
  const matchedPerson = donorpersonelist.filter(eachData=> 
    eachData?.name.toLowerCase().includes(data.toLowerCase()) || eachData?.bloodGroup.toLowerCase().includes(data.toLowerCase()) || eachData?.location.toLowerCase().includes(data.toLowerCase()) );

  return(
      <div className="container mx-auto px-10">
        <div className="z-[-1]">
          <div className="relative w-full">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
    🔍      </span>
            <input 
              type="text" 
              className="w-full pl-10 p-2 bg-gray-200 ring-1 rounded-md" 
              placeholder="search user name or blood group or location" 
              onKeyUp={(e) => setData(e.target.value)}
            />
          </div>

          {data.length > 0 && `${matchedPerson.length} data is matched by your search key out of ${donorpersonelist.length} data `}
        </div>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-5 p-10">
            {matchedPerson.map(eachPerson=>(
                <div key={eachPerson?.id} className="flex flex-col justify-center items-center shadow-2xl rounded-xl py-5 hover:shadow-[#D32F2F] hover:scale-105">
                    <p><img src={eachPerson?.imag ? eachPerson?.img : './demoPeople.svg'} alt="" /></p>
                    <p>Name: {eachPerson?.name}</p>
                    <p>Group: {eachPerson?.bloodGroup}</p>
                    <p>District: {eachPerson?.location}</p>
                    <p className="">Contact: {eachPerson?.contactNumber}</p>
                </div>
            ))}
        </div>
      </div>
    )
}
// import { useEffect, useRef, useState } from "react";
// import { donorpersonelist } from "./donorpersonlist";

// export default function DonorPersons() {
//   const [visibleCount, setVisibleCount] = useState(9); // Show 9 initially
//   const loaderRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(entries => {
//       const target = entries[0];
//       if (target.isIntersecting) {
//         setVisibleCount(prev => Math.min(prev + 9, donorpersonelist.length));
//       }
//     });

//     if (loaderRef.current) {
//       observer.observe(loaderRef.current);
//     }

//     return () => {
//       if (loaderRef.current) observer.unobserve(loaderRef.current);
//     };
//   }, []);

//   const visibleDonors = donorpersonelist.slice(0, visibleCount);

//   return (
//     <div className="container mx-auto p-10">
//       <div className="grid grid-cols-3 gap-5">
//         {visibleDonors.map(eachPerson => (
//           <div key={eachPerson?.id} className="flex flex-col items-center shadow-2xl rounded-xl py-5">
//             <img
//               src={eachPerson?.img ? eachPerson.img : './demoPeople.svg'}
//               alt={eachPerson?.name}
//               className="w-24 h-24 object-cover rounded-full"
//             />
//             <p>Name: {eachPerson?.name}</p>
//             <p>Group: {eachPerson?.bloodGroup}</p>
//             <p>District: {eachPerson?.location}</p>
//             <p>Contact: {eachPerson?.contactNumber}</p>
//           </div>
//         ))}
//       </div>

//       {/* Invisible loader div to trigger auto-load */}
//       {visibleCount < donorpersonelist.length && (
//         <div ref={loaderRef} className="h-10 mt-10 flex justify-center items-center">
//           <span className="text-gray-500">Loading more...</span>
//         </div>
//       )}
//     </div>
//   );
// }
