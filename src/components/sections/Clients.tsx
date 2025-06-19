import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation, staggerContainer, staggerItem } from '../../hooks/useScrollAnimation';
import { Button } from '../ui/Button';
import { Star, Award, Users, TrendingUp } from 'lucide-react';

const clients = [
  {
    name: 'Amazon',
    logo: 'A',
    description: 'E-commerce Platform Enhancement',
    color: 'from-orange-500 to-yellow-500'
  },
  {
    name: 'Wipro',
    logo: 'W',
    description: 'Digital Transformation Solutions',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    name: 'Microsoft',
    logo: 'M',
    description: 'Cloud Infrastructure Development',
    color: 'from-blue-600 to-indigo-600'
  },
  {
    name: 'Google',
    logo: 'G',
    description: 'AI-Powered Applications',
    color: 'from-red-500 to-pink-500'
  },
  {
    name: 'IBM',
    logo: 'I',
    description: 'Enterprise Software Solutions',
    color: 'from-gray-600 to-gray-800'
  },
  {
    name: 'Oracle',
    logo: 'O',
    description: 'Database Management Systems',
    color: 'from-red-600 to-orange-600'
  }
];

export const Clients: React.FC = () => {
  const { ref, controls } = useScrollAnimation();

  return (
    <section className="py-24 bg-gray-900">
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
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're proud to partner with some of the world's most innovative companies 
              to deliver exceptional digital solutions.
            </p>
          </motion.div>

          {/* Clients Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
            {clients.map((client, index) => (
              <motion.div
                key={client.name}
                variants={staggerItem}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group flex flex-col items-center p-6 bg-gray-800 rounded-2xl hover:shadow-lg transition-all duration-300 border border-gray-700"
              >
                {/* Logo */}
                <div className={`w-16 h-16 bg-gradient-to-br ${client.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <span className="text-white font-bold text-2xl">
                    {client.logo}
                  </span>
                </div>
                
                <h3 className="font-semibold text-white text-center mb-2">
                  {client.name}
                </h3>
                
                <p className="text-xs text-gray-400 text-center leading-relaxed">
                  {client.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Stats Section */}
          <motion.div
            variants={staggerItem}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          >
            <div className="text-center p-6 bg-gray-800 rounded-2xl shadow-sm border border-gray-700">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-500/20 rounded-xl mb-4">
                <TrendingUp className="w-6 h-6 text-blue-400" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div className="text-center p-6 bg-gray-800 rounded-2xl shadow-sm border border-gray-700">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-500/20 rounded-xl mb-4">
                <Users className="w-6 h-6 text-green-400" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-gray-300">Enterprise Clients</div>
            </div>
            <div className="text-center p-6 bg-gray-800 rounded-2xl shadow-sm border border-gray-700">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-yellow-500/20 rounded-xl mb-4">
                <Star className="w-6 h-6 text-yellow-400" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">99%</div>
              <div className="text-gray-300">Client Satisfaction</div>
            </div>
            <div className="text-center p-6 bg-gray-800 rounded-2xl shadow-sm border border-gray-700">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-500/20 rounded-xl mb-4">
                <Award className="w-6 h-6 text-purple-400" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-300">Support Available</div>
            </div>
          </motion.div>

          {/* Enhanced Success Stories CTA */}
          <motion.div
            variants={staggerItem}
            className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700 rounded-3xl p-12 text-white"
          >
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full translate-x-32 -translate-y-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full -translate-x-24 translate-y-24"></div>
            </div>
            
            <div className="relative z-10 text-center">
              <motion.div
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-2xl mb-6"
              >
                <Award className="w-10 h-10 text-white" />
              </motion.div>
              
              <h3 className="text-4xl font-bold mb-4">
                Join Our Growing List of Success Stories
              </h3>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Ready to transform your business with cutting-edge digital solutions? 
                Let's create something amazing together.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg"
                >
                  Start Your Project Today
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                  className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors"
                >
                  View Case Studies
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};