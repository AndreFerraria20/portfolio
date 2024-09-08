"use client"
import Link from "next/link"
import Signature from "./signature";


export default function SideBar() {
    return (
        <nav className="bg-transparent  p-0 h-screen absolute top-0 w-20">
            <ul className="space-y-4 flex items-center ">
                <li className="text-theme-secundary rounded transform -rotate-90 py-10  -translate-x-20  translate-y-16">
                    <div className="w-60 h-40"><Signature color="black"/></div>
                
                </li>
            </ul>
        </nav>
    );
}




