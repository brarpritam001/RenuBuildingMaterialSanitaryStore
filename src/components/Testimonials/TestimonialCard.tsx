import { FaStar } from 'react-icons/fa';
import type { TestimonialCardProps } from '../../types/types';

const TestimonialCard = ({ name, role, text, company, active }: TestimonialCardProps) => {
  return (
    <div className={`testimonial-item ${active ? 'active' : ''}`}>
      <div className="testimonial-rating">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} className="star-icon" />
        ))}
      </div>
      <p className="testimonial-quote">"{text}"</p>
      <div className="testimonial-author">
        <div className="author-avatar">
          {name.split(' ').map(n => n[0]).join('')}
        </div>
        <div className="author-info">
          <span className="author-name">{name}</span>
          <span className="author-role">{role} • {company}</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;