'use client'
import Image from 'next/image';
import { useTransform, motion, useScroll, MotionValue } from 'framer-motion';
import { useRef,useEffect } from 'react';

interface CardProps {
    i: number;
    title: string;
    description: string,
    progress: MotionValue,
    range: Array<number>,
    targetScale: number
}

const Card: React.FC<CardProps> = ({ i, title, description, progress, range, targetScale }) => {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'start start']
    })

    useEffect(() => {
       console.log(i)
      }, [])
    const scale = useTransform(progress, range, [1, targetScale]);

    return (

        <motion.div ref={container}  style={{scale:scale, top:`calc(-5vh + ${i * 20}px)`}} className='flex h-[100vh] items-center justify-center sticky  '>
            <motion.div
                className=" bg-secundary flex flex-col w-[80vw] h-[70vh]  pt-5 rounded-sm cardShadow" 
    
              >
                <div className='cardTitle w-full' ><h1 className='text-primary [font-size:3cqw]   '>{title}</h1></div>
                <div className="flex grow  text-primary bg-secundary ">
                    <div  >
                        <p className='px-10 text-justify'>{description}</p>
                    </div>
                </div>
            </motion.div>
        </motion.div>

    )
}

export default Card