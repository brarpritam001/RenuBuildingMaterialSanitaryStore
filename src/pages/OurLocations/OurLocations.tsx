import { FaMapMarkerAlt, FaPhone, FaClock, FaEnvelope, FaDirections } from 'react-icons/fa';
import { IoCall } from 'react-icons/io5';
import './OurLocations.css'

const OurLocation = () => {
  const location = {
    city: 'Panipat',
    address: 'Hari Nagar Ram Sawroop Chowk, 33 Futa Road',
    phone: '+91 80593 66488',
    email: 'parkashved925@gmail.com',
    hours: 'Mon-Sun: 7:30 AM - 8:30 PM',
    mapLink: 'https://maps.app.goo.gl/aQJdwN6XFXyJq7ik7?g_st=com.google.maps.preview.copy'
  };

  return (
    <div className="pl-location-container">
      <div className="pl-location-header">
        <h1 className="pl-location-title">
          <span className="pl-title-main">Our Location</span>
          <span className="pl-title-shadow">Our Location</span>
        </h1>
        <p className="pl-location-subtitle">
          Visit us for premium products and expert service in Panipat
        </p>
      </div>

      <div className="pl-location-content">
        <div className="pl-location-card">
          <div className="pl-card-inner">
            <div className="pl-card-front">
              <div className="pl-location-badge">Main Branch</div>
              
              <h3 className="pl-location-city">
                <FaMapMarkerAlt className="pl-location-icon" /> 
                <span>{location.city}</span>
              </h3>
              
              <div className="pl-location-details">
                <p className="pl-location-address">{location.address}</p>
                
                <div className="pl-location-contact">
                  <FaPhone className="pl-contact-icon" />
                  <a href={`tel:${location.phone.replace(/\D/g, '')}`}>{location.phone}</a>
                </div>
                
                <div className="pl-location-contact">
                  <FaEnvelope className="pl-contact-icon" />
                  <a href={`mailto:${location.email}`}>{location.email}</a>
                </div>
                
                <div className="pl-location-hours">
                  <FaClock className="pl-contact-icon" />
                  <div className="pl-hours-text">{location.hours}</div>
                </div>
              </div>
            </div>
            
            <div className="pl-card-back">
              <h3 className="pl-back-title">Get In Touch</h3>
              <div className="pl-action-buttons">
                <a 
                  href={location.mapLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="pl-direction-button"
                >
                  <FaDirections className="pl-button-icon" />
                  <span>Directions</span>
                </a>
                <a 
                  href={`tel:${location.phone.replace(/\D/g, '')}`} 
                  className="pl-call-button"
                >
                  <IoCall className="pl-button-icon" />
                  <span>Call Now</span>
                </a>
              </div>
              <div className="pl-qr-code">
                <img 
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(location.mapLink)}`} 
                  alt="Location QR Code" 
                />
                <p>Scan for directions</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pl-location-map">
          <iframe
            title="Panipat Location"
            src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1ddummy!2d${location.mapLink.split('@')[1]?.split(',')[1] || '77.0109'}!3d${location.mapLink.split('@')[1]?.split(',')[0] || '29.3909'}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDIzJzI3LjIiTiA3N8KwMDAnMzkuMiJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin`}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
          ></iframe>
          <div className="pl-map-overlay"></div>
        </div>
      </div>
    </div>
  );
};

export default OurLocation;