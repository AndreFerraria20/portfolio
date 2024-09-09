import MainLayout from "../layouts/mainLayout";
import SplitLayout from "../layouts/splitLayout";

import Image from "next/image";


export default function Contact() {
  const content = (
    <div className="flex flex-row mt-20  mr-[23vw] ml-20">
    <Image
        src="/profile.png"
        width={500}
        height={500}
        alt="Picture of the author"
    />
        <div>
            <h4 className="text-lg text-theme-secundary font-bold">Hi, I am Andre. Programmer.</h4>
            <h4 className="text-lg text-title-primary font-bold">Creator and problem solver</h4>

            <h1 className=" mt-10">Let's Work Together
                <br></br> I am excited to collaborate with clients who are as passionate about their projects
                as I am about bringing them to life. Whether you're looking for a [service you offer]
                or need someone to help you brainstorm ideas, I am here to help.
                <br></br>Feel free to reach out to me at [Your Email] or connect with me on [Your Social Media Links].
                <br></br>Let's create something amazing together!
                Feel free to customize this template to better fit your personality, style, and specific services.
                Highlight your unique strengths and experiences to make your "About Me" page stand out.
            </h1>

        </div>

    </div>);

  return (
    <MainLayout title="Contact" divContent={content} />
  );
}
