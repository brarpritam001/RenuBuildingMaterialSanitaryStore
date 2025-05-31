import { useState, useEffect } from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Gallery.css';
// import { label } from 'framer-motion/client';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(true);
  
  const projects = [
  {
    id: 1,
    title: "Luxury Lakeside Residence",
    description: "Contemporary home with premium materials and sustainable design",
    category: "residential",
    featured: true,
    image: "https://image.shutterstock.com/image-photo/modern-luxury-house-swimming-pool-260nw-2533399621.jpg",
    tags: ["Modern", "Sustainable", "Luxury"]
  },
  {
    id: 2,
    title: "Downtown Office Complex",
    description: "Modern commercial space with high-performance materials",
    category: "commercial",
    featured: true,
    image: "https://images.adsttc.com/media/images/5e66/5e5e/b357/65bd/db00/0025/slideshow/10.jpg?1583767123",
    tags: ["Commercial", "High-Tech", "Urban"]
  },
  {
    id: 3,
    title: "Historic Building Restoration",
    description: "Preserving heritage while enhancing functionality",
    category: "renovation",
    featured: true,
    image: "https://images.pexels.com/photos/31078559/pexels-photo-31078559/free-photo-of-historic-building-under-restoration-with-scaffolding.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["Heritage", "Restoration", "Adaptive Reuse"]
  },
  {
    id: 4,
    title: "Sustainable Community Housing",
    description: "Eco-friendly residential development with innovative materials",
    category: "residential",
    featured: false,
    image: "https://images.megapixl.com/mpt/117982606740.jpg",
    tags: ["Eco-Friendly", "Community", "Affordable"]
  },
  {
    id: 5,
    title: "Retail Shopping Center",
    description: "High-traffic commercial space with durable solutions",
    category: "commercial",
    featured: false,
    image: "https://www.shutterstock.com/shutterstock/photos/2467740671/display_1500/stock-photo-ha-noi-vietnam-january-lotte-s-new-shopping-center-in-tay-ho-district-2467740671.jpg",
    tags: ["Retail", "Mixed-Use", "Public Space"]
  },
  {
    id: 6,
    title: "Industrial Facility Upgrade",
    description: "Modernizing manufacturing spaces for efficiency",
    category: "renovation",
    featured: false,
    image: "https://images.adsttc.com/media/images/65c2/efd4/f2f1/3e0d/d7ca/3517/slideshow/la-nueva-vida-de-la-arquitectura-industrial-en-las-ciudades-renovaciones-y-reconversiones-de-antiguas-fabricas-y-naves-industriales_1.jpg?1707274203",
    tags: ["Industrial", "Efficiency", "Modernization"]
  },
  {
    id: 7,
    title: "City Park Pavilion",
    description: "A public space for community events and recreation",
    category: "public",
    featured: true,
    image: "https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,q_75,w_1200/v1/crm/denver/22744_553x300_ff162255-b305-2744-217210114c70645a.jpg",
    tags: ["Community", "Outdoor", "Recreation"]
  },
  {
    id: 8,
    title: "University Science Building",
    description: "State-of-the-art facility for research and education",
    category: "educational",
    featured: false,
    image: "https://d3qi0qp55mx5f5.cloudfront.net/facilities/i/hero/NESB_-_DPD_Rendering_Header.jpg?mtime=1731432282",
    tags: ["Education", "Research", "Innovation"]
  }
];


  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'residential', label: 'Residential' },
    { id: 'commercial', label: 'Commercial' },  
    { id: 'renovation', label: 'Renovation' },
    { id: 'public', label:'Public'},
    { id: 'educational',  label: 'Educational'},
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects.filter(project => project.featured)
    : projects.filter(project => project.category === activeFilter);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="gallery-section">
      <div className="container mx-auto px-4">
        <div className="section-header text-center mb-8">
          <motion.span 
            className="section-pre-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            OUR PORTFOLIO
          </motion.span>
          
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Exceptional Projects Built with BuildMaster
          </motion.h2>
          
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Discover how our premium materials elevate construction projects across various sectors
          </motion.p>
          
          <motion.div 
            className="filter-tabs"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {filters.map(filter => (
              <motion.button 
                key={filter.id}
                className={`filter-tab ${activeFilter === filter.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter.label}
              </motion.button>
            ))}
          </motion.div>
        </div>

        {isLoading ? (
          <div className="loading-grid">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="loading-card">
                <div className="loading-shimmer"></div>
              </div>
            ))}
          </div>
        ) : (
          <motion.div 
            className="gallery-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div 
                  key={project.id}
                  className="gallery-item"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ 
                    duration: 0.6, 
                    ease: [0.16, 1, 0.3, 1],
                    delay: index * 0.1
                  }}
                  layout
                >
                  <div 
                    className="gallery-item-inner" 
                    style={{ backgroundImage: `url(${project.image})` }}
                  >
                    <div className="gallery-overlay">
                      <div className="gallery-content">
                        <div className="project-tags">
                          {project.tags.map(tag => (
                            <span key={tag} className="project-tag">{tag}</span>
                          ))}
                        </div>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <motion.a 
                          href={`/projects/${project.id}`} 
                          className="view-project"
                          whileHover={{ x: 5 }}
                        >
                          View Details <ChevronRight size={14} />
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        <motion.div 
          className="gallery-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.a 
            href="/projects" 
            className="primary-button"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 8px 20px -5px rgba(59, 130, 246, 0.4)"
            }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Explore All Projects</span>
            <ArrowRight className="button-icon" size={16} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;