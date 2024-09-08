"use client"
import SplitLayout from "./layouts/splitLayout";
import Title from "./ui/title";
import Signature from "./ui/signature";
import { ReactTyped } from "react-typed";

export default function Home() {
  const div1Content = (
    <div>
      <div className="font-bold text-xl">
      I am 
      <ReactTyped  className=" italic" strings={[" Mobile Cross-Platform "," WebDeveloper"," Frontend"," WordPress Developer"]} typeSpeed={40} backSpeed={30} backDelay={1500} loop />
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quibusdam quasi rem beatae! Similique, quidem expedita fugit aliquam unde nostrum iure, fugiat atque praesentium quae facere quis illum hic temporibus!</p>
    </div>
  );
  const div2Content = (
    <div className="flex flex-col left-0 pr-20 h-full ">
      <Title href="skills " title="What i do" subtitle="My skills"></Title>
      <Title href="education" title="My education" subtitle="My skills" ></Title>
      <Title href="experience" title="Projects" subtitle="What i worked on"></Title>
      <Title href="contact" title="My contact" subtitle="What i worked on"></Title>

    </div>
  );
  const divTitle=(<div className="items-end"><Signature/></div>);

  return (
    <SplitLayout div1Content={div1Content} div2Content={div2Content} divTitle={divTitle} />
  );
}
