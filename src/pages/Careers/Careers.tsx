import { useState } from 'react';
import { FaBuilding, FaMapMarkerAlt, FaBriefcase, FaClock, FaDollarSign } from 'react-icons/fa';
import './Careers.css';

const Careers = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const jobOpenings = [
    {
      id: 1,
      title: 'Construction Project Manager',
      type: 'Full-time',
      location: 'San Francisco, CA',
      department: 'Operations',
      salary: '$90,000 - $120,000',
      posted: '2 days ago',
      category: 'operations'
    },
    {
      id: 2,
      title: 'Building Materials Specialist',
      type: 'Full-time',
      location: 'Remote',
      department: 'Sales',
      salary: '$65,000 - $85,000',
      posted: '1 week ago',
      category: 'sales'
    },
    {
      id: 3,
      title: 'Quality Control Engineer',
      type: 'Full-time',
      location: 'Chicago, IL',
      department: 'Quality Assurance',
      salary: '$75,000 - $95,000',
      posted: '3 days ago',
      category: 'engineering'
    },
    {
      id: 4,
      title: 'Warehouse Supervisor',
      type: 'Full-time',
      location: 'Dallas, TX',
      department: 'Logistics',
      salary: '$50,000 - $65,000',
      posted: '1 day ago',
      category: 'operations'
    },
    {
      id: 5,
      title: 'Architectural Consultant',
      type: 'Contract',
      location: 'New York, NY',
      department: 'Design',
      salary: '$80/hr',
      posted: '2 weeks ago',
      category: 'design'
    },
    {
      id: 6,
      title: 'Sustainability Analyst',
      type: 'Full-time',
      location: 'Portland, OR',
      department: 'Research',
      salary: '$70,000 - $90,000',
      posted: '5 days ago',
      category: 'engineering'
    }
  ];

  const filteredJobs = jobOpenings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         job.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeTab === 'all' || job.category === activeTab;
    return matchesSearch && matchesCategory;
  });

  const departments = [...new Set(jobOpenings.map(job => job.department))];

  return (
    <div className="careers-page">
      {/* Hero Section */}
      <section className="careers-hero">
        <div className="careers-hero-content">
          <h1 className="careers-hero-title">Build Your Future With Us</h1>
          <p className="careers-hero-subtitle">
            Join a team that's shaping the future of construction materials and building solutions
          </p>
          <button className="careers-hero-button">
            View Open Positions
          </button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="careers-benefits">
        <div className="careers-benefits-container">
          <h2 className="careers-section-title">Why Build With Our Team</h2>
          <div className="careers-benefits-grid">
            <div className="careers-benefit-card">
              <div className="careers-benefit-icon">
                <FaBuilding />
              </div>
              <h3>Professional Growth</h3>
              <p>Comprehensive training programs and clear career progression paths</p>
            </div>
            <div className="careers-benefit-card">
              <div className="careers-benefit-icon">
                <FaBriefcase />
              </div>
              <h3>Competitive Compensation</h3>
              <p>Industry-leading salaries with performance bonuses and profit sharing</p>
            </div>
            <div className="careers-benefit-card">
              <div className="careers-benefit-icon">
                <FaClock />
              </div>
              <h3>Work-Life Balance</h3>
              <p>Flexible schedules and generous PTO for all full-time employees</p>
            </div>
            <div className="careers-benefit-card">
              <div className="careers-benefit-icon">
                <FaDollarSign />
              </div>
              <h3>Comprehensive Benefits</h3>
              <p>Health, dental, vision, and retirement plans with company matching</p>
            </div>
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section className="careers-openings">
        <div className="careers-openings-container">
          <div className="careers-openings-header">
            <h2 className="careers-section-title">Current Open Positions</h2>
            <div className="careers-search">
              <input
                type="text"
                placeholder="Search jobs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="careers-search-input"
              />
            </div>
          </div>

          <div className="careers-tabs">
            <button
              className={`careers-tab ${activeTab === 'all' ? 'active' : ''}`}
              onClick={() => setActiveTab('all')}
            >
              All Departments
            </button>
            {departments.map(dept => (
              <button
                key={dept}
                className={`careers-tab ${activeTab === dept.toLowerCase() ? 'active' : ''}`}
                onClick={() => setActiveTab(dept.toLowerCase())}
              >
                {dept}
              </button>
            ))}
          </div>

          <div className="careers-jobs-list">
            {filteredJobs.length > 0 ? (
              filteredJobs.map(job => (
                <div key={job.id} className="careers-job-card">
                  <div className="careers-job-info">
                    <h3 className="careers-job-title">{job.title}</h3>
                    <div className="careers-job-meta">
                      <span className="careers-job-location">
                        <FaMapMarkerAlt /> {job.location}
                      </span>
                      <span className="careers-job-type">{job.type}</span>
                    </div>
                    <div className="careers-job-department">{job.department}</div>
                  </div>
                  <div className="careers-job-details">
                    <div className="careers-job-salary">{job.salary}</div>
                    <div className="careers-job-posted">Posted {job.posted}</div>
                    <button className="careers-job-apply">Apply Now</button>
                  </div>
                </div>
              ))
            ) : (
              <div className="careers-no-results">
                <p>No job openings match your search criteria.</p>
                <button 
                  className="careers-clear-filters"
                  onClick={() => {
                    setSearchTerm('');
                    setActiveTab('all');
                  }}
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="careers-culture">
        <div className="careers-culture-container">
          <div className="careers-culture-content">
            <h2 className="careers-section-title">Our Work Culture</h2>
            <p className="careers-culture-text">
              At BuildMaster, we foster an environment of innovation, collaboration, and respect. 
              Our team members are empowered to bring their ideas forward and take ownership of their work.
            </p>
            <div className="careers-culture-highlights">
              <div className="careers-culture-item">
                <h3>Safety First</h3>
                <p>Industry-leading safety standards for all employees</p>
              </div>
              <div className="careers-culture-item">
                <h3>Continuous Learning</h3>
                <p>Annual training budget for professional development</p>
              </div>
              <div className="careers-culture-item">
                <h3>Community Impact</h3>
                <p>Paid volunteer days to give back to our communities</p>
              </div>
            </div>
          </div>
          <div className="careers-culture-image">
            {/* This would be your image or illustration */}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="careers-cta">
        <div className="careers-cta-container">
          <h2 className="careers-cta-title">Ready to Build Your Career With Us?</h2>
          <p className="careers-cta-text">
            Can't find the perfect role? Submit your resume and we'll contact you when a matching position opens.
          </p>
          <div className="careers-cta-buttons">
            <button className="careers-cta-primary">Join Our Talent Network</button>
            <button className="careers-cta-secondary">Contact Recruiting</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;