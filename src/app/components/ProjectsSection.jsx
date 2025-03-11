"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Soulayma Boutique e-commerce",
    description: `Soulayma Boutique is a full-stack e-commerce website
     built using MERN Stack technologies that specializes in selling hijabs,
      abayas, and other related products. The platform features an integrated customer
       service chatbot designed to enhance the user's shopping experience.`,
    image: "/images/projects/soulayma-boutique-project.png",
    tag: ["All", "Full Stack"],
    gitUrl: "https://github.com/Nouhad122/Soulayma-boutique",
    previewUrl: "/Under maintenance",
  },
  {
    id: 2,
    title: "ClipCast Youtube Clone",
    description: `ClipCast is a YouTube clone application developed using React.js that replicates
     the YouTube user interface while implementing several of its core functionalities through
      API integration.`,
    image: "/images/projects/clipCast-project.png",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/Nouhad122/ClipCast-YoutubeApi",
    previewUrl: "https://clip-cast-youtube-api.vercel.app/",
  },
  {
    id: 3,
    title: "Amara Haute Couture",
    description: `Amara Haute Couture is a premium fashion brand showcasing a distinctive collection
     of custom-designed abayas and dresses. Through its dedicated online platform, the brand effectively
      displays its products to establish market presence and attract new customers.`,
    image: "/images/projects/Amara-project.png",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/Nouhad122/Amara-Haute-Couture",
    previewUrl: "/Under maintenance",
  },
  {
    id: 4,
    title: "BeastMode",
    description: `BeastMode is a fitness website that integrates with Rapid API to deliver a comprehensive platform
     featuring over 1,300 exercises, personalized training scheduling capabilities, macronutrient calculation
      tools, and detailed nutrition planning resources.`,
    image: "/images/projects/BeastMode-project.png",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/Nouhad122/BeastMode",
    previewUrl: "https://beast-mode-rouge.vercel.app/",
  },
  {
    id: 5,
    title: "Tic Tac Toe",
    description: `A multiplayer Tic-Tac-Toe application that enables real-time gameplay between users,
     featuring responsive design and session tracking to deliver a classic strategic experience.`,
    image: "/images/projects/tic-tac-toe-project.png",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/Nouhad122/Tic-tac-toe",
    previewUrl: "https://tic-tac-toe-nu-ten-90.vercel.app/",
  },
  {
    id: 6,
    title: "CRUD System",
    description: `A streamlined application enabling efficient data operations through an intuitive
     interface that allows users to create, view, modify, and remove records with comprehensive
      validation controls.`,
    image: "/images/projects/CRUD-project.png",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/Nouhad122/cruds",
    previewUrl: "https://cruds-chi.vercel.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Frontend"
          isSelected={tag === "Frontend"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Full Stack"
          isSelected={tag === "Full Stack"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
