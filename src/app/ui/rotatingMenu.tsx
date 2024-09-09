"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

const articles = [
  {
    title: "Webscraping",
    url: "https://medium.com/@jeyprox/building-a-fully-customisable-carousel-slider-with-swipe-gestures-navigation-and-custom-cursor-4e986ccbd08f",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem incidunt dolore doloribus cum dicta totam fugiat aspernatur quis consectetur rerum ullam, sunt, voluptate omnis placeat distinctio id. Dolor, ullam facilis.",
  },
  {
    title: "Wordpress",
    url: "https://medium.com/@jeyprox/building-a-fully-customisable-input-component-with-nextjs-reacthookfrom-tailwindcss-and-ts-58874a2e3450",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem incidunt dolore doloribus cum dicta totam fugiat aspernatur quis consectetur rerum ullam, sunt, voluptate omnis placeat distinctio id. Dolor, ullam facilis.",
  },
  {
    title: "Wordpress Theme",
    url: "https://medium.com/@jeyprox/handling-forms-in-nextjs-with-busboy-reacthookform-and-ts-3f86c70545b3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem incidunt dolore doloribus cum dicta totam fugiat aspernatur quis consectetur rerum ullam, sunt, voluptate omnis placeat distinctio id. Dolor, ullam facilis.",
  },
  {
    title: "React project",
    url: "https://medium.com/@jeyprox/handling-forms-in-nextjs-with-busboy-reacthookform-and-ts-3f86c70545b3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem incidunt dolore doloribus cum dicta totam fugiat aspernatur quis consectetur rerum ullam, sunt, voluptate omnis placeat distinctio id. Dolor, ullam facilis.",
  },
  {
    title: "React project",
    url: "https://medium.com/@jeyprox/handling-forms-in-nextjs-with-busboy-reacthookform-and-ts-3f86c70545b3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem incidunt dolore doloribus cum dicta totam fugiat aspernatur quis consectetur rerum ullam, sunt, voluptate omnis placeat distinctio id. Dolor, ullam facilis.",
  },
];

export default function RotatingMenu() {
  const container = {
    initial: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {

        delayChildren: 0.3,
        staggerChildren: 0.6,

      }
    },
  };


  const rotateYVariants = {

    initial: { opacity: 0, rotateY: "-70deg" }, // Start rotated
    show: {
      opacity: 1,
      rotateY: "-20deg",


    },
    hover: {
      rotateY: "3deg"
    }
  };

  const contentPopUp = {
    initial: { opacity: 0, y: 40 },
    hover: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 200, damping: 20 } }
  };




  return (



    <motion.div className="flex flex-col grow text-secundary justify-end items-end perspective-750 transform-style-3d pr-10"

      initial="initial"
      animate="show"
      variants={container}


    >
      {articles.map((article, index) => {
        return (

          <motion.div
            key={`item-${index}`}

            variants={rotateYVariants}
            className="relative px-3 grow flex flex-col h-[250px] justify-end items-end py-10  origin-right"
            whileHover="hover"

          >
            <div className="text-primary-500 text-8xl grow font-bold">
              {article.title}

            </div>
            <motion.div
              className="absolute bottom-0 right-0 bg-secundary  text-primary p-4 rounded opacity-0 overflow-hidden"

              

              variants={contentPopUp}
            >
              {article.description}
            </motion.div>
          </motion.div>



        );
      })}
    </motion.div>





  );
}

/* "use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

const articles = [
  {
    title: "Webscraping",
    url: "https://medium.com/@jeyprox/building-a-fully-customisable-carousel-slider-with-swipe-gestures-navigation-and-custom-cursor-4e986ccbd08f",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem incidunt dolore doloribus cum dicta totam fugiat aspernatur quis consectetur rerum ullam, sunt, voluptate omnis placeat distinctio id. Dolor, ullam facilis.",
  },
  {
    title: "Wordpress",
    url: "https://medium.com/@jeyprox/building-a-fully-customisable-input-component-with-nextjs-reacthookfrom-tailwindcss-and-ts-58874a2e3450",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem incidunt dolore doloribus cum dicta totam fugiat aspernatur quis consectetur rerum ullam, sunt, voluptate omnis placeat distinctio id. Dolor, ullam facilis.",
  },
  {
    title: "Wordpress Theme",
    url: "https://medium.com/@jeyprox/handling-forms-in-nextjs-with-busboy-reacthookform-and-ts-3f86c70545b3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem incidunt dolore doloribus cum dicta totam fugiat aspernatur quis consectetur rerum ullam, sunt, voluptate omnis placeat distinctio id. Dolor, ullam facilis.",
  },
  {
    title: "React project",
    url: "https://medium.com/@jeyprox/handling-forms-in-nextjs-with-busboy-reacthookform-and-ts-3f86c70545b3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem incidunt dolore doloribus cum dicta totam fugiat aspernatur quis consectetur rerum ullam, sunt, voluptate omnis placeat distinctio id. Dolor, ullam facilis.",
  },
  {
    title: "React project",
    url: "https://medium.com/@jeyprox/handling-forms-in-nextjs-with-busboy-reacthookform-and-ts-3f86c70545b3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem incidunt dolore doloribus cum dicta totam fugiat aspernatur quis consectetur rerum ullam, sunt, voluptate omnis placeat distinctio id. Dolor, ullam facilis.",
  },
];

export default function RotatingMenu() {
  const container = {
    initial: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 1,
        delayChildren: 0.5, 
        duration: 1,
      },
    },
  };


  const rotateYVariants = {

    initial: { rotateY: "-70deg", opacity: 0 }, // Start rotated
    show: {
      rotateY: "-20deg", opacity: 1, transition: {
        delay: 1,
        duration: 1.5, 
        type: "spring", 
        stiffness: 60, 
        damping: 12, 

      },
    },
    hover:{rotateY: "3deg"}
  };

  const contentPopUp = {
    initial: { opacity: 0, y: 40 },
    hover: { opacity: 1, y: 0,delay:0, transition:{ type: "spring", stiffness: 200, damping: 20 } }
  };




  return (


    <motion.div className="flex flex-col grow text-white justify-end items-end perspective-750 transform-style-3d pr-10"

      initial="initial"
      animate="show"
      variants={container}

    >
      {articles.map((article, index) => {
        return (

          <motion.div
            key={`item-${index}`}
            variants={rotateYVariants}

            className="relative px-3 grow flex flex-col h-[250px] justify-end items-end py-10 "
            style={{
              transformOrigin: " right",
            }}
          >
            <div className="text-primary-500 text-8xl grow font-bold">
              {article.title}

            </div>
            <motion.div
              className="absolute bottom-0 right-0 bg-gray-800 text-white p-4 rounded opacity-0 overflow-hidden"

             

              variants={contentPopUp}
            >
              {article.description}
            </motion.div>
          </motion.div>



        );
      })}
    </motion.div>


  );
} */