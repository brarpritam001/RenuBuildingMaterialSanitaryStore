import { FaArrowRight, FaFileAlt, FaCalculator, FaRulerCombined, FaBook, FaShieldAlt } from 'react-icons/fa';
import './Resources.css';

const ResourcesPage = () => {
  const resourceCategories = [
    {
      title: "Installation Guides",
      description: "Step-by-step professional installation manuals for all our products",
      icon: <FaFileAlt className="resources-category-icon" />,
      count: "85+ Guides"
    },
    {
      title: "Material Calculators",
      description: "Precise tools to estimate quantities needed for your specific project",
      icon: <FaCalculator className="resources-category-icon" />,
      count: "12 Calculators"
    },
    {
      title: "Measurement Tools",
      description: "Digital tools and reference charts for accurate project planning",
      icon: <FaRulerCombined className="resources-category-icon" />,
      count: "8 Tools"
    },
    {
      title: "Technical Specifications",
      description: "Detailed product specs and performance data sheets",
      icon: <FaBook className="resources-category-icon" />,
      count: "200+ Documents"
    },
    {
      title: "Safety Standards",
      description: "Compliance information and best practices for safe installation",
      icon: <FaShieldAlt className="resources-category-icon" />,
      count: "50+ Resources"
    }
  ];

  const popularDownloads = [
    {
      title: "Concrete Mixing Guidelines",
      downloads: "12,450",
      type: "PDF",
      size: "2.4 MB"
    },
    {
      title: "Flooring Installation Handbook",
      downloads: "8,921",
      type: "PDF",
      size: "5.1 MB"
    },
    {
      title: "Roofing Material Calculator",
      downloads: "15,342",
      type: "XLSX",
      size: "1.2 MB"
    },
    {
      title: "Wall Framing Best Practices",
      downloads: "6,754",
      type: "PDF",
      size: "3.8 MB"
    }
  ];

  return (
    <div className="resources-page-container">
      {/* Hero Section */}
      <section className="resources-hero-section">
        <div className="resources-hero-content">
          <div className="resources-hero-text">
            <h1 className="resources-hero-title">Professional <span>Resources</span></h1>
            <p className="resources-hero-subtitle">
              Comprehensive technical documents, tools, and guides to support your construction projects
            </p>
            <div className="resources-search-container">
              <input 
                type="text" 
                placeholder="Search resources, guides, tools..." 
                className="resources-search-input"
              />
              <button className="resources-search-button">
                Search Resources
              </button>
            </div>
          </div>
          <div className="resources-hero-image"></div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="resources-categories-section">
        <div className="resources-section-container">
          <h2 className="resources-section-title">Resource Categories</h2>
          <p className="resources-section-description">
            Browse our collection of professional-grade resources organized by category
          </p>
          
          <div className="resources-categories-grid">
            {resourceCategories.map((category, index) => (
              <div key={index} className="resources-category-card">
                <div className="resources-category-icon-container">
                  {category.icon}
                </div>
                <h3 className="resources-category-title">{category.title}</h3>
                <p className="resources-category-description">{category.description}</p>
                <div className="resources-category-footer">
                  <span className="resources-category-count">{category.count}</span>
                  <button className="resources-category-button">
                    Explore <FaArrowRight className="resources-button-icon" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Downloads */}
      <section className="resources-popular-section">
        <div className="resources-section-container">
          <div className="resources-popular-header">
            <h2 className="resources-section-title">Most Popular Downloads</h2>
            <button className="resources-view-all-button">
              View All Resources <FaArrowRight className="resources-button-icon" />
            </button>
          </div>
          <p className="resources-section-description">
            Resources most frequently downloaded by professionals like you
          </p>
          
          <div className="resources-downloads-table">
            <div className="resources-table-header">
              <div className="resources-table-col resources-col-title">Resource Title</div>
              <div className="resources-table-col resources-col-downloads">Downloads</div>
              <div className="resources-table-col resources-col-type">Type</div>
              <div className="resources-table-col resources-col-size">Size</div>
              <div className="resources-table-col resources-col-action">Action</div>
            </div>
            
            {popularDownloads.map((download, index) => (
              <div key={index} className="resources-table-row">
                <div className="resources-table-col resources-col-title">
                  {download.title}
                </div>
                <div className="resources-table-col resources-col-downloads">
                  {download.downloads}
                </div>
                <div className="resources-table-col resources-col-type">
                  <span className="resources-file-type">{download.type}</span>
                </div>
                <div className="resources-table-col resources-col-size">
                  {download.size}
                </div>
                <div className="resources-table-col resources-col-action">
                  <button className="resources-download-button">
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="resources-cta-section">
        <div className="resources-cta-container">
          <div className="resources-cta-content">
            <h2 className="resources-cta-title">Need Specific Technical Documentation?</h2>
            <p className="resources-cta-text">
              Our product specialists can provide custom technical sheets, CAD drawings, 
              or material specifications for your exact project requirements.
            </p>
            <div className="resources-cta-buttons">
              <button className="resources-cta-button resources-cta-primary">
                Request Custom Documents
              </button>
              <button className="resources-cta-button resources-cta-secondary">
                Contact Technical Support
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;