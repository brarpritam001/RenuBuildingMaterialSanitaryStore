import { FaLeaf, FaRecycle, FaSolarPanel, FaWater, FaBuilding } from 'react-icons/fa';
import { GiWindmill } from 'react-icons/gi';
import { MdEco } from 'react-icons/md';
import './Sustainability.css';

const SustainabilityPage = () => {
  const sustainabilityFeatures = [
    {
      icon: <FaLeaf className="sustainability-feature-icon" />,
      title: "Eco-Friendly Materials",
      description: "Our products are sourced from sustainable suppliers with minimal environmental impact."
    },
    {
      icon: <FaRecycle className="sustainability-feature-icon" />,
      title: "Recycled Content",
      description: "Many of our materials contain high percentages of post-consumer recycled content."
    },
    {
      icon: <GiWindmill className="sustainability-feature-icon" />,
      title: "Renewable Energy",
      description: "Our manufacturing facilities are powered by 100% renewable energy sources."
    },
    {
      icon: <FaSolarPanel className="sustainability-feature-icon" />,
      title: "Solar Solutions",
      description: "We offer integrated solar solutions for energy-efficient building projects."
    },
    {
      icon: <FaWater className="sustainability-feature-icon" />,
      title: "Water Conservation",
      description: "Our products help reduce water consumption in buildings by up to 40%."
    },
    {
      icon: <MdEco className="sustainability-feature-icon" />,
      title: "Low VOC Emissions",
      description: "All our materials meet strict VOC emission standards for healthier indoor air quality."
    }
  ];

  const certifications = [
    { name: "LEED Certified", logo: "/logos/leed-certified.png" },
    { name: "Energy Star", logo: "/logos/energy-star.png" },
    { name: "Green Seal", logo: "/logos/green-seal.png" },
    { name: "FSC Certified", logo: "/logos/fsc-certified.png" },
    { name: "Cradle to Cradle", logo: "/logos/cradle-to-cradle.png" }
  ];

  return (
    <div className="sustainability-page">
      {/* Hero Section */}
      <section className="sustainability-hero">
        <div className="sustainability-hero-content">
          <h1 className="sustainability-hero-title">Building a Sustainable Future</h1>
          <p className="sustainability-hero-subtitle">
            Committed to environmentally responsible construction materials and practices
          </p>
          <button className="sustainability-hero-button">
            Learn About Our Initiatives <FaBuilding className="sustainability-button-icon" />
          </button>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="sustainability-commitment">
        <div className="sustainability-container">
          <div className="sustainability-section-header">
            <span className="sustainability-section-pre-title">OUR PLEDGE</span>
            <h2 className="sustainability-section-title">Sustainable Construction Commitment</h2>
            <p className="sustainability-section-subtitle">
              We're transforming the building materials industry through innovation and responsibility
            </p>
          </div>

          <div className="sustainability-stats-grid">
            <div className="sustainability-stat-item">
              <div className="sustainability-stat-value">85%</div>
              <div className="sustainability-stat-label">Reduction in carbon footprint since 2015</div>
            </div>
            <div className="sustainability-stat-item">
              <div className="sustainability-stat-value">100%</div>
              <div className="sustainability-stat-label">Renewable energy in our manufacturing</div>
            </div>
            <div className="sustainability-stat-item">
              <div className="sustainability-stat-value">250+</div>
              <div className="sustainability-stat-label">Eco-certified products in our catalog</div>
            </div>
            <div className="sustainability-stat-item">
              <div className="sustainability-stat-value">1M+</div>
              <div className="sustainability-stat-label">Tons of waste diverted from landfills annually</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="sustainability-features">
        <div className="sustainability-container">
          <div className="sustainability-section-header">
            <span className="sustainability-section-pre-title">GREEN SOLUTIONS</span>
            <h2 className="sustainability-section-title">Sustainable Building Features</h2>
            <p className="sustainability-section-subtitle">
              Innovative products that help you meet your environmental goals without compromising quality
            </p>
          </div>

          <div className="sustainability-features-grid">
            {sustainabilityFeatures.map((feature, index) => (
              <div key={index} className="sustainability-feature-card">
                <div className="sustainability-feature-icon-container">
                  {feature.icon}
                </div>
                <h3 className="sustainability-feature-title">{feature.title}</h3>
                <p className="sustainability-feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="sustainability-certifications">
        <div className="sustainability-container">
          <div className="sustainability-section-header">
            <span className="sustainability-section-pre-title">RECOGNIZED STANDARDS</span>
            <h2 className="sustainability-section-title">Industry Certifications</h2>
            <p className="sustainability-section-subtitle">
              Our products meet the most stringent environmental standards in the construction industry
            </p>
          </div>

          <div className="sustainability-certifications-grid">
            {certifications.map((cert, index) => (
              <div key={index} className="sustainability-certification-item">
                <img 
                  src={cert.logo} 
                  alt={cert.name} 
                  className="sustainability-certification-logo" 
                />
                <span className="sustainability-certification-name">{cert.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="sustainability-cta">
        <div className="sustainability-container">
          <div className="sustainability-cta-card">
            <div className="sustainability-cta-content">
              <h2 className="sustainability-cta-title">Ready to Build Sustainably?</h2>
              <p className="sustainability-cta-text">
                Our green building specialists can help you select the right materials for your eco-friendly project
              </p>
              <div className="sustainability-cta-buttons">
                <button className="sustainability-cta-button sustainability-cta-button-primary">
                  Request Consultation
                </button>
                <button className="sustainability-cta-button sustainability-cta-button-secondary">
                  Download Sustainability Guide
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SustainabilityPage;