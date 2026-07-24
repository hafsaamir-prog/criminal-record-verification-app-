import React, { useState } from 'react';
import VerificationForm from "../VerificationForm";

export default function Services() {
    const [isVerOpen, setIsVerOpen] = useState(false);

    return(
        <div className="serv-container">
            <div className="serv-header-section">
                <span className="serv-gold-title">OUR SERVICES</span>
                <h1 className="serv-main-heading">Choose Your Verification</h1>
                <p className="serv-sub-heading">Two service levels to meet your specific requirements and timeline.</p>
                <button className="start-veri-btn" onClick={() => setIsVerOpen(true)}>
                    Start Verification ➜
                </button>
                
            </div>

            <div className="cards-container">
                <div className="serv-card-left">
                    <div className="express-badge">EXPRESS</div>
                    <h2 className="card-main-title">Criminal Record Verification</h2>
                    <p className="card-descrip">
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

                    <button className="card-action-btn">Start Now ➜</button>
                </div>

                <div className="serv-card-right">
                    <div className="express-badge">STANDARD</div>

                    <h2 className="card-main-title">Education and Credentials Verification</h2>

                    <p className="card-descrip">
                        Fast independent validation of academic degrees and professional certifications globally.
                        Report delivered directly to your employer or licensing body within 48 hours
                    </p>

                    <ul className="checkpoints-list">
                        <li className="checkpoint-item">
                            <span className="checkmark">✓</span>
                            48-hour delivery guranteed
                        </li>
                        <li className="checkpoint-item">
                            <span className="checkmark">✓</span>
                            upto 3 instituitions per request
                        </li>
                        <li className="checkpoint-item">
                            <span className="checkmark">✓</span>
                            Direct verification with registrars
                        </li>
                        <li className="checkpoint-item">
                            <span className="checkmark">✓</span>
                            Verified PDF transcript report
                        </li>
                        <li className="checkpoint-item">
                            <span className="checkmark">✓</span>
                            Digital consent authorization
                        </li>
                    </ul>

                    <h3 className="price-region-title">PRICE PER COUNTRY BY REGION</h3>

                    <div className="price-table">
                        <div className="price-row">
                            <span className="region-name">Oceania (NZ,AU...)</span>
                            <span className="region-cost">15 NZD</span>
                        </div>
                        <div className="price-row">
                            <span className="region-name">Asia</span>
                            <span className="region-cost">20 NZD</span>
                        </div>
                        <div className="price-row">
                            <span className="region-name">Europe,Americas, Africa,Middle East</span>
                            <span className="region-cost">25 NZD</span>
                        </div>
                    </div>

                    <p className="promo-text">Upto 3 instituitions. 50% discount with promo code </p>

                    <button className="card-action-btn">Start Now ➜</button>
                </div>
            </div>
            {isVerOpen && (
                <VerificationForm
                    onClose={() => setIsVerOpen(false)}
                />
)}
        </div>
    );
}