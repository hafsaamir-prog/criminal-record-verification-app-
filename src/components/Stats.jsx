import React from 'react';
export default function Stats(){
    return (
        <div className="stats-container">
            <div className ="stats-grid">
                <div className="stat-box">
                    <h2 className="stat-no">179</h2>
                    <p className="stat-desc">COUNTRIES COVERED</p>
                </div>
                <div className="stat-box">
                    <h2 className="stat-no">48h</h2>
                    <p className="stat-desc">EXPRESS DELIVERY</p>
                </div>
                <div className="stat-box">
                    <h2 className="stat-no">5,000+</h2>
                    <p className="stat-desc">VERIFICATIONS DONE</p>
                </div>
                <div className="stat-box">
                    <h2 className="stat-no">100%</h2>
                    <p className="stat-desc">CONFIDENTIAL</p>
                </div>
            </div>
        </div>
    );
}        
