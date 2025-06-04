import { useState, useEffect } from 'react';
import { FaArrowRight, FaSearch, FaFilter, FaExternalLinkAlt } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import './Projects.css';

type Project = {
  id: number;
  title: string;
  type: string;
  location: string;
  year: string;
  image: string;
  tags: string[];
  description: string;
};

const ProjectsComponent = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isHovered, setIsHovered] = useState<number | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

 const projects: Project[] = [
  {
    id: 1,
    title: 'Oceanview Residential Complex',
    type: 'Residential',
    location: 'Miami, FL',
    year: '2024',
    image: 'https://thebreedencompany.com/wp-content/uploads/2018/12/ocean-view-complex.jpeg',
    tags: ['Luxury', 'Sustainable', 'Waterfront'],
    description: 'A stunning waterfront residential complex featuring sustainable materials and panoramic ocean views.'
  },
  {
    id: 2,
    title: 'Downtown Corporate Tower',
    type: 'Commercial',
    location: 'New York, NY',
    year: '2023',
    image: 'https://www.shutterstock.com/image-photo/business-skyscrapers-financial-district-toronto-600nw-2478900781.jpg',
    tags: ['High-rise', 'LEED Certified', 'Mixed-use'],
    description: 'A 45-story commercial tower with LEED Platinum certification and mixed-use spaces.'
  },
  {
    id: 3,
    title: 'Historic District Renovation',
    type: 'Renovation',
    location: 'Boston, MA',
    year: '2023',
    image: 'https://essential.construction/academy/wp-content/uploads/sites/22/2019/12/architecture-4571499_1920-1.jpg',
    tags: ['Preservation', 'Adaptive Reuse', 'Landmark'],
    description: 'Careful restoration of a historic landmark building while modernizing interior systems.'
  },
  {
    id: 4,
    title: 'Mountain Retreat Homes',
    type: 'Residential',
    location: 'Aspen, CO',
    year: '2022',
    image: 'https://onekindesign.com/wp-content/uploads/2016/11/Contemporary-Mountain-Retreat-Berglund-Architects-01-1-Kindesign.jpg',
    tags: ['Custom', 'Luxury', 'Remote'],
    description: 'Custom luxury homes designed to blend with the natural mountain landscape.'
  },
  {
    id: 5,
    title: 'Tech Campus Expansion',
    type: 'Commercial',
    location: 'San Francisco, CA',
    year: '2022',
    image: 'https://cdn.sanity.io/images/cxgd3urn/production/ce7698596402b9b75bd1aa3e401836bce8685249-3300x1950.jpg?w=1200&h=709&q=85&fit=crop&auto=format',
    tags: ['Innovation', 'Sustainable', 'Campus'],
    description: 'Expansion of a major tech campus featuring cutting-edge sustainable design.'
  },
  {
    id: 6,
    title: 'Urban Loft Conversion',
    type: 'Renovation',
    location: 'Chicago, IL',
    year: '2021',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwzBioNnGHgOh7jogDA2QC4jNC5UiH526eIg&s',
    tags: ['Industrial', 'Modern', 'Adaptive Reuse'],
    description: 'Transformation of an old warehouse into modern loft apartments with industrial charm.'
  }
];

  const projectTypes = ['All', ...new Set(projects.map(project => project.type))];

  const filteredProjects = projects.filter(project => {
    const matchesFilter = activeFilter === 'All' || project.type === activeFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         project.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

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
    hidden: { y: 40, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    },
    exit: { 
      y: 20, 
      opacity: 0,
      transition: { duration: 0.3 }
    }
  };

  const cardHoverVariants = {
    rest: { 
      y: 0,
      scale: 1,
      rotateX: 0,
      rotateY: 0,
      boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.1)"
    },
    hover: { 
      y: -15,
      scale: 1.02,
      rotateX: -2,
      rotateY: 2,
      boxShadow: "0 30px 60px -20px rgba(0, 0, 0, 0.25)",
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const imageHoverVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.1 }
  };

  return (
    <div className="projects-component-container">
      {/* 3D Background Elements */}
      <div className="projects-component-bg-elements">
        <motion.div 
          className="projects-component-bg-shape-1"
          animate={{
            y: scrollY * 0.1,
            x: Math.sin(scrollY * 0.005) * 40,
            rotate: scrollY * 0.02
          }}
          transition={{ type: "spring", damping: 20, stiffness: 100 }}
        />
        <motion.div 
          className="projects-component-bg-shape-2"
          animate={{
            y: scrollY * 0.15,
            x: Math.cos(scrollY * 0.005) * 50,
            rotate: scrollY * 0.03
          }}
          transition={{ type: "spring", damping: 20, stiffness: 100 }}
        />
        <motion.div 
          className="projects-component-bg-shape-3"
          animate={{
            y: scrollY * 0.2,
            x: Math.sin(scrollY * 0.008) * 60,
            rotate: scrollY * 0.04
          }}
          transition={{ type: "spring", damping: 20, stiffness: 100 }}
        />
      </div>

      <motion.div 
        className="projects-component-header"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Our Architectural Portfolio
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Discover our curated collection of innovative projects that redefine modern construction
        </motion.p>
      </motion.div>

      <motion.div 
        className="projects-component-controls"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <div className="projects-component-search-bar">
          <div className="projects-component-search-container">
            <FaSearch className="projects-component-search-icon" />
            <input
              type="text"
              placeholder="Search projects by name, location, tag or description..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <motion.div 
              className="projects-component-search-decoration"
              animate={{
                width: searchQuery ? '100%' : '80%',
                opacity: searchQuery ? 0.4 : 0.2
              }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        <div className="projects-component-filter-controls">
          <div className="projects-component-filter-label">
            <FaFilter className="projects-component-filter-icon" />
            <span>Filter by category:</span>
          </div>
          <div className="projects-component-filter-buttons">
            {projectTypes.map(type => (
              <motion.button
                key={type}
                className={`projects-component-filter-button ${activeFilter === type ? 'projects-component-active' : ''}`}
                onClick={() => setActiveFilter(type)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                {type}
                {activeFilter === type && (
                  <motion.span 
                    className="projects-component-filter-active-indicator"
                    layoutId="activeFilter"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>

      {isLoading ? (
        <div className="projects-component-loading">
          <div className="projects-component-loading-spinner">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  opacity: [0.1, 1, 0.1],
                  scale: [0.8, 1.2, 0.8]
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  repeatDelay: 0,
                  delay: i * 0.1
                }}
              />
            ))}
          </div>
        </div>
      ) : (
        <motion.div 
          className="projects-component-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <motion.div 
                  key={project.id}
                  className="projects-component-card"
                  variants={itemVariants}
                  layout
                  whileHover="hover"
                  onHoverStart={() => setIsHovered(project.id)}
                  onHoverEnd={() => setIsHovered(null)}
                  viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                >
                  <motion.div 
                    className="projects-component-image-container"
                    variants={cardHoverVariants}
                  >
                    <motion.div 
                      className="projects-component-image"
                      variants={imageHoverVariants}
                    >
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        loading="lazy"
                      />
                      <div className="projects-component-badge">{project.type}</div>
                      <div className="projects-component-image-overlay"></div>
                    </motion.div>
                  </motion.div>
                  <div className="projects-component-details">
                    <h3>{project.title}</h3>
                    <div className="projects-component-meta">
                      <span className="projects-component-location">
                        <svg width="12" height="16" viewBox="0 0 12 16" fill="none">
                          <path d="M6 8C5.60444 8 5.21776 7.8827 4.88886 7.66294C4.55996 7.44318 4.30362 7.13082 4.15224 6.76537C4.00087 6.39992 3.96126 5.99778 4.03843 5.60982C4.1156 5.22186 4.30608 4.86549 4.58579 4.58579C4.86549 4.30608 5.22186 4.1156 5.60982 4.03843C5.99778 3.96126 6.39992 4.00087 6.76537 4.15224C7.13082 4.30362 7.44318 4.55996 7.66294 4.88886C7.8827 5.21776 8 5.60444 8 6C8 6.53043 7.78929 7.03914 7.41421 7.41421C7.03914 7.78929 6.53043 8 6 8ZM6 0C4.4087 0 2.88258 0.632141 1.75736 1.75736C0.632141 2.88258 0 4.4087 0 6C0 11.25 6 16 6 16C6 16 12 11.25 12 6C12 4.4087 11.3679 2.88258 10.2426 1.75736C9.11742 0.632141 7.5913 0 6 0Z" fill="currentColor"/>
                        </svg>
                        {project.location}
                      </span>
                      <span className="projects-component-year">{project.year}</span>
                    </div>
                    <p className="projects-component-description">{project.description}</p>
                    <div className="projects-component-tags">
                      {project.tags.map(tag => (
                        <motion.span 
                          key={tag} 
                          className="projects-component-tag"
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                    <motion.button 
                      className="projects-component-button"
                      whileHover={{ 
                        backgroundColor: "var(--projects-primary-dark)",
                        color: "var(--projects-white)"
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      View Project <FaExternalLinkAlt className="projects-component-button-icon" />
                    </motion.button>
                  </div>
                  {isHovered === project.id && (
                    <motion.div 
                      className="projects-component-card-hover-effect"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  )}
                </motion.div>
              ))
            ) : (
              <motion.div 
                className="projects-component-no-results"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <h3>No projects match your search criteria</h3>
                <p>Try adjusting your filters or search terms</p>
                <motion.button
                  onClick={() => {
                    setSearchQuery('');
                    setActiveFilter('All');
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Reset Filters
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}

      {filteredProjects.length > 0 && (
        <motion.div 
          className="projects-component-cta"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="projects-component-cta-content">
            <h2>Ready to start your next project?</h2>
            <p>Our team of experts is ready to bring your vision to life with innovative solutions and premium materials</p>
            <motion.button 
              className="projects-component-cta-button"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 15px 35px -5px rgba(49, 130, 206, 0.5)"
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Get in Touch <FaArrowRight className="projects-component-button-icon" />
            </motion.button>
          </div>
          <div className="projects-component-cta-decoration-1"></div>
          <div className="projects-component-cta-decoration-2"></div>
        </motion.div>
      )}
    </div>
  );
};

export default ProjectsComponent;