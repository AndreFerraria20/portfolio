import React, { ReactNode } from 'react';
import Banner from "../ui/banner";
import SideBar from '../ui/sidebar';
import Link from 'next/link';
import StarBackground from '../ui/startBackground';



interface MainLayoutProps {
    title: string;
    divContent: ReactNode;
    darkBg?: Boolean
}

const MainLayout: React.FC<MainLayoutProps> = ({ title, divContent, darkBg }) => {
    let color=darkBg?"white":"black";
    return (
        
        <div > 
            {darkBg && <StarBackground />}
            <SideBar color={color} />
     

            <div className="flex grow flex-col h-screen  ml-20 mr-20  ">

                <div>
                    <Banner content={title}></Banner>
                </div>
                <div >
                    {divContent}
                </div>
            </div>

        </div>
    );
};

export default MainLayout;




