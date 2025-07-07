import { FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import type { Service } from '../../types/types';

const ServiceCard = ({ 
  icon, 
  title, 
  description, 
  featured = false 
}: Service) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    },
    hover: {
      y: -8,
      boxShadow: featured 
        ? "0 25px 50px -12px rgba(37, 99, 235, 0.3)"
        : "0 15px 30px -5px rgba(0, 0, 0, 0.1)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const iconVariants = {
    hover: {
      rotate: featured ? [0, 10, -10, 0] : 0,
      transition: {
        duration: 0.6,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div 
      className={`service-card ${featured ? 'service-card--featured' : ''}`}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      variants={cardVariants}
      viewport={{ once: true, margin: "0px 0px -50px 0px" }}
    >
      <div className="service-card__content">
        <motion.div 
          className={`service-card__icon-wrapper ${featured ? 'service-card__icon-wrapper--featured' : ''}`}
          variants={iconVariants}
        >
          {icon}
          {featured && (
            <motion.div 
              className="service-card__pulse-ring"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.8, 0.2, 0.8]
              }}
              transition={{ 
                duration: 2.5,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop"
              }}
            />
          )}
        </motion.div>
        
        <h3 className="service-card__title">{title}</h3>
        <p className="service-card__description">{description}</p>
        
        <div className="service-card__btn-container">
          <motion.button 
            className={`service-card__btn ${featured ? 'service-card__btn--featured' : ''}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label={`Explore ${title}`}
          >
            <span>Explore</span>
            <motion.span 
              className="service-card__btn-icon"
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaArrowRight />
            </motion.span>
          </motion.button>
        </div>
      </div>
      
      {featured && (
        <motion.div 
          className="service-card__featured-badge"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ 
            type: "spring",
            stiffness: 260,
            damping: 20
          }}
        >
          <span className="service-card__badge-text">Most Popular</span>
          <span className="service-card__badge-glow" />
        </motion.div>
      )}
    </motion.div>
  );
};

export default ServiceCard;