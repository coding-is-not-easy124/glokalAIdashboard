import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faChartLine,
  faTicketAlt,
  faUser,
  faUsers,
  faChartBar,
  faAddressBook,
  faChalkboardTeacher,
  faCog,
  faUserCircle,
  faEnvelope,
  faPhone,
  faLifeRing,
} from '@fortawesome/free-solid-svg-icons';
import { FaLinkedin, FaFacebook, FaGithub } from 'react-icons/fa'; // Import React Icons
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Logo Section */}
      <h2>SamurAI</h2>
      
      {/* Demo Bank Button */}
      <button className="demo-bank-button">Demo Bank</button>

      {/* User Icon and Welcome Text */}
      <div className="user-section">
        <FontAwesomeIcon icon={faUserCircle} className="user-icon" />
        <p>Welcome, User</p>
      </div>

      {/* Sidebar Navigation */}
      <ul>
        {/* Dashboard Section */}
        <p className="section-title">DASHBOARD</p>
        <li><FontAwesomeIcon icon={faHome} /> Home</li>
        <li><FontAwesomeIcon icon={faChartLine} /> Analytics</li>
        <li><FontAwesomeIcon icon={faTicketAlt} /> Open Tickets</li>
        <li><FontAwesomeIcon icon={faUser} /> My Info</li>
        <li><FontAwesomeIcon icon={faUsers} /> Team Information</li>
        <hr />

        {/* Workbench Section */}
        <p className="section-title">WORKBENCH</p>
        <li><FontAwesomeIcon icon={faChartBar} /> Performance</li>
        <li><FontAwesomeIcon icon={faAddressBook} /> Directory</li>
        <li><FontAwesomeIcon icon={faChalkboardTeacher} /> My Trainings</li>
        <li><FontAwesomeIcon icon={faCog} /> Settings</li>
      </ul>

      <hr />

      {/* Social Media Links */}
      <div className="social-media">
        <p className="section-title">CONNECT WITH US</p>
        <ul className="social-links">
          <li>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={20} color="#0077b5" /> LinkedIn
            </a>
          </li>
          <li>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={20} color="#4267B2" /> Facebook
            </a>
          </li>
          <li>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub size={20} color="#333" /> GitHub
            </a>
          </li>
        </ul>
      </div>

      <hr />

      {/* Additional Footer Section */}
      <div className="footer-section">
        {/* Contact Info */}
        <div className="contact-info">
          <p><FontAwesomeIcon icon={faEnvelope} />Email - support@samurai.com</p>
          <p><FontAwesomeIcon icon={faPhone} />Contact - +1 234 567 890</p>
        </div>

        {/* Quick Links */}
        <div className="quick-links">
          <p className="section-title">Quick Links</p>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li><FontAwesomeIcon icon={faLifeRing} /> Help & Support</li>
          </ul>
        </div>

        {/* Motivational Quote */}
        <div className="quote">
          <p>"Empowering innovation one click at a time."</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
