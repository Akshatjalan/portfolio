"use client";

import { use } from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";

// --- PROJECT DATA ---
const projectsData = {
  amazon: {
    title: "Amazon Redesign",
    tagline: "Reimagining the world's largest e-commerce platform.",
    category: "UI/UX Design",
    year: "2024",
    tech: ["Figma", "Next.js", "Tailwind CSS", "Framer Motion"],
    description:
      "A complete visual overhaul of the Amazon desktop experience. The goal was to reduce visual clutter, improve hierarchy, and introduce a modern, dark-mode aesthetic while maintaining the core functionality users rely on.",
    features: [
      "Streamlined Navigation Bar",
      "Modern Card Layouts",
      "Dark Mode First Approach",
      "Micro-interactions for 'Add to Cart'",
    ],
    image: "/amazon_mockup.png",
    link: "https://akshat-amazonredesign.netlify.app/",
    github: "https://github.com/Akshatjalan/Amazon-UI-Redesign",
  },
  codelance: {
    title: "CodeLance",
    tagline: "A freelance marketplace dedicated to developers.",
    category: "Full Stack",
    year: "2023",
    tech: ["React", "Node.js", "MongoDB", "Express", "Stripe API"],
    description:
      "CodeLance bridges the gap between companies and high-quality developers. Unlike generic freelance platforms, CodeLance features code-challenge based vetting and specialized project management tools for software deliverables.",
    features: [
      "Real-time Chat System",
      "Escrow Payment Integration",
      "Code Editor in Browser",
      "Automated Vetting Tests",
    ],
    image: "/codelance_mockup.png",
    link: "https://codelance-akshat.netlify.app/",
    github: "https://github.com/Akshatjalan/DevFreelance",
  },
  harrypotter: {
    title: "Harry Potter Wiki",
    tagline: "The ultimate magical database using public APIs.",
    category: "Frontend API",
    year: "2023",
    tech: ["React", "Rest API", "CSS Modules", "Axios"],
    description:
      "An interactive encyclopedia for the Wizarding World. This project focuses on efficient API data fetching, caching strategies, and creating an immersive 'magical' UI experience using complex CSS animations.",
    features: [
      "Character Search & Filter",
      "Spell Casting Animations",
      "Dynamic Routing for Houses",
      "Optimized Asset Loading",
    ],
    image: "/hp_mockup.png",
    link: "https://akshatjalan.github.io/HarryPotter-akshat/",
    github: "https://github.com/Akshatjalan/HarryPotter-akshat",
  },
};

export default function ProjectPage({ params }) {
  // 2. UNWRAP PARAMS HERE using the 'use' hook
  const { slug } = use(params);
  
  const project = projectsData[slug];

  // If project doesn't exist, show 404
  if (!project) {
    return notFound();
  }

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 50 },
    },
  };

  return (
    <main className="min-h-screen bg-[#111114] text-white font-sans selection:bg-[#ff6522] selection:text-white pb-20">
      {/* --- Header / Nav --- */}
      <div className="max-w-5xl mx-auto p-6 md:p-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 group"
        >
          <span className="p-2 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </span>
          <span className="font-medium text-sm">Back to Portfolio</span>
        </Link>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* --- Hero Section --- */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex flex-wrap gap-3 items-center">
                <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[#ff6522] text-xs font-bold uppercase tracking-wider">
                  {project.category}
                </span>
                <span className="text-gray-500 text-sm font-mono">
                  // {project.year}
                </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              {project.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl leading-relaxed">
              {project.tagline}
            </p>
          </motion.div>

          {/* --- Main Image --- */}
          <motion.div
            variants={itemVariants}
            className="w-full aspect-video relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-[#18181b]"
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* --- Content Grid --- */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-12">
            
            {/* Left Col: Details & Stack */}
            <motion.div variants={itemVariants} className="md:col-span-1 space-y-8">
              
              {/* Links */}
              <div className="flex gap-3">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-[#ff6522] hover:bg-[#ff7b42] text-white font-bold py-3 px-6 rounded-xl text-center transition-colors flex items-center justify-center gap-2"
                >
                  Live Demo
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-colors"
                >
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                </a>
              </div>

              {/* Technologies */}
              <div>
                <h3 className="text-gray-500 font-bold uppercase tracking-widest text-sm mb-4">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1.5 rounded-lg bg-[#18181b] border border-white/10 text-gray-300 text-sm font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Col: Description */}
            <motion.div variants={itemVariants} className="md:col-span-2 space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Overview</h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  {project.description}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Key Features</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 bg-[#18181b] p-4 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
                      <span className="mt-1 w-2 h-2 rounded-full bg-[#ff6522] flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
            
          </div>
        </motion.div>
      </div>
    </main>
  );
}