import React, { useState, useEffect, useRef } from 'react';
import { FaProjectDiagram, FaHandshake, FaBuilding, FaArrowRight } from 'react-icons/fa';
import { GiBrickWall, GiStonePath } from 'react-icons/gi';
import { MdEngineering, MdOutlinePrecisionManufacturing } from 'react-icons/md';
import { IoIosRibbon } from 'react-icons/io';
import { RiTeamFill } from 'react-icons/ri';
import { HiOutlineLocationMarker, HiOutlineMail, HiOutlinePhone } from 'react-icons/hi';
import './About.css';

const AboutPage: React.FC = () => {
  // State for animated counters
  const [counters, setCounters] = useState({
    years: 0,
    team: 0,
    projects: 0,
    retention: 0
  });

  // Ref for intersection observer
  const statsRef = useRef<HTMLDivElement>(null);
  const [isStatsVisible, setIsStatsVisible] = useState(false);

  // Intersection Observer for stats animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsStatsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Animated counter effect
  useEffect(() => {
    if (isStatsVisible) {
      const targets = { years: 15, team: 500, projects: 10000, retention: 98 };
      const duration = 2000; // 2 seconds
      const steps = 60;
      const increment = duration / steps;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        const easeOut = 1 - Math.pow(1 - progress, 3); // Easing function

        setCounters({
          years: Math.round(targets.years * easeOut),
          team: Math.round(targets.team * easeOut),
          projects: Math.round(targets.projects * easeOut),
          retention: Math.round(targets.retention * easeOut)
        });

        if (step >= steps) {
          clearInterval(timer);
          setCounters(targets);
        }
      }, increment);

      return () => clearInterval(timer);
    }
  }, [isStatsVisible]);

  const stats = [
    { value: `${counters.years}+`, label: 'Years in Business', icon: <FaBuilding />, color: '#6366f1' },
    { value: `${counters.team}+`, label: 'Team Members', icon: <RiTeamFill />, color: '#10b981' },
    { value: `${counters.projects > 1000 ? Math.round(counters.projects/1000) + 'K' : counters.projects}+`, label: 'Projects Supplied', icon: <FaProjectDiagram />, color: '#f59e0b' },
    { value: `${counters.retention}%`, label: 'Client Retention', icon: <FaHandshake />, color: '#ef4444' }
  ];

  const values = [
    {
      title: 'Quality First',
      description: 'We source only the highest grade materials that meet rigorous industry standards and exceed expectations.',
      icon: <IoIosRibbon />,
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Technical Expertise',
      description: 'Our team includes certified professionals with deep construction knowledge and innovative solutions.',
      icon: <MdEngineering />,
      gradient: 'from-green-500 to-teal-600'
    },
    {
      title: 'Sustainable Sourcing',
      description: 'We prioritize environmentally responsible materials and sustainable supply chain practices.',
      icon: <GiStonePath />,
      gradient: 'from-yellow-500 to-orange-600'
    },
    {
      title: 'Precision Manufacturing',
      description: 'Consistent quality through advanced production techniques, rigorous testing, and quality assurance.',
      icon: <MdOutlinePrecisionManufacturing />,
      gradient: 'from-red-500 to-pink-600'
    }
  ];

  const timeline = [
    {
      year: '1998',
      title: 'Company Founded',
      description: 'Started as a regional supplier of premium construction materials with a vision for excellence',
      icon: '🏗️'
    },
    {
      year: '2013',
      title: 'First Major Contract',
      description: 'Secured supply agreement with national home builder, marking our expansion milestone',
      icon: '🤝'
    },
    {
      year: '2016',
      title: 'Manufacturing Expansion',
      description: 'Opened our first dedicated production facility with state-of-the-art equipment',
      icon: '🏭'
    },
    {
      year: '2020',
      title: 'National Recognition',
      description: 'Named "Supplier of the Year" by Construction Excellence Awards for outstanding service',
      icon: '🏆'
    },
    {
      year: '2023',
      title: 'Sustainability Initiative',
      description: 'Launched comprehensive green building materials program and carbon-neutral operations',
      icon: '🌱'
    }
  ];

  const leadership = [
    {
      name: 'Ved Parkash',
      role: 'Founder & CEO',
      bio: '30+ years in construction materials with a passion for quality and innovation. Led the company from startup to industry leader.',
      image: '',
      linkedin: '#',
      email: 'parkashved925@gmail.com'
    },
    {
      name: 'Ved Parkash',
      role: 'Chief Operations Officer',
      bio: 'Specializes in supply chain optimization and logistics management. Expert in lean operations and process improvement.',
      image: '',
      linkedin: '#',
      email: 'parkashved925@gmail.com'
    },
    {
      name: 'Ved Parkash',
      role: 'Director of Product',
      bio: 'Leads our material testing and product development teams. Pioneer in sustainable construction material innovation.',
      image: '',
      linkedin: '#',
      email: 'parkashved925@gmail.com'
    }
  ];

  const certifications = [
    { name: 'ISO 9001', description: 'Quality Management' },
    { name: 'ISO 14001', description: 'Environmental Management' },
    { name: 'LEED Certified', description: 'Green Building' },
    { name: 'OSHA Compliant', description: 'Safety Standards' }
  ];

  return (
    <div className="about-page-container">
      {/* Floating Particles Background */}
      <div className="floating-particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className={`particle particle-${i + 1}`}></div>
        ))}
      </div>

      {/* Hero Section with Enhanced 3D Effects */}
      <section className="about-hero-section">
        <div className="about-hero-background">
          <div className="hero-gradient-overlay"></div>
          <div className="hero-animated-shapes">
            <div className="floating-shape shape-1"></div>
            <div className="floating-shape shape-2"></div>
            <div className="floating-shape shape-3"></div>
          </div>
        </div>
        <div className="about-container">
          <div className="about-hero-content">
            <div className="hero-badge">
              <span>Est. 1998</span>
            </div>
            <h1 className="about-hero-title">
              Building Excellence
              <span className="gradient-text">Since 1998</span>
            </h1>
            <p className="about-hero-subtitle">
              Professional-grade materials and innovative solutions for the modern construction industry
            </p>
            <div className="hero-cta-buttons">
              <button className="hero-btn primary">
                <span>Explore Our Story</span>
                <FaArrowRight />
              </button>
              <button className="hero-btn secondary">
                <span>View Projects</span>
              </button>
            </div>
          
          </div>          
        </div>        
      </section>

      {/* Enhanced Intro Section */}
      <section className="about-intro-section">
        <div className="about-container">
          <div className="about-intro-grid">
            <div className="about-intro-text">
              <div className="section-header">
                <span className="about-section-label">OUR STORY</span>
                <h2 className="about-section-title">More Than Just a Supplier</h2>
              </div>
              <div className="intro-content">
                <p className="about-intro-description">
                  Founded in 1998, BuildMaster has grown from a regional distributor to a national leader in construction materials supply. What began as a small operation focused on quality masonry products has evolved into a comprehensive solutions provider for commercial and residential builders alike.
                </p>
                <p className="about-intro-description">
                  Today, we combine our deep industry knowledge with cutting-edge logistics to deliver exceptional materials exactly when and where they're needed. Our technical expertise and project support services set us apart in the industry.
                </p>
                <div className="features-grid">
                  <div className="feature-item">
                    <HiOutlineLocationMarker />
                    <span>Nationwide Coverage</span>
                  </div>
                  <div className="feature-item">
                    <HiOutlineMail />
                    <span>24/7 Support</span>
                  </div>
                  <div className="feature-item">
                    <HiOutlinePhone />
                    <span>Expert Consultation</span>
                  </div>
                </div>
                <div className="about-signature-block">
                  <div className="signature-content">
                    <div className="signature-text">
                      <span className="signature-name">Ved Parkash</span>
                      <span className="signature-title">Founder & CEO</span>
                    </div>
                    <div className="signature-quote">
                      "Quality is not an act, it's a habit we've cultivated for over a decade."
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-intro-visual">
              <div className="visual-container">
                <div className="main-image-container">
                  <img 
                    src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop" 
                    alt="Construction site" 
                    className="about-main-image" 
                  />
                  <div className="image-overlay">
                    <div className="overlay-content">
                      <GiBrickWall className="overlay-icon" />
                      <div className="overlay-text">
                        <span className="overlay-number">15+</span>
                        <span className="overlay-label">Years Experience</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="floating-cards">
                  <div className="floating-card card-1">
                    <div className="card-icon">🏗️</div>
                    <div className="card-text">Premium Materials</div>
                  </div>
                  <div className="floating-card card-2">
                    <div className="card-icon">⚡</div>
                    <div className="card-text">Fast Delivery</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="about-stats-section" ref={statsRef}>
        <div className="stats-background">
          <div className="stats-grid-bg"></div>
        </div>
        <div className="about-container">
          <div className="stats-header">
            <h2 className="stats-title">Our Impact in Numbers</h2>
            <p className="stats-subtitle">Measurable results that speak to our commitment</p>
          </div>
          <div className="about-stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="about-stat-card" style={{ '--delay': `${index * 0.1}s`, '--color': stat.color } as React.CSSProperties}>
                <div className="stat-card-inner">
                  <div className="stat-icon-container">
                    <div className="stat-icon">{stat.icon}</div>
                    <div className="stat-icon-bg"></div>
                  </div>
                  <div className="stat-content">
                    <div className="about-stat-value">{stat.value}</div>
                    <div className="about-stat-label">{stat.label}</div>
                  </div>
                  <div className="stat-progress-bar">
                    <div className="progress-fill"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Values Section */}
      <section className="about-values-section">
        <div className="about-container">
          <div className="about-section-header">
            <span className="about-section-label">OUR PRINCIPLES</span>
            <h2 className="about-section-title">Core Values That Build Trust</h2>
            <p className="about-section-subtitle">
              The foundation of everything we do, driving excellence in every project
            </p>
          </div>
          <div className="about-values-grid">
            {values.map((value, index) => (
              <div key={index} className="about-value-card" style={{ '--index': index } as React.CSSProperties}>
                <div className="value-card-inner">
                  <div className={`value-icon-container bg-gradient-to-br ${value.gradient}`}>
                    <div className="about-value-icon">{value.icon}</div>
                  </div>
                  <div className="value-content">
                    <h3 className="about-value-title">{value.title}</h3>
                    <p className="about-value-description">{value.description}</p>
                  </div>
                </div>
                <div className="value-card-glow"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Timeline Section */}
      <section className="about-timeline-section">
        <div className="about-container">
          <div className="about-section-header">
            <span className="about-section-label">OUR JOURNEY</span>
            <h2 className="about-section-title">Milestones in Building Excellence</h2>
          </div>
          <div className="about-timeline-container">
            <div className="timeline-line"></div>
            {timeline.map((item, index) => (
              <div 
                key={index} 
                className={`about-timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                style={{ '--index': index } as React.CSSProperties}
              >
                <div className="timeline-marker">
                  <div className="marker-inner">
                    <span className="marker-icon">{item.icon}</span>
                  </div>
                  <div className="marker-pulse"></div>
                </div>
                <div className="timeline-content-wrapper">
                  <div className="about-timeline-year">{item.year}</div>
                  <div className="about-timeline-content">
                    <h3 className="about-timeline-title">{item.title}</h3>
                    <p className="about-timeline-description">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Leadership Section */}
      <section className="about-leadership-section">
        <div className="about-container">
          <div className="about-section-header">
            <span className="about-section-label">OUR TEAM</span>
            <h2 className="about-section-title">Leadership That Builds Confidence</h2>
            <p className="about-section-subtitle">
              Experienced professionals guiding our vision toward a sustainable future
            </p>
          </div>
          <div className="about-leadership-grid">
            {leadership.map((leader, index) => (
              <div key={index} className="about-leader-card" style={{ '--index': index } as React.CSSProperties}>
                <div className="leader-card-inner">
                  <div className="about-leader-image-container">
                    <img src={leader.image} alt={leader.name} className="about-leader-image" />
                    <div className="leader-gradient-overlay"></div>
                    <div className="leader-social-links">
                      <a href={leader.linkedin} className="social-link">
                        <span>LinkedIn</span>
                      </a>
                      <a href={`mailto:${leader.email}`} className="social-link">
                        <span>Email</span>
                      </a>
                    </div>
                  </div>
                  <div className="about-leader-info">
                    <h3 className="about-leader-name">{leader.name}</h3>
                    <p className="about-leader-role">{leader.role}</p>
                    <p className="about-leader-bio">{leader.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Certifications Section */}
      <section className="certifications-section">
        <div className="about-container">
          <div className="certifications-header">
            <h2 className="section-title">Industry Certifications</h2>
            <p className="section-subtitle">Recognized standards of excellence</p>
          </div>
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <div key={index} className="certification-card">
                <div className="cert-icon">🏅</div>
                <h3 className="cert-name">{cert.name}</h3>
                <p className="cert-description">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="about-cta-section">
        <div className="cta-background">
          <div className="cta-shapes">
            <div className="cta-shape shape-1"></div>
            <div className="cta-shape shape-2"></div>
            <div className="cta-shape shape-3"></div>
          </div>
        </div>
        <div className="about-container">
          <div className="about-cta-card">
            <div className="cta-content-wrapper">
              <div className="about-cta-content">
                <div className="cta-icon">
                  <GiBrickWall />
                </div>
                <h2 className="about-cta-title">Ready to Build with Confidence?</h2>
                <p className="about-cta-text">
                  Partner with a supplier that understands your project needs and delivers exceptional materials on time, every time. Let's build something extraordinary together.
                </p>
                <div className="about-cta-buttons">
                  <button className="about-cta-button about-cta-primary">
                    <span>Contact Our Team</span>
                    <FaArrowRight />
                  </button>
                  <button className="about-cta-button about-cta-secondary">
                    <span>View Products</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;