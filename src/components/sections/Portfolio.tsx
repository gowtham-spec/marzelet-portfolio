import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Filter, Eye } from 'lucide-react';
import { useScrollAnimation, staggerContainer, staggerItem } from '../../hooks/useScrollAnimation';
import { Button } from '../ui/Button';

const categories = ['All', 'Web', 'Mobile', 'Design', 'E-commerce'];

const projects = [
  {
    id: 1,
    title: 'TechCorp Dashboard',
    description: 'A comprehensive analytics dashboard for enterprise clients with real-time data visualization.',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Web',
    technologies: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
    projectUrl: 'https://techcorp-dashboard-demo.netlify.app'
  },
  {
    id: 2,
    title: 'FinanceApp Mobile',
    description: 'A secure mobile banking application with biometric authentication and AI-powered insights.',
    image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Mobile',
    technologies: ['React Native', 'Firebase', 'TensorFlow'],
    projectUrl: 'https://financeapp-demo.netlify.app'
  },
  {
    id: 3,
    title: 'Brand Identity System',
    description: 'Complete brand identity and design system for a sustainable fashion startup.',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Design',
    technologies: ['Figma', 'Adobe CC', 'Framer'],
    projectUrl: 'https://brand-identity-demo.netlify.app'
  },
  {
    id: 4,
    title: 'EcoStore Platform',
    description: 'A sustainable e-commerce platform with carbon footprint tracking and green shipping options.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'E-commerce',
    technologies: ['Next.js', 'Stripe', 'Shopify', 'Vercel'],
    projectUrl: 'https://ecostore-demo.netlify.app'
  },
  {
    id: 5,
    title: 'HealthTech Portal',
    description: 'A telemedicine platform connecting patients with healthcare providers globally.',
    image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Web',
    technologies: ['Vue.js', 'WebRTC', 'Python', 'AWS'],
    projectUrl: 'https://healthtech-demo.netlify.app'
  },
  {
    id: 6,
    title: 'FoodieApp',
    description: 'A social food discovery app with AR menu scanning and personalized recommendations.',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Mobile',
    technologies: ['Flutter', 'ARCore', 'Firebase', 'ML Kit'],
    projectUrl: 'https://foodieapp-demo.netlify.app'
  }
];

export const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const { ref, controls } = useScrollAnimation();

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
        >
          {/* Section Header */}
          <motion.div variants={staggerItem} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Our Projects
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our latest projects and see how we've helped businesses 
              achieve their digital transformation goals.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div variants={staggerItem} className="flex justify-center mb-12">
            <div className="flex flex-wrap gap-2 p-2 bg-gray-700 rounded-2xl">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -10 }}
                  className="group bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-700"
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Overlay Actions */}
                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => window.open(project.projectUrl, '_blank')}
                        className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
                      >
                        <Eye size={16} />
                      </motion.button>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm font-medium rounded-full">
                        {project.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Button */}
                    <motion.a
                      href={project.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center justify-center w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium group shadow-lg hover:shadow-xl"
                    >
                      <Eye size={16} className="mr-2" />
                      View
                      <motion.div
                        className="ml-2"
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.div>
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* CTA */}
          <motion.div
            variants={staggerItem}
            className="mt-16 text-center"
          >
            <Button
              variant="primary"
              size="lg"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Discuss Your Project
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};