'use client';
import React, { useState } from 'react';
import { Code, Smartphone, TrendingUp, Users, CheckCircle, PlusCircle, Laptop, PanelTop } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const Services= () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [activeTab, setActiveTab] = useState('web');

 

  const serviceContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const serviceCardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  const services = [
    {
      id: 'web',
      title: 'Web Development',
      icon: <PanelTop className="text-blue-600 dark:text-blue-400" size={24} />,
      description: 'Custom websites and web applications built with modern technologies that deliver exceptional user experiences.'
    },
    {
      id: 'mobile',
      title: 'Mobile Development',
      icon: <Smartphone className="text-blue-600 dark:text-blue-400" size={24} />,
      description: 'Native and cross-platform mobile applications that look and perform great on any device.'
    },
    {
      id: 'desktop',
      title: 'Desktop Development',
      icon: <Laptop className="text-blue-600 dark:text-blue-400" size={24} />,
      description: 'Desktop app built with modern technologies that deliver exceptional user experiences.'
    },
    {
      id: 'marketing',
      title: 'Digital Marketing',
      icon: <TrendingUp className="text-blue-600 dark:text-blue-400" size={24} />,
      description: 'Result-driven marketing strategies that increase your online visibility and drive conversions.'
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">My Services</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            I offer end-to-end solutions to help your business thrive in the digital landscape.
          </p>
        </div>
        
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={serviceContainerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={serviceCardVariants}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-lg transition-all p-6"
              whileHover={{ y: -5 }}
            >
              <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg inline-block mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
        
        
      </div>
    </section>
  );
};

export default Services;