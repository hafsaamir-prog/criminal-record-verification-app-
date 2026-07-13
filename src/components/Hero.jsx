import React, { useState } from 'react';

export default function Hero() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="hero-container">
            <nav className="navbar">
                <div className="logo-section">
                    <div className="gold-circle"></div>
                    <div className="brand-text">
                        <span className="brand-title">TGSJ</span>
                        <span className="brand-subtitle">THEMIS GLOBAL SCAN JUSTICE</span>
                    </div>
                </div>

                <button className="menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? 'X' : '☰'}
                </button>

                <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                    <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a></li>
                    <li><a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a></li>
                    <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About</a></li>
                </ul>
            </nav>

            <div className="hero-content">
                <div className="main-logo-image"></div>
                <div className="badge">
                    <span className="bagde-text">INDEPENDENT CRIMINAL RECORD VERIFICATION</span>
                </div>
                <h1 className="center-title">
                    Trusted.<br />
                    Confidential.<br />
                    <span className="golden-text">Worldwide.</span>
                </h1>
                <p className="center-subtitle">
                    Professional background verification across 179 countries. Results delivered to your employer or immigration authority within 48 hours.
                </p>
                <div className="hero-buttons">
                    <button className="btn-one">Start Verification→</button>
                    <button className="btn-two">How it works</button>
                </div>
            </div>
        </div>
    );
}

