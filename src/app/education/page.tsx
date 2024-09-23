import MainLayout from "../layouts/mainLayout";
import SplitLayout from "../layouts/splitLayout";
import Timeline from '../ui/timeline'



export default function Education() {
  const items = [
    { date: "2014 – 2018", title: 'IT Equipment Management and Maintenance Technician ', description: "Installing, configuring, and maintaining computer hardware, software, and networks. Includes troubleshooting and coding." },
    { date: "2018 - 2022", title: 'Computer science degree', description: "Software development, planning and configuration of networks and services, security, mobile computing, administration and intelligent data analysis, among other skills." },
    { date: "01/01/2023 – 31/03/2023", title: 'Research Grant for Optimizing the Picking Process in a Warehouse', description: "Developing agents that navigate the warehouse while avoiding collisions through advanced pathfinding algorithms and code optimization techniques." },
  ];
  const content = (<><div className="md:text-4xl text-2xl  text-center italic">
    My education path with my formal education, certificates and readings:
  </div>
    <div className="pt-20 flex grow justify-center items-center w-[90vw]">
      <Timeline items={items} title={""} />
    </div >

  </>
  );

  return (
    <MainLayout title="Education" divContent={content} />
  );
}
