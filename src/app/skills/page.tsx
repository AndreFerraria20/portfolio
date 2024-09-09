import MainLayout from "../layouts/mainLayout";
import Footer from "../ui/footer";
import Stack from "../ui/stack";
import StarBackground from "../ui/startBackground";




export default function Skills() {
  const content = (
    <><Stack />
      <div className=" bg-fade    rounded-xl flex flex-col md:flex-row mt-32 div-bg    space-y-20 p-20" >



        <div className="flex-1 grow-0 basis-1/2 h-full flex-row  text-secundary  text-3xl sticky top-1/2"><span >I am a <div className=" inline-block pr-4">
          <h1>Wordpress</h1>
        </div>developer!</span></div>
 
        <div className="flex grow-0 basis-1/2 flex-col   items-stretch text-secundary ">
          <div className=" justify-center h-[100vh]  flex flex-col "> <span> I am passionate about building excellent
            software that improves the lives of those around me. I specialize in creating software for clients ranging from
            individuals and small-businesses all the way to large enterprise corporations. What would you do if you had a
            software expert available at your fingertips?</span>
            <span className="italic text-gray-200 justify-center">
              Custom WordPress Plugins / Bespoke WordPress Themes / E-commerce Store Solutions
            </span>
          </div>
          <div className=" justify-center h-[100vh]  flex flex-col  "> <span> I am passionate about building excellent
            software that improves the lives of those around me. I specialize in creating software for clients ranging from
            individuals and small-businesses all the way to large enterprise corporations. What would you do if you had a
            software expert available at your fingertips?</span>
            <span className="italic text-gray-200 justify-center">
              Custom WordPress Plugins / Bespoke WordPress Themes / E-commerce Store Solutions
            </span>
          </div>
          <div className=" justify-center h-[100vh]  flex flex-col   "> <span> I am passionate about building excellent
            software that improves the lives of those around me. I specialize in creating software for clients ranging from
            individuals and small-businesses all the way to large enterprise corporations. What would you do if you had a
            software expert available at your fingertips?</span>
            <span className="italic text-gray-200 justify-center">
              Custom WordPress Plugins / Bespoke WordPress Themes / E-commerce Store Solutions
            </span>
          </div>
        </div>


      </div>
      <Footer/>
    </>);

  return (
    <MainLayout darkBg={true} title="My skills" divContent={content} />
  );
}
