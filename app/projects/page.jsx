"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import { Description } from "@radix-ui/react-dialog";
import { TooltipTrigger } from "@radix-ui/react-tooltip";

const projects = [
  {
    num: "01",
    category: "Full-Stack",
    title: "Crime Protal",
    description:
      "The Crime Management Portal is a comprehensive digital platform designed to streamline crime reporting, investigation, and law enforcement operations. It enables law enforcement agencies, government authorities, and the public to collaborate efficiently in tackling crime and ensuring public safety.",
    stack: [
      { name: "React" },
      { name: "Tailwind.css" },
      { name: " Javascript" },
    ],
    image: "/assets/work/Responses.png",
    live: "https://crimepetrol.netlify.app/",
    github: "https://github.com/manojRawat5/B41_WEB_033_Responsive-Rebels",
  },
  {
    num: "02",
    category: "Front-End",
    title: "UsabilityHub",
    description:
      "UsabilityHub is a remote user research platform that takes the guesswork out of design decisions by validating them with real users.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: " Javascript" }],
    image: "/assets/work/Use.png",
    live: "https://delicate-kleicha-23127a.netlify.app/",
    github: "https://github.com/Ankit-Khairwal/My-Website",
  },
  {
    num: "03",
    category: "Front-End",
    title: "Real State",
    description: "Use for real state website. It is a responsive website. ",
    stack: [{ name: "Html 5" }, { name: "Tailwind" }, { name: " Javascript" }],
    image: "/assets/work/Real.png",
    live: "",
    github: "",
  },
];

const Project = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSildeChange = (swiper) => {
    //get current slide index
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/*outline */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/*Project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repo</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSildeChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/*overlay */}
                      <div></div>
                      {/*image */}
                      <div className="relative w-full h-full ">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Project;
