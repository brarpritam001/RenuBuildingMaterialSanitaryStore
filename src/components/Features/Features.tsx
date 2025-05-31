import { useEffect } from 'react';
import { FaTrophy, FaMoneyBillWave, FaTruck, FaShieldAlt, FaBuilding } from 'react-icons/fa';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import FeatureCard from './FeatureCard';
import './Features.css';

const Features = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { 
      y: 40, 
      opacity: 0,
      scale: 0.95
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 0.5
      }
    }
  };

  const fadeInUp = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.98
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.2
      }
    }
  };

  const features: {
    icon: React.ReactNode;
    title: string;
    description: string;
    color: "blue" | "green" | "amber" | "purple" | "red" | "indigo";
    stats: string | number;
  }[] = [
    {
      icon: <FaTrophy className="feature-icon" />,
      title: "Uncompromising Quality",
      description: "All materials meet or exceed stringent industry standards with full traceability and certification.",
      color: "blue",
      stats: "99.9% defect-free"
    },
    {
      icon: <FaMoneyBillWave className="feature-icon" />,
      title: "Competitive Pricing",
      description: "Volume discounts and contractor programs that maximize your budget without sacrificing quality.",
      color: "green",
      stats: "Save up to 30%"
    },
    {
      icon: <FaTruck className="feature-icon" />,
      title: "Just-in-Time Delivery",
      description: "Precision scheduling with real-time tracking to keep projects on schedule and minimize storage needs.",
      color: "amber",
      stats: "98% on-time"
    },
    {
      icon: <FaShieldAlt className="feature-icon" />,
      title: "Extended Warranties",
      description: "Industry-leading 5-year guarantee on all building materials, giving you peace of mind.",
      color: "purple",
      stats: "5-year coverage"
    },
    {
      icon: <RiCustomerService2Fill className="feature-icon" />,
      title: "Technical Support",
      description: "Dedicated construction professionals available 24/7 for project-specific advice and troubleshooting.",
      color: "red",
      stats: "24/7 availability"
    },
    {
      icon: <FaBuilding className="feature-icon" />,
      title: "Project Coordination",
      description: "Specialized solutions and dedicated account managers for complex builds and large-scale projects.",
      color: "indigo",
      stats: "100+ projects"
    }
  ];

  return (
    <section id="features" className="features-section" aria-labelledby="features-heading">
      <div className="features-container">
        <motion.div 
          className="section-header"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <motion.span 
            className="section-pre-title"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            WHY BUILD WITH US
          </motion.span>
          <motion.h2 
            id="features-heading" 
            className="section-title"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            The <span className="highlight-text">BuildMaster</span> Difference
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            We go beyond supply to become your trusted construction partner, delivering excellence at every stage.
          </motion.p>
          <motion.div 
            className="header-decoration"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.7, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          />
        </motion.div>

        <motion.div 
          ref={ref}
          className="features-grid"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <AnimatePresence>
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="feature-item"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <FeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  color={feature.color}
                  stats={feature.stats}
                  index={index}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        <motion.div 
          className="features-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <a href="#contact" className="primary-button">
            <span>Schedule a Consultation</span>
            <div className="button-icon">
              <svg className="button-arrow" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="button-hover-effect" aria-hidden="true"></div>
          </a>
        </motion.div>
      </div>
      
      {/* Enhanced background elements */}
      <div className="bg-shapes" aria-hidden="true">
        <motion.div 
          className="bg-shape bg-shape-1"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 0.15, scale: 1 } : {}}
          transition={{ delay: 0.3, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.div 
          className="bg-shape bg-shape-2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 0.1, scale: 1 } : {}}
          transition={{ delay: 0.5, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.div 
          className="bg-shape bg-shape-3"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 0.1, scale: 1 } : {}}
          transition={{ delay: 0.7, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>

      {/* Particle effects */}
      <div className="particles">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{
              delay: 0.8 + i * 0.05,
              duration: 0.6,
              type: "spring",
              stiffness: 100,
              damping: 20
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;