'use client'

import React, { useEffect, useRef, useState } from 'react';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { motion } from 'framer-motion';
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
    const mediaQuery = useMediaQuery("(min-width: 768px)"); 
    const [inViewItems, setInViewItems] = useState<Set<number>>(new Set());

    const handleScroll = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
            const index = parseInt(entry.target.getAttribute('data-index') || '0', 10);
            if (entry.isIntersecting && !inViewItems.has(index)) {
                setInViewItems((prev) => new Set(prev.add(index)));
            }
        });
    };

    useEffect(() => {
        const observer = new IntersectionObserver(handleScroll, {
            threshold: 0.1, 
        });

        const elements = document.querySelectorAll('[data-index]');
        elements.forEach((el) => observer.observe(el));

        return () => {
            elements.forEach((el) => observer.unobserve(el));
        };
    }, [inViewItems]); 
    const gridClass = mediaQuery?"grid-cols-[1fr_0.25rem_1fr]":"grid-cols-[1fr_0.25rem]";
    const animationVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <>
            <h1 className="text-secundary-500">{title}</h1>
            <ul className={`${gridClass} text-secundary-500 grid w-[50rem] gap-x-5 `}>
                {items.map((item, index) => {
                    let itemClass;
                    let content;
                    let flap;
                    let left;

                    if (mediaQuery) {
                        left = index % 2 !== 0;
                        itemClass = left ? 'col-start-3 row-span-2' : 'col-start-1 row-span-2';
                        content = left ? "rounded-l-2xl" : "rounded-r-2xl";
                        flap = left ? "flapRight" : "flapLeft";
                    } else {
                        left = index % 2 !== 0;
                        itemClass = 'col-start-1 row-span-1';
                        content = "rounded-r-2xl";
                        flap = "flapLeft";
                    }

                    return (
                        <React.Fragment key={index}>
                            {left && <div className='relative bg-gray-300 w-1 row-span-1 flex grow col-start-2 col-span-1 justify-center'>
                                <div className='absolute w-8 h-8 border-8 border-primary rounded-full bg-secundary '>
                                </div>
                            </div>}
                            <motion.li
                                className={`col-span-1 ${itemClass} flex flex-col`}
                                initial="hidden"
                                animate={inViewItems.has(index) ? "visible" : "hidden"}
                                variants={animationVariants}
                                data-index={index}
                            >
                                <div className={`text-secundary bg-primary text-center content-center ${content} h-8 relative`}>
                                    <div className={`${flap}`}>.</div>
                                    {item.date}
                                </div>
                                <div className='flex flex-col flex-grow h-[250px] px-7'>
                                    <div className="font-bold">{item.title}</div>
                                    <div className='px-4 py-2'>{item.description}</div>
                                    <Divider />
                                </div>
                            </motion.li>
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
