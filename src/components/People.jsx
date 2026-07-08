import React from 'react';
import employers from "../assets/employers.png";
import immigration from "../assets/immigration.png";
import individual from "../assets/individual.png"
export default function People(){
    return (
        <div className="serv-container">
            <div className="serv-header-section">
                <span className="serv-gold-title">WHO DO WE SERVE</span>
                <h1 className="serv-main-heading">Verification for Every Need</h1>
                <p className="serv-sub-heading">Weather you're an employer, an immigration professioanl or a private individual-TGSJ provides accurate, independent verification</p>
            </div>    
        <div className="image-container">
            <img src ={employers} alt ="Employers" className="people-image"/></div>
        <div className ="people-container">
                <h3 className="people-title">Employers</h3>
                <p className="people-desc">Verify potential hires' criminal history across 
                    all countries of residence, independent third party verification 
                    trusted by leading companies worldwide</p>
        </div>
        <div className="image-container">
            <img src ={immigration} alt ="Immigration" className ="people-image"/></div>
            <div className ="people-container">
                <h3 className="people-title">Immigration Professionals</h3>
                <p className="people-desc">Secure certified, multi-jurisdictional background checks to accelerate visa, residency, and citizenship applications while meeting strict regulatory standards worldwide.</p>
        </div>
        <div className="image-container">
            <img src ={individual} alt ="Individual" className ="people-image"/></div>
            <div className ="people-container">
                <h3 className="people-title">Private Individual</h3>
                <p className="people-desc">Obtain official, tamper-proof personal clearance reports to seamlessly verify your own global record for international jobs, travel, or foreign university admissions.</p>
            </div>
    
</div>

    );
}