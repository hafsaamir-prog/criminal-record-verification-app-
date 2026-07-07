import React from 'react';
import './App.css';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import People from './components/People';
export default function App() {
    return (
        <div className="app-wrapper">
            <Hero />
            <Stats/>
            <Services/>
            <People/>
            
        </div>    
    );
}