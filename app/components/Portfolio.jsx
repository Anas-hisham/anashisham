"use client";
import React, { useState } from "react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Stream from "../imgs/Stream Buddy.png";
import Ecommerce from "../imgs/Ecommerce App.png";
import Architect from "../imgs/Architect Portfolio.png";
import Personal from "../imgs/Personal Portfolio.png";
import Business from "../imgs/Business Landing Page.png";
import Movie from "../imgs/Movie App.png";
import Image from "next/image";

const Portfolio = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: "1",
      title: "Stream Buddy",
      category: "desktop",
      image: Stream,
      description:
        "A desktop tool for stream teams to manage and export structured JSON data for live overlays in OBS and vMix. Features include real-time editing, preset management, and customizable views.",
      technologies: ["Electron", "Node.js", "Vue.js 3", "Pinia", "Tailwind CSS"],
      githubUrl: "https://github.com/Anas-hisham/Set-Up-Project-Scaffold",
    },
    {
      id: "2",
      title: "Ecommerce App",
      category: "web",
      image: Ecommerce,
      description:
        "A full-stack eCommerce app with product management, user authentication, cart system, Stripe checkout, and order tracking, built with MERN and Next.js.",
      technologies: [
        "MERN",
        "Next.js",
        "Google Login",
        "Stripe API",
        "Tailwind CSS",
      ],
      githubUrl: "https://github.com/Anas-hisham/Crystal-Power-Investment",
      liveUrl: "https://anas-hisham.github.io/Crystal-Power-Investment/",
    },
    {
      id: "3",
      title: "Ecommerce Mobile App",
      category: "mobile",
      image:
        "https://images.pexels.com/photos/5632391/pexels-photo-5632391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description:
        "A feature-rich mobile companion app for Crystal Power Investment, enabling seamless on-the-go account management, payments, and transactions.",
      technologies: ["MERN", "Expo", "Stripe API", "Tailwind CSS"],
      githubUrl:
        "https://github.com/Anas-hisham/Crystal_Power_Investment_Mobile",
    },

    {
      id: "4",
      title: "Architect Portfolio",
      category: "web",
      image: Architect,
      description:
        "A sleek and immersive portfolio website for an architect, designed to showcase their work through an elegant, interactive gallery. Built with responsive design to highlight architectural projects with visual impact.",
      technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      liveUrl: "https://mohamedkhaled-architect.netlify.app/",
    },
    {
      id: "5",
      title: "Personal Portfolio",
      category: "web",
      image: Personal,
      description:
        "A modern personal portfolio built with React and Tailwind CSS, featuring smooth animations, project showcases, and responsive design. Highlights my skills, experience, and development work with a clean, interactive interface.",
      technologies: ["React", "Tailwind CSS", "AOS Animation"],
      liveUrl: "https://anashisham.netlify.app/",
    },
    {
      id: "6",
      title: "Movie App",
      category: "web",
      image: Movie,
      description:
        "A full-featured movie exploration platform where users can browse trending films, read/write reviews, and manage personalized watchlists. Integrated with TMDb API for real-time movie data and recommendations.",
      technologies: ["React", "Node.js", "MongoDB", "TMDb API"],
      liveUrl: "https://anas-hisham-movie.netlify.app/",
    },
    {
      id: "7",
      title: "Business Landing Page",
      category: "web",
      description:
        "A high-conversion landing page designed to showcase products and services while maximizing customer engagement and sales potential. Built with performance and user experience in mind.",
      image: Business,
      technologies: ["HTML", "CSS", "JavaScript", "Bootsrtap"],
      liveUrl: "https://nebula-x-task.netlify.app/",
    },
    {
      id: "8",
      title: "Movie App",
      category: "mobile",
      image:
        "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description:
        "A dynamic mobile application for discovering trending movies and TV shows, featuring personalized recommendations powered by the TMDb API.",
      technologies: ["React Native", "Expo", "TMDb API", "Tailwind CSS"],
      githubUrl: "https://github.com/Anas-hisham/react-native-movie-app",
    },
    {
      id: "9",
      title: "NFT Marketplace",
      category: "mobile",
      image:
        "https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description:
        "A cutting-edge mobile NFT marketplace empowering digital artists to mint, buy, and sell unique digital assets with seamless wallet integration.",
      technologies: ["React Native", "Expo", "Tailwind CSS"],
      githubUrl: "https://github.com/Anas-hisham/NFT_MarketPlace",
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="portfolio"
      className="py-20 md:py-32 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">My Portfolio</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Explore a selection of my recent projects showcasing my expertise in
            web and mobile development.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex flex-wrap justify-center gap-2 bg-gray-100 dark:bg-gray-800 p-2 rounded-lg">
            {["all", "web", "mobile", "desktop"].map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  filter === category
                    ? "bg-blue-600 text-white"
                    : "bg-transparent hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
                }`}
                onClick={() => setFilter(category)}
              >
                {category === "all"
                  ? "All Projects"
                  : category === "web"
                  ? "Web Projects"
                  : category === "mobile"
                  ? "Mobile Apps"
                  : "Desktop Apps"}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all"
              whileHover={{ y: -5 }}
            >
              <div className="relative overflow-hidden h-48">
                {typeof project.image === "string" ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                ) : (
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    fill
                  />
                )}
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium rounded-full">
                    {project.category === "web"
                      ? "Web"
                      : project.category === "mobile"
                      ? "Mobile"
                      : "Desktop"}
                  </span>
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="inline-block px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    >
                      <Github size={16} className="mr-2" />
                      Code
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm font-medium transition-colors"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/Anas-hisham"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:underline"
          >
            View more projects on GitHub
            <ArrowRight className="ml-2" size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
