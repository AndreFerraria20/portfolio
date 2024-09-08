import MainLayout from "../layouts/mainLayout";
import SplitLayout from "../layouts/splitLayout";



export default function Contact() {
 const content=(<div> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores sapiente, aperiam repudiandae assumenda alias, recusandae temporibus molestiae exercitationem aliquid, voluptatum voluptatibus soluta. Rerum consequuntur corporis error accusantium iste a ipsa!</div>);
    
  return (
    <MainLayout title="Contact" divContent={content} />
  );
}
