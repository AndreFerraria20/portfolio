"use client"
import React, { ReactNode } from 'react';
import Banner from "../ui/banner";
import SideBar from '../ui/sidebar';

import StarBackground from '../ui/startBackground';
import { motion } from 'framer-motion';

import { useMediaQuery } from '../hooks/useMediaQuery';



interface MainLayoutProps {
    title: string;
    divContent: ReactNode;
    darkBg?: Boolean
}

const MainLayout: React.FC<MainLayoutProps> = ({ title, divContent, darkBg }) => {
    const mediaQuery = useMediaQuery("(min-width: 850px)"); // Matches the custom breakpoint
    let sidewayBar;
    let color = darkBg ? "white" : "black";
    let bg;

    if(mediaQuery){
        sidewayBar=true
        bg="transparent"
    }else{
        sidewayBar=false
        bg=darkBg?"primary":"secundary"
    }   


    const slideDownVariants = {
        hidden: { y: -1000, opacity: 1 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
        exit: { y: 100, opacity: 0, transition: { duration: 0.5 } },
    };


    return (

        <div >
            {darkBg && <StarBackground />}
            <SideBar sideways={sidewayBar} color={color} bgColor={bg} />


            <div className="flex grow flex-col h-screen  lg:ml-20 lg:mr-20  ">

                <motion.div initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={slideDownVariants}>
                    <Banner content={title}></Banner>
                </motion.div>
                <div className='min-h-screen' >
                    {divContent}
                </div>
            </div>

        </div>
    );
};

export default MainLayout;




