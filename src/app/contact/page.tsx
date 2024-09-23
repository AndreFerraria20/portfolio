import MainLayout from "../layouts/mainLayout";
import Image from "next/image";
import ButtonGo from "../ui/buttonGo";

export default function Contact() {
  const content = (
    <div className="px-10 lg:px-10">

      <h4 className="text-base md:text-lg text-secundary font-bold text-center">
        Hey! I'm André Ferraria, I've been close to computers since younger, and been passionate about it since..
      </h4>

      <div className="flex flex-col lg:flex-row mt-10 lg:mt-5 lg:mr-[23vw] lg:ml-20">

        <div className="mb-8 lg:mb-0 lg:mr-8 flex justify-center">
          <Image
            src="/profile.jpg"
            width={600}
            height={600}
            alt="My picture"
            className="rounded-md" 
          />
        </div>

      
        <div className="flex flex-col space-y-4 text-base md:text-lg text-gray-800">
          <p>


            I love coding, writing, reading and playing chess.
          </p>
          <p>
            Get in touch! If you want talk about a project collaboration, send an email to
            <span className="font-bold"> andreferraria20@gmail.com </span>
            and let's get in touch.
          </p>
          <div className="mt-10 lg:mt-16">
          <ButtonGo href="/curriculum.pdf" buttonText="My CV" target="_blank" rel="noopener noreferrer" />

      </div>

        </div>
      </div>



    </div>
  );

  return <MainLayout title="Contact" divContent={content} />;
}
