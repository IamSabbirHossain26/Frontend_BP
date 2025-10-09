import { Link, NavLink } from "react-router-dom";
import Humburger from "../components/svg/Humburger";
import { useState } from "react";
import Close from "./svg/Close";
import { useAuth } from "../../context";

export default function Navbar2() {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();
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
          {/* desktop navbar */}
          <div className="hidden md:flex items-center justify-between">
            <NavLink
              to={`/home` || `/`}
              className={({ isActive }) =>
                `capitalize mx-4 cursor-pointer text-white ${
                  isActive ? "border-b-2 border-white" : ""
                } hover:bg-white hover:text-[#D32F2F] hover:px-5 hover:py-2 hover:rounded-full transition-all duration-75`
              }
            >
              home
            </NavLink>
            <NavLink
              to="/donor-list"
              className={({ isActive }) =>
                `capitalize mx-4 cursor-pointer text-white ${
                  isActive ? "border-b-2 border-white" : ""
                } hover:bg-white hover:text-[#D32F2F] hover:px-5 hover:py-2 hover:rounded-full transition-all duration-75`
              }
            >
              donor list
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `capitalize mx-4 cursor-pointer text-white ${
                  isActive ? "border-b-2 border-white" : ""
                } hover:bg-white hover:text-[#D32F2F] hover:px-5 hover:py-2 hover:rounded-full transition-all duration-75`
              }
            >
              about
            </NavLink>
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                `capitalize mx-4 cursor-pointer text-white ${
                  isActive ? "border-b-2 border-white" : ""
                } hover:bg-white hover:text-[#D32F2F] hover:px-5 hover:py-2 hover:rounded-full transition-all duration-75`
              }
            >
              blogs
            </NavLink>
          </div>
          <div className="flex items-center gap-3">
            {
              <>
            <Link to="/request-blood" className="hidden md:flex">
              <p className="capitalize text-white text-[12px] md:text-[16px] border rounded-full py-1 md:py-2.5 px-2 md:px-3.5">
                request blood
              </p>
            </Link>
            {
              !user?
            <Link to="/login">
              <p className="capitalize text-[#D32F2F] bg-white text-[18px] md:text-[16px] border rounded-full py-1 md:py-2.5 px-2 md:px-5">
                login
              </p>
            </Link>
            :
            <Link to="/logout">
              <p className="capitalize text-[#D32F2F] bg-white text-[12px] md:text-[16px] border rounded-full py-1 md:py-2.5 px-2 md:px-5">
                logout
              </p>
            </Link>
            }
              </>
            }
          </div>
        </div>
      </div>
      <div>
        {/* mobile side nav */}
        {isOpen && (
          <div className="fixed inset-0">
            <div
              className={`md:hidden absolute top-0 w-full h-screen grid grid-cols-3 z-[999999999] overflow-hidden`}
            >
              <div className="col-span-2 bg-[#D32F2F] h-screen flex flex-col justify-center w-full opacity-100">
                <NavLink
                  to={`/home` || `/`}
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-white capitalize mt-5 flex justify-center"
                >
                  <span>home</span>
                </NavLink>
                <NavLink
                  to={`/donor-list`}
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-white capitalize mt-5 flex justify-center"
                >
                  <span>donor list</span>
                </NavLink>
                <NavLink
                  to={`/about`}
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-white capitalize mt-5 flex justify-center"
                >
                  <span>about</span>
                </NavLink>
                <NavLink
                  to={`/blogs`}
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-white capitalize mt-5 flex justify-center"
                >
                  <span>blogs</span>
                </NavLink>
                {/* {user ? (
                  <NavLink
                    to={`/logout`}
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-white capitalize mt-5 flex justify-center"
                  >
                    <span>logout</span>
                  </NavLink>
                ) : (
                  <NavLink
                    to={`/login`}
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-white capitalize mt-5 flex justify-center"
                  >
                    <span>login</span>
                  </NavLink>
                )} */}
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
