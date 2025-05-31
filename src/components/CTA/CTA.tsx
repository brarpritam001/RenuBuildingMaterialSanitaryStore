import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './CTA.css';

const CTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const buttonHoverVariants = {
    hover: {
      y: -2,
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    },
    tap: {
      scale: 0.98,
      transition: {
        duration: 0.1
      }
    }
  };

  const imageHoverVariants = {
    hover: {
      scale: 1.03,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const badgeVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.4,
        duration: 0.4,
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.section 
          className="cta-section"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={containerVariants}
        >
          <div className="container">
            <motion.div 
              className="cta-card"
              whileHover={{ scale: 1.002 }}
              transition={{ duration: 0.2 }}
            >
              <div className="cta-content">
                {/* Text Content */}
                <div className="cta-text-container">
                  <motion.div className="cta-text-content" variants={containerVariants}>
                    <motion.span className="cta-badge" variants={itemVariants}>
                      READY TO BUILD?
                    </motion.span>
                    
                    <motion.h2 className="cta-heading" variants={itemVariants}>
                      Start Your Project with Confidence
                    </motion.h2>
                    
                    <motion.p className="cta-description" variants={itemVariants}>
                      Get a customized quote and expert recommendations for your specific project requirements.
                    </motion.p>
                    
                    <motion.div className="cta-buttons" variants={itemVariants}>
                      <motion.button 
                        className="cta-button-primary"
                        variants={buttonHoverVariants}
                        whileHover="hover"
                        whileTap="tap"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="button-icon" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                        <span>Speak to an Expert</span>
                        <div className="button-hover-effect"></div>
                      </motion.button>
                      
                      <motion.button 
                        className="cta-button-secondary"
                        variants={buttonHoverVariants}
                        whileHover="hover"
                        whileTap="tap"
                      >
                        <span>Request Site Visit</span>
                        <div className="button-hover-effect"></div>
                      </motion.button>
                    </motion.div>
                    
                    <motion.div className="cta-social-proof" variants={itemVariants}>
                      <div className="customer-avatars">
                        {[1, 2, 3].map(idx => (
                          <motion.div 
                            key={idx}
                            className="avatar-image" 
                            initial={{ x: -15, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.15 + idx * 0.1, duration: 0.4 }}
                          >
                            <img 
                              src={`https://randomuser.me/api/portraits/${idx % 2 === 0 ? 'women' : 'men'}/${idx + 20}.jpg`} 
                              alt={`Customer ${idx}`} 
                            />
                          </motion.div>
                        ))}
                      </div>
                      <div className="social-proof-text">
                        <p className="client-count">Join 2,000+ clients</p>
                        <div className="rating">
                          {[1, 2, 3, 4, 5].map(star => (
                            <motion.svg 
                              key={star} 
                              className="star-icon" 
                              fill="currentColor" 
                              viewBox="0 0 20 20"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: 0.5 + star * 0.05, type: "spring" }}
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </motion.svg>
                          ))}
                          <motion.span 
                            className="rating-text"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                          >
                            4.9/5
                          </motion.span>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
                
                {/* Image Area */}
                <div className="cta-image-container">
                  <motion.div 
                    className="cta-image-wrapper"
                    whileHover="hover"
                    variants={imageHoverVariants}
                  >
                    <div className="cta-image-gradient"></div>
                    
                    <div className="cta-image">
                      <img 
                        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                        alt="Construction project" 
                      />
                    </div>
                    
                    <motion.div 
                      className="completion-badge"
                      variants={badgeVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <div className="badge-content">
                        <div className="badge-icon-container">
                          <svg className="badge-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18457 2.99721 7.13633 4.39828 5.49707C5.79935 3.85782 7.69279 2.71538 9.79619 2.24015C11.8996 1.76491 14.1003 1.98234 16.07 2.86" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <div className="badge-text">
                          <p className="badge-label">AVERAGE TIME</p>
                          <p className="badge-value">4-6 Weeks</p>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Background elements */}
          <motion.div 
            className="background-pattern top-right"
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 0.1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          ></motion.div>
          <motion.div 
            className="background-pattern bottom-left"
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 0.1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          ></motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default CTA;