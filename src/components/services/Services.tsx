import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Code, 
  Palette, 
  Smartphone, 
  Globe, 
  Database, 
  Shield,
  ArrowRight,
  CheckCircle,
  Rocket
} from 'lucide-react';
import { useScrollAnimation, staggerContainer, staggerItem } from '../../hooks/useScrollAnimation';
import { Button } from '../ui/Button';

const services = [
  {
    id: 'web-development',
    icon: Code,
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies and best practices.',
    features: ['React & Next.js', 'Node.js & Python', 'Cloud Deployment', 'Performance Optimization'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'mobile-development',
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile apps that deliver exceptional user experiences.',
    features: ['iOS & Android', 'React Native', 'Flutter', 'App Store Optimization'],
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 'ui-ux-design',
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive designs that convert visitors into customers.',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
    color: 'from-emerald-500 to-teal-500'
  },
  {
    id: 'digital-marketing',
    icon: Globe,
    title: 'Digital Marketing',
    description: 'Comprehensive digital marketing strategies to grow your online presence.',
    features: ['SEO Optimization', 'Social Media', 'Content Strategy', 'Analytics'],
    color: 'from-orange-500 to-red-500'
  },
  {
    id: 'data-analytics',
    icon: Database,
    title: 'Data Analytics',
    description: 'Turn your data into actionable insights with advanced analytics solutions.',
    features: ['Business Intelligence', 'Data Visualization', 'Predictive Analytics', 'Reporting'],
    color: 'from-indigo-500 to-purple-500'
  },
  {
    id: 'cybersecurity',
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Protect your digital assets with comprehensive security solutions.',
    features: ['Security Audits', 'Penetration Testing', 'Compliance', '24/7 Monitoring'],
    color: 'from-gray-600 to-gray-800'
  },
];

export const Services: React.FC = () => {
  const { ref, controls } = useScrollAnimation();
  const navigate = useNavigate();

  const handleLearnMore = (serviceId: string) => {
    navigate(`/services/${serviceId}`);
  };

  return (
    <section id="services" className="py-24 bg-gray-900">
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
              Our Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We offer a comprehensive suite of digital services to help your business 
              thrive in the modern digital landscape.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-700"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
                
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.color} text-white rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon size={32} />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.button
                  onClick={() => handleLearnMore(service.id)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center w-full px-4 py-3 bg-transparent border-2 border-gray-600 text-gray-300 rounded-lg hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 font-medium group"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </motion.div>
            ))}
          </div>

          {/* Enhanced CTA Section */}
          <motion.div
            variants={staggerItem}
            className="mt-20 relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 rounded-3xl p-12 text-white"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full -translate-x-20 -translate-y-20"></div>
              <div className="absolute bottom-0 right-0 w-60 h-60 bg-white rounded-full translate-x-30 translate-y-30"></div>
            </div>
            
            <div className="relative z-10 text-center">
              <motion.div
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-6"
              >
                <Rocket className="w-8 h-8 text-white" />
              </motion.div>
              
              <h3 className="text-4xl font-bold mb-4">
                Ready to Launch Your Next Project?
              </h3>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Let's transform your ideas into reality. Our expert team is ready to help you 
                achieve your digital goals with cutting-edge solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100 border-white"
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Start Your Project
                </Button>
                <Button
                  variant="ghost"
                  size="lg"
                  className="text-white border-white/30 hover:bg-white/10"
                  onClick={() => document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Our Work
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};