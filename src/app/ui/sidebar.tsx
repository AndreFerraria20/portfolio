"use client"
import Link from "next/link"
import Signature from "./signature";

interface SideBarProps {

    color: string
}
const SideBar: React.FC<SideBarProps> = ({ color }) => {

    return (
        <nav className="bg-transparent  p-0 h-screen fixed top-0 w-20">
            <ul className="space-y-4 flex items-center ">
                <li className="text-theme-secundary rounded transform -rotate-90 py-10  -translate-x-20  translate-y-16">
                    <div className="w-60 h-40 ">       <Link href={'/'} ><Signature widht={3} color={color} /></Link></div>

                </li>
            </ul>
        </nav>
    );
}

export default SideBar;


