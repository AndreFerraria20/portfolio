import Image from "next/image";
import SplitLayout from "./layouts/splitLayout";

export default function Home() {
  const div1Content = (

    <div className="flex flex-col ">
      <div className="flex-ratio"></div>
      <div className=" grow">My work</div>
    </div>);
  const div2Content = (<div className=""></div>);

  return (
    <SplitLayout div1Content={div1Content} div2Content={div2Content} />
  );
}
