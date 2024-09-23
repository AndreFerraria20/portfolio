"use client"
import React, { useEffect, useRef, useState } from 'react';
import { motion, useViewportScroll, useTransform, MotionValue, useScroll } from 'framer-motion';
import seedrandom from 'seedrandom';



const generateStarPositions = (count: number, seed: string) => {
  const rng = seedrandom(seed);
  const positions = [];
  for (let i = 0; i < count; i++) {
    positions.push({
      top: rng() * 100,
      left: rng() * 100,
    });
  }
  return positions;
};

const starLayers = [
  { count: 100, speed: -0.2, width: 1 },
  { count: 70, speed: -0.4, width: 2 },
  { count: 50, speed: -0.6, width: 3 },
];

const StarBackground: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const [height, setHeight] = useState<number>(0);
  const [direction, setDirection] = useState<number>(-1);
  const previousScrollY = useRef<number>(scrollYProgress.get());

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.clientHeight)

    }

  })




  const [starPositions, setStarPositions] = useState(
    starLayers.map((layer, index) => generateStarPositions(layer.count, 'seed' + index))
  );



  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      let direction = lastScrollY < window.scrollY ? -1 : 1;
      lastScrollY = window.scrollY;

      setStarPositions((prevPositions) =>
        prevPositions.map((layerPositions, layerIndex) =>
          layerPositions.map((pos) => {

            let newTop = pos.top - starLayers[layerIndex].speed * direction;

            // Wrap around to the top if the star reaches the bottom
            if (newTop < 0) {
              newTop = 100 + newTop; // Wrap around if it goes above the top
            } else if (newTop > 100) {
              newTop = newTop - 100; // Wrap around if it goes below the bottom
            }

            return { ...pos, top: newTop };
          })
        )
      );
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="fixed  -z-30 top-0   w-full h-screen bg-gray-950 overflow-hidden" ref={ref}>
      {starLayers.map((layer, index) => (
        <motion.div
          key={index}
          className="absolute top-0 left-0 w-full h-full"
          style={{
            y: scrollYProgress,
          }}
        >
          {starPositions[index].map((pos, idx)  => (
            <div
              key={idx}
              className="absolute bg-white rounded-full "
              style={{
                top: `${pos.top}%`,
                left: `${pos.left}%`,
                width: `${layer.width}px`,
                height: `${layer.width}px`,
              }}
            />
          ))}
        </motion.div>
      ))}
    </div>
  );
};

export default StarBackground;