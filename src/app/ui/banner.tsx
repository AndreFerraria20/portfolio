import React, { ReactNode } from 'react';

import Title from './title';
import { motion } from "framer-motion";

interface BannerProps {
    content: string;
}

const Banner: React.FC<BannerProps> = ({ content }) => {


    return (
        <main>
            <div className='h-screen  '>
                <div className="flex  flex-grow w-full h-[90vh] items-end  bg-primary text-secundary pb-10 overflow-hidden">
                    <div className="w-full  mb-20  ml-auto align-bottom ">
                        <div>
                            <Title title={content} href='' classes='items-center'></Title>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Banner;