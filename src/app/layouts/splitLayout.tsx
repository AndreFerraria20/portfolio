"use client"
import { motion } from 'framer-motion';
import React, { ReactNode, useEffect, useRef, useState } from 'react';

interface SplitLayoutProps {
  div1Content: ReactNode;
  div2Content: ReactNode;
  divTitle?: ReactNode;
}

const SplitLayout: React.FC<SplitLayoutProps> = ({ div1Content, div2Content, divTitle }) => {
  const [height, setHeight] = useState(0);
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });
  const ref = useRef<HTMLDivElement | null>(null);

  // Variants for slide-up animation
  const slideUpVariants = {
    hidden: {
      y: -height,
      transition: {
        type: 'spring',
        stiffness: 70,
        damping: 15,
        duration: 0.5,
        delay: 0.2,
      },
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  // Function to handle resize and re-trigger animation
  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      if (ref.current) {
        setHeight(ref.current.clientHeight); // Set the height based on the resized window
      }
    };

    // Check if window is defined (client-side)
    if (typeof window !== 'undefined') {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      window.addEventListener('resize', handleResize);
      if (ref.current) {
        setHeight(ref.current.clientHeight); // Set initial height
      }
    }

    // Cleanup event listener on unmount
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []); // Run only on mount

  return (
    <div className="flex bg-primary pl-4 lg:pl-0 flex-col lg:flex-row text-secundary min-h-screen w-screen">
      <motion.div
        ref={ref}
        className="z-50 absolute h-screen w-screen bg-secundary overflow-hidden -mx-4 lg:mx-0"
        initial="visible"
        animate="hidden"
        variants={slideUpVariants}
        key={windowSize.width} // Key forces re-render on window resize
      ></motion.div>

      {/* Left Side Content */}
      <div className="lg:w-[38.5%] grow-0 shrink-0 lg:pl-10 lg:pr-32 flex-col bg-primary sticky lg:h-screen">
        <div className="flex lg:h-[61.5%] lg:items-end justify-center -translate-x-4 lg:translate-x-0 pt-4 md:pt-0">
          {divTitle}
        </div>
        <div className="flex grow lg:pl-8 lg:pt-5 lg:pr-20 pt-5">{div1Content}</div>
      </div>

      {/* Right Side Content */}
      <div className="lg:w-[61.5%] flex grow bg-primary lg:min-h-screen pt-10">
        <div className="flex lg:pl-1 grow">{div2Content}</div>
      </div>
    </div>
  );
};

export default SplitLayout;
