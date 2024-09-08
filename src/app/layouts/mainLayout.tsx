import React, { ReactNode } from 'react';
import Banner from "../ui/banner";
import SideBar from '../ui/sidebar';
import Link from 'next/link';



interface MainLayoutProps {
    title: string;
    divContent: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ title,  divContent }) => {

    return (
        <div>
            <Link href={'/'} > <div className='w-10'><SideBar/></div></Link>
            
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




