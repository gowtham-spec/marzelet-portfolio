import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { useScrollAnimation, staggerContainer, staggerItem } from '../../hooks/useScrollAnimation';

const categories = ['All', 'General', 'Process', 'Technical', 'Pricing'];

const faqs = [
  {
    id: 1,
    category: 'General',
    question: 'What services does Marzelet offer?',
    answer: 'We offer comprehensive digital services including web development, mobile app development, UI/UX design, digital marketing, data analytics, and cybersecurity solutions. Our team specializes in creating custom solutions tailored to your business needs.'
  },
  {
    id: 2,
    category: 'Process',
    question: 'What is your typical project timeline?',
    answer: 'Project timelines vary based on complexity and scope. A typical web development project takes 4-8 weeks, while mobile apps can take 8-16 weeks. We provide detailed timelines during our initial consultation and keep you updated throughout the development process.'
  },
  {
    id: 3,
    category: 'Technical',
    question: 'Which technologies do you work with?',
    answer: 'We work with modern technologies including React, Next.js, Vue.js, React Native, Flutter, Node.js, Python, AWS, Google Cloud, and many more. We choose the best technology stack based on your project requirements and long-term goals.'
  },
  {
    id: 4,
    category: 'Pricing',
    question: 'How do you structure your pricing?',
    answer: 'We offer flexible pricing models including fixed-price projects, hourly rates, and retainer agreements. Pricing depends on project complexity, timeline, and required features. We provide detailed quotes after understanding your specific requirements.'
  },
  {
    id: 5,
    category: 'Process',
    question: 'Do you provide ongoing support and maintenance?',
    answer: 'Yes, we offer comprehensive support and maintenance packages. This includes regular updates, security patches, performance monitoring, and technical support. We believe in long-term partnerships with our clients.'
  },
  {
    id: 6,
    category: 'General',
    question: 'Can you work with existing teams?',
    answer: 'Absolutely! We can integrate seamlessly with your existing development teams, provide consulting services, or take full ownership of projects. We adapt our approach based on your organizational needs and preferences.'
  },
  {
    id: 7,
    category: 'Technical',
    question: 'Do you handle hosting and deployment?',
    answer: 'Yes, we can handle the entire deployment process including cloud hosting setup, domain configuration, SSL certificates, and ongoing server management. We work with major cloud providers like AWS, Google Cloud, and Azure.'
  },
  {
    id: 8,
    category: 'Pricing',
    question: 'Do you offer payment plans?',
    answer: 'Yes, we offer flexible payment plans to accommodate different budget requirements. Typically, we structure payments in milestones based on project phases, with options for monthly payments on larger projects.'
  },
  {
    id: 9,
    category: 'Process',
    question: 'How do you ensure project quality?',
    answer: 'We follow industry best practices including code reviews, automated testing, continuous integration, and regular client feedback sessions. Our quality assurance process ensures that every deliverable meets our high standards.'
  },
  {
    id: 10,
    category: 'General',
    question: 'What makes Marzelet different from other agencies?',
    answer: 'Our focus on innovation, client-centric approach, and commitment to long-term partnerships sets us apart. We combine technical expertise with strategic thinking to deliver solutions that not only meet current needs but also scale with your business growth.'
  }
];

export const FAQ: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const { ref, controls } = useScrollAnimation();

  const filteredFAQs = activeCategory === 'All' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section className="py-24 bg-gray-800">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
        >
          {/* Section Header */}
          <motion.div variants={staggerItem} className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <HelpCircle className="w-12 h-12 text-blue-400 mr-4" />
              <h2 className="text-4xl lg:text-5xl font-bold text-white">
                Frequently Asked Questions
              </h2>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find answers to common questions about our services, process, and approach.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div variants={staggerItem} className="flex justify-center mb-12">
            <div className="flex flex-wrap gap-2 p-2 bg-gray-900 rounded-2xl shadow-lg border border-gray-700">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          {/* FAQ List */}
          <motion.div variants={staggerItem} className="space-y-4">
            <AnimatePresence mode="wait">
              {filteredFAQs.map((faq, index) => (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden border border-gray-700"
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-800 transition-colors"
                  >
                    <div className="flex items-center">
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm font-medium rounded-full mr-4">
                        {faq.category}
                      </span>
                      <h3 className="text-lg font-semibold text-white">
                        {faq.question}
                      </h3>
                    </div>
                    <motion.div
                      animate={{ rotate: openFAQ === faq.id ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    </motion.div>
                  </button>
                  
                  <AnimatePresence>
                    {openFAQ === faq.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-8 pb-6 pt-2">
                          <div className="w-full h-px bg-gray-700 mb-4"></div>
                          <p className="text-gray-300 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* CTA - Resized to match contact section */}
          <motion.div
            variants={staggerItem}
            className="mt-16 text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white"
          >
            <h3 className="text-3xl font-bold mb-4">
              Still Have Questions?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              We're here to help! Get in touch with our team for personalized answers.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Us Today
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};