"use client";

import Link from "next/link";
import Signature from "./signature";
import { motion } from "framer-motion";

interface SideBarProps {
  color: string;
  bgColor?: string;
  sideways: boolean;
}

const SideBar: React.FC<SideBarProps> = ({ color, sideways, bgColor }) => {
  return (
    <nav
      className={
        "flex z-50 bg-" +
        bgColor +
        " p-0 text-" +
        color +
        (sideways
          ? " h-[90vh] fixed top-0 w-20 flex-col items-center justify-between"
          : " w-screen fixed top-0 h-20 pl-1 flex-row justify-stretch")
      }
    >
      <ul
        className={
          "flex grow " +
          (sideways ? "flex-col h-full justify-between" : "w-full items-center")
        }
      >
        {/* Signature Section */}
        <Link href={"/"}  
          className={
            "text-theme-secundary flex justify-center items-center " +
            (sideways ? "flex-col h-1/2 w-10" : " grow-[1] w-2/5 ")
          }
        >
          <div
            className={
              "flex grow items-center justify-center   " +
              (sideways ? "transform -rotate-90 w-52 translate-x-2" : "-translate-y-1")
            }
          >
            {/* Applying motion.div to the Signature directly */}
            <Signature widht={3} color={color} />
             
          </div>
        </Link>

   
        <li
          className={
            "flex justify-center items-stretch " +
            (sideways
              ? "flex-col h-1/2 space-y-20"
              : " grow justify-evenly items-end w-3/5")
          }
        >
          {<div className={sideways ? "transform -rotate-90 py-2 text-center" : ""}>
            <Link href={"/education"}>Education</Link>
          </div>}
          {<div className={sideways ? "transform -rotate-90 py-2 text-center" : ""}>
            <Link href={"/projects"}>Projects</Link>
          </div>}
          <div className={sideways ? "transform -rotate-90 py-2 text-center" : ""}>
            <Link href={"/contact"}>Contact</Link>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default SideBar;
