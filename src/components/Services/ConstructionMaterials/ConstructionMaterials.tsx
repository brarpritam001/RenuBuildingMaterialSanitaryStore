import { useState } from 'react';
import { GiBrickWall, GiStonePath, GiConcreteBag, GiMetalBar } from 'react-icons/gi';
import { FaArrowLeft, FaSearch, FaFilter, FaShoppingCart, FaStar } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './ConstructionMaterials.css';

type Material = {
  id: string;
  name: string;
  category: string;
  price: number;
  unit: string;
  rating: number;
  reviews: number;
  image: string;
  description: string;
  specifications: {
    key: string;
    value: string;
  }[];
  variants?: {
    type: string;
    price: number;
  }[];
  featured?: boolean;
};

const ConstructionMaterials = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMaterial, setSelectedMaterial] = useState<Material | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    priceRange: [0, 1000],
    rating: 0,
    inStock: true
  });

  const categories = [
    { id: 'all', name: 'All Materials', icon: <GiBrickWall /> },
    { id: 'cement', name: 'Cement', icon: <GiConcreteBag /> },
    { id: 'bricks', name: 'Bricks', icon: <GiBrickWall /> },
    { id: 'sand', name: 'Sand & Aggregates', icon: <GiStonePath /> },
    { id: 'gravel', name: 'Gravel', icon: <GiStonePath /> },
    { id: 'steel', name: 'Steel', icon: <GiMetalBar /> }
  ];

  const materials: Material[] = [
    {
      id: 'cm-001',
      name: 'Portland Cement (50kg)',
      category: 'cement',
      price: 450,
      unit: 'bag',
      rating: 4.8,
      reviews: 124,
      image: 'https://images.unsplash.com/photo-1605152276897-4f618f831968?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      description: 'High-quality Portland cement suitable for all general construction purposes. Provides excellent strength and durability for concrete structures.',
      specifications: [
        { key: 'Type', value: 'OPC 53 Grade' },
        { key: 'Setting Time', value: 'Initial: 30 min, Final: 10 hours' },
        { key: 'Compressive Strength', value: '53 MPa after 28 days' },
        { key: 'Color', value: 'Grey' },
        { key: 'Packaging', value: '50kg HDPE bags' }
      ],
      variants: [
        { type: 'Single Bag', price: 450 },
        { type: 'Pallet (40 Bags)', price: 17000 }
      ],
      featured: true
    },
    {
      id: 'cm-002',
      name: 'Clay Bricks (Standard)',
      category: 'bricks',
      price: 8,
      unit: 'piece',
      rating: 4.6,
      reviews: 89,
      image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      description: 'Standard size clay bricks with high compressive strength and uniform shape. Ideal for load-bearing walls and structural applications.',
      specifications: [
        { key: 'Size', value: '230mm × 110mm × 70mm' },
        { key: 'Compressive Strength', value: '7-10 N/mm²' },
        { key: 'Water Absorption', value: '12-15%' },
        { key: 'Quantity per Sq.Ft', value: 'Approx. 9 bricks' }
      ],
      variants: [
        { type: 'Single Brick', price: 8 },
        { type: '1000 Bricks', price: 7500 }
      ]
    },
    {
      id: 'cm-003',
      name: 'River Sand (Fine)',
      category: 'sand',
      price: 1200,
      unit: 'ton',
      rating: 4.5,
      reviews: 67,
      image: 'https://images.unsplash.com/photo-1604866830513-5a6a8a7e140a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      description: 'Naturally sourced river sand with uniform grain size. Perfect for plastering, masonry work and concrete mixing.',
      specifications: [
        { key: 'Grain Size', value: '0.075mm to 4.75mm' },
        { key: 'Silt Content', value: '< 3%' },
        { key: 'Bulk Density', value: '1.44 kg/m³' },
        { key: 'Moisture Content', value: '< 5%' }
      ]
    },
    {
      id: 'cm-004',
      name: 'Crushed Stone Aggregate (20mm)',
      category: 'gravel',
      price: 900,
      unit: 'ton',
      rating: 4.7,
      reviews: 42,
      image: 'https://images.unsplash.com/photo-1519752441410-d3ca70ecb937?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      description: 'Hard granite aggregate crushed to 20mm nominal size. Ideal for concrete works, road base and drainage applications.',
      specifications: [
        { key: 'Size', value: '20mm nominal' },
        { key: 'Flakiness Index', value: '< 15%' },
        { key: 'Elongation Index', value: '< 20%' },
        { key: 'Water Absorption', value: '< 0.5%' },
        { key: 'Abrasion Value', value: '< 30%' }
      ]
    },
    {
      id: 'cm-005',
      name: 'TMT Steel Bars (12mm)',
      category: 'steel',
      price: 85,
      unit: 'kg',
      rating: 4.9,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1585059895524-72359e06133a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      description: 'Thermo-Mechanically Treated steel bars with superior strength and ductility. Corrosion resistant with excellent bonding properties.',
      specifications: [
        { key: 'Grade', value: 'Fe 500D' },
        { key: 'Diameter', value: '12mm' },
        { key: 'Yield Strength', value: '500 N/mm² min' },
        { key: 'Elongation', value: '16% min' },
        { key: 'Rib Pattern', value: 'Ribbed for better bonding' }
      ],
      variants: [
        { type: 'Per Kg', price: 85 },
        { type: '12m Bar', price: 1020 }
      ]
    },
    {
      id: 'cm-006',
      name: 'Ready Mix Concrete (M20)',
      category: 'cement',
      price: 4500,
      unit: 'm³',
      rating: 4.7,
      reviews: 78,
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      description: 'Ready-to-use concrete mix with standard M20 grade (1:1.5:3 ratio). Delivered fresh to your construction site.',
      specifications: [
        { key: 'Grade', value: 'M20 (1:1.5:3)' },
        { key: 'Compressive Strength', value: '20 N/mm² at 28 days' },
        { key: 'Slump', value: '75mm ± 25mm' },
        { key: 'Cement Content', value: '300 kg/m³' },
        { key: 'Admixtures', value: 'Plasticizers as required' }
      ]
    }
  ];

  const filteredMaterials = materials.filter(material => {
    const matchesSearch = material.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         material.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || material.category === selectedCategory;
    const matchesPrice = material.price >= filters.priceRange[0] && material.price <= filters.priceRange[1];
    const matchesRating = material.rating >= filters.rating;
    
    return matchesSearch && matchesCategory && matchesPrice && matchesRating;
  });

  const handleAddToCart = (material: Material) => {
    // Add to cart logic here
    console.log('Added to cart:', material);
  };

  const handleQuickView = (material: Material) => {
    setSelectedMaterial(material);
  };

  const closeQuickView = () => {
    setSelectedMaterial(null);
  };

  return (
    <div className="construction-materials-container">
      {/* Header with back button and title */}
      <header className="materials-header">
        <button className="back-button" onClick={() => navigate(-1)}>
          <FaArrowLeft />
        </button>
        <h1>Construction Materials</h1>
      </header>

      {/* Search and filter section */}
      <div className="search-filter-section">
        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search materials..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="filter-button" onClick={() => setShowFilters(!showFilters)}>
            <FaFilter />
            <span>Filters</span>
          </button>
        </div>

        <AnimatePresence>
          {showFilters && (
            <motion.div 
              className="filters-panel"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="filter-group">
                <h4>Price Range</h4>
                <div className="price-range">
                  <span>₹{filters.priceRange[0]}</span>
                  <input
                    type="range"
                    min="0"
                    max="10000"
                    step="100"
                    value={filters.priceRange[1]}
                    onChange={(e) => setFilters({...filters, priceRange: [filters.priceRange[0], parseInt(e.target.value)]})}
                  />
                  <span>₹{filters.priceRange[1]}</span>
                </div>
              </div>
              
              <div className="filter-group">
                <h4>Minimum Rating</h4>
                <div className="rating-filter">
                  {[4, 3, 2, 1].map((rating) => (
                    <button
                      key={rating}
                      className={`rating-star ${filters.rating >= rating ? 'active' : ''}`}
                      onClick={() => setFilters({...filters, rating})}
                    >
                      <FaStar />
                      <span>& Up</span>
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="filter-group">
                <label className="checkbox-filter">
                  <input
                    type="checkbox"
                    checked={filters.inStock}
                    onChange={(e) => setFilters({...filters, inStock: e.target.checked})}
                  />
                  <span>In Stock Only</span>
                </label>
              </div>
              
              <div className="filter-actions">
                <button className="reset-filters" onClick={() => setFilters({
                  priceRange: [0, 1000],
                  rating: 0,
                  inStock: true
                })}>
                  Reset
                </button>
                <button className="apply-filters" onClick={() => setShowFilters(false)}>
                  Apply
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Category tabs */}
      <div className="category-tabs">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`category-tab ${selectedCategory === category.id ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category.id)}
          >
            <span className="category-icon">{category.icon}</span>
            <span className="category-name">{category.name}</span>
          </button>
        ))}
      </div>

      {/* Materials grid */}
      <div className="materials-grid">
        {filteredMaterials.length > 0 ? (
          filteredMaterials.map((material) => (
            <motion.div 
              key={material.id}
              className="material-card"
              whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
              transition={{ duration: 0.3 }}
            >
              {material.featured && <div className="featured-badge">Featured</div>}
              <div className="material-image-container">
                <img src={material.image} alt={material.name} className="material-image" />
                <button className="quick-view-button" onClick={() => handleQuickView(material)}>
                  Quick View
                </button>
              </div>
              <div className="material-info">
                <h3 className="material-name">{material.name}</h3>
                <div className="material-rating">
                  <div className="stars">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className={i < Math.floor(material.rating) ? 'filled' : ''} />
                    ))}
                  </div>
                  <span className="review-count">({material.reviews})</span>
                </div>
                <div className="material-price">
                  ₹{material.price} <span className="price-unit">/ {material.unit}</span>
                </div>
                <button 
                  className="add-to-cart-button"
                  onClick={() => handleAddToCart(material)}
                >
                  <FaShoppingCart /> Add to Cart
                </button>
              </div>
            </motion.div>
          ))
        ) : (
          <div className="no-results">
            <img src="https://cdn.dribbble.com/users/2382015/screenshots/6065978/media/8a46678aa7a5b1a8b85b5f746f7d8a0e.png" alt="No results" />
            <h3>No materials found</h3>
            <p>Try adjusting your search or filters</p>
            <button onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
              setFilters({
                priceRange: [0, 1000],
                rating: 0,
                inStock: true
              });
            }}>
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Quick View Modal */}
      <AnimatePresence>
        {selectedMaterial && (
          <motion.div 
            className="quick-view-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="modal-content"
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              exit={{ y: 50 }}
            >
              <button className="close-modal" onClick={closeQuickView}>
                <IoMdClose />
              </button>
              
              <div className="modal-grid">
                <div className="modal-image-container">
                  <img src={selectedMaterial.image} alt={selectedMaterial.name} />
                </div>
                
                <div className="modal-details">
                  <h2>{selectedMaterial.name}</h2>
                  
                  <div className="modal-rating">
                    <div className="stars">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className={i < Math.floor(selectedMaterial.rating) ? 'filled' : ''} />
                      ))}
                    </div>
                    <span>{selectedMaterial.rating} ({selectedMaterial.reviews} reviews)</span>
                  </div>
                  
                  <div className="modal-price">
                    ₹{selectedMaterial.price} <span>/ {selectedMaterial.unit}</span>
                  </div>
                  
                  <p className="modal-description">{selectedMaterial.description}</p>
                  
                  {selectedMaterial.variants && (
                    <div className="modal-variants">
                      <h4>Available Options</h4>
                      <div className="variant-options">
                        {selectedMaterial.variants.map((variant, index) => (
                          <button key={index} className="variant-option">
                            {variant.type} - ₹{variant.price}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div className="modal-actions">
                    <button className="quantity-selector">
                      <span>-</span>
                      <span>1</span>
                      <span>+</span>
                    </button>
                    <button className="add-to-cart-button">
                      <FaShoppingCart /> Add to Cart
                    </button>
                  </div>
                </div>
                
                <div className="modal-specs">
                  <h3>Specifications</h3>
                  <table>
                    <tbody>
                      {selectedMaterial.specifications.map((spec, index) => (
                        <tr key={index}>
                          <td>{spec.key}</td>
                          <td>{spec.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ConstructionMaterials;