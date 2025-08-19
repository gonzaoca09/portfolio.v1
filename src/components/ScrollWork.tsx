"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Zenith Minds",
    colorClass: "text-green-400",
    description:
      "Developed ZenithMinds, an educational platform connecting students and instructors, fostering global collaboration and continuous learning.",
    imageUrl: "https://placehold.co/800x600",
    features: [
      "Built with Next.js, React, and TypeScript for scalability.",
      "Styled using Tailwind CSS with animations by Framer Motion.",
      "Used Zustand for state management and Zod for validation.",
      "Integrated MongoDB and RESTful APIs with Node.js and Express.",
    ],
    techStack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "TypeScript",
      "Framer Motion",
      "Zod",
      "Zustand",
      "MongoDB",
      "NodeJS",
    ],
  },
  {
    id: 2,
    title: "E-commerce Platform",
    colorClass: "text-sky-400",
    description:
      "A full-stack e-commerce site featuring product Browse, a shopping cart, and a secure checkout process powered by Stripe.",
    imageUrl: "https://placehold.co/800x600",
    features: [
      "Complete shopping cart and checkout functionality.",
      "Integration with Stripe for secure payments.",
      "Admin panel for product and order management.",
      "RESTful API backend built with Express and MongoDB.",
    ],
    techStack: ["React", "NodeJS", "ExpressJS", "MongoDB", "Stripe", "JWT"],
  },
  {
    id: 3,
    title: "Weather App",
    colorClass: "text-red-400",
    description:
      "A minimalist application that queries a weather API to display the real-time forecast based on the user's location, with a clean and responsive UI.",
    imageUrl: "https://placehold.co/800x600",
    features: [
      "Real-time data fetching from OpenWeatherMap API.",
      "Geolocation to automatically detect user's location.",
      "Dynamic background changes based on the weather condition.",
      "Built with vanilla JavaScript, HTML, and CSS.",
    ],
    techStack: ["JavaScript", "HTML5", "CSS3", "REST APIs"],
  },
];

const contentVariants = {
  offscreen: { opacity: 0, y: 0 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

function ScrollingImageSection({
  project,
  setActiveProjectId,
}: {
  project: typeof projects[0];
  setActiveProjectId: (id: number) => void;
}) {
  const { ref, inView } = useInView({ threshold: 0.7 });
  useEffect(() => {
    if (inView) setActiveProjectId(project.id);
  }, [inView, project.id, setActiveProjectId]);
  return (
    <section ref={ref} className="h-[80vh] relative px-60 ">
      <div className="absolute top-2 left-1/2 -translate-x-[45%] w-[90%] aspect-[4/3] rounded-xl overflow-hidden">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
    </section>
  );
}

function StickyProjectDetails({
  activeProject,
}: {
  activeProject: typeof projects[0];
}) {
  return (
    <div className="sticky top-20 w-full max-w-[500px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeProject.id}
          variants={contentVariants}
          initial="offscreen"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            {activeProject.title}
          </h3>
          <p className="text-lg leading-relaxed text-gray-400 mb-8">
            {activeProject.description}
          </p>
          <ul className="list-none mb-10 p-0">
            {activeProject.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start mb-4 text-gray-400 text-base"
              >
                <span className={`mr-4 ${activeProject.colorClass} text-xl leading-none`}>✦</span>
                {feature}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3">
            {activeProject.techStack.map((tech, index) => (
              <div
                key={index}
                className="bg-stone-800 text-gray-300 px-4 py-2 rounded-full text-sm font-medium border border-stone-600"
              >
                {tech}
              </div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default function PortfolioSectionFinal() {
  const [activeProjectId, setActiveProjectId] = useState(projects[0].id);
  const activeProject =
    projects.find((p) => p.id === activeProjectId) || projects[0];

  return (
    <section className="w-full">
      <div className="flex px-40 py-4 max-w-[1800px] mx-auto w-full gap-15">
        <div className="w-[55%] relative">
          {projects.map((project) => (
            <ScrollingImageSection
              key={project.id}
              project={project}
              setActiveProjectId={setActiveProjectId}
            />
          ))}
        </div>
        <div className="w-[45%] flex justify-center items-start">
          <StickyProjectDetails activeProject={activeProject} />
        </div>
      </div>
    </section>
  );
}
