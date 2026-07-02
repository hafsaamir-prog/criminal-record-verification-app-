import React, {useState} from 'react';
import './App.css';
export default function App() {
    const {isMenuOpen, SetIsMenuOpen} = useState(false);
    return(
        <div className="hero-contatainer">
            <nav className= "navbar">
                <div className="logo-section">
                    <div className="gold-circle"></div>
                    <div className = "brand-text">
                        <span className="brand-title">TGSJ</span>
                        <span classname="brand-subtitle">THEMIS GLOBAL SCAN JUSTICE</span>
                    </div>    
                </div>
                <button className="menu-button" onClick={()=>setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? 'X': '☰'}
                </button>
                
