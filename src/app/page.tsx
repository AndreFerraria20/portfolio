"use client"
import SplitLayout from "./layouts/splitLayout";
import Title from "./ui/title";
import Signature from "./ui/signature";
import { ReactTyped } from "react-typed";

import upWorkIcon from "../../public/upwork.svg"
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  const div1Content = (
    <div>

      <p className=""><span className="text-4xl leading-10">Hi.</span> Nice to meet you. Feel free to take a look around!</p>
      <p className="font-bold  inline  text-[5vw] lg:text-xl indent-5 ">
      I am &thinsp;
      <ReactTyped  className=" italic w-full  whitespace-nowrap	  " strings={["FullStack developer "," Webscrapper"," WordPress Developer"]} typeSpeed={40} backSpeed={30} backDelay={1500} loop />
      </p>
      <p >A passionate developer, always learning, with attention to detail, starting freelancing on: <span ><Link href={"https://www.upwork.com/freelancers/~016283c2afa8167fbb?viewMode=1"}><Image src={upWorkIcon} alt="Upwork" width={50} height={50}></Image></Link></span> </p>
    </div>
  );
  const div2Content = (
    <div className="flex flex-col left-0 lg:pr-20 h-full grow ">
      <Title href="skills " title="What i do" subtitle="My skills"></Title>
      <Title href="education" title="Education" subtitle="My journey"  ></Title>
      <Title href="projects" title="Projects" subtitle="What i worked on" underMaintenance={true}></Title>
      <Title href="contact" title=" contact" subtitle="Get in touch"></Title>

    </div>
  );
  const divTitle=(<div className="items-center lg:w-full w-3/4  flex "><Signature color="white"/></div>);

  return (
    <SplitLayout div1Content={div1Content} div2Content={div2Content} divTitle={divTitle} />
  );
}
