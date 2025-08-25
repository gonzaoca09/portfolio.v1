"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, FC } from "react";
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
      { clave: "Next.js", valor: "nextdotjs" },
      { clave: "React", valor: "react" },
      { clave: "TypeScript", valor: "typescript" },
      { clave: "Tailwind CSS", valor: "tailwindcss" },
      { clave: "Framer Motion", valor: "framer" },
      { clave: "Zod", valor: "zod" },
      { clave: "MongoDB", valor: "mongodb" },
      { clave: "Node.js", valor: "node.js" },
      { clave: "Express", valor: "express" },
    ],
  },
  {
    id: 2,
    title: "E-commerce Platform",
    colorClass: "text-sky-400",
    description: "A full-stack e-commerce site featuring product Browse, a shopping cart, and a secure checkout process powered by Stripe.",
    imageUrl: "https://placehold.co/800x600",
    features: [
      "Complete shopping cart and checkout functionality.",
      "Integration with Stripe for secure payments.",
      "Admin panel for product and order management.",
      "RESTful API backend built with Express and MongoDB.",
    ],
    techStack: [
      { clave: "Stripe", valor: "stripe" },
      { clave: "Express", valor: "express" },
      { clave: "MongoDB", valor: "mongodb" },
    ],
  },
  {
    id: 3,
    title: "Weather App",
    colorClass: "text-red-400",
    description: "A minimalist application that queries a weather API to display the real-time forecast based on the user's location, with a clean and responsive UI.",
    imageUrl: "https://placehold.co/800x600",
    features: [
      "Real-time data fetching from OpenWeatherMap API.",
      "Geolocation to automatically detect user's location.",
      "Dynamic background changes based on the weather condition.",
      "Built with vanilla JavaScript, HTML, and CSS.",
    ],
    techStack: [
      { clave: "JavaScript", valor: "javascript" },
      { clave: "HTML5", valor: "html5" },
      { clave: "CSS3", valor: "css" },
    ],
  },
];

const contentVariants = {
  offscreen: { opacity: 0, y: 0 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

// Hook personalizado para detectar el tamaño de la pantalla (media queries)
function useMediaQuery(query: string): boolean | null {
  const [matches, setMatches] = useState<boolean | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    
    const updateMatches = () => {
      setMatches(mediaQuery.matches);
    };

    // Establecer el estado inicial
    updateMatches();

    // Escuchar cambios
    mediaQuery.addEventListener("change", updateMatches);

    // Limpieza al desmontar
    return () => {
      mediaQuery.removeEventListener("change", updateMatches);
    };
  }, [query]);

  return matches;
}

type Project = (typeof projects)[0];

const ScrollingImageSection: FC<{ project: Project; setActiveProjectId: (id: number) => void; }> = ({ project, setActiveProjectId }) => {
  const { ref, inView } = useInView({ threshold: 0.6 });
  useEffect(() => {
    if (inView) setActiveProjectId(project.id);
  }, [inView, project.id, setActiveProjectId]);
  return (
    <section ref={ref} className="flex ">
      <div className="w-full max-w-3xl aspect-square rounded-xl overflow-hidden relative">
        <Image src={project.imageUrl} alt={project.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-contain" />
      </div>
    </section>
  );
}

function StickyProjectDetails({
  activeProject,
}: {
  activeProject: Project;
}) {
  return (
    <div className="sticky top-32 h-fit">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeProject.id}
          variants={contentVariants}
          initial="offscreen"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="text-md">

          
          <h3 className="text-2xl font-bold text-white mb-4">
            <span className={`${activeProject.colorClass}`}>– </span>{activeProject.title}
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
                className="flex gap-2 bg-stone-800 text-gray-300 px-4 py-2 rounded-full text-sm font-medium border border-stone-600"
              >
                <Image height="16" width="16" alt={tech.clave} src={`https://cdn.simpleicons.org/${tech.valor}`}></Image>
                {tech.clave}
              </div>
              
            ))}

          </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

const ProjectCard: FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="overflow-hidden flex flex-col shadow-lg">
      <div className="relative w-full aspect-video">
        <Image src={project.imageUrl} alt={project.title} fill className="object-cover rounded-xl" />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white mb-4">{project.title}</h3>
        <p className="text-lg leading-relaxed text-gray-400 mb-8">{project.description}</p>
        {/* <ul className="list-none mb-10 p-0">
          {project.features.map((feature, index) => (
            <li key={index} className="flex items-start mb-4 text-gray-400 text-base">
              <span className={`mr-4 ${project.colorClass} text-xl leading-none`}>✦</span>
              {feature}
            </li>
          ))}
        </ul> */}
        <div className="flex flex-wrap gap-3 mt-auto pt-2">
          {project.techStack.map((tech, index) => (
            <div key={index} className="bg-stone-700 text-gray-300 px-4 py-2 rounded-full text-xs">
              {tech.clave}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function PortfolioSectionFinal() {
  const isDesktop = useMediaQuery("(min-width: 997px)");
  const [activeProjectId, setActiveProjectId] = useState(projects[0].id);
  const activeProject = projects.find((p) => p.id === activeProjectId) || projects[0];

  if (isDesktop === null) {
    return <section className=" min-h-screen" />; // Muestra un placeholder o loader para evitar parpadeos
  }

  if (!isDesktop) {
    // Vista para Móvil y Tablet: Una cuadrícula de tarjetas
    return (
      <section className=" px-4 sm:px-8 py-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => <ProjectCard key={project.id} project={project} />)}
          </div>
        </div>
      </section>
    );
  }

  // Vista para Escritorio: La animación de scroll original
  return (
    <section className="">
      <div className="mx-auto flex max-w-[1300px] gap-16 px-8 py-10">
        <div className="w-2/3 ">{projects.map((project) => (<ScrollingImageSection key={project.id} project={project} setActiveProjectId={setActiveProjectId} />))}</div>
        <div className="w-1/2 my-20"><StickyProjectDetails activeProject={activeProject} /></div>
      </div>
    </section>
  );
}
