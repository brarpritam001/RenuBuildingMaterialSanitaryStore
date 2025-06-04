import { FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // Define all links as constants for easy management
  const productLinks = [
    { name: 'New Products', path: '/products' },
    { name: 'Featured Products', path: '/products' },
    { name: 'Contractor Packs', path: '/products' },
    { name: 'Product Catalog', path: '/products' },
    { name: 'Material Samples', path: '/products' }
  ];

  const solutionLinks = [
    { name: 'Residential', path: '/solutions' },
    { name: 'Commercial', path: '/solutions' },
    { name: 'Renovation', path: '/solutions' },
    { name: 'Sustainable Building', path: '/solutions' },
    { name: 'Architect Solutions', path: '/solutions' }
  ];

  const resourceLinks = [
    { name: 'Installation Guides', path: '/resources' },
    { name: 'Material Calculators', path: '/resources' },
    { name: 'Project Planning', path: '/resources' },
    { name: 'Technical Specifications', path: '/resources' },
    { name: 'Safety Data Sheets', path: '/resources' }
  ];

  const companyLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Our Locations', path: '/ourLocations' },
    { name: 'Careers', path: '/careers' },
    { name: 'Sustainability', path: '/sustainability' },
    { name: 'Press & Media', path: '/pressMedia' }  
  ];

  const legalLinks = [
    { name: 'Privacy Policy', path: '/privacyPolicy' },
    { name: 'Terms of Service', path: '/termsService' },
    { name: 'Contractor Terms', path: '/contractorTerms' }
  ];

  const socialLinks = [
    { 
      name: 'Facebook', 
      url: 'https://facebook.com', 
      path: 'M22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 16.991 5.657 21.128 10.438 21.878V14.891H7.898V12H10.438V9.797C10.438 7.291 11.93 5.907 14.215 5.907C15.309 5.907 16.453 6.102 16.453 6.102V8.562H15.193C13.95 8.562 13.563 9.333 13.563 10.124V12H16.336L15.893 14.891H13.563V21.878C18.343 21.128 22 16.991 22 12Z' 
    },
    { 
      name: 'Instagram', 
      url: 'https://instagram.com', 
      path: 'M12 2.163C15.204 2.163 15.584 2.175 16.85 2.233C18.021 2.287 18.68 2.495 19.076 2.672C19.616 2.913 19.985 3.207 20.332 3.554C20.68 3.901 20.973 4.27 21.215 4.81C21.392 5.206 21.6 5.865 21.654 7.036C21.712 8.302 21.725 8.682 21.725 11.886C21.725 15.09 21.712 15.47 21.654 16.736C21.6 17.907 21.392 18.566 21.215 18.962C20.973 19.502 20.68 19.871 20.332 20.218C19.985 20.566 19.616 20.859 19.076 21.101C18.68 21.278 18.021 21.486 16.85 21.54C15.584 21.598 15.204 21.611 12 21.611C8.796 21.611 8.416 21.598 7.15 21.54C5.979 21.486 5.32 21.278 4.924 21.101C4.384 20.859 4.015 20.566 3.668 20.218C3.32 19.871 3.027 19.502 2.785 18.962C2.608 18.566 2.4 17.907 2.346 16.736C2.288 15.47 2.275 15.09 2.275 11.886C2.275 8.682 2.288 8.302 2.346 7.036C2.4 5.865 2.608 5.206 2.785 4.81C3.027 4.27 3.32 3.901 3.668 3.554C4.015 3.207 4.384 2.913 4.924 2.672C5.32 2.495 5.979 2.287 7.15 2.233C8.416 2.175 8.796 2.163 12 2.163ZM12 12C10.343 12 9 13.657 9 12C9 10.343 10.343 9 12 9C13.657 9 15 10.343 15 12C15 13.657 13.657 12 12 12ZM18.65 6.504C18.65 7.329 17.979 8 17.154 8C16.329 8 15.658 7.329 15.658 6.504C15.658 5.679 16.329 5.008 17.154 5.008C17.979 5.008 18.65 5.679 18.65 6.504Z' 
    },
    { 
      name: 'LinkedIn', 
      url: 'https://linkedin.com', 
      path: 'M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z' 
    },
    { 
      name: 'YouTube', 
      url: 'https://youtube.com', 
      path: 'M21.593 7.203C21.841 8.069 22 9.033 22 10C22 18 17.523 22 12 22C6.478 22 2 17.523 2 12C2 6.478 6.478 2 12 2C14.025 2 15.91 2.578 17.5 3.547L16.481 5.025C15.172 4.173 13.633 3.691 12 3.691C7.401 3.691 3.691 7.401 3.691 12C3.691 16.599 7.401 20.309 12 20.309C16.599 20.309 20.309 16.599 20.309 12C20.309 10.968 20.141 9.984 19.859 9.078L21.593 7.203ZM9 9.6V14.4L15.2 12L9 9.6Z' 
    }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <motion.div 
          className="footer-main"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div className="footer-brand" variants={itemVariants}>
            <div className="footer-logo">
              <Link to="/" className="logo-text">Renu Building</Link>
              <span className="logo-subtext">Material & Sanitary Store</span>
            </div>
            <p className="footer-description">
              Premium building materials and construction solutions for professionals who demand the best.
            </p>
            <div className="footer-newsletter">
              <h4 className="newsletter-title">Industry Insights</h4>
              <p className="newsletter-subtitle">Get construction trends and product updates</p>
              <div className="newsletter-form">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="newsletter-input"
                />
                <motion.button 
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaArrowRight className="button-icon" />
                  <span className="sr-only">Subscribe</span>
                </motion.button>
              </div>
            </div>
          </motion.div>

          <div className="footer-links-grid">
            <motion.div className="footer-links-group" variants={itemVariants}>
              <h3 className="footer-links-title">Products</h3>
              <ul className="footer-links-list">
                {productLinks.map((item, index) => (
                  <motion.li 
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link to={item.path} className="footer-link">
                      <span className="link-hover"></span>
                      {item.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div className="footer-links-group" variants={itemVariants}>
              <h3 className="footer-links-title">Solutions</h3>
              <ul className="footer-links-list">
                {solutionLinks.map((item, index) => (
                  <motion.li 
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link to={item.path} className="footer-link">
                      <span className="link-hover"></span>
                      {item.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div className="footer-links-group" variants={itemVariants}>
              <h3 className="footer-links-title">Resources</h3>
              <ul className="footer-links-list">
                {resourceLinks.map((item, index) => (
                  <motion.li 
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link to={item.path} className="footer-link">
                      <span className="link-hover"></span>
                      {item.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div className="footer-links-group" variants={itemVariants}>
              <h3 className="footer-links-title">Company</h3>
              <ul className="footer-links-list">
                {companyLinks.map((item, index) => (
                  <motion.li 
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link to={item.path} className="footer-link">
                      <span className="link-hover"></span>
                      {item.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="footer-legal">
            <p className="copyright">© 2025 Renu Building Material & Sanitary Store. All rights reserved.</p>
            <div className="legal-links">
              {legalLinks.map((item, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ color: '#ffffff' }}
                >
                  <Link to={item.path} className="legal-link">
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="footer-social">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label={social.name}
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d={social.path} fill="currentColor" />
                </svg>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;