import { Link, NavLink } from "react-router-dom";
import Humburger from "../components/svg/Humburger";
import { useState } from "react";
import Close from "./svg/Close";

const navItem = [
  { id: 1, name: "home", path: "/home" },
  { id: 2, name: "donor list", path: "/donor-list" },
  { id: 3, name: "about", path: "/about" },
  { id: 4, name: "blogs", path: "/blogs" },
  { id: 5, name: "register", path: "/register" },
  { id: 6, name: "login", path: "/login" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative z-[999999999999]">
      <div className="bg-[#D32F2F]">
        <div className="container mx-auto flex justify-between items-center px-10">
          <div className="flex items-center gap-2">
            <div onClick={() => setIsOpen(!isOpen)} className="md:hidden">
              <Humburger />
            </div>
            <Link to="/">
              <p className="text-white font-bold text-[25px] md:text-[30px] py-[25px]">
                {" "}
                Blood Point
              </p>
            </Link>
          </div>
          <div className="hidden md:flex items-center justify-between">
            {navItem.map((nav) => (
              <NavLink
                key={nav.id}
                to={nav.path}
                className={({ isActive }) =>
                  `capitalize mx-4 cursor-pointer text-white ${
                    isActive ? "border-b-2 border-white" : ""
                  } hover:bg-white hover:text-[#D32F2F] hover:px-5 hover:py-2 hover:rounded-full transition-all duration-75`
                }
              >
                {nav.name}
              </NavLink>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <Link to="/request-blood">
              <p className="capitalize text-white text-[12px] md:text-[16px] border rounded-full py-1 md:py-2.5 px-2 md:px-3.5">
                request blood
              </p>
            </Link>
          </div>
        </div>
      </div>
      <div>
        {isOpen && (
          <div className="fixed inset-0">
            <div
              className={`md:hidden absolute top-0 w-full h-screen grid grid-cols-3 z-[999999999] overflow-hidden`}
            >
              <div className="col-span-2 bg-[#D32F2F] h-screen w-full opacity-100">
                {navItem.map((eachNav) => (
                  <div key={eachNav?.id} className="mt-10">
                    <NavLink
                      to={eachNav?.path}
                      onClick={() => setIsOpen(!isOpen)}
                      className="text-white capitalize mt-5 flex justify-center"
                    >
                      <span>{eachNav?.name}</span>
                    </NavLink>
                  </div>
                ))}
              </div>
              <div className="bg-black opacity-70 h-screen w-full">
                <div
                  className={`flex justify-end p-2`}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <Close />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
