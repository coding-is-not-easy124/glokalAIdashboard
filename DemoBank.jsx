import React, { useState } from 'react';
import './DemoBank.css';
import { MessageCircle } from 'react-feather';
import { motion } from 'framer-motion';

const DemoBank = () => {
    const [isChatbotVisible, setIsChatbotVisible] = useState(false);

    const toggleChatbot = () => {
        setIsChatbotVisible(!isChatbotVisible);
    };

    return (
        <div className="demo-bank">
            {/* Header Section */}
            <header className="header">
                <h1>Demo Bank</h1>
                <nav className="nav-links">
                    <a href="#">Personal</a>
                    <a href="#">Business</a>
                    <a href="#">Products</a>
                    <a href="#">Priority</a>
                    <a href="#">About Us</a>
                    <a href="#">Support</a>
                </nav>
            </header>

            {/* Hero Section */}
            <section className="hero-section">
                <h2>Get 24x7 Business Loans at only 3.3% annum interest</h2>
                <p>Craft your success story with 24x7 instant business loans</p>
                <button className="apply-button">Apply Now</button>
            </section>

            {/* Services Section */}
            <section className="services-section">
                <h3>Take your business to greater heights with our incredible range of financial services & revolutionary products</h3>
                <div className="service-cards">
                    {/* Service Cards with framer-motion */}
                    {[ 
                        { bgColor: '#f5f5f5', color: '#005f73', title: 'Bank APIs', description: 'Accelerate your financial innovation with Axis Transaction Banking APIs' },
                        { bgColor: '#d7c6a3', color: '#333', title: 'Cash Management Services', description: 'A complete payments & collections platform, engineered for growth' },
                        { bgColor: '#e0f7fa', color: '#ffffff', title: 'Corporate Finance', description: 'Providing the right financing option to lead your business forward' },
                        { bgColor: '#d7c6a3', color: '#333', title: 'Trade Finance', description: 'Facilitating international trade with tailored financial solutions' },
                        { bgColor: '#f4e1d2', color: '#333', title: 'Wealth Management', description: 'Helping you grow, manage, and preserve your wealth effectively' },
                        { bgColor: '#e0f7fa', color: '#ffffff', title: 'Digital Banking', description: 'Empower your business with secure, seamless digital banking services' }
                    ].map((card, index) => (
                        <motion.div
                            key={index}
                            style={{
                                backgroundColor: card.bgColor,
                                color: card.color
                            }}
                            className="service-card"
                            initial={{ opacity: 0, x: -200 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            <h4>{card.title}</h4>
                            <p>{card.description}</p>
                            <button>Learn More</button>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Chatbot Icon */}
            <MessageCircle 
                style={{
                    color: '#ffffff', 
                    backgroundColor: '#028A0F', 
                    padding: '10px', 
                    borderRadius: '50%', 
                    cursor: 'pointer', 
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
                    transition: 'transform 0.3s ease, background-color 0.3s ease',
                    position: 'fixed', 
                    bottom: '14px',  // Keeps it just above the chat button
                    right: '170px',
                    zIndex: 1100,
                }} 
                onMouseEnter={(e) => e.target.style.backgroundColor = '#006F3C'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#028A0F'}
                size={30}
            />

            {/* Chatbot Widget */}
            <div className="chatbot-widget">
                <button className="chat-button" onClick={toggleChatbot}>Chat with Lina</button>
            </div>

            {/* Chatbot Modal */}
            {isChatbotVisible && (
                <div className="chatbot-modal">
                    <div className="chatbot-container">
                        <button className="close-chatbot" onClick={toggleChatbot}>X</button>
                        <iframe 
                            src="https://cdn.botpress.cloud/webchat/v2.2/shareable.html?configUrl=https://files.bpcontent.cloud/2025/01/03/14/20250103142058-MZD5P19D.json"
                            width="100%" 
                            height="100%" 
                            frameBorder="0"
                            title="Chatbot"
                        ></iframe>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DemoBank;