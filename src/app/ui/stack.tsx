"use client"
import React, { useRef, useEffect, useState } from 'react';
import { useScroll } from 'framer-motion';
import Card from './card';


const Stack: React.FC = () => {
  const scrollRef = useRef(null);




  const projects = [
    { title: "FullStack developer", description: "I combine client-side and server-side technologies to build complete web applications. Proficient in HTML, CSS, JavaScript, Node.js, and various databases, I ensure cohesive and scalable solutions." },
    { title: "Frontend Development", 
  description: "I create responsive and engaging user interfaces using HTML, CSS, and JavaScript frameworks like React and Angular. My focus is on performance, accessibility, and intuitive design."}, 
 { title: "Backend Development", description: " I build server-side logic and APIs using technologies like Node.js and Python. Skilled in database management and implementing secure, scalable systems to support robust applications." }, 

];
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"]
  })
  useEffect(() => {
    scrollYProgress.on("change", e => console.log(scrollYProgress))
  }, [])
  return (
    <main ref={container} >{
      <div  ref={scrollRef}className={`h-[${projects.length * 100} vh]`}>
        {projects.map((project, index) => {
          const targetScale = 1 - ((projects.length - index) * 0.05);

          return <Card key={index} i={index}{...project} range={[index * 0.25, 1]} targetScale={targetScale} progress={scrollYProgress} />
        })}
      </div>
    }
    </main>
  );
};

export default Stack;