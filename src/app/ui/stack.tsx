'use client';

import React, { useRef, useEffect } from 'react';
import { useScroll } from 'framer-motion';
import Card from './card';

const Stack: React.FC = () => {
  const scrollRef = useRef(null);

  // Define projects with HTML content (JSX) for the description
  const projects = [
    {
      title: "FullStack Developer",
      descriptionPages: [
        <div key="1">
          <p>As a<span className='font-bold'> Fullstack Developer
          </span> i have a solid understanding of the web ecosystem
            ranging from foundational technologies (<span className='font-bold'>HTML , CSS, JavaScript</span>) to more advanced frameworks and databases.</p>
          <p>I aspire to integrate best practices, clean and readable code and deliver efficient and scalable applications.</p>
        </div>,
      ],
    },
    {
      title: "Frontend Development",
      descriptionPages: [
        <div key="1">
          <p>As a <span className='font-bold'> Frontend Developer
          </span> i design responsive, intuitive UI and thoughtful UX using Javascript frameworks and libraries like <span className='font-bold'>React.js</span > and <span className='font-bold'>Next.js</span>.

          </p>


          <p>My focus is on performance, accessibility, and intuitive design.</p>
        </div>,
      ],
    },
    {
      title: "Backend Development",
      descriptionPages: [
        <div key="1">
          As a <span className='font-bold'> Backend Developer
          </span> I focus on scalable server-side logic and APIs using technologies like<span className='font-bold'>nodejs</span> and <span className='font-bold'>Express.js</span> and databases like  <span className='font-bold'>MongoDB  SQL</span> and <span className='font-bold'> SQL</span>.

       
        </div>,
      ],
    },
  ];

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });


  return (
    <main ref={container}>
      <div ref={scrollRef} className={`h-[${projects.length * 100}vh]`}>
        {projects.map((project, index) => {
          const targetScale = 1 - (projects.length - index) * 0.05;

          return (
            <Card
              key={index}
              i={index}
              title={project.title}
              descriptionPages={project.descriptionPages}
              range={[index * 0.25, 1]}
              targetScale={targetScale}
              progress={scrollYProgress}
            />
          );
        })}
      </div>
    </main>
  );
};

export default Stack;
