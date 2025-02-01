import Photo from "@/components/Photo";
import Social from "@/components/Social";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const page = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/*text */}
          <div className="text-center xl:text-left">
            {/* <span className="text-xl">Frontend Developer</span> */}
            <h1 className="h1">
              Hello I'm <br />
              <span className="text-accent">Ankit Yadav</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Frontend Developer crafting interactive user-friendly, and
              performant web experiences using modern web technologies.
            </p>
            {/*Cv */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <a href="/assets/AnkitResume.pdf" download>
                  <span>Download Resume</span>
                  <FiDownload className="text-xl" />
                </a>
              </Button>
              <div className="mb-8 xl:mb-8">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/*button */}
          <div>
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
