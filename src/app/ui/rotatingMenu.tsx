"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import ButtonGo from "./buttonGo";

const articles = [
  {
    title: "Webscraping",
    url: "https://medium.com/@jeyprox/building-a-fully-customisable-carousel-slider-with-swipe-gestures-navigation-and-custom-cursor-4e986ccbd08f",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem incidunt dolore doloribus cum dicta",
  },
  {
    title: "Wordpress",
    url: "https://medium.com/@jeyprox/building-a-fully-customisable-input-component-with-nextjs-reacthookfrom-tailwindcss-and-ts-58874a2e3450",
    description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem incidunt dolore doloribus cum dicta totam fugiat aspernatur quis consectetur rerum ullam",  },
  {
    title: "Wordpress Theme",
    url: "https://medium.com/@jeyprox/handling-forms-in-nextjs-with-busboy-reacthookform-and-ts-3f86c70545b3",
    description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem incidunt dolore doloribus cum dicta totam fugiat aspernatur quis consectetur rerum ullam",  },
  {
    title: "React project",
    url: "https://medium.com/@jeyprox/handling-forms-in-nextjs-with-busboy-reacthookform-and-ts-3f86c70545b3",
    description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem incidunt dolore doloribus cum dicta totam fugiat aspernatur quis consectetur rerum ullam",  },
  {
    title: "React project",
    url: "https://medium.com/@jeyprox/handling-forms-in-nextjs-with-busboy-reacthookform-and-ts-3f86c70545b3",
    description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem incidunt dolore doloribus cum dicta totam fugiat aspernatur quis consectetur rerum ullam",  },
];

export default function RotatingMenu() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [clickedIndex, setClickedIndex] = useState<number | null>(null); // Track clicked index

  // Container variants controlling staggered animations
  const containerVariants = {
    initial: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.3, // Initial delay for children
        staggerChildren: 0.6, // Controls the stagger timing
      },
    },
  };

  // Variants for the rotating items
  const itemVariants = {
    initial: { opacity: 0, rotateY: "-70deg" },
    show: {
      opacity: 1,
      rotateY: "-20deg",
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20,
      },
    },
    hover: {
      rotateY: "3deg",
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
      },
    },
  };

  // Variants for content pop-up on hover/click
  const contentPopUpVariants = {
    initial: { opacity: 0, y: 40 },
    hover: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 200, damping: 20 } },
  };

  return (
    <motion.div
      className="flex flex-col grow text-secondary justify-end items-end perspective-800 transform-style-3d pr-10"
      initial="initial"
      animate="show"
      variants={containerVariants}
    >
      {articles.map((article, index) => (
        <motion.div
          key={`item-${index}`}
          variants={itemVariants}
          onMouseEnter={() => setHoveredIndex(index)} // Trigger hover effect manually
          onMouseLeave={() => setHoveredIndex(null)} // Reset hover effect
          onClick={() => setClickedIndex(clickedIndex === index ? null : index)} // Toggle clicked index
          animate={
            hoveredIndex === index || clickedIndex === index
              ? "hover"
              : "show" // Trigger hover animation based on state
          }
          className="relative px-3 grow flex flex-col justify-end items-end py-10 origin-right text-secundary cursor-pointer"
          style={{
            transformOrigin: "right",
          }}
        >

          <div className="text-secondary text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-nowrap">
            {article.title}
          </div>

          <motion.div
            className="flex flex-col w-full sm:w-4/5 md:w-2/3 bg-secundary text-primary p-4 rounded mt-4 "
            initial="initial"
            animate={
              hoveredIndex === index || clickedIndex === index
                ? "hover"
                : "initial"
            } 
            variants={contentPopUpVariants}
          >
            <p className="text-base sm:text-sm md:text-sm lg:text-2xl">
              {article.description}
            </p>
            <ButtonGo buttonText="GitHub" />
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
}
