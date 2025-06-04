import './ContractorTerms.css';
import { FiPrinter, FiCheckCircle, FiChevronDown } from 'react-icons/fi';

const ContractorTerms = () => {
  return (
    <div className="contractor-terms-container">
      <div className="contractor-terms-header">
        <div className="contractor-terms-badge">CONTRACTOR AGREEMENT</div>
        <h1 className="contractor-terms-title">Professional Terms & Conditions</h1>
        <p className="contractor-terms-subtitle">Last updated: <span className="highlight">June 2023</span></p>
      </div>

      <div className="contractor-terms-content">
        <div className="contractor-terms-sidebar">
          <div className="sidebar-header">CONTENTS</div>
          <nav className="sidebar-nav">
            <a href="#definitions" className="nav-item">1. Definitions</a>
            <a href="#account" className="nav-item">2. Account Requirements</a>
            <a href="#purchases" className="nav-item">3. Material Purchases</a>
            <a href="#delivery" className="nav-item">4. Job Site Delivery</a>
            <a href="#warranty" className="nav-item">5. Warranty Claims</a>
          </nav>
          <div className="sidebar-footer">
            <button className="sidebar-action">
              <FiPrinter className="icon" /> Print
            </button>
          </div>
        </div>

        <div className="contractor-terms-main">
          <section id="definitions" className="contractor-terms-section">
            <div className="section-header">
              <h2 className="section-title">Definitions</h2>
              <div className="section-number">1</div>
            </div>
            <p className="contractor-terms-text">
              <strong>"Contractor"</strong> refers to any professional builder, remodeler, or tradesperson registered with BuildMaster.
              <strong>"Materials"</strong> refers to all products supplied by BuildMaster for professional construction use.
            </p>
          </section>

          <section id="account" className="contractor-terms-section">
            <div className="section-header">
              <h2 className="section-title">Professional Account Requirements</h2>
              <div className="section-number">2</div>
            </div>
            <ul className="contractor-terms-list">
              <li className="contractor-terms-list-item">
                <div className="list-marker"></div>
                Must provide valid contractor license information
              </li>
              <li className="contractor-terms-list-item">
                <div className="list-marker"></div>
                Minimum $1M general liability insurance required
              </li>
              <li className="contractor-terms-list-item">
                <div className="list-marker"></div>
                Account subject to verification and approval
              </li>
            </ul>
            <div className="contractor-terms-note">
              <strong>Note:</strong> Verification typically takes 2-3 business days. You'll receive email notification upon approval.
            </div>
          </section>

          <section id="purchases" className="contractor-terms-section">
            <div className="section-header">
              <h2 className="section-title">Material Purchases</h2>
              <div className="section-number">3</div>
            </div>
            <div className="contractor-terms-cards">
              <div className="contractor-terms-card">
                <div className="card-icon">💰</div>
                <h3 className="contractor-terms-card-title">Volume Discounts</h3>
                <p className="contractor-terms-text">
                  Discounts apply to orders over $5,000. Exclusions apply to special order items.
                </p>
                <div className="card-footer">
                  <button className="card-link">View discount tiers <FiChevronDown /></button>
                </div>
              </div>
              <div className="contractor-terms-card">
                <div className="card-icon">🔄</div>
                <h3 className="contractor-terms-card-title">Returns</h3>
                <p className="contractor-terms-text">
                  Unused materials may be returned within 30 days with original receipt. 15% restocking fee applies.
                </p>
                <div className="card-footer">
                  <button className="card-link">Return policy details <FiChevronDown /></button>
                </div>
              </div>
            </div>
          </section>

          <section id="delivery" className="contractor-terms-section">
            <div className="section-header">
              <h2 className="section-title">Job Site Delivery</h2>
              <div className="section-number">4</div>
            </div>
            <p className="contractor-terms-text">
              Contractor is responsible for providing accurate delivery instructions and ensuring site accessibility.
              Additional fees may apply for difficult access or required wait times.
            </p>
            <div className="contractor-terms-highlight">
              <strong>Pro Tip:</strong> Schedule deliveries for mornings to avoid afternoon delays.
            </div>
          </section>

          <section id="warranty" className="contractor-terms-section">
            <div className="section-header">
              <h2 className="section-title">Warranty Claims</h2>
              <div className="section-number">5</div>
            </div>
            <p className="contractor-terms-text">
              Professional installation required for warranty coverage. Claims must include proof of purchase and
              documentation of proper installation practices.
            </p>
          </section>

          <div className="contractor-terms-actions">
            <div className="terms-checkbox">
              <input type="checkbox" id="acceptTerms" className="terms-input" />
              <label htmlFor="acceptTerms" className="terms-label">
                I have read and agree to these Terms & Conditions
              </label>
            </div>
            <button className="contractor-terms-accept-btn">
              <FiCheckCircle className="btn-icon" /> Accept & Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContractorTerms;