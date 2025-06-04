import React from 'react';
import { FaBuilding, FaHome, FaTools, FaLeaf, FaCity, FaArrowRight } from 'react-icons/fa';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import './Solutions.css';

type SolutionCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  index: number;
};

const SolutionCard = ({ icon, title, description, features, index }: SolutionCardProps) => {
  const cardVariants = {
    offscreen: {
      y: 100,
      opacity: 0,
      rotateX: 15
    },
    onscreen: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
        delay: index * 0.15
      }
    },
    hover: {
      y: -15,
      rotateX: -5,
      transition: { 
        type: "spring",
        stiffness: 300,
        damping: 10
      }
    }
  };

  const featureVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.5 + i * 0.1,
        duration: 0.3
      }
    })
  };

  return (
    <motion.div 
      className="solutions-card"
      initial="offscreen"
      whileInView="onscreen"
      whileHover="hover"
      viewport={{ once: true, amount: 0.2 }}
      variants={cardVariants}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
    >
      <div className="solutions-card-inner">
        <div className="solutions-card-icon-container">
          <div className="solutions-card-icon-bg"></div>
          <div className="solutions-card-icon">{icon}</div>
          <div className="solutions-card-icon-reflection"></div>
        </div>
        
        <h3 className="solutions-card-title">{title}</h3>
        <p className="solutions-card-description">{description}</p>
        
        <ul className="solutions-features-list">
          {features.map((feature, idx) => (
            <motion.li 
              key={idx} 
              className="solutions-feature-item"
              custom={idx}
              initial="hidden"
              animate="visible"
              variants={featureVariants}
            >
              <span className="solutions-feature-marker"></span>
              {feature}
            </motion.li>
          ))}
        </ul>
        
        <motion.button 
          className="solutions-card-button"
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 10px 20px rgba(67, 97, 238, 0.3)"
          }}
          whileTap={{ scale: 0.95 }}
        >
          <span>Explore Solutions</span>
          <FaArrowRight className="solutions-button-arrow" />
        </motion.button>
        
        <div className="solutions-card-accent"></div>
        <div className="solutions-card-reflection"></div>
      </div>
    </motion.div>
  );
};

const SolutionsScreen = () => {
  const { scrollYProgress } = useViewportScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 5]);

  const solutions = [
    {
      icon: <FaHome className="solutions-icon" />,
      title: "Residential Solutions",
      description: "Premium materials for custom homes and residential projects",
      features: [
        "Single-family homes",
        "Townhouses",
        "Luxury residences",
        "Home renovations"
      ]
    },
    {
      icon: <FaBuilding className="solutions-icon" />,
      title: "Commercial Solutions",
      description: "Durable materials for commercial and office spaces",
      features: [
        "Office buildings",
        "Retail spaces",
        "Mixed-use developments",
        "Commercial interiors"
      ]
    },
    {
      icon: <FaCity className="solutions-icon" />,
      title: "Industrial Solutions",
      description: "Heavy-duty materials for industrial applications",
      features: [
        "Warehouses",
        "Manufacturing plants",
        "Industrial parks",
        "Storage facilities"
      ]
    },
    {
      icon: <FaTools className="solutions-icon" />,
      title: "Renovation Solutions",
      description: "Specialized products for remodeling and upgrades",
      features: [
        "Historical renovations",
        "Structural upgrades",
        "Facade improvements",
        "Interior remodels"
      ]
    },
    {
      icon: <FaLeaf className="solutions-icon" />,
      title: "Sustainable Solutions",
      description: "Eco-friendly building materials and systems",
      features: [
        "LEED-certified products",
        "Energy-efficient systems",
        "Recycled materials",
        "Green building solutions"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <div className="solutions-container">
      <motion.div 
        className="solutions-background-shape-1"
        style={{ y: y1, rotate }}
      />
      <motion.div 
        className="solutions-background-shape-2"
        style={{ y: y2, rotate: rotate }}
      />
      
      <div className="solutions-content">
        <motion.div 
          className="solutions-header"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="solutions-title-decoration"></div>
          <h1 className="solutions-main-title">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Building Solutions
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              for Every Project
            </motion.span>
          </h1>
          <motion.p 
            className="solutions-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Tailored material packages and expert support for your specific construction needs
          </motion.p>
        </motion.div>

        <motion.div 
          className="solutions-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {solutions.map((solution, index) => (
            <SolutionCard key={index} index={index} {...solution} />
          ))}
        </motion.div>

        <motion.div 
          className="solutions-cta"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="solutions-cta-content">
            <h2 className="solutions-cta-title">Need a Custom Solution?</h2>
            <p className="solutions-cta-text">
              Our specialists can create a tailored package for your unique project requirements
            </p>
            <motion.button 
              className="solutions-cta-button"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(255, 255, 255, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Our Solutions Team
            </motion.button>
          </div>
          <div className="solutions-cta-decoration"></div>
          <div className="solutions-cta-particles">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="solutions-cta-particle" />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SolutionsScreen;