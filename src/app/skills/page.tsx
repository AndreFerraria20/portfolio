import MainLayout from "../layouts/mainLayout";
import StarBackground from "../ui/startBackground";




export default function Skills() {
  const content = (
    <><StarBackground /><div> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores sapiente, aperiam repudiandae assumenda alias, recusandae temporibus molestiae exercitationem aliquid, voluptatum voluptatibus soluta. Rerum consequuntur corporis error accusantium iste a ipsa!</div></>);

  return (
    <MainLayout darkBg={true} title="My skills" divContent={content} />
  );
}
