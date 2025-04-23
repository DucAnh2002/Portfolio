import './Contact.css';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="contact-section" id='contact'>
      <h2>Contact Me</h2>
      <div className="contact-boxes">
        <div className="contact-card">
          <Phone size={30} />
          <h3>Call Number</h3>
          <p>+84 832229447</p>
        </div>
        <div className="contact-card">
          <Mail size={30} />
          <h3>Email</h3>
          <a href="mailto:haducanh02012002@gmail.com">haducanh02012002@gmail.com</a>
        </div>
        <div className="contact-card">
          <MapPin size={30} />
          <h3>Location</h3>
          <p>Ho Chi Minh City, Viet Nam</p>
        </div>
        <div className="contact-card">
          <Linkedin size={30} />
          <h3>LinkedIn</h3>
          <a href="https://www.linkedin.com/in/haducanh/" target="_blank" rel="noopener noreferrer">.linkedin.com/in/haducanh/</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
