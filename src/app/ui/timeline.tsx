"use client"

import React from 'react';
import { useMediaQuery } from '../hooks/useMediaQuery';
import Divider from './divider';


interface TimelineItem {
    date: string;
    title: string;
    description: string;
}

interface TimeLineProps {
    items: TimelineItem[];
    title: string;
}

const Timeline: React.FC<TimeLineProps> = ({ items, title }) => {
    let rows = items.length / 2;
    let gridClass = "grid-cols-[1fr_0.25rem_1fr]";
    const mediaQuery = useMediaQuery("(min-width: 850px)"); // Matches the custom breakpoint

    return (
        <>
            <h1 className="text-secundary-500">{title}</h1>
            <ul className={gridClass + " text-secundary-500 grid w-[50rem] gap-x-5"}>

                {items.map((item, index) => {

                    let itemClass;
                    let content;
                    let flap;
                    let left;

                    if (mediaQuery) {
                        left = index % 2 !== 0
                        itemClass = left ? 'col-start-3 row-span-2' : 'col-start-1 row-span-2';
                        content = left ? "rounded-l-2xl" : "rounded-r-2xl"
                        flap = left ? "flapRight" : "flapLeft"
                    } else {
                        left = index % 2 !== 0
                        itemClass = 'col-start-1 row-span-1';
                        content = "rounded-r-2xl"
                        flap = "flapLeft"

                    }

                    console.log(mediaQuery)

                    return (

                        <React.Fragment key={index}>
                            {left && <div className='relative bg-gray-300 w-1 row-span-1 flex grow col-start-2 col-span-1 justify-center'>
                                <div className='absolute w-8 h-8 border-8 border-primary rounded-full bg-secundary '>
                                </div>
                            </div>}
                            <li className={` col-span-1 ${itemClass} flex flex-col`}>
                                <div className={`text-secundary bg-primary text-center content-center ${content}  h-8 relative`}>
                                    <div className={`${flap}`}>.</div>
                                    {item.date}
                                </div>
                                <div className='flex flex-col flex-grow h-[250px]  px-7'>
                                    <div className="font-bold">{item.title}</div>
                                    <div>{item.description}</div>
                                    <Divider/>
                                </div>

                            </li>
                            {(index % 2 === 0 || !mediaQuery) && <div className='relative bg-gray-300 w-1 row-span-1 flex grow col-start-2 col-span-1 justify-center'>
                                <div className='absolute w-8 h-8 border-8 border-primary rounded-full bg-secundary '></div></div>}

                        </React.Fragment>
                    );
                })}
            </ul>
        </>
    );
};

export default Timeline;
