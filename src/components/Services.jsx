import React, { useState } from 'react';

export default function Services() {
    const [isVerOpen, setIsVerOpen] = useState(false);

    return (
        <div className="ser-container">
            <div className="ser-header-section">
                <span className="ser-gold-title">OUR SERVICES</span>
                <h1 className="ser-main-heading">Choose Your Verification</h1>
                <p className="ser-sub-heading">Two service levels to meet your specific requirements and timeline.</p>
                <button className="start-verification-btn" onClick={() => setIsVerOpen(!isVerOpen)}>
                    Start Verification →
                </button>
            </div>

            <div className="service-card">
                <div className="express-badge">EXPRESS</div>
                
                <h2 className="card-main-title">Criminal Record Verification</h2>
                
                <p className="card-description">
                    Fast, independent background check across countries you specify. 
                    Report delivered directly to your employer or immigration authority within 48 hours.
                </p>

                <ul className="checkpoints-list">
                    <li className="checkpoint-item">
                        <span className="checkmark">✓</span>
                        48-hour delivery guaranteed
                    </li>

                    <li className="checkpoint-item">
                        <span className="checkmark">✓</span>
                        Up to 5 countries per request
                    </li>

                    <li className="checkpoint-item">
                        <span className="checkmark">✓</span>
                        PDF report with electronic seal
                    </li>

                    <li className="checkpoint-item">
                        <span className="checkmark">✓</span>
                        Direct delivery to employer
                    </li>

                    <li className="checkpoint-item">
                        <span className="checkmark">✓</span>
                        Electronic consent signed by employer
                    </li>
                </ul>

                <h3 className="price-region-title">PRICE PER COUNTRY BY REGION</h3>
                
                <div className="price-table">
                    <div className="price-row">
                        <span className="region-name">Oceania (NZ, AU...)</span>
                        <span className="region-cost">27 NZD</span>
                    </div>
                    <div className="price-row">
                        <span className="region-name">Asia</span>
                        <span className="region-cost">36 NZD</span>
                    </div>
                    <div className="price-row">
                        <span className="region-name">Europe, Americas, Africa, Middle East</span>
                        <span className="region-cost">42 NZD</span>
                    </div>
                </div>

                <p className="promo-text">Up to 5 countries · 40% discount with promo code</p>

                <button className="card-action-btn">Start Now →</button>
            </div>
        </div>
    );
}