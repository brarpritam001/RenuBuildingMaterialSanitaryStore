import { motion } from 'framer-motion';

const colorGradients = {
  blue: {
    bg: "linear-gradient(135deg, rgba(59, 130, 246, 0.08) 0%, rgba(59, 130, 246, 0.03) 100%)",
    hoverBg: "linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0.08) 100%)",
    iconBg: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
    border: "rgba(59, 130, 246, 0.3)",
    glow: "rgba(59, 130, 246, 0.15)"
  },
  green: {
    bg: "linear-gradient(135deg, rgba(16, 185, 129, 0.08) 0%, rgba(16, 185, 129, 0.03) 100%)",
    hoverBg: "linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(16, 185, 129, 0.08) 100%)",
    iconBg: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
    border: "rgba(16, 185, 129, 0.3)",
    glow: "rgba(16, 185, 129, 0.15)"
  },
  amber: {
    bg: "linear-gradient(135deg, rgba(245, 158, 11, 0.08) 0%, rgba(245, 158, 11, 0.03) 100%)",
    hoverBg: "linear-gradient(135deg, rgba(245, 158, 11, 0.15) 0%, rgba(245, 158, 11, 0.08) 100%)",
    iconBg: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
    border: "rgba(245, 158, 11, 0.3)",
    glow: "rgba(245, 158, 11, 0.15)"
  },
  purple: {
    bg: "linear-gradient(135deg, rgba(139, 92, 246, 0.08) 0%, rgba(139, 92, 246, 0.03) 100%)",
    hoverBg: "linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(139, 92, 246, 0.08) 100%)",
    iconBg: "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)",
    border: "rgba(139, 92, 246, 0.3)",
    glow: "rgba(139, 92, 246, 0.15)"
  },
  red: {
    bg: "linear-gradient(135deg, rgba(239, 68, 68, 0.08) 0%, rgba(239, 68, 68, 0.03) 100%)",
    hoverBg: "linear-gradient(135deg, rgba(239, 68, 68, 0.15) 0%, rgba(239, 68, 68, 0.08) 100%)",
    iconBg: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
    border: "rgba(239, 68, 68, 0.3)",
    glow: "rgba(239, 68, 68, 0.15)"
  },
  indigo: {
    bg: "linear-gradient(135deg, rgba(99, 102, 241, 0.08) 0%, rgba(99, 102, 241, 0.03) 100%)",
    hoverBg: "linear-gradient(135deg, rgba(99, 102, 241, 0.15) 0%, rgba(99, 102, 241, 0.08) 100%)",
    iconBg: "linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)",
    border: "rgba(99, 102, 241, 0.3)",
    glow: "rgba(99, 102, 241, 0.15)"
  }
};

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: keyof typeof colorGradients;
  stats: string | number;
  index: number;
};

const FeatureCard = ({ icon, title, description, color, stats, index }: FeatureCardProps) => {
  const delay = index * 0.1;
  
  const gradient = colorGradients[color] || colorGradients.blue;

  return (
    <motion.div 
      className="feature-card"
      style={{
        background: gradient.bg,
        borderColor: gradient.border
      }}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        delay,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }}
      whileHover={{ 
        y: -8,
        background: gradient.hoverBg,
        transition: { 
          type: "spring", 
          stiffness: 300, 
          damping: 15 
        }
      }}
    >
      <div className="feature-card-inner">
        <motion.div 
          className="feature-icon-wrapper"
          whileHover={{
            rotate: [0, 5, -5, 0],
            transition: { duration: 0.6 }
          }}
        >
          <motion.div 
            className="feature-icon-container"
            style={{ background: gradient.iconBg }}
            whileHover={{ scale: 1.1 }}
          >
            {icon}
          </motion.div>
          <div 
            className="feature-icon-ring"
            style={{ borderColor: gradient.border }}
          />
        </motion.div>
        
        <div className="feature-content">
          <motion.h3 
            className="feature-title"
            whileHover={{ color: gradient.iconBg }}
            transition={{ duration: 0.3 }}
          >
            {title}
          </motion.h3>
          <p className="feature-description">{description}</p>
          
          <motion.div 
            className="feature-stats"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: delay + 0.2, duration: 0.4 }}
          >
            <span className="stats-badge">{stats}</span>
          </motion.div>
        </div>
        
        <motion.div 
          className="feature-learn-more"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: delay + 0.3 }}
        >
          <span>Learn more</span>
          <motion.svg 
            className="feature-arrow"
            viewBox="0 0 20 20" 
            fill="currentColor"
            whileHover={{ x: 4 }}
          >
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </motion.svg>
        </motion.div>
      </div>
      
      <motion.div 
        className="feature-card-glow"
        style={{ background: gradient.glow }}
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 0.4 }}
      />
    </motion.div>
  );
};

export default FeatureCard;