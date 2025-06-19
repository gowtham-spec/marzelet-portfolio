import { 
  Code, 
  Palette, 
  Smartphone, 
  Globe, 
  Database, 
  Shield,
  CheckCircle,
  Clock,
  Users,
  TrendingUp,
  Award,
  Zap
} from 'lucide-react';

export const servicesData = {
  'web-development': {
    icon: Code,
    title: 'Web Development',
    subtitle: 'Custom Web Applications & Websites',
    description: 'Transform your digital presence with cutting-edge web applications built using the latest technologies and industry best practices.',
    longDescription: 'Our web development team specializes in creating scalable, secure, and high-performance web applications that drive business growth. From simple websites to complex enterprise applications, we deliver solutions that exceed expectations.',
    color: 'from-blue-500 to-cyan-500',
    features: [
      'React & Next.js Applications',
      'Node.js & Python Backend',
      'Cloud Deployment & Scaling',
      'Performance Optimization',
      'SEO & Accessibility',
      'Progressive Web Apps (PWA)',
      'E-commerce Solutions',
      'API Development & Integration'
    ],
    benefits: [
      {
        icon: Zap,
        title: 'Lightning Fast',
        description: 'Optimized for speed and performance with modern frameworks and best practices.'
      },
      {
        icon: Shield,
        title: 'Secure & Reliable',
        description: 'Built with security in mind, featuring robust authentication and data protection.'
      },
      {
        icon: TrendingUp,
        title: 'Scalable Solutions',
        description: 'Architecture designed to grow with your business needs and user base.'
      },
      {
        icon: Award,
        title: 'Industry Standards',
        description: 'Following the latest web standards and accessibility guidelines.'
      }
    ],
    process: [
      {
        step: 1,
        title: 'Discovery & Planning',
        description: 'We analyze your requirements and create a comprehensive development strategy.'
      },
      {
        step: 2,
        title: 'Design & Prototyping',
        description: 'Creating wireframes and prototypes to visualize the final product.'
      },
      {
        step: 3,
        title: 'Development & Testing',
        description: 'Building your application with rigorous testing at every stage.'
      },
      {
        step: 4,
        title: 'Launch & Support',
        description: 'Deploying your application and providing ongoing maintenance and support.'
      }
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'Python', 'TypeScript', 'AWS', 'Docker', 'MongoDB', 'PostgreSQL'],
    stats: [
      { number: '200+', label: 'Web Projects Delivered' },
      { number: '99.9%', label: 'Uptime Guarantee' },
      { number: '50ms', label: 'Average Load Time' },
      { number: '24/7', label: 'Support Available' }
    ]
  },
  'mobile-development': {
    icon: Smartphone,
    title: 'Mobile Development',
    subtitle: 'iOS & Android Applications',
    description: 'Create powerful mobile applications that engage users and drive business growth with native and cross-platform solutions.',
    longDescription: 'Our mobile development expertise spans native iOS and Android development as well as cross-platform solutions using React Native and Flutter. We create apps that deliver exceptional user experiences while maintaining optimal performance.',
    color: 'from-purple-500 to-pink-500',
    features: [
      'Native iOS Development',
      'Native Android Development',
      'React Native Apps',
      'Flutter Development',
      'App Store Optimization',
      'Push Notifications',
      'Offline Functionality',
      'In-App Purchases'
    ],
    benefits: [
      {
        icon: Users,
        title: 'User-Centric Design',
        description: 'Intuitive interfaces designed with user experience as the top priority.'
      },
      {
        icon: TrendingUp,
        title: 'Performance Optimized',
        description: 'Apps built for speed and efficiency across all device types and OS versions.'
      },
      {
        icon: Shield,
        title: 'Secure & Compliant',
        description: 'Following platform security guidelines and data protection regulations.'
      },
      {
        icon: Clock,
        title: 'Faster Time to Market',
        description: 'Agile development process to get your app to market quickly.'
      }
    ],
    process: [
      {
        step: 1,
        title: 'Strategy & Research',
        description: 'Market research and competitor analysis to define your app strategy.'
      },
      {
        step: 2,
        title: 'UX/UI Design',
        description: 'Creating engaging designs that follow platform-specific guidelines.'
      },
      {
        step: 3,
        title: 'Development & QA',
        description: 'Building and testing your app across multiple devices and OS versions.'
      },
      {
        step: 4,
        title: 'Launch & Growth',
        description: 'App store submission and post-launch optimization strategies.'
      }
    ],
    technologies: ['Swift', 'Kotlin', 'React Native', 'Flutter', 'Firebase', 'AWS', 'Redux', 'GraphQL', 'SQLite'],
    stats: [
      { number: '150+', label: 'Mobile Apps Built' },
      { number: '4.8★', label: 'Average App Rating' },
      { number: '1M+', label: 'Combined Downloads' },
      { number: '30+', label: 'App Store Features' }
    ]
  },
  'ui-ux-design': {
    icon: Palette,
    title: 'UI/UX Design',
    subtitle: 'User Experience & Interface Design',
    description: 'Create beautiful, intuitive designs that convert visitors into customers and provide exceptional user experiences.',
    longDescription: 'Our design team combines creativity with data-driven insights to create user experiences that not only look stunning but also drive conversions and user engagement. We focus on user-centered design principles to ensure every interaction is meaningful.',
    color: 'from-emerald-500 to-teal-500',
    features: [
      'User Research & Analysis',
      'Wireframing & Prototyping',
      'Visual Design Systems',
      'Interaction Design',
      'Usability Testing',
      'Responsive Design',
      'Brand Identity Design',
      'Design System Creation'
    ],
    benefits: [
      {
        icon: Users,
        title: 'User-Centered Approach',
        description: 'Every design decision is based on user research and behavior analysis.'
      },
      {
        icon: TrendingUp,
        title: 'Conversion Optimized',
        description: 'Designs that are proven to increase engagement and conversion rates.'
      },
      {
        icon: Award,
        title: 'Award-Winning Design',
        description: 'Recognized design excellence with multiple industry awards.'
      },
      {
        icon: Zap,
        title: 'Fast Turnaround',
        description: 'Efficient design process without compromising on quality.'
      }
    ],
    process: [
      {
        step: 1,
        title: 'Research & Discovery',
        description: 'Understanding your users, market, and business objectives.'
      },
      {
        step: 2,
        title: 'Concept & Wireframes',
        description: 'Creating initial concepts and wireframes for user flow validation.'
      },
      {
        step: 3,
        title: 'Visual Design',
        description: 'Developing the visual language and high-fidelity designs.'
      },
      {
        step: 4,
        title: 'Testing & Iteration',
        description: 'User testing and refinement based on feedback and analytics.'
      }
    ],
    technologies: ['Figma', 'Adobe XD', 'Sketch', 'Principle', 'Framer', 'InVision', 'Miro', 'Hotjar', 'Google Analytics'],
    stats: [
      { number: '300+', label: 'Design Projects' },
      { number: '85%', label: 'Avg. Conversion Increase' },
      { number: '20+', label: 'Design Awards' },
      { number: '48h', label: 'Initial Concept Delivery' }
    ]
  },
  'digital-marketing': {
    icon: Globe,
    title: 'Digital Marketing',
    subtitle: 'Comprehensive Digital Marketing Solutions',
    description: 'Boost your online presence and drive growth with data-driven digital marketing strategies tailored to your business.',
    longDescription: 'Our digital marketing team leverages the latest tools and strategies to help businesses grow their online presence, reach their target audience, and achieve measurable results. From SEO to social media marketing, we create comprehensive campaigns that drive ROI.',
    color: 'from-orange-500 to-red-500',
    features: [
      'Search Engine Optimization',
      'Pay-Per-Click Advertising',
      'Social Media Marketing',
      'Content Marketing Strategy',
      'Email Marketing Campaigns',
      'Analytics & Reporting',
      'Conversion Rate Optimization',
      'Marketing Automation'
    ],
    benefits: [
      {
        icon: TrendingUp,
        title: 'Measurable Results',
        description: 'Data-driven strategies that deliver quantifiable business growth.'
      },
      {
        icon: Users,
        title: 'Targeted Reach',
        description: 'Precise audience targeting to maximize your marketing budget efficiency.'
      },
      {
        icon: Clock,
        title: '24/7 Monitoring',
        description: 'Continuous campaign monitoring and optimization for best performance.'
      },
      {
        icon: Award,
        title: 'Proven Strategies',
        description: 'Battle-tested marketing strategies that have driven success for 500+ clients.'
      }
    ],
    process: [
      {
        step: 1,
        title: 'Market Analysis',
        description: 'Comprehensive analysis of your market, competitors, and opportunities.'
      },
      {
        step: 2,
        title: 'Strategy Development',
        description: 'Creating a customized marketing strategy aligned with your business goals.'
      },
      {
        step: 3,
        title: 'Campaign Execution',
        description: 'Implementing multi-channel campaigns with continuous optimization.'
      },
      {
        step: 4,
        title: 'Analysis & Scaling',
        description: 'Performance analysis and scaling successful campaigns for maximum ROI.'
      }
    ],
    technologies: ['Google Ads', 'Facebook Ads', 'Google Analytics', 'SEMrush', 'HubSpot', 'Mailchimp', 'Hootsuite', 'Hotjar', 'Ahrefs'],
    stats: [
      { number: '500+', label: 'Marketing Campaigns' },
      { number: '300%', label: 'Avg. ROI Increase' },
      { number: '50M+', label: 'Ad Impressions Managed' },
      { number: '95%', label: 'Client Satisfaction' }
    ]
  },
  'data-analytics': {
    icon: Database,
    title: 'Data Analytics',
    subtitle: 'Business Intelligence & Data Solutions',
    description: 'Transform your data into actionable insights with advanced analytics solutions that drive informed business decisions.',
    longDescription: 'Our data analytics team helps businesses unlock the power of their data through comprehensive analytics solutions, business intelligence dashboards, and predictive modeling. We turn complex data into clear, actionable insights that drive strategic decision-making.',
    color: 'from-indigo-500 to-purple-500',
    features: [
      'Business Intelligence Dashboards',
      'Data Visualization',
      'Predictive Analytics',
      'Real-time Reporting',
      'Data Mining & ETL',
      'Machine Learning Models',
      'Statistical Analysis',
      'Custom Analytics Solutions'
    ],
    benefits: [
      {
        icon: TrendingUp,
        title: 'Data-Driven Decisions',
        description: 'Make informed decisions based on comprehensive data analysis and insights.'
      },
      {
        icon: Zap,
        title: 'Real-time Insights',
        description: 'Access to real-time dashboards and automated reporting systems.'
      },
      {
        icon: Award,
        title: 'Predictive Capabilities',
        description: 'Advanced machine learning models to predict trends and outcomes.'
      },
      {
        icon: Shield,
        title: 'Data Security',
        description: 'Enterprise-grade security and compliance for all your data assets.'
      }
    ],
    process: [
      {
        step: 1,
        title: 'Data Assessment',
        description: 'Comprehensive audit of your current data infrastructure and quality.'
      },
      {
        step: 2,
        title: 'Solution Design',
        description: 'Designing analytics architecture tailored to your business needs.'
      },
      {
        step: 3,
        title: 'Implementation',
        description: 'Building dashboards, reports, and analytics solutions.'
      },
      {
        step: 4,
        title: 'Training & Support',
        description: 'Team training and ongoing support for maximum value realization.'
      }
    ],
    technologies: ['Python', 'R', 'SQL', 'Tableau', 'Power BI', 'Apache Spark', 'TensorFlow', 'AWS', 'Google Cloud'],
    stats: [
      { number: '100+', label: 'Analytics Projects' },
      { number: '10TB+', label: 'Data Processed Daily' },
      { number: '90%', label: 'Prediction Accuracy' },
      { number: '40%', label: 'Avg. Efficiency Gain' }
    ]
  },
  'cybersecurity': {
    icon: Shield,
    title: 'Cybersecurity',
    subtitle: 'Comprehensive Security Solutions',
    description: 'Protect your digital assets with enterprise-grade cybersecurity solutions and 24/7 monitoring services.',
    longDescription: 'Our cybersecurity experts provide comprehensive security solutions to protect your business from evolving cyber threats. From security audits to 24/7 monitoring, we ensure your digital assets remain secure and compliant with industry standards.',
    color: 'from-gray-600 to-gray-800',
    features: [
      'Security Audits & Assessments',
      'Penetration Testing',
      'Compliance Management',
      '24/7 Security Monitoring',
      'Incident Response',
      'Security Training',
      'Network Security',
      'Cloud Security Solutions'
    ],
    benefits: [
      {
        icon: Shield,
        title: 'Complete Protection',
        description: 'Comprehensive security coverage across all your digital assets and systems.'
      },
      {
        icon: Clock,
        title: '24/7 Monitoring',
        description: 'Round-the-clock security monitoring and immediate threat response.'
      },
      {
        icon: Award,
        title: 'Compliance Ready',
        description: 'Ensure compliance with industry standards like GDPR, HIPAA, and SOC 2.'
      },
      {
        icon: Users,
        title: 'Expert Team',
        description: 'Certified security professionals with extensive industry experience.'
      }
    ],
    process: [
      {
        step: 1,
        title: 'Security Assessment',
        description: 'Comprehensive evaluation of your current security posture and vulnerabilities.'
      },
      {
        step: 2,
        title: 'Strategy Development',
        description: 'Creating a customized security strategy based on your risk profile.'
      },
      {
        step: 3,
        title: 'Implementation',
        description: 'Deploying security solutions and establishing monitoring systems.'
      },
      {
        step: 4,
        title: 'Ongoing Protection',
        description: 'Continuous monitoring, updates, and incident response services.'
      }
    ],
    technologies: ['SIEM', 'Splunk', 'CrowdStrike', 'Wireshark', 'Nessus', 'Metasploit', 'AWS Security', 'Azure Security', 'Kubernetes'],
    stats: [
      { number: '1000+', label: 'Security Assessments' },
      { number: '99.9%', label: 'Threat Detection Rate' },
      { number: '<5min', label: 'Incident Response Time' },
      { number: '100%', label: 'Compliance Success Rate' }
    ]
  }
};