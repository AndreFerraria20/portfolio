"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import MainLayout from "../layouts/mainLayout";
import Footer from "../ui/footer";
import Stack from "../ui/stack";
import { useScroll, motion, useTransform } from "framer-motion";

interface FadeDivProps {
  children: ReactNode;
}


function FadeDiv({ children }: FadeDivProps){
  const fadeDivRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: fadeDivRef,
    offset: ["end end", "start start"]
  });

  const [progress, setProgress] = useState(0);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.6, 0.8],
    [0, 1, 1, 0]
  );

  useEffect(() => {
    scrollYProgress.on("change", (e) => console.log(scrollYProgress));
  }, [scrollYProgress]);

  useEffect(() => {
    const unsubscribe = opacity.onChange((latest) => {
      setProgress(latest);
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <div className="h-screen flex items-center">
      <motion.div
        ref={fadeDivRef}
        className="justify-center flex flex-col"
        style={{ opacity: progress }}
      >
        {children}
      </motion.div>
    </div>
  );
}



export default function Skills() {
  const content = (
    <>
      <Stack />
      <div className="bg-fade rounded-xl flex flex-col md:flex-row mt-32 div-bg space-y-20 p-10" >
        <div className="flex-1 text-center grow-0 basis-1/2 h-full flex-row text-secundary md:text-3xl sticky top-32 md:top-1/2 whitespace-nowrap">
          <span>
            As{" "}
            <div className="subTitle inline-block">
              <h1>Wordpress</h1>
            </div>{" "}
            dev
          </span>        {" "}:
        </div>

        <div className="flex  flex-col items-stretch text-secundary">
          <FadeDiv>
            <span>
              I create and mantain websites using WordPress CMS wich includes aspects like:
            </span>
            <span className="italic text-gray-200 justify-center font-bold">
              Theme development/ plugin development / E-commerce Store Solutions
            </span>
          </FadeDiv>

        </div>
      </div>

   


      <div className="bg-fade rounded-xl flex flex-col md:flex-row my-[100vh] div-bg space-y-20 p-10" >
        <div className="flex-1 text-center grow-0 basis-1/2 h-full flex-row text-secundary md:text-3xl sticky top-32 md:top-1/2 whitespace-nowrap">
          <span>
            As a{" "}
            <div className="subTitle inline-block">
              <h1>Webscrapper </h1>
            </div>
            {" "}
            :
          </span>
        </div>


         <div className="flex  flex-col items-stretch text-secundary">
          <FadeDiv>
            <span>
              I create Webscrapping spiders that extract data from website and orgazine it in a structured way(csv files, databases, json, etc) using python libraries like:
            </span>
            <span className="italic text-gray-200 justify-center font-bold">
              Selenium/ Playwright/ Scrappy/ BeautifulSoup 
            </span>
          </FadeDiv>

        </div>
      </div>

      <Footer />
    </>
  );

  return <MainLayout darkBg={true} title="My skills" divContent={content} />;
}
