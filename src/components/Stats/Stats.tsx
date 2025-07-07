import { useState, useEffect, useRef } from 'react';
import { TrendingUp, Clock, CheckCircle, Package } from 'lucide-react';
import './Stats.css';

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({ years: 0, projects: 0, delivery: 0, products: 0 });
  const statsRef = useRef(null);
  
  useEffect(() => {
    if (isVisible) {
      const duration = 1800;
      const startTime = performance.now();
      
      const animateCounts = (timestamp: number) => {
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOutProgress = 1 - Math.pow(1 - progress, 3);
        
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
      color: "stats__indigo-text",
      bgColor: "stats__indigo-bg"
    },
    {
      icon: <Package size={28} />,
      value: `${counts.projects.toLocaleString()}+`,
      label: "Projects Supplied",
      description: "Trusted by major industries",
      color: "stats__blue-text",
      bgColor: "stats__blue-bg"
    },
    {
      icon: <Clock size={28} />,
      value: `${counts.delivery}%`,
      label: "On-time Delivery",
      description: "Reliability you can count on",
      color: "stats__emerald-text",
      bgColor: "stats__emerald-bg"
    },
    {
      icon: <CheckCircle size={28} />,
      value: `${counts.products.toLocaleString()}+`,
      label: "Quality Products",
      description: "Meeting highest standards",
      color: "stats__amber-text",
      bgColor: "stats__amber-bg"
    }
  ];
  
  return (
    <section className="stats__section" ref={statsRef}>
      <div className="stats__container">
        <div className="stats__header">
          <h2 className="stats__heading">Our Performance at a Glance</h2>
          <p className="stats__subheading">
            Delivering consistent quality and reliability for over a decade
          </p>
        </div>
        
        <div className="stats__grid">
          {statsData.map((stat, index) => (
            <div className="stats__card" key={index}>
              <div className={`stats__icon ${stat.bgColor} ${stat.color}`}>
                {stat.icon}
              </div>
              <div className="stats__content">
                <div className="stats__value">{stat.value}</div>
                <div className="stats__label">{stat.label}</div>
                <div className="stats__description">{stat.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;