import React from 'react';
import employers from "../assets/employers.png";
export default function People(){
    return (
        <div className="serv-container">
            <div className="serv-header-section">
                <span className="serv-gold-title">WHO DO WE SERVE</span>
                <h1 className="serv-main-heading">Verification for Every Need</h1>
                <p className="serv-sub-heading">Weather you're an employer, an immigration professioanl or a private individual-TGSJ provides accurate, independent verification</p>
            </div>
            <div className ="people-container">
                <img src ={employers} alt ="Employers" className="people-image"/>
                <h3 className="people-title">Employers</h3>
                <p className="people-desc">Verify potential hires' criminal history across all countries of residence, independent third party verification trusted by leading companies worldwide</p>
            </div>    
        </div>


    );
}