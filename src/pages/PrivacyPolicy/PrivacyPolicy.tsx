
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-container">
      <div className="privacy-hero">
        <div className="privacy-hero-content">
          <h1 className="privacy-title">Privacy Policy</h1>
          <p className="privacy-subtitle">Your trust is important to us. This document explains how we handle your information.</p>
          <div className="privacy-meta">
            <span className="privacy-update">Last Updated: June 2025</span>
            <span className="privacy-version">Version 3.2</span>
          </div>
        </div>
        <div className="privacy-hero-graphic">
          <div className="privacy-shield-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>

      <div className="privacy-content">
        <div className="privacy-toc">
          <h3 className="toc-title">Table of Contents</h3>
          <nav>
            <ul className="toc-list">
              <li><a href="#introduction">1. Introduction</a></li>
              <li><a href="#information-collected">2. Information We Collect</a></li>
              <li><a href="#information-use">3. How We Use Your Information</a></li>
              <li><a href="#data-security">4. Data Security</a></li>
              <li><a href="#third-party">5. Third-Party Services</a></li>
              <li><a href="#your-rights">6. Your Rights</a></li>
              <li><a href="#policy-changes">7. Changes to This Policy</a></li>
              <li><a href="#contact-us">8. Contact Us</a></li>
            </ul>
          </nav>
        </div>

        <div className="privacy-sections">
          <section id="introduction" className="privacy-section">
            <div className="section-header">
              <div className="section-number">1</div>
              <h2 className="section-title">Introduction</h2>
            </div>
            <div className="section-content">
              <p>BuildMaster ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.</p>
              <p>We encourage you to read this policy carefully to understand our practices regarding your personal data.</p>
            </div>
          </section>

          <section id="information-collected" className="privacy-section">
            <div className="section-header">
              <div className="section-number">2</div>
              <h2 className="section-title">Information We Collect</h2>
            </div>
            <div className="section-content">
              <p>We may collect personal information that you voluntarily provide to us when you register, make a purchase, or contact us. This may include:</p>
              <ul className="styled-list">
                <li>
                  <div className="list-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span>Contact information (name, email, phone number)</span>
                </li>
                <li>
                  <div className="list-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span>Business information (company name, job title)</span>
                </li>
                <li>
                  <div className="list-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span>Payment details (processed securely through our payment processor)</span>
                </li>
                <li>
                  <div className="list-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span>Project specifications and requirements</span>
                </li>
              </ul>
              <div className="info-note">
                <div className="note-icon">ℹ️</div>
                <p>We only collect information necessary to provide our services and improve your experience.</p>
              </div>
            </div>
          </section>

          <section id="information-use" className="privacy-section">
            <div className="section-header">
              <div className="section-number">3</div>
              <h2 className="section-title">How We Use Your Information</h2>
            </div>
            <div className="section-content">
              <p>We use the information we collect to:</p>
              <div className="usage-grid">
                <div className="usage-card">
                  <div className="card-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 6H21M6 6V20C6 20.5304 6.21071 21.0391 6.58579 21.4142C6.96086 21.7893 7.46957 22 8 22H16C16.5304 22 17.0391 21.7893 17.4142 21.4142C17.7893 21.0391 18 20.5304 18 20V6M10 6V4C10 3.46957 10.2107 2.96086 10.5858 2.58579C10.9609 2.21071 11.4696 2 12 2C12.5304 2 13.0391 2.21071 13.4142 2.58579C13.7893 2.96086 14 3.46957 14 4V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3>Service Provision</h3>
                  <p>Provide and maintain our services to meet your needs</p>
                </div>
                <div className="usage-card">
                  <div className="card-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 16V12M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3>Customer Support</h3>
                  <p>Respond to your service requests and inquiries</p>
                </div>
                <div className="usage-card">
                  <div className="card-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 15V12M12 9H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3>Service Improvement</h3>
                  <p>Enhance our website and service offerings</p>
                </div>
                <div className="usage-card">
                  <div className="card-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 16.92V19.92C22 20.47 21.55 20.92 21 20.92H19C18.45 20.92 18 20.47 18 19.92V16.92C18 16.37 18.45 15.92 19 15.92H21C21.55 15.92 22 16.37 22 16.92ZM16 12.92V19.92C16 20.47 15.55 20.92 15 20.92H13C12.45 20.92 12 20.47 12 19.92V12.92C12 12.37 12.45 11.92 13 11.92H15C15.55 11.92 16 12.37 16 12.92ZM10 8.92V19.92C10 20.47 9.55 20.92 9 20.92H7C6.45 20.92 6 20.47 6 19.92V8.92C6 8.37 6.45 7.92 7 7.92H9C9.55 7.92 10 8.37 10 8.92Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M4 4.92V19.92C4 20.47 3.55 20.92 3 20.92H1C0.45 20.92 0 20.47 0 19.92V4.92C0 4.37 0.45 3.92 1 3.92H3C3.55 3.92 4 4.37 4 4.92Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3>Analytics</h3>
                  <p>Understand usage patterns to improve performance</p>
                </div>
              </div>
            </div>
          </section>

          <section id="data-security" className="privacy-section">
            <div className="section-header">
              <div className="section-number">4</div>
              <h2 className="section-title">Data Security</h2>
            </div>
            <div className="section-content">
              <p>We implement comprehensive security measures to protect your personal data:</p>
              <div className="security-features">
                <div className="security-feature">
                  <div className="feature-icon">🔒</div>
                  <div className="feature-text">
                    <h3>Encryption</h3>
                    <p>All data is encrypted in transit and at rest using industry-standard protocols</p>
                  </div>
                </div>
                <div className="security-feature">
                  <div className="feature-icon">🛡️</div>
                  <div className="feature-text">
                    <h3>Access Controls</h3>
                    <p>Strict access controls limit who can view your information</p>
                  </div>
                </div>
                <div className="security-feature">
                  <div className="feature-icon">🔍</div>
                  <div className="feature-text">
                    <h3>Regular Audits</h3>
                    <p>We conduct regular security audits to maintain protection standards</p>
                  </div>
                </div>
              </div>
              <div className="warning-note">
                <div className="note-icon">⚠️</div>
                <p>While we implement robust security measures, no method of transmission over the Internet is 100% secure.</p>
              </div>
            </div>
          </section>

          <section id="third-party" className="privacy-section">
            <div className="section-header">
              <div className="section-number">5</div>
              <h2 className="section-title">Third-Party Services</h2>
            </div>
            <div className="section-content">
              <p>We may employ reputable third-party services to facilitate our operations:</p>
              <div className="third-party-logos">
                <div className="logo-item">
                  <div className="logo-placeholder">Payment Processor</div>
                  <span>Secure payment handling</span>
                </div>
                <div className="logo-item">
                  <div className="logo-placeholder">Analytics</div>
                  <span>Service improvement</span>
                </div>
                <div className="logo-item">
                  <div className="logo-placeholder">Hosting</div>
                  <span>Data storage</span>
                </div>
              </div>
              <p>These providers have access only to the information needed to perform their functions and are contractually obligated to maintain confidentiality.</p>
            </div>
          </section>

          <section id="your-rights" className="privacy-section">
            <div className="section-header">
              <div className="section-number">6</div>
              <h2 className="section-title">Your Rights</h2>
            </div>
            <div className="section-content">
              <p>Depending on your jurisdiction, you may have certain rights regarding your personal data:</p>
              <div className="rights-grid">
                <div className="right-card">
                  <h3>Access</h3>
                  <p>Request a copy of your personal data</p>
                </div>
                <div className="right-card">
                  <h3>Rectification</h3>
                  <p>Correct inaccurate information</p>
                </div>
                <div className="right-card">
                  <h3>Erasure</h3>
                  <p>Request deletion of your data</p>
                </div>
                <div className="right-card">
                  <h3>Portability</h3>
                  <p>Receive your data in a structured format</p>
                </div>
                <div className="right-card">
                  <h3>Objection</h3>
                  <p>Object to certain processing activities</p>
                </div>
                <div className="right-card">
                  <h3>Restriction</h3>
                  <p>Limit how we use your data</p>
                </div>
              </div>
              <p>To exercise these rights, please contact us using the information below.</p>
            </div>
          </section>

          <section id="policy-changes" className="privacy-section">
            <div className="section-header">
              <div className="section-number">7</div>
              <h2 className="section-title">Changes to This Policy</h2>
            </div>
            <div className="section-content">
              <p>We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements.</p>
              <div className="update-process">
                <div className="process-step">
                  <div className="step-number">1</div>
                  <p>We'll post the updated policy on this page</p>
                </div>
                <div className="process-step">
                  <div className="step-number">2</div>
                  <p>We'll update the "Last Updated" date</p>
                </div>
                <div className="process-step">
                  <div className="step-number">3</div>
                  <p>For significant changes, we may provide additional notice</p>
                </div>
              </div>
              <p>We encourage you to review this policy periodically to stay informed.</p>
            </div>
          </section>

          <section id="contact-us" className="privacy-section">
            <div className="section-header">
              <div className="section-number">8</div>
              <h2 className="section-title">Contact Us</h2>
            </div>
            <div className="section-content">
              <p>If you have questions about this Privacy Policy or your personal data:</p>
              <div className="contact-card">
                <div className="contact-methods">
                  <div className="contact-method">
                    <div className="method-icon">📧</div>
                    <div>
                      <h3>Email</h3>
                      <a href="mailto:parkashved@gmail.com">parkashved@gmail.com</a>
                    </div>
                  </div>
                  <div className="contact-method">
                    <div className="method-icon">📞</div>
                    <div>
                      <h3>Phone</h3>
                      <a href="tel:+918059366488">+91 80593 66488</a>
                    </div>
                  </div>
                  <div className="contact-method">
                    <div className="method-icon">🏢</div>
                    <div>
                      <h3>Address</h3>
                      <address>
                        Renu Building Material & Sanitary Store<br />
                        Hari Nagar Ram Sawroop Chowk, 33 Futa Road<br />
                        Panipat City, 132013
                      </address>
                    </div>
                  </div>
                </div>
                <div className="contact-form">
                  <h3>Send Us a Message</h3>
                  <form>
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input type="text" id="name" placeholder="Your name" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input type="email" id="email" placeholder="Your email" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="message">Message</label>
                      <textarea id="message" rows={4} placeholder="Your privacy concern"></textarea>
                    </div>
                    <button type="submit" className="submit-btn">Send Message</button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>    
    </div>
  );
};

export default PrivacyPolicy;