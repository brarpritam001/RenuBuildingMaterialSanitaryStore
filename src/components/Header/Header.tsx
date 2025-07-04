  import { useState, useEffect, useRef } from 'react';
  import { FaPhone, FaChevronDown, FaUser, FaSearch, FaTimes } from 'react-icons/fa';
  import type { HeaderProps } from '../../types/types';
  import './Header.css';
import { Link } from 'react-router-dom';

 const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
    // const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [isSearchFocused, setIsSearchFocused] = useState(false);
    const headerRef = useRef<HTMLElement>(null);    

    // Close menu when clicking outside or pressing Escape
    useEffect(() => {
      const handleClickOutside = (e: MouseEvent) => {
        if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
          setIsMenuOpen(false);
          setActiveDropdown(null);
        }
      };
      
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setIsMenuOpen(false);
          setActiveDropdown(null);
        }
      };
      
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
      
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        document.removeEventListener('keydown', handleKeyDown);
      };
    }, []);

    // Handle dropdown menus with keyboard navigation
    const handleDropdownToggle = (dropdown: string) => {
      setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
    };

    // Handle dropdown keyboard navigation
    const handleDropdownKeyDown = (e: React.KeyboardEvent, dropdown: string) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleDropdownToggle(dropdown);
      } else if (e.key === 'Escape') {
        setActiveDropdown(null);
      }
    };

    // Close all dropdowns when menu is closed
    useEffect(() => {
      if (!isMenuOpen) {
        setActiveDropdown(null);
      }
    }, [isMenuOpen]);

    return (
      <header 
        className={`header ${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}
        ref={headerRef}
      >
        <div className="header-container">
          <div className="header-content">
            <div className="header-logo">
              <a href="/" className="logo-wrapper" aria-label="BuildMaster Home">
                <span className="logo-text">Renu Building </span>
                <span className="logo-subtext">Material & Sanitary Store</span>
              </a>
            </div>

            <button
              className="mobile-menu-button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="main-navigation"
            >
              <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>

            <nav 
              id="main-navigation"
              className={`nav-links ${isMenuOpen ? 'open' : ''}`}
              aria-label="Main navigation"
            >
              <div className={`search-container ${isSearchFocused ? 'focused' : ''}`}>
                <div className="search-wrapper">
                  <FaSearch className="search-icon" />
                  <input 
                    type="text" 
                    placeholder="Search products, solutions..." 
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setIsSearchFocused(true)}
                    onBlur={() => setIsSearchFocused(false)}
                    aria-label="Search products and solutions"
                  />
                  {searchQuery && (
                    <button 
                      className="search-clear"
                      onClick={() => setSearchQuery('')}
                      aria-label="Clear search"
                    >
                      <FaTimes />
                    </button>
                  )}
                </div>
              </div>
              
              <div className="nav-main-links">
                <div className="dropdown-wrapper">
                  <button 
                    className="nav-link dropdown-trigger"
                    onClick={() => handleDropdownToggle('products')}
                    onKeyDown={(e) => handleDropdownKeyDown(e, 'products')}
                    aria-expanded={activeDropdown === 'products' ? true : false}
                    aria-haspopup="true"
                    aria-controls="products-dropdown"
                  >
                    Products
                    <FaChevronDown className={`dropdown-icon ${activeDropdown === 'products' ? 'active' : ''}`} />
                  </button>
                  <div 
                    id="products-dropdown"
                    className={`dropdown-menu ${activeDropdown === 'products' ? 'active' : ''}`}
                    role="menu"
                  >
                    <div className="dropdown-content">
                      <div className="dropdown-column">
                        <div className="dropdown-title">Popular Products</div>
                        <Link to={'/products'} className="dropdown-item" role="menuitem">Masonry</Link>
                        <Link to={'/products'} className="dropdown-item" role="menuitem">Plumbing</Link>
                        <Link to={'/products'} className="dropdown-item" role="menuitem">Safety Gear</Link>
                        <Link to={'/products'} className="dropdown-item" role="menuitem">Building Materials</Link>
                      </div>
                      <div className="dropdown-column">
                        <div className="dropdown-title">Categories</div>
                        <Link to={'/products'} className="dropdown-item" role="menuitem">Interior Solutions</Link>
                        <Link to={'/products'} className="dropdown-item" role="menuitem">Exterior Products</Link>
                        <Link to={'/products'} className="dropdown-item" role="menuitem">Specialty Tools</Link>
                        <Link to={'/products'} className="dropdown-item" role="menuitem">View All Products</Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="dropdown-wrapper">
                  <button 
                    className="nav-link dropdown-trigger"
                    onClick={() => handleDropdownToggle('solutions')}
                    onKeyDown={(e) => handleDropdownKeyDown(e, 'solutions')}
                    aria-expanded={activeDropdown === 'solutions' ? true : false}
                    aria-haspopup="true"
                    aria-controls="solutions-dropdown"
                  >
                    Solutions
                    <FaChevronDown className={`dropdown-icon ${activeDropdown === 'solutions' ? 'active' : ''}`} />
                  </button>
                  <div 
                    id="solutions-dropdown"
                    className={`dropdown-menu ${activeDropdown === 'solutions' ? 'active' : ''}`}
                    role="menu"
                  >
                    <div className="dropdown-content">
                      <div className="dropdown-column">
                        <div className="dropdown-title">By Industry</div>
                        <Link to={'/solutions'} className="dropdown-item" role="menuitem">Residential Construction</Link>
                        <Link to={'/solutions'} className="dropdown-item" role="menuitem">Commercial Projects</Link>
                        <Link to={'/solutions'} className="dropdown-item" role="menuitem">Industrial Solutions</Link>
                        <Link to={'/solutions'} className="dropdown-item" role="menuitem">Government Contracts</Link>
                      </div>
                      <div className="dropdown-column">
                        <div className="dropdown-title">By Need</div>
                        <Link to={'/solutions'} className="dropdown-item" role="menuitem">Project Management</Link>
                        <Link to={'/solutions'} className="dropdown-item" role="menuitem">Cost Estimation</Link>
                        <Link to={'/solutions'} className="dropdown-item" role="menuitem">Energy Efficiency</Link>
                        <Link to={'/solutions'} className="dropdown-item" role="menuitem">Sustainability</Link>
                      </div>
                    </div>
                  </div>
                </div>
                
                <Link to={'/resources'} className="nav-link">Resources</Link>
                <Link to={'/projects'} className="nav-link">Projects</Link>
                <Link to={'/about'} className="nav-link">About</Link>
              </div>
              
              <div className="nav-actions">
                <a href="#" className="nav-login">
                  <FaUser className="login-icon" />
                  <span>Contractor Login</span>
                </a>
                
                <a href="tel:8059366488" className="nav-button">
                  <FaPhone className="button-icon" />
                  <span className="button-text">+91 80593-66488</span>
                </a>
              </div>
            </nav>
          </div>
        </div>
      </header>
    );
  };

  export default Header;