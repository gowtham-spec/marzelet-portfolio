import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, CheckCircle, Target, Users, Sparkles, Zap, Shield } from 'lucide-react';
import { Button } from '../ui/Button';
import picture from "../../assets/picture.jpg"

export const Hero: React.FC = () => {
  const scrollToServices = () => {
    const element = document.querySelector('#services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left">

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mb-8"
            >
              <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Transform Your
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400">
                  Digital Vision
                </span>
              </h2>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl"
            >
              We create exceptional digital experiences that drive growth, 
              engage audiences, and deliver measurable results for forward-thinking businesses.
            </motion.p>

            {/* Value Propositions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
            >
              <div className="flex items-center p-4 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 shadow-sm">
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center mr-3">
                  <Zap className="w-5 h-5 text-blue-400" />
                </div>
                <span className="text-sm font-semibold text-gray-200">
                  Cutting-edge Solutions
                </span>
              </div>

              <div className="flex items-center p-4 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 shadow-sm">
                <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center mr-3">
                  <Target className="w-5 h-5 text-purple-400" />
                </div>
                <span className="text-sm font-semibold text-gray-200">
                  Results-driven Strategy
                </span>
              </div>

              <div className="flex items-center p-4 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 shadow-sm">
                <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center mr-3">
                  <Users className="w-5 h-5 text-green-400" />
                </div>
                <span className="text-sm font-semibold text-gray-200">
                  Client-focused Success
                </span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                variant="primary"
                size="lg"
                onClick={scrollToServices}
                className="group shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-4 text-lg"
              >
                Get Started
                <ArrowDown className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="shadow-sm hover:shadow-md transition-all duration-300 px-8 py-4 text-lg border-gray-600 text-gray-300 hover:bg-gray-800"
              >
                View Our Work
              </Button>
            </motion.div>
          </div>

          {/* Right Content - Modern Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1.0 }}
            className="relative"
          >
            <div className="relative w-full h-96 lg:h-[500px]">
              {/* Main Illustration Container */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden border border-gray-700">
                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute top-8 left-8 w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center shadow-lg"
                >
                  <Shield className="w-8 h-8 text-white" />
                </motion.div>

                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute top-20 right-12 w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center shadow-lg"
                >
                  <Zap className="w-6 h-6 text-white" />
                </motion.div>

                <motion.div
                  animate={{ y: [-5, 15, -5] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute bottom-16 left-12 w-14 h-14 bg-green-500 rounded-2xl flex items-center justify-center shadow-lg"
                >
                  <CheckCircle className="w-7 h-7 text-white" />
                </motion.div>

                {/* Central Element */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    className="w-32 h-32 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-3xl flex items-center justify-center shadow-2xl"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center"
                    >
                      <Sparkles className="w-8 h-8 text-blue-500" />
                    </motion.div>
                  </motion.div>
                </div>

                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full"></div>
                  <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-400 rounded-full"></div>
                  <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                  <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-indigo-400 rounded-full"></div>
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-xl"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center relative"
        >
          <motion.div
            animate={{ y: [6, 16, 6] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="w-1 h-3 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mt-2"
          />
        </motion.div>
        <p className="text-sm text-gray-400 mt-2 text-center">Scroll to explore</p>
      </motion.div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};