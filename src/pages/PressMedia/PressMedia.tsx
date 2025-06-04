import React from 'react';
import { FaNewspaper, FaMicrophone, FaVideo, FaCalendarAlt } from 'react-icons/fa';
import './PressMedia.css';

type MediaItemProps = {
  icon: React.ReactNode;
  title: string;
  date: string;
  description: string;
  link: string;
};

const MediaItem = ({ icon, title, date, description, link }: MediaItemProps) => {
  return (
    <div className="pm-media-item">
      <div className="pm-media-icon">{icon}</div>
      <div className="pm-media-content">
        <div className="pm-media-header">
          <h3 className="pm-media-title">{title}</h3>
          <span className="pm-media-date">
            <FaCalendarAlt className="pm-date-icon" /> {date}
          </span>
        </div>
        <p className="pm-media-description">{description}</p>
        <a href={link} className="pm-media-link">
          Read more
        </a>
      </div>
    </div>
  );
};

const PressMediaSection = () => {
  const mediaItems = [
    {
      icon: <FaNewspaper className="pm-icon" />,
      title: 'BuildMaster Featured in Construction Weekly',
      date: 'May 15, 2025',
      description: 'Our innovative building solutions were highlighted in the annual review of construction material advancements.',
      link: '#'
    },
    {
      icon: <FaVideo className="pm-icon" />,
      title: 'CEO Interview on Modern Construction',
      date: 'April 2, 2025',
      description: 'Watch our CEO discuss sustainable building practices and the future of construction materials.',
      link: '#'
    },
    {
      icon: <FaMicrophone className="pm-icon" />,
      title: 'Podcast: Materials Innovation Roundtable',
      date: 'March 18, 2025',
      description: 'Our technical director participated in an expert discussion about next-gen construction materials.',
      link: '#'
    },
    {
      icon: <FaNewspaper className="pm-icon" />,
      title: 'Industry Awards for Excellence',
      date: 'February 5, 2025',
      description: 'BuildMaster recognized with three awards for product quality and innovation at the annual builders convention.',
      link: '#'
    }
  ];

  return (
    <section className="pm-section">
      <div className="pm-container">
        <div className="pm-header">
          <h2 className="pm-title">Press & Media</h2>
          <p className="pm-subtitle">
            Latest news coverage, interviews, and announcements about BuildMaster
          </p>
        </div>

        <div className="pm-media-grid">
          {mediaItems.map((item, index) => (
            <MediaItem key={index} {...item} />
          ))}
        </div>

        <div className="pm-cta">
          <p className="pm-cta-text">Media inquiries or interview requests?</p>
          <button className="pm-cta-button">
            Contact Our PR Team
          </button>
        </div>
      </div>
    </section>
  );
};

export default PressMediaSection;