'use client';
import React from "react";
import { ArrowRight, Code, TrendingUp, PenTool } from "lucide-react";
import { motion } from "framer-motion";

const Hero= () => {
  return (
    <section className="relative h-[calc(100vh-80px)] pt-20 overflow-hidden flex items-center">
      <div className="absolute   "></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400 mr-2"></span>
              Full-Stack Developer
            </div>

          <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl tracking-tight text-gray-900 dark:text-white mb-6">
  Creating{" "}
  <span className="text-blue-600 dark:text-blue-400">full-stack experiences</span>{" "}
  that blend performance, design, and real-world impact
</h1>




            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              I'm Anas Hisham, a passionate developer dedicated to building
              performant, accessible, and visually stunning applications. Let's
              turn your vision into reality.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
              >
                Get in touch
                <ArrowRight className="ml-2" size={18} />
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-white border border-gray-200 dark:border-gray-700 font-medium transition-colors"
              >
                View my work
              </a>
            </div>

            <div className="flex justify-center items-center gap-6 mt-12">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Available for work
                </span>
              </div>
              <div className="h-5 w-px bg-gray-300 dark:bg-gray-600"></div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                <span className="font-semibold">2+ years</span> of experience
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
