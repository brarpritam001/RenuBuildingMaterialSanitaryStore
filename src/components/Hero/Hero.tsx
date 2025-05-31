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
    // Handle video autoplay with fallback for mobile devices
    if (videoRef.current) {
      const playPromise = videoRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay was prevented, fallback to muted autoplay
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
    // Simple calculation logic - replace with your actual calculation
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
    
    // Simulate API call/calculation delay
    setTimeout(() => {
      const result = calculateQuote();
      setQuoteResult(result);
      setIsCalculating(false);
    }, 1000);
  };

  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
        <video
          ref={videoRef}
          className="hero-video"
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

      <div className="container">
        <div className="hero-content">
          <div className="hero-grid">
            <div className="hero-text">
              <div className="hero-badge">
                <FaShieldAlt className="badge-icon" />
                <span>TRUSTED BY INDUSTRY LEADERS</span>
              </div>
              <h1 className="hero-title">
                Renu <span className="highlight">Building Materials</span> & Sanitary Store
              </h1>
              <p className="hero-subtitle">
                Quality materials, competitive pricing, and reliable service for contractors and architects.
              </p>
              
              <div className="feature-badges">  
                <div className="feature-badge">
                  <div className="feature-icon-container">
                    <FaShieldAlt className="feature-icon" />
                  </div>
                  <span>Quality Guaranteed</span>
                </div>
                <div className="feature-badge">
                  <div className="feature-icon-container">
                    <FaClock className="feature-icon" />
                  </div>
                  <span>24/7 Support</span>
                </div>
                <div className="feature-badge">
                  <div className="feature-icon-container">
                    <FaTruck className="feature-icon" />
                  </div>
                  <span>On-Time Delivery</span>
                </div>
              </div>
              
              <div className="hero-buttons">
                <button className="hero-button primary">
                  Browse Products <FaArrowRight className="button-icon" />
                </button>
                <button className="hero-button secondary">
                  <FaPhone className="button-icon" /> +91 80593-66488
                </button>
              </div>
              
              <div className="trusted-by">
                <div className="avatar-group">
                  <div className="avatar blue">MJ</div>
                  <div className="avatar green">SW</div>
                  <div className="avatar orange">RC</div>
                  <div className="avatar purple">TL</div>
                  <div className="avatar-more">+24</div>
                </div>
                <div className="trusted-text">
                  <div className="trusted-rating">
                    <div className="stars">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="star-icon" />
                      ))}
                    </div>
                    <span>4.9/5</span>
                  </div>
                  <span className="trusted-reviews">from 850+ reviews</span>
                </div>
              </div>
            </div>
            
            <div className="quote-calculator-container">
              <div className="quote-calculator">
                <div className="quote-header">
                  <h3 className="quote-title">Get Your Instant Quote</h3>
                  <span className="quote-badge">No obligation</span>
                </div>
                
                <form className="quote-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="projectType">Project Type</label>
                    <div className="select-wrapper">
                      <select 
                        id="projectType"
                        name="projectType"
                        className="form-select"
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
                  
                  <div className="form-group">
                    <label className="form-label" htmlFor="squareFootage">Square Footage (sq ft)</label>
                    <input
                      type="number"
                      id="squareFootage"
                      name="squareFootage"
                      className="form-input"
                      placeholder="e.g. 1,500"
                      value={formData.squareFootage}
                      onChange={handleInputChange}
                      required
                      min="100"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label" htmlFor="materialCategory">Material Category</label>
                    <div className="select-wrapper">
                      <select 
                        id="materialCategory"
                        name="materialCategory"
                        className="form-select"
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
                    className="quote-button"
                    disabled={isCalculating}
                  >
                    {isCalculating ? (
                      'Calculating...'
                    ) : (
                      <>
                        Calculate Estimate
                        <FaArrowRight className="button-icon" />
                      </>
                    )}
                  </button>

                  {quoteResult !== null && (
                    <div className="quote-result">
                      <div className="quote-result-label">Estimated Cost:</div>
                      <div className="quote-result-value">
                        ₹{quoteResult.toLocaleString()}
                      </div>
                      <div className="quote-result-note">
                        This is an estimate. Final price may vary based on project details.
                      </div>
                    </div>
                  )}
                </form>
                
                <div className="quote-disclaimer">
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

      <div className="hero-scroll-indicator">
        <span>Scroll</span>
        <div className="scroll-line">
          <div className="scroll-dot"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;