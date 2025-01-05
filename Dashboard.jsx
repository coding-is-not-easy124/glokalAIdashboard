import React, { useState } from 'react';
import Table from '../Table/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // Import framer-motion
import './Dashboard.css';

const Dashboard = ({ isDarkMode, toggleTheme }) => {
  const [activeTab, setActiveTab] = useState('Pending'); // Default tab
  const [isNavbarLightBlue, setIsNavbarLightBlue] = useState(false); // New state for navbar color

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const handleThemeToggle = () => {
    toggleTheme();
    setIsNavbarLightBlue(!isNavbarLightBlue); // Toggle navbar color
  };

  return (
    <div className={`dashboard ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <motion.nav
        className={`navbar ${isNavbarLightBlue ? 'light-blue-navbar' : ''}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Hamburger Menu */}
        <button className="hamburger-menu">
          <FontAwesomeIcon icon={faBars} style={{ fontSize: '24px' }} />
        </button>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/analytics">Analytics</Link></li>
          <li><Link to="/demo-bank">Demo Bank</Link></li>
          <li><Link to="/info">My Info</Link></li>
        </ul>
        <div className="navbar-buttons">
          <button className="theme-toggle-btn" onClick={handleThemeToggle}>
            <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
            {isDarkMode ? ' Light Mode' : ' Dark Mode'}
          </button>
          <button className="logout-btn">Logout</button>
        </div>
      </motion.nav>

      <div className="content">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Dashboard
        </motion.h1>

        {/* Tabs Section */}
        <div className="tabs">
          {['Pending', 'Approved', 'Rejected', 'All Cases'].map((tabName) => (
            <motion.button
              key={tabName}
              className={`tab-button ${activeTab === tabName ? 'active' : ''}`}
              onClick={() => handleTabClick(tabName)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {tabName}
            </motion.button>
          ))}
        </div>

        {/* Conditional Table Rendering */}
        <div className="table-container" style={{ width: '100%', overflow: 'visible' }}>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {activeTab}
          </motion.h2>
          <Table tab={activeTab} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;