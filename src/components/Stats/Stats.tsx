import { useState, useEffect, useRef } from 'react';
import { TrendingUp, Clock, CheckCircle, Package } from 'lucide-react';
import './Stats.css';

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({ years: 0, projects: 0, delivery: 0, products: 0 });
  const statsRef = useRef(null);
  
  // Animate the numbers when component is visible
  useEffect(() => {
    if (isVisible) {
      const duration = 1800; // 1.8 seconds for the animation
      const startTime = performance.now();
      
      const animateCounts = (timestamp: number) => {
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOutProgress = 1 - Math.pow(1 - progress, 3); // Ease-out cubic
        
        setCounts({
          years: Math.ceil(easeOutProgress * 15),
          projects: Math.ceil(easeOutProgress * 5000),
          delivery: Math.ceil(easeOutProgress * 98),
          products: Math.ceil(easeOutProgress * 10000)
        });
        
        if (progress < 1) {
          requestAnimationFrame(animateCounts);
        }
      };
      
      requestAnimationFrame(animateCounts);
    }
  }, [isVisible]);
  
  // Set up intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (statsRef.current) {
      observer.observe(statsRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  const statsData = [
    {
      icon: <TrendingUp size={28} />,
      value: `${counts.years}+`,
      label: "Years Expertise",
      description: "Delivering excellence since 2010",
      color: "text-indigo-600",
      bgColor: "bg-indigo-50"
    },
    {
      icon: <Package size={28} />,
      value: `${counts.projects.toLocaleString()}+`,
      label: "Projects Supplied",
      description: "Trusted by major industries",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: <Clock size={28} />,
      value: `${counts.delivery}%`,
      label: "On-time Delivery",
      description: "Reliability you can count on",
      color: "text-emerald-600",
      bgColor: "bg-emerald-50"
    },
    {
      icon: <CheckCircle size={28} />,
      value: `${counts.products.toLocaleString()}+`,
      label: "Quality Products",
      description: "Meeting highest standards",
      color: "text-amber-600",
      bgColor: "bg-amber-50"
    }
  ];
  
  return (
    <section className="stats-section" ref={statsRef}>
      <div className="stats-container">
        <div className="stats-header">
          <h2 className="stats-heading">Our Performance at a Glance</h2>
          <p className="stats-subheading">
            Delivering consistent quality and reliability for over a decade
          </p>
          {/* <div className="stats-divider"></div> */}
        </div>
        
        <div className="stats-grid">
          {statsData.map((stat, index) => (
            <div className="stat-card" key={index}>
              <div className={`stat-icon ${stat.bgColor} ${stat.color}`}>
                {stat.icon}
              </div>
              <div className="stat-content">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
                <div className="stat-description">{stat.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;