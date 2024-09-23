import MainLayout from "../layouts/mainLayout";
import SplitLayout from "../layouts/splitLayout";
import RotatingMenu from "../ui/rotatingMenu";



export default function Projects() {
  const content = (
    <div className="text-white text-4xl  text-center italic">
      Here's some of my projects that I have worked on:      <RotatingMenu/>
    </div>);

  return (
    <MainLayout darkBg={true} title="Projects" divContent={content} />
  );
}
