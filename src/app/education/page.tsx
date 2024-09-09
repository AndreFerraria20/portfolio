import MainLayout from "../layouts/mainLayout";
import SplitLayout from "../layouts/splitLayout";
import Timeline from '../ui/timeline'



export default function Education() {
  const items = [
    { date: "2002", title: 'Item 1', description: "ipsis lorumipsis lorumipsis lorumipsis lorumipsis " },
    { date: "2002", title: 'Item 2', description: "ipsis lorumipsis lorumipsis lorumipsis lorumipsis lorum" },
    { date: "2002", title: 'Item 3', description: "ipsis lorumipsis lorumipsis lorumipsis lorum" },
    { date: "2002", title: 'Item 4', description: "ipsis lorumipsis lorumipsis lorumipsis lorum" },
    { date: "2002", title: 'Item 4', description: "ipsis lorumipsis lorumipsis lorumipsis lorum" },
    { date: "2002", title: 'Item 4', description: "ipsis lorumipsis lorumipsis lorumipsis lorum" },

  ];
  const content = (<><div>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores sapiente, aperiam repudiandae assumenda alias, recusandae temporibus molestiae exercitationem aliquid, voluptatum voluptatibus soluta. Rerum consequuntur corporis error accusantium iste a ipsa!
  </div>
    <div className="pt-20 flex grow justify-center items-center">
      <Timeline items={items} title={""} />
    </div >

  </>
  );

  return (
    <MainLayout title="Education" divContent={content} />
  );
}
