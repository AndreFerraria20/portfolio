'use client';

import { useTransform, motion, useScroll, MotionValue } from 'framer-motion';
import { useRef, useState, ReactNode } from 'react';
import Divider from './divider';

interface CardProps {
    i: number;
    title: string;
    descriptionPages: ReactNode[]; // Array of React elements (JSX)
    progress: MotionValue;
    range: Array<number>;
    targetScale: number;
}

const Card: React.FC<CardProps> = ({ i, title, descriptionPages, progress, range, targetScale }) => {
    const container = useRef(null);
    const [currentPage, setCurrentPage] = useState(0);

    const scale = useTransform(progress, range, [1, targetScale]);

    // Handle swipe gestures
    const handleSwipe = (
        event: MouseEvent | TouchEvent,
        info: { offset: { x: number; y: number }; velocity: { x: number; y: number }; }
    ) => {
        if (info.offset.x < -100) {
            // Swipe left
            setCurrentPage((prev) => Math.min(prev + 1, descriptionPages.length - 1));
        } else if (info.offset.x > 100) {
            // Swipe right
            setCurrentPage((prev) => Math.max(prev - 1, 0));
        }
    };

    return (
        <motion.div
            ref={container}
            style={{ scale: scale, top: `calc(-5vh + ${i * 20}px)` }}
            className="flex h-[100vh] items-center justify-center sticky"
        >
            <motion.div
                className="bg-secundary flex flex-col w-[80vw] md:w-[500px]  h-[80vh] md-[50vh] pt-5 rounded-sm cardShadow overflow-hidden"
            >
                <div className='flex   flex-col w-full items-center px-4 text-center'>
                    <h1 className="text-primary text-fit text-nowrap  ">{title}</h1>
                    <Divider></Divider>
                </div>


                <motion.div
                    className="flex grow text-primary bg-secundary overflow-y-auto "
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.1}
                    onDragEnd={handleSwipe}
                >
                    <div className="px-10 text-justify">
                        {/* Render the current page of description */}
                        {descriptionPages[currentPage]}
                    </div>
                </motion.div>
                {descriptionPages.length > 1 && (
                    <div className="page-indicators flex justify-center py-4 bg-secundary">
                        {descriptionPages.map((_, index) => (
                            <motion.div
                                key={index}
                                className={`w-3 h-3 mx-2 rounded-full cursor-pointer ${index === currentPage ? 'bg-primary' : 'bg-gray-300'}`}
                                whileHover={{ scale: 1.2 }}
                                onClick={() => setCurrentPage(index)}
                            />
                        ))}
                    </div>
                )}
            </motion.div>
        </motion.div>
    );
};

export default Card;
