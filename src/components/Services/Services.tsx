import { useState, useEffect } from 'react';
import { GiBrickWall, GiWaterDrop } from 'react-icons/gi';
import { IoIosConstruct } from 'react-icons/io';
import { FaBuilding } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import ServiceCard from './ServiceCard';
import type { Service, Category } from '../../types/types';
import './Services.css';
import { useMemo } from 'react';

const Services = () => {
  const [isInView, setIsInView] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredServices, setFilteredServices] = useState<Service[]>([]);
  
  const categories: Category[] = [
    { id: 'all', name: 'All Products' },
    { id: 'materials', name: 'Materials' },
    { id: 'systems', name: 'Systems' },
    { id: 'tools', name: 'Tools & Equipment' }
  ];
  
  const services: Service[] = useMemo(() => [
    {
      icon: <GiBrickWall className="service-icon" />,
      title: "Construction Materials",
      description: "Quality cement, sand, gravel, dust, bricks, and other essential building materials for strong and reliable construction.",
      featured: true,
      category: 'materials'
    },
    {
      icon: <GiWaterDrop className="service-icon" />,
      title: "Plumbing Systems",
      description: "Commercial-grade pipes, fittings, and fixtures from industry-leading manufacturers",
      category: 'systems'
    },   
    {
      icon: <IoIosConstruct className="service-icon" />,
      title: "Construction Tools",
      description: "Professional-grade tools and equipment for contractors and serious DIYers",
      category: 'tools'
    },    
    {
      icon: <FaBuilding className="service-icon" />,
      title: "Commercial Solutions",
      description: "Specialized materials and systems for large-scale commercial projects",
      category: 'systems'
    }
  ], []);

  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredServices(services);
    } else {
      const filtered = services.filter(service => service.category === activeCategory);
      setFilteredServices(filtered);
    }
  }, [activeCategory, services]);

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

  const categoryButtonVariants = {
    hover: {
      y: -2,
      scale: 1.05,
      transition: { type: "spring", stiffness: 300 }
    },
    tap: { scale: 0.95 }
  };

  return (
    <section className="services-section" id="services">
      <div className="services-container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          onViewportEnter={() => setIsInView(true)}
        >
          <motion.div 
            className="badge-container"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="section-pre-title">PRODUCT CATALOG</span>
          </motion.div>
          
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Premium Building Materials
          </motion.h2>
          
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Comprehensive solutions for every phase of your construction project, curated by industry experts
          </motion.p>
        </motion.div>

        <motion.div 
          className="category-filters"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              className={`category-button ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
              variants={categoryButtonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              {category.name}
              {activeCategory === category.id && (
                <motion.div 
                  className="active-indicator" 
                  layoutId="activeCategory"
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        <motion.div 
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              className="filtered-services-grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              {filteredServices.map((service, index) => (
                <motion.div 
                  key={`${service.title}-${index}`}
                  variants={itemVariants}
                  layout
                  className="service-card-container"
                >
                  <ServiceCard {...service} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;