'use client';
import React from "react";
import Link from 'next/link';
import { Linkedin, Github, Instagram, Twitter, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <span className="font-bold text-xl text-white">Anas Hisham</span>
            </Link>
            <p className="mb-4 text-gray-400">
              Passionate developer building seamless web, mobile and desktop experiences.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/anas-hisham-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/Anas-hisham"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.instagram.com/anashishamm/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
        
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#community"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Community
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

      

          <div>
            <h3 className="text-white font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="text-blue-400 mr-2">Email:</span>
                <a
                  href="mailto:anashisham.dev@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  anashisham.dev@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <span className="text-blue-400 mr-2">Phone:</span>
                <a
                  href="tel:+201111012953"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  +20 111 101 2953
                </a>
              </li>
              <li>
                <span className="text-blue-400 mr-2">Location:</span>
                <span className="text-gray-400">Cairo, Egypt</span>
              </li>
            </ul>

            <div className="mt-6">
              <a
                href="#contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors inline-block"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 sm:mb-0">
            &copy; {currentYear} Anas Hisham. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
