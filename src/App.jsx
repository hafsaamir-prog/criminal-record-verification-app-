import React from 'react';
import './App.css';
import Hero from './components/Hero';
import Stats from './components/Stats';

export default function App() {
    return (
        <div className="app-wrapper">
            <Hero />
            <Stats/>
            
        </div>    
    );
}