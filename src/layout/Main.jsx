// import { Outlet } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import Navbar2 from "../components/Navbar2";
// export default function Main() {
//   return (
//     <div className="font-poppins">
//       {/* <Navbar /> */}
//       <Navbar2/>
//       <Outlet />
//       <Footer />
//     </div>
//   );
// }
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar2 from "../components/Navbar2";
import Footer from "../components/Footer";
import UppArrow from "../components/svg/UppArrow";

export default function Main() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300); // Show button after 300px scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="font-poppins relative">
      <div className="sticky top-0 z-[999999]">
        <Navbar2 />
      </div>
      <Outlet />
      <Footer />

      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 text-white px-4 py-4 bg-black ring-2 ring-amber-200 rounded-full shadow-lg transition"
        >
          {/* ↑ Top */}
          <UppArrow/>
        </button>
      )}
    </div>
  );
}
