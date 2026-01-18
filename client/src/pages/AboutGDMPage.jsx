import React from 'react';
import { Link } from 'react-router-dom';
import './AboutGDMPage.css';
import Navbar from '../components/Navbar';
import AboutTabNet from '../components/AboutTabNet';

const AboutGDMPage = () => {
  return (
    <div className="about-container">
      <Navbar />
      
      <header className="about-hero">
        <div className="hero-content">
          <h1>Understanding Gestational Diabetes</h1>
          <p className="hero-subtitle">
            Your comprehensive guide to managing GDM for a healthier pregnancy
          </p>
          <div className="cta-buttons">
            <Link to="/dashboard" className="btn btn-primary">
              Start Tracking
            </Link>
            <Link to="/publications" className="btn btn-secondary">
              Learn More
            </Link>
          </div>
        </div>
      </header>

      <main className="about-content">
        <section className="info-section">
          <div className="info-card">
            <h2>What is Gestational Diabetes?</h2>
            <p>
              Gestational Diabetes Mellitus (GDM) is a temporary form of diabetes that occurs 
              during pregnancy when your body cannot produce enough insulin to handle increased 
              blood sugar demands. It affects <strong>3-20%</strong> of pregnancies, typically 
              developing between <strong>24-28 weeks</strong>.
            </p>
          </div>

          <div className="stats-grid">
            <div className="stat-card">
              <span className="stat-number">1 in 7</span>
              <span className="stat-label">births affected by GDM worldwide*</span>
    
            </div>
            <div className="stat-card">
              <span className="stat-number">50%</span>
              <span className="stat-label">higher chance of developing type 2 diabetes later</span>
            </div>
          </div>
        </section>

        <section className="cards-section">
          <div className="feature-card">
            <div className="card-icon">⚠️</div>
            <h3>Risk Factors</h3>
            <ul>
              <li>Overweight before pregnancy</li>
              <li>Family history of diabetes</li>
              <li>Previous GDM pregnancy</li>
              <li>PCOS diagnosis</li>
              <li>Age over 25</li>
            </ul>
          </div>

          <div className="feature-card">
            <div className="card-icon">💡</div>
            <h3>Why Monitoring Matters</h3>
            <p>
              Uncontrolled GDM can lead to:
            </p>
            <ul>
              <li>High birth weight babies</li>
              <li>Preterm birth</li>
              <li>Increased C-section risk</li>
              <li>Future diabetes risk</li>
            </ul>
          </div>

          <div className="feature-card">
            <div className="card-icon">🩸</div>
            <h3>Target Glucose Levels</h3>
            <ul>
              <li><strong>Fasting:</strong> &lt;95 mg/dL</li>
              <li><strong>1-hour postmeal:</strong> &lt;140 mg/dL</li>
              <li><strong>2-hour postmeal:</strong> &lt;120 mg/dL</li>
            </ul>
          </div>
        </section>

        <section className="management-section">
          <h2 className="section-title">Managing Your GDM</h2>
          <div className="management-grid">
            <div className="management-card">
              <h3>Nutrition</h3>
              <p>
                Balanced meals with controlled carbohydrates, emphasizing whole grains, 
                lean proteins, and healthy fats. Eat small, frequent meals.
              </p>
            </div>
            <div className="management-card">
              <h3>Exercise</h3>
              <p>
                30 minutes of moderate activity (walking, swimming) most days helps 
                control blood sugar naturally.
              </p>
            </div>
            <div className="management-card">
              <h3>Monitoring</h3>
              <p>
                Check glucose 4+ times daily (fasting + after meals). Track patterns 
                using tools like this app.
              </p>
            </div>
          </div>
        </section>
        <AboutTabNet />

      </main>

      

      <footer className="landing-footer">
        <p>Always consult your healthcare provider about your individual treatment plan.</p>
        <p><a
                href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11266185/"
                target="_blank"
                rel="noopener noreferrer"
                className="reference-link"
              >
                (* Source: International Diabetes Federation, 2023)
              </a></p>
        <div className="footer-links">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
        </div>
      </footer>
    </div>
  );
};

export default AboutGDMPage;
