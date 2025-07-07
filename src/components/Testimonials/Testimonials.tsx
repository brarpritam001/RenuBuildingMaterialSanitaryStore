import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Testimonials.css';

type Testimonial = {
  id: string;
  name: string;
  role: string;
  text: string;
  company: string;
  image?: string;
  rating: number;
};

type Partner = {
  id: string;
  name: string;
  logo?: string;
};

const Testimonials = () => {
  // Sample testimonial data
  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: "Michael Johnson",
      role: "General Contractor",
      text: "The quality of materials and on-time delivery has made them our preferred supplier for all major construction projects. Their team understands construction timelines better than anyone.",
      company: "MJ Construction",
      rating: 5
    },
    {
      id: '2',
      name: "Sarah Williams",
      role: "Interior Designer",
      text: "Their premium product range has helped us deliver exceptional finish quality to our most demanding clients. The samples library is incredibly useful for client presentations.",
      company: "Williams Design",
      rating: 5
    },
    {
      id: '3',
      name: "Robert Chen",
      role: "Project Manager",
      text: "We've relied on their bulk ordering system for three major developments, saving both time and budget. Their project coordination team is outstanding.",
      company: "Pacific Builders",
      rating: 4
    },
    {
      id: '4',
      name: "Emily Rodriguez",
      role: "Architect",
      text: "The technical support and material specifications provided have been invaluable for our complex projects. Their BIM integration saves us countless hours in documentation.",
      company: "Urban Form Architects",
      rating: 5
    }
  ];

  const partners: Partner[] = [
    // { id: '1', name: "Ambuja Cement", logo: "https://www.ambujacement.com/images/desktop-logo.png" },
    // { id: '2', name: "Kankhal", logo: "https://www.kankhalgroup.com/assets/images/final-logo.png" },
    // { id: '3', name: "Shree Cement", logo: "https://www.shreecement.com/public/front_assets/images/logo.jpg" },
    // { id: '4', name: "Prince Pipe", logo: "https://www.princepipes.com/images/prince-pipes-new-logo24.png" },
    // { id: '5', name: "Supreme Industries", logo: "https://www.supreme.co.in/dist/img/logo.png" },
    // { id: '6', name: "Finolex Industries", logo: "https://www.finolex.com/images/Finolex_logo_header.svg" }
  ];

  // State management
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const autoPlayTimeout = useRef<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Navigation functions
  const goToNext = useCallback(() => {
    setDirection(1);
    setActiveIndex(prev => (prev + 1) % testimonials.length);
    resetAutoPlayTimer();
  }, [testimonials.length]);

  const resetAutoPlayTimer: () => void = useCallback(() => {
    if (autoPlayTimeout.current) {
      clearTimeout(autoPlayTimeout.current);
    }

    if (isAutoPlaying) {
      autoPlayTimeout.current = setTimeout(() => {
        goToNext();
      }, 6000);
    }
  }, [isAutoPlaying, goToNext]);

  const goToPrev = useCallback(() => {
    setDirection(-1);
    setActiveIndex(prev => (prev - 1 + testimonials.length) % testimonials.length);
    resetAutoPlayTimer();
  }, [testimonials.length, resetAutoPlayTimer]);

  const goToIndex = (index: number) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
    setIsAutoPlaying(false);
    resetAutoPlayTimer();
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  // Set up and clean up auto-play
  useEffect(() => {
    resetAutoPlayTimer();
    return () => {
      if (autoPlayTimeout.current) {
        clearTimeout(autoPlayTimeout.current);
      }
    };
  }, [activeIndex, isAutoPlaying, resetAutoPlayTimer]);

  // Touch event handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      goToNext();
    } else if (touchEnd - touchStart > 75) {
      goToPrev();
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (carouselRef.current && carouselRef.current.contains(document.activeElement)) {
        if (e.key === 'ArrowRight') {
          goToNext();
        } else if (e.key === 'ArrowLeft') {
          goToPrev();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNext, goToPrev]);

  // Animation variants
  const carouselVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      transition: { duration: 0.5 }
    })
  };

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section 
      className="testimonials-container"
      aria-labelledby="testimonials-heading"
      ref={carouselRef}
    >
      <div className="testimonials-inner">
        {/* Section Header */}
        <motion.div 
          className="testimonials-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInVariants}
        >
          <motion.span 
            className="testimonials-pre-title"
            variants={fadeInVariants}
            transition={{ delay: 0.2 }}
          >
            Client Testimonials
          </motion.span>
          <motion.h2 
            className="testimonials-main-title"
            id="testimonials-heading"
            variants={fadeInVariants}
            transition={{ delay: 0.3 }}
          >
            Trusted by Industry Leaders
          </motion.h2>
          <motion.p 
            className="testimonials-description"
            variants={fadeInVariants}
            transition={{ delay: 0.4 }}
          >
            Don't just take our word for it. Here's what our clients say about working with us.
          </motion.p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div 
          className="testimonials-carousel"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <motion.button 
            className="testimonials-carousel-button testimonials-carousel-button-prev"
            onClick={goToPrev}
            aria-label="Previous testimonial"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaChevronLeft />
          </motion.button>
          
          <div className="testimonials-carousel-viewport">
            <AnimatePresence custom={direction} initial={false}>
              <motion.div
                key={testimonials[activeIndex].id}
                custom={direction}
                variants={carouselVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="testimonials-slide"
              >
                <TestimonialCard 
                  testimonial={testimonials[activeIndex]} 
                  active={true}
                />
              </motion.div>
            </AnimatePresence>
          </div>
          
          <motion.button 
            className="testimonials-carousel-button testimonials-carousel-button-next"
            onClick={goToNext}
            aria-label="Next testimonial"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaChevronRight />
          </motion.button>
        </div>
        
        {/* Carousel Indicators */}
        <div className="testimonials-indicators">
          {testimonials.map((testimonial, index) => (
            <motion.button
              key={testimonial.id}
              className={`testimonials-indicator ${activeIndex === index ? 'testimonials-indicator-active' : ''}`}
              onClick={() => goToIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              animate={{
                backgroundColor: activeIndex === index ? 'var(--primary)' : 'var(--gray-200)',
                scale: activeIndex === index ? 1.2 : 1
              }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            />
          ))}
        </div>

        {/* Partners Section */}
        <motion.div 
          // className="testimonials-partners-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInVariants}
          transition={{ delay: 0.2 }}
        >
          {/* <h3 className="testimonials-partners-title">
            <span>Trusted Partners</span>
          </h3> */}
          
          <div className="testimonials-partners-grid">
            {partners.map(partner => (
              <PartnerLogo 
                key={partner.id} 
                partner={partner} 
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Testimonial Card Component
const TestimonialCard = ({ testimonial, active }: { testimonial: Testimonial, active?: boolean }) => {
  return (
    <motion.div 
      className={`testimonials-card ${active ? 'testimonials-card-active' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="testimonials-card-inner">
        <FaQuoteLeft className="testimonials-quote-icon" />
        
        <motion.p 
          className="testimonials-card-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {testimonial.text}
        </motion.p>
        
        <div className="testimonials-card-footer">
          <div className="testimonials-author-avatar">
            {testimonial.image ? (
              <motion.img 
                src={testimonial.image} 
                alt={testimonial.name}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              />
            ) : (
              <motion.div 
                className="testimonials-avatar-initials"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                {testimonial.name.split(' ').map(n => n[0]).join('')}
              </motion.div>
            )}
          </div>
          <div className="testimonials-author-info">
            <motion.h4 
              className="testimonials-author-name"
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {testimonial.name}
            </motion.h4>
            <motion.p 
              className="testimonials-author-meta"
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {testimonial.role} • {testimonial.company}
            </motion.p>
          </div>
        </div>
        
        <motion.div 
          className="testimonials-rating"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {[...Array(5)].map((_, i) => (
            <FaStar 
              key={i} 
              className={`testimonials-star ${i < testimonial.rating ? 'testimonials-star-filled' : ''}`} 
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

// Partner Logo Component
const PartnerLogo = ({ partner }: { partner: Partner }) => {
  return (
    <motion.div 
      className="testimonials-partner-logo"
      whileHover={{ y: -5, scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
    >
      {partner.logo ? (
        <motion.img 
          src={partner.logo} 
          alt={`${partner.name} logo`}
          whileHover={{ filter: 'grayscale(0%)', opacity: 1 }}
        />
      ) : (
        <div className="testimonials-partner-name">{partner.name}</div>
      )}
    </motion.div>
  );
};

export default Testimonials;