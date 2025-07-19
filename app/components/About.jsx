'use client';
import React from "react";
import {
  CheckCircle,
  Award,
  Book,
  Code,
  Coffee,
  Globe,
  Briefcase,
} from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About= () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
      id="about"
      className="overflow-hidden py-20 md:py-32 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            I blend technical expertise with a passion for Full Stack apps &
            digital marketing to create comprehensive solutions that drive
            business growth.
          </p>
        </div>
        <div className="text-center mb-20">
          <motion.h3
            variants={itemVariants}
            className="text-2xl font-bold mb-6"
          >
            Full-Stack Developer & Digital Marketing Specialist
          </motion.h3>

          <motion.p
            variants={itemVariants}
            className="text-gray-600 dark:text-gray-400"
          >
            With over 2 years of experience in web and mobile development, I've
            helped businesses of all sizes establish their digital presence and
            optimize their online marketing strategies.
          </motion.p>
        </div>
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 gap-16 lg:px-10">
          {/* <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
            className="relative"
          >
            <motion.div variants={itemVariants} className="relative z-10">
              <img
                src="https://images.pexels.com/photos/7661633/pexels-photo-7661633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Anas Hisham portrait"
                className="rounded-lg shadow-xl"
              />
            </motion.div>

            <motion.div
              variants={itemVariants}
              className=" z-10 absolute -bottom-8 -right-8 bg-blue-600 dark:bg-blue-700 text-white p-6 rounded-lg shadow-lg max-w-xs "
            >
              <div className="flex items-center mb-3">
                <Coffee className="mr-2" size={20} />
                <span className="font-medium">
                  Always learning, always growing
                </span>
              </div>
              <p className="text-sm text-blue-100">
                I believe in continuous improvement and staying ahead of
                technology trends to deliver the best solutions.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="absolute -top-8 -left-8 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg border-4 border-blue-100 dark:border-gray-700"
            >
              <Code className="text-blue-600 dark:text-blue-400" size={32} />
            </motion.div>
          </motion.div> */}

          <div className="space-y-4">
            <h4 className="font-bold text-lg mb-4">
              My Professional Experience
            </h4>
            <motion.div variants={itemVariants} className="flex">
              <div>
                <h4 className="font-medium">Full Stack Development</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Building scalable web applications with MERN Satck and
                  modern frameworks
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex">
              <div>
                <h4 className="font-medium">Mobile App Development</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Creating native and cross-platform mobile experiences with
                  React Native
                </p>
              </div>
            </motion.div>
            <motion.div variants={itemVariants} className="flex">
              <div>
                <h4 className="font-medium">Desktop Development</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Building scalable web applications with Elctron, Vue.js, and
                  modern frameworks
                </p>
              </div>
            </motion.div>
            <motion.div variants={itemVariants} className="flex">
              <div>
                <h4 className="font-medium">Digital Marketing</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Driving growth through SEO, social media, and content
                  marketing strategies
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-lg mb-4 ">My Professional Journey</h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <Briefcase
                  className="text-blue-600 dark:text-blue-400 mr-3 flex-shrink-0"
                  size={20}
                />
                <div>
                  <p className="font-medium">Software Engineer</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Leading development projects and teams (2025-Present)
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <Globe
                  className="text-blue-600 dark:text-blue-400 mr-3 flex-shrink-0"
                  size={20}
                />
                <div>
                  <p className="font-medium">Freelance Developer</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Working with international clients (2023-Present)
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <Award
                  className="text-blue-600 dark:text-blue-400 mr-3 flex-shrink-0"
                  size={20}
                />
                <div>
                  <p className="font-medium">Multiple Certifications</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Google, Manara and more
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
