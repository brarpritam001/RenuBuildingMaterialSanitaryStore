import './TermsService.css';

const TermsOfService = () => {
  return (
    <div className="tos-container">
      <div className="tos-header">
        <div className="tos-header-content">
          <h1 className="tos-title">Terms of Service</h1>
          <p className="tos-last-updated">Last updated: June 2025</p>
          <div className="tos-header-decoration">
            <div className="decoration-circle"></div>
            <div className="decoration-line"></div>
            <div className="decoration-circle"></div>
          </div>
        </div>
      </div>

      <div className="tos-content">
        <div className="tos-sidebar">
          <div className="sidebar-sticky">
            <h3 className="sidebar-title">Sections</h3>
            <nav className="sidebar-nav">
              <a href="#introduction" className="sidebar-link">1. Introduction</a>
              <a href="#account" className="sidebar-link">2. Account Registration</a>
              <a href="#orders" className="sidebar-link">3. Orders & Payments</a>
              <a href="#shipping" className="sidebar-link">4. Shipping & Delivery</a>
              <a href="#returns" className="sidebar-link">5. Returns & Refunds</a>
              <a href="#ip" className="sidebar-link">6. Intellectual Property</a>
              <a href="#liability" className="sidebar-link">7. Limitation of Liability</a>
              <a href="#law" className="sidebar-link">8. Governing Law</a>
              <a href="#changes" className="sidebar-link">9. Changes to Terms</a>
              <a href="#contact" className="sidebar-link">10. Contact Us</a>
            </nav>
            <div className="sidebar-actions">
              <button className="print-button" onClick={() => window.print()}>
                <span className="print-icon">🖨️</span> Print Terms
              </button>
              <button className="download-button">
                <span className="download-icon">📥</span> Download PDF
              </button>
            </div>
          </div>
        </div>

        <div className="tos-main-content">
          <section id="introduction" className="tos-section">
            <div className="section-number">1</div>
            <div className="section-content">
              <h2 className="tos-section-title">Introduction</h2>
              <p className="tos-section-text">
                Welcome to Renu Building Material & Sanitary Store. These Terms of Service ("Terms") govern your use of our website and services. 
                By accessing or using our services, you agree to be bound by these Terms.
              </p>
              <p className="tos-section-text">
                Please read these Terms carefully before using our services. If you do not agree with any part of these Terms, 
                you must not use our services.
              </p>
            </div>
          </section>

          <section id="account" className="tos-section">
            <div className="section-number">2</div>
            <div className="section-content">
              <h2 className="tos-section-title">Account Registration</h2>
              <p className="tos-section-text">
                To access certain features, you may need to register an account. You must provide accurate information 
                and keep your account secure. You are responsible for all activities under your account.
              </p>
              <ul className="tos-list">
                <li>You must be at least 18 years old to create an account</li>
                <li>You may not share your account credentials with others</li>
                <li>We reserve the right to suspend or terminate accounts that violate these Terms</li>
              </ul>
            </div>
          </section>

          <section id="orders" className="tos-section">
            <div className="section-number">3</div>
            <div className="section-content">
              <h2 className="tos-section-title">Orders and Payments</h2>
              <p className="tos-section-text">
                All orders are subject to availability and our acceptance. Prices are subject to change without notice. 
                We accept various forms of payment as indicated during checkout.
              </p>
              <div className="highlight-box">
                <h4 className="highlight-title">Payment Information</h4>
                <p>We use secure payment processing and do not store your full payment details on our servers.</p>
              </div>
            </div>
          </section>

          <section id="shipping" className="tos-section">
            <div className="section-number">4</div>
            <div className="section-content">
              <h2 className="tos-section-title">Shipping and Delivery</h2>
              <p className="tos-section-text">
                Delivery times are estimates only. Risk of loss passes to you upon delivery. You are responsible for 
                inspecting all products upon receipt.
              </p>
              <table className="shipping-table">
                <thead>
                  <tr>
                    <th>Region</th>
                    <th>Estimated Delivery</th>
                    <th>Shipping Cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Domestic</td>
                    <td>3-5 business days</td>
                    <td>$5.99</td>
                  </tr>
                  <tr>
                    <td>International</td>
                    <td>7-14 business days</td>
                    <td>$14.99</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="returns" className="tos-section">
            <div className="section-number">5</div>
            <div className="section-content">
              <h2 className="tos-section-title">Returns and Refunds</h2>
              <p className="tos-section-text">
                Returns must be made within 30 days of receipt with original packaging. Custom or special order items 
                may not be returnable. Refunds will be issued to the original payment method.
              </p>
              <div className="steps-container">
                <div className="step">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h4>Initiate Return</h4>
                    <p>Contact our support team to request a return authorization</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h4>Ship Item Back</h4>
                    <p>Package the item securely with all original materials</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h4>Receive Refund</h4>
                    <p>We'll process your refund within 5 business days of receipt</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="ip" className="tos-section">
            <div className="section-number">6</div>
            <div className="section-content">
              <h2 className="tos-section-title">Intellectual Property</h2>
              <p className="tos-section-text">
                All content on our website, including text, graphics, logos, and images, is our property and protected 
                by intellectual property laws. You may not use our content without our express written permission.
              </p>
              <p className="tos-section-text">
                Any unauthorized use of our intellectual property may result in legal action.
              </p>
            </div>
          </section>

          <section id="liability" className="tos-section">
            <div className="section-number">7</div>
            <div className="section-content">
              <h2 className="tos-section-title">Limitation of Liability</h2>
              <p className="tos-section-text">
                We shall not be liable for any indirect, incidental, or consequential damages arising from your use of 
                our services or products. Our total liability shall not exceed the amount you paid for the products.
              </p>
              <div className="notice-box warning">
                <h4 className="notice-title">Important Notice</h4>
                <p>This limitation of liability applies to the fullest extent permitted by law in your jurisdiction.</p>
              </div>
            </div>
          </section>

          <section id="law" className="tos-section">
            <div className="section-number">8</div>
            <div className="section-content">
              <h2 className="tos-section-title">Governing Law</h2>
              <p className="tos-section-text">
                These Terms shall be governed by the laws of the state where our headquarters is located, without regard 
                to its conflict of law provisions.
              </p>
            </div>
          </section>

          <section id="changes" className="tos-section">
            <div className="section-number">9</div>
            <div className="section-content">
              <h2 className="tos-section-title">Changes to Terms</h2>
              <p className="tos-section-text">
                We may modify these Terms at any time. The updated version will be indicated by an updated "Last updated" 
                date. Your continued use constitutes acceptance of the new Terms.
              </p>
              <p className="tos-section-text">
                We will notify users of significant changes via email or through our website.
              </p>
            </div>
          </section>

          <section id="contact" className="tos-section">
            <div className="section-number">10</div>
            <div className="section-content">
              <h2 className="tos-section-title">Contact Us</h2>
              <p className="tos-section-text">
                If you have any questions about these Terms, please contact us at:
              </p>
              <div className="contact-card">
                <div className="contact-method">
                  <span className="contact-icon">✉️</span>
                  <span>parkashved925@gmail.com</span>
                </div>
                <div className="contact-method">
                  <span className="contact-icon">📞</span>
                  <span>+91 80593 66488</span>
                </div>
                <div className="contact-method">
                  <span className="contact-icon">🏢</span>
                  <span>33 Futa Road, Ram Swaroop Chowk, Hari Nagar, Panipat, Haryana 132103, India </span>
                </div>
              </div>
            </div>
          </section>

          <div className="acceptance-box">
            <h3 className="acceptance-title">Acceptance of Terms</h3>
            <p>By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;