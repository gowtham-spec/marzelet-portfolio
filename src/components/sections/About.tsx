import React from 'react';
import { motion } from 'framer-motion';
import { Award, Target, Users, Lightbulb } from 'lucide-react';
import { useScrollAnimation, slideUpVariants, staggerContainer, staggerItem } from '../../hooks/useScrollAnimation';

const stats = [
  { icon: Award, label: 'Years Experience', value: '10+' },
  { icon: Users, label: 'Team Members', value: '25+' },
  { icon: Target, label: 'Success Rate', value: '98%' },
  { icon: Lightbulb, label: 'Innovations', value: '150+' },
];

const values = [
  {
    title: 'Innovation First',
    description: 'We embrace cutting-edge technologies and creative solutions to stay ahead of the curve.',
  },
  {
    title: 'Client-Centric',
    description: 'Your success is our priority. We build lasting partnerships through exceptional service.',
  },
  {
    title: 'Quality Driven',
    description: 'Every project meets our rigorous standards for excellence and attention to detail.',
  },
  {
    title: 'Transparent Process',
    description: 'Clear communication and regular updates keep you informed throughout your project.',
  },
];

export const About: React.FC = () => {
  const { ref, controls } = useScrollAnimation();

  return (
    <section id="about" className="py-24 bg-gray-900">
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
              About Marzelet
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're a passionate team of digital innovators, designers, and developers 
              committed to transforming businesses through exceptional digital experiences.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div 
            variants={staggerItem}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-gray-700"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mb-4">
                  <stat.icon size={32} />
                </div>
                <div className="text-3xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div variants={slideUpVariants}>
              <h3 className="text-3xl font-bold text-white mb-6">
                Our Mission
              </h3>
              <p className="text-lg text-gray-300 mb-6">
                At Marzelet, we believe in the power of digital transformation to revolutionize 
                how businesses connect with their audiences. Our mission is to create innovative, 
                user-centric solutions that drive growth and deliver exceptional value.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                From startups to enterprise clients, we've helped many organizations 
                achieve their digital goals through strategic thinking, creative design, 
                and robust development.
              </p>
              
      
            </motion.div>

            {/* Right Content - Values */}
            <motion.div variants={slideUpVariants}>
              <h3 className="text-3xl font-bold text-white mb-8">
                Our Values
              </h3>
              <div className="space-y-6">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 10 }}
                    className="p-6 rounded-xl bg-gray-800 border border-gray-700"
                  >
                    <h4 className="text-xl font-semibold text-white mb-3">
                      {value.title}
                    </h4>
                    <p className="text-gray-300">
                      {value.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};