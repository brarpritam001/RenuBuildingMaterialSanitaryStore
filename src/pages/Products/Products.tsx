import { useState, useEffect } from 'react';
import { FaSearch, FaFilter, FaShoppingCart, FaStar, FaRegStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { GiBrickWall, GiWaterDrop, GiWoodCabin } from 'react-icons/gi';
import { MdElectricalServices, MdRoofing } from 'react-icons/md';
import { motion, AnimatePresence } from 'framer-motion';
import './Products.css';

const ProductsScreen = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);
  const [sortOption, setSortOption] = useState('featured');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const categories = [
    { id: 'all', name: 'All Products', icon: <GiBrickWall />, color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' },
    { id: 'masonry', name: 'Masonry', icon: <GiBrickWall />, color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' },
    { id: 'plumbing', name: 'Plumbing', icon: <GiWaterDrop />, color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' },
    { id: 'electrical', name: 'Electrical', icon: <MdElectricalServices />, color: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)' },
    { id: 'lumber', name: 'Lumber', icon: <GiWoodCabin />, color: 'linear-gradient(135deg, #5ee7df 0%, #b490ca 100%)' },
    { id: 'roofing', name: 'Roofing', icon: <MdRoofing />, color: 'linear-gradient(135deg, #c471f5 0%, #fa71cd 100%)' },
  ];

  const products = [
    {
      id: 1,
      name: 'Premium Portland Cement',
      category: 'masonry',
      price: 12.99,
      rating: 4.5,
      image: '/products/cement.jpg',
      inStock: true,
      isFeatured: true,
      description: 'High-quality cement for all your construction needs with superior bonding strength.'
    },
    {
      id: 2,
      name: 'Copper Piping Set',
      category: 'plumbing',
      price: 45.50,
      rating: 4.8,
      image: '/products/copper-pipe.jpg',
      inStock: true,
      isFeatured: false,
      description: 'Durable copper pipes resistant to corrosion with excellent thermal conductivity.'
    },
    {
      id: 3,
      name: 'Electrical Wiring Kit',
      category: 'electrical',
      price: 89.99,
      rating: 4.2,
      image: '/products/wiring-kit.jpg',
      inStock: true,
      isFeatured: true,
      description: 'Complete wiring set with safety-certified components for all electrical installations.'
    },
    {
      id: 4,
      name: 'Pressure-Treated Lumber',
      category: 'lumber',
      price: 8.75,
      rating: 4.7,
      image: '/products/lumber.jpg',
      inStock: false,
      isFeatured: false,
      description: 'Weather-resistant lumber treated for outdoor use with extended lifespan.'
    },
    {
      id: 5,
      name: 'Asphalt Shingles Bundle',
      category: 'roofing',
      price: 32.40,
      rating: 4.3,
      image: '/products/shingles.jpg',
      inStock: true,
      isFeatured: true,
      description: 'High-performance roofing shingles with 30-year warranty against weather damage.'
    },
    {
      id: 6,
      name: 'Concrete Blocks (10pk)',
      category: 'masonry',
      price: 24.99,
      rating: 4.6,
      image: '/products/concrete-blocks.jpg',
      inStock: true,
      isFeatured: false,
      description: 'Standard concrete blocks with uniform dimensions for precise construction.'
    },
    {
      id: 7,
      name: 'PVC Drainage Pipe',
      category: 'plumbing',
      price: 15.20,
      rating: 4.1,
      image: '/products/pvc-pipe.jpg',
      inStock: true,
      isFeatured: false,
      description: 'Lightweight yet durable PVC pipes for efficient drainage systems.'
    },
    {
      id: 8,
      name: 'Circuit Breaker Panel',
      category: 'electrical',
      price: 120.00,
      rating: 4.9,
      image: '/products/breaker-panel.jpg',
      inStock: true,
      isFeatured: true,
      description: 'Modern circuit breaker panel with 16 slots for comprehensive electrical control.'
    },
    {
      id: 9,
      name: 'Steel Reinforcement Bars',
      category: 'masonry',
      price: 18.75,
      rating: 4.4,
      image: '/products/rebar.jpg',
      inStock: true,
      isFeatured: false,
      description: 'High-tensile steel rebars for reinforced concrete structures.'
    },
    {
      id: 10,
      name: 'Water Heater Unit',
      category: 'plumbing',
      price: 299.99,
      rating: 4.7,
      image: '/products/water-heater.jpg',
      inStock: true,
      isFeatured: true,
      description: 'Energy-efficient 50-gallon water heater with smart temperature control.'
    },
    {
      id: 11,
      name: 'LED Lighting Kit',
      category: 'electrical',
      price: 65.30,
      rating: 4.5,
      image: '/products/led-lights.jpg',
      inStock: true,
      isFeatured: false,
      description: 'Complete LED lighting solution with dimmable options and 50,000 hour lifespan.'
    },
    {
      id: 12,
      name: 'Plywood Sheets (4x8)',
      category: 'lumber',
      price: 42.50,
      rating: 4.2,
      image: '/products/plywood.jpg',
      inStock: false,
      isFeatured: false,
      description: 'High-quality plywood sheets perfect for flooring and structural applications.'
    }
  ];

  const filteredProducts = products
    .filter(product => {
      const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStock = !inStockOnly || product.inStock;
      return matchesCategory && matchesPrice && matchesSearch && matchesStock;
    })
    .sort((a, b) => {
      switch (sortOption) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'newest':
          return b.id - a.id;
        default: // 'featured'
          return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0) || b.rating - a.rating;
      }
    });

  const productsPerPage = isMobile ? 6 : 8;
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newPriceRange = [...priceRange];
    newPriceRange[index] = parseInt(e.target.value);
    setPriceRange(newPriceRange);
    setCurrentPage(1);
  };

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        i <= Math.floor(rating) ? (
          <FaStar key={i} className="bm-products-star-icon-filled" />
        ) : (
          <FaRegStar key={i} className="bm-products-star-icon" />
        )
      );
    }
    return stars;
  };

  const resetFilters = () => {
    setActiveCategory('all');
    setPriceRange([0, 1000]);
    setSearchQuery('');
    setInStockOnly(false);
    setSortOption('featured');
    setCurrentPage(1);
  };

  return (
    <div className="bm-products-container">
      {/* Hero Section with 3D Parallax Effect */}
      <motion.div 
        className="bm-products-hero"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="bm-products-hero-content">
          <motion.h1 
            className="bm-products-hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Professional Grade Building Materials
          </motion.h1>
          <motion.p 
            className="bm-products-hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Quality supplies for contractors, builders, and serious DIYers
          </motion.p>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="bm-products-main">
        {/* Sidebar Filters with 3D Card Effect */}
        <AnimatePresence>
          {(!isMobile || showFilters) && (
            <motion.div 
              className={`bm-products-sidebar ${showFilters ? 'active' : ''}`}
              initial={{ x: isMobile ? -300 : 0 }}
              animate={{ x: 0 }}
              exit={{ x: isMobile ? -300 : 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <div className="bm-products-sidebar-header">
                <h3>Filters</h3>
                {isMobile && (
                  <button 
                    className="bm-products-close-filters" 
                    onClick={() => setShowFilters(false)}
                  >
                    &times;
                  </button>
                )}
              </div>

              <div className="bm-products-filter-section">
                <h4 className="bm-products-filter-title">Categories</h4>
                <ul className="bm-products-category-list">
                  {categories.map(category => (
                    <motion.li 
                      key={category.id}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <button
                        className={`bm-products-category-btn ${activeCategory === category.id ? 'active' : ''}`}
                        onClick={() => {
                          setActiveCategory(category.id);
                          setCurrentPage(1);
                        }}
                        style={{ background: activeCategory === category.id ? category.color : '' }}
                      >
                        <span className="bm-products-category-icon">{category.icon}</span>
                        {category.name}
                      </button>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="bm-products-filter-section">
                <h4 className="bm-products-filter-title">Price Range</h4>
                <div className="bm-products-price-range">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
                <div className="bm-products-range-slider">
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    value={priceRange[0]}
                    onChange={(e) => handlePriceChange(e, 0)}
                    className="bm-products-range-input"
                  />
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    value={priceRange[1]}
                    onChange={(e) => handlePriceChange(e, 1)}
                    className="bm-products-range-input"
                  />
                </div>
              </div>

              <div className="bm-products-filter-section">
                <h4 className="bm-products-filter-title">Availability</h4>
                <label className="bm-products-checkbox-label">
                  <input 
                    type="checkbox" 
                    className="bm-products-checkbox" 
                    checked={inStockOnly}
                    onChange={() => {
                      setInStockOnly(!inStockOnly);
                      setCurrentPage(1);
                    }}
                  />
                  <span className="bm-products-checkbox-custom"></span>
                  In Stock Only
                </label>
              </div>

              <motion.button 
                className="bm-products-reset-filters"
                onClick={resetFilters}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Reset All Filters
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Products Grid */}
        <div className="bm-products-content">
          {/* Search and Filter Bar */}
          <div className="bm-products-toolbar">
            <div className="bm-products-search">
              <FaSearch className="bm-products-search-icon" />
              <input
                type="text"
                placeholder="Search products..."
                className="bm-products-search-input"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
              />
            </div>
            <div className="bm-products-toolbar-actions">
              {isMobile && (
                <motion.button 
                  className="bm-products-filter-toggle"
                  onClick={() => setShowFilters(!showFilters)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaFilter /> Filters
                </motion.button>
              )}
              <div className="bm-products-sort">
                <select 
                  className="bm-products-sort-select"
                  value={sortOption}
                  onChange={(e) => {
                    setSortOption(e.target.value);
                    setCurrentPage(1);
                  }}
                >
                  <option value="featured">Sort by: Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Rating: High to Low</option>
                  <option value="newest">Newest Arrivals</option>
                </select>
              </div>
            </div>
          </div>

          {/* Products Grid with 3D Card Effects */}
          <div className="bm-products-grid">
            {paginatedProducts.length > 0 ? (
              paginatedProducts.map(product => (
                <motion.div 
                  key={product.id} 
                  className={`bm-products-card ${product.isFeatured ? 'featured' : ''}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ 
                    y: -5,
                    boxShadow: '0 15px 30px rgba(0,0,0,0.12)'
                  }}
                >
                  {product.isFeatured && (
                    <div className="bm-products-featured-badge">Featured</div>
                  )}
                  {!product.inStock && (
                    <div className="bm-products-outofstock-badge">Out of Stock</div>
                  )}
                  <div className="bm-products-card-image">
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div className="bm-products-card-body">
                    <h3 className="bm-products-card-title">{product.name}</h3>
                    <p className="bm-products-card-description">{product.description}</p>
                    <div className="bm-products-card-rating">
                      {renderStars(product.rating)}
                      <span>({product.rating})</span>
                    </div>
                    <div className="bm-products-card-footer">
                      <span className="bm-products-card-price">${product.price.toFixed(2)}</span>
                      <motion.button 
                        className={`bm-products-card-button ${!product.inStock ? 'disabled' : ''}`}
                        disabled={!product.inStock}
                        whileHover={!product.inStock ? {} : { scale: 1.05 }}
                        whileTap={!product.inStock ? {} : { scale: 0.95 }}
                      >
                        <FaShoppingCart /> Add to Cart
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div 
                className="bm-products-empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h3>No products found matching your criteria</h3>
                <p>Try adjusting your filters or search term</p>
                <motion.button 
                  className="bm-products-reset-btn"
                  onClick={resetFilters}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Reset Filters
                </motion.button>
              </motion.div>
            )}
          </div>

          {/* Pagination with 3D Buttons */}
          {paginatedProducts.length > 0 && (
            <div className="bm-products-pagination">
              <motion.button 
                className="bm-products-pagination-btn"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
                whileHover={{ scale: currentPage === 1 ? 1 : 1.05 }}
                whileTap={{ scale: currentPage === 1 ? 1 : 0.95 }}
              >
                <FaChevronLeft /> Previous
              </motion.button>
              <div className="bm-products-pagination-numbers">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                  <motion.button
                    key={page}
                    className={`bm-products-pagination-number ${currentPage === page ? 'active' : ''}`}
                    onClick={() => setCurrentPage(page)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {page}
                  </motion.button>
                ))}
              </div>
              <motion.button 
                className="bm-products-pagination-btn"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(currentPage + 1)}
                whileHover={{ scale: currentPage === totalPages ? 1 : 1.05 }}
                whileTap={{ scale: currentPage === totalPages ? 1 : 0.95 }}
              >
                Next <FaChevronRight />
              </motion.button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsScreen;