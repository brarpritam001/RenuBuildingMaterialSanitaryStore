import { useState, useRef, useEffect } from 'react';
import { FaPhone, FaArrowRight, FaStar, FaShieldAlt, FaClock, FaTruck } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const [formData, setFormData] = useState({
    projectType: '',
    squareFootage: '',
    materialCategory: ''
  });

  const [quoteResult, setQuoteResult] = useState<number | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      const playPromise = videoRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          if (videoRef.current) {
            videoRef.current.muted = true;
            videoRef.current.play();
          }
        });
      }
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const calculateQuote = () => {
    const basePrices: Record<string, number> = {
      'new-construction': 50,
      'renovation': 40,
      'commercial': 60,
      'residential': 45
    };

    const materialMultipliers: Record<string, number> = {      
      'exterior': 1.5,      
      'plumbing': 1.8,      
    };

    const sqft = parseFloat(formData.squareFootage) || 0;
    const basePrice = basePrices[formData.projectType] || 0;
    const multiplier = materialMultipliers[formData.materialCategory] || 1;

    return sqft * basePrice * multiplier;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsCalculating(true);
    
    setTimeout(() => {
      const result = calculateQuote();
      setQuoteResult(result);
      setIsCalculating(false);
    }, 1000);
  };

  return (
    <section className="renu-hero-section">
      <div className="renu-hero-background">
        <div className="renu-hero-overlay"></div>
        <video
          ref={videoRef}
          className="renu-hero-video"
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        >
          <source 
            src="https://videos.pexels.com/video-files/1197802/1197802-hd_1920_1080_25fps.mp4" 
            type="video/mp4" 
          />
          Your browser does not support the video tag.  
        </video>
      </div>

      <div className="renu-container">
        <div className="renu-hero-content">
          <div className="renu-hero-grid">
            <div className="renu-hero-text-content">
              <div className="renu-trusted-badge">
                <FaShieldAlt className="renu-badge-icon" />
                <span>TRUSTED BY INDUSTRY LEADERS</span>
              </div>
              <h1 className="renu-hero-title">
                Renu <span className="renu-highlight-text">Building Materials</span> & Sanitary Store
              </h1>
              <p className="renu-hero-subtitle">
                Quality materials, competitive pricing, and reliable service for contractors and architects.
              </p>
              
              <div className="renu-feature-badges-container">  
                <div className="renu-feature-badge">
                  <div className="renu-feature-icon-wrapper">
                    <FaShieldAlt className="renu-feature-icon" />
                  </div>
                  <span>Quality Guaranteed</span>
                </div>
                <div className="renu-feature-badge">
                  <div className="renu-feature-icon-wrapper">
                    <FaClock className="renu-feature-icon" />
                  </div>
                  <span>24/7 Support</span>
                </div>
                <div className="renu-feature-badge">
                  <div className="renu-feature-icon-wrapper">
                    <FaTruck className="renu-feature-icon" />
                  </div>
                  <span>On-Time Delivery</span>
                </div>
              </div>
              
              <div className="renu-hero-cta-buttons">
                <button className="renu-primary-button">
                  Browse Products <FaArrowRight className="renu-button-icon" />
                </button>
                <button className="renu-secondary-button">
                  <FaPhone className="renu-button-icon" /> +91 80593-66488
                </button>
              </div>
              
              <div className="renu-trusted-by-section">
                <div className="renu-avatar-group">
                  <div className="renu-avatar renu-avatar-blue">MJ</div>
                  <div className="renu-avatar renu-avatar-green">SW</div>
                  <div className="renu-avatar renu-avatar-orange">RC</div>
                  <div className="renu-avatar renu-avatar-purple">TL</div>
                  <div className="renu-avatar-more">+24</div>
                </div>
                <div className="renu-trusted-text-content">
                  <div className="renu-rating-display">
                    <div className="renu-stars-container">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="renu-star-icon" />
                      ))}
                    </div>
                    <span>4.9/5</span>
                  </div>
                  <span className="renu-reviews-text">from 850+ reviews</span>
                </div>
              </div>
            </div>
            
            <div className="renu-quote-calculator-wrapper">
              <div className="renu-quote-calculator">
                <div className="renu-quote-header">
                  <h3 className="renu-quote-title">Get Your Instant Quote</h3>
                  <span className="renu-quote-badge">No obligation</span>
                </div>
                
                <form className="renu-quote-form" onSubmit={handleSubmit}>
                  <div className="renu-form-group">
                    <label className="renu-form-label" htmlFor="projectType">Project Type</label>
                    <div className="renu-select-wrapper">
                      <select 
                        id="projectType"
                        name="projectType"
                        className="renu-form-select"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="" disabled>Select project type</option>
                        <option value="new-construction">New Construction</option>
                        <option value="renovation">Renovation</option>
                        <option value="commercial">Commercial Build</option>
                        <option value="residential">Residential Extension</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="renu-form-group">
                    <label className="renu-form-label" htmlFor="squareFootage">Square Footage (sq ft)</label>
                    <input
                      type="number"
                      id="squareFootage"
                      name="squareFootage"
                      className="renu-form-input"
                      placeholder="e.g. 1,500"
                      value={formData.squareFootage}
                      onChange={handleInputChange}
                      required
                      min="100"
                    />
                  </div>
                  
                  <div className="renu-form-group">
                    <label className="renu-form-label" htmlFor="materialCategory">Material Category</label>
                    <div className="renu-select-wrapper">
                      <select 
                        id="materialCategory"
                        name="materialCategory"
                        className="renu-form-select"
                        value={formData.materialCategory}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="" disabled>Select primary material</option>                        
                        <option value="exterior">Exterior Finishes</option>                        
                        <option value="plumbing">Plumbing</option>                        
                      </select> 
                    </div>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="renu-quote-submit-button"
                    disabled={isCalculating}
                  >
                    {isCalculating ? (
                      'Calculating...'
                    ) : (
                      <>
                        Calculate Estimate
                        <FaArrowRight className="renu-button-icon" />
                      </>
                    )}
                  </button>

                  {quoteResult !== null && (
                    <div className="renu-quote-result-display">
                      <div className="renu-quote-result-label">Estimated Cost:</div>
                      <div className="renu-quote-result-value">
                        ₹{quoteResult.toLocaleString()}
                      </div>
                      <div className="renu-quote-result-note">
                        This is an estimate. Final price may vary based on project details.
                      </div>
                    </div>
                  )}
                </form>
                
                <div className="renu-quote-disclaimer">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM8 12C7.4 12 7 11.6 7 11C7 10.4 7.4 10 8 10C8.6 10 9 10.4 9 11C9 11.6 8.6 12 8 12ZM9 9C9 9.6 8.6 10 8 10C7.4 10 7 9.6 7 9V5C7 4.4 7.4 4 8 4C8.6 4 9 4.4 9 5V9Z" fill="#6B7280" />
                  </svg>
                  <p>No commitment, no credit card required</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="renu-scroll-indicator">
        <span>Scroll</span>
        <div className="renu-scroll-line">
          <div className="renu-scroll-dot"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;