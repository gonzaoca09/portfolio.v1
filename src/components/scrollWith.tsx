"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useInView } from 'react-intersection-observer';
import type { CSSProperties } from 'react';
import Image from "next/image";

// --- DATOS DE LOS PROYECTOS ---
const projects = [
  {
    id: 1,
    title: "Zenith Minds",
    description: "Developed ZenithMinds, an educational platform connecting students and instructors, fostering global collaboration and continuous learning.",
    imageUrl: "https://placehold.co/800x600",
    features: [
      "Built with Next.js, React, and TypeScript for scalability.",
      "Styled using Tailwind CSS with animations by Framer Motion.",
      "Used Zustand for state management and Zod for validation.",
      "Integrated MongoDB and RESTful APIs with Node.js and Express.",
    ],
    techStack: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Framer Motion", "Zod", "Zustand", "MongoDB", "NodeJS"]
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description: "A full-stack e-commerce site featuring product Browse, a shopping cart, and a secure checkout process powered by Stripe.",
    imageUrl: "https://placehold.co/800x600",
    features: [
        "Complete shopping cart and checkout functionality.",
        "Integration with Stripe for secure payments.",
        "Admin panel for product and order management.",
        "RESTful API backend built with Express and MongoDB."
    ],
    techStack: ["React", "NodeJS", "ExpressJS", "MongoDB", "Stripe", "JWT"]
  },
  {
    id: 3,
    title: "Weather App",
    description: "A minimalist application that queries a weather API to display the real-time forecast based on the user's location, with a clean and responsive UI.",
    imageUrl: "https://placehold.co/800x600",
    features: [
        "Real-time data fetching from OpenWeatherMap API.",
        "Geolocation to automatically detect user's location.",
        "Dynamic background changes based on the weather condition.",
        "Built with vanilla JavaScript, HTML, and CSS."
    ],
    techStack: ["JavaScript", "HTML5", "CSS3", "REST APIs"]
  },
];

const contentVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

// --- COMPONENTES HIJOS ---

function ScrollingImageSection({ project, setActiveProjectId }: { project: typeof projects[0], setActiveProjectId: (id: number) => void }) {
  const { ref, inView } = useInView({ threshold: 0.7 });
  useEffect(() => { if (inView) setActiveProjectId(project.id); }, [inView, project.id, setActiveProjectId]);
  return (
    <section ref={ref} style={scrollingImageSectionStyle}>
      <div style={imageWrapper}>
        <Image src={project.imageUrl} alt={project.title} fill style={{ objectFit: 'contain' }} />
      </div>
    </section>
  );
}

function StickyProjectDetails({ activeProject }: { activeProject: typeof projects[0] }) {
  return (
    <div style={stickyContainer}>
      <AnimatePresence mode="wait">
        <motion.div key={activeProject.id} variants={contentVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.5, ease: "easeInOut" }}>
          <h2 style={projectTitle}>{activeProject.title}</h2>
          <p style={projectDescription}>{activeProject.description}</p>
          <ul style={featureList}>
            {activeProject.features.map((feature, index) => (
              <li key={index} style={featureItem}><span style={featureIcon}>✦</span>{feature}</li>
            ))}
          </ul>
          <div style={techStackContainer}>
            {activeProject.techStack.map((tech, index) => (<div key={index} style={techPill}>{tech}</div>))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// ===============================================================
// COMPONENTE PRINCIPAL
// ===============================================================
export default function PortfolioSectionFinal() {
  const [activeProjectId, setActiveProjectId] = useState(projects[0].id);
  const activeProject = projects.find(p => p.id === activeProjectId) || projects[0];

  return (
    <section style={portfolioSectionWrapper}>
      <div style={mainContainer}>
        <div style={leftColumn}>
          {projects.map((project) => (
            <ScrollingImageSection key={project.id} project={project} setActiveProjectId={setActiveProjectId} />
          ))}
        </div>
        <div style={rightColumn}>
          <StickyProjectDetails activeProject={activeProject} />
        </div>
      </div>
    </section>
  );
}

// ===============================================================
// ESTILOS
// ===============================================================

// La constante que define la altura a la que todo se alinea
const topOffset = '10vh'; // <- Reducí este valor para que todo suba.

const portfolioSectionWrapper: CSSProperties = {
    width: '100%',
    padding: '80px 0',
};

const mainContainer: CSSProperties = {
  display: 'flex',
  color: '#e5e7eb',
  padding: '0 4rem',
  margin: '0 auto',
  maxWidth: '1800px',
  width: '100%',
};

const leftColumn: CSSProperties = { width: '55%', position: 'relative' };
const rightColumn: CSSProperties = { width: '45%', display: 'flex', justifyContent: 'center', alignItems: 'flex-start' };

const scrollingImageSectionStyle: CSSProperties = {
  height: '80vh',
  position: 'relative',
};

const imageWrapper: CSSProperties = {
  position: 'absolute',
  top: topOffset, // Se alinea a la misma altura que el texto
  left: '50%',
  transform: 'translateX(-50%)',
  width: '90%',
  aspectRatio: '4 / 3',
  borderRadius: '12px',
  overflow: 'hidden',
};

const stickyContainer: CSSProperties = {
  position: 'sticky',
  top: topOffset, // El texto se "pega" a esta altura
  width: '100%',
  maxWidth: '500px',
};

const projectTitle: CSSProperties = { fontSize: '3rem', fontWeight: 'bold', color: '#ffffff', marginBottom: '1rem' };
const projectDescription: CSSProperties = { fontSize: '1.1rem', lineHeight: 1.6, color: '#d1d5db', marginBottom: '2rem' };
const featureList: CSSProperties = { listStyle: 'none', padding: 0, marginBottom: '2.5rem' };
const featureItem: CSSProperties = { display: 'flex', alignItems: 'flex-start', marginBottom: '1rem', fontSize: '1rem', color: '#d1d5db' };
const featureIcon: CSSProperties = { marginRight: '1rem', color: '#38bdf8', fontSize: '1.2rem', lineHeight: 1 };
const techStackContainer: CSSProperties = { display: 'flex', flexWrap: 'wrap', gap: '0.75rem' };
const techPill: CSSProperties = { backgroundColor: '#1f2937', color: '#d1d5db', padding: '0.5rem 1rem', borderRadius: '9999px', fontSize: '0.9rem', fontWeight: 500, border: '1px solid #374151' };