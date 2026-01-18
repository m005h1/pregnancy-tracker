import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import Navbar from '../components/Navbar';

const LandingPage = () => {
  return (
    <div className="landing-container">
          <Navbar />
      <header className="landing-header">
        <h1>Manage Your Gestational Diabetes with Confidence</h1>
        <p>Track your blood glucose levels, visualize trends, and get helpful insights to better manage your GDM.</p>
      </header>
      
      <section className="features-section">
        <h2>Key Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Easy Tracking</h3>
            <p>Log your blood glucose levels with just a few taps.</p>
          </div>
          <div className="feature-card">
            <h3>Visual Trends</h3>
            <p>See your readings over time with clear charts.</p>
          </div>
          <div className="feature-card">
            <h3>Smart Alerts</h3>
            <p>Get notified when readings are outside target ranges.</p>
          </div>
        </div>
      </section>
      
      <footer className="landing-footer">
        <p>Disclaimer: This tool is for informational purposes only and does not replace professional medical advice.</p>
        <div className="footer-links">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;