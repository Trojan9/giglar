import { Link } from 'react-router-dom';
import React from 'react';
import './SolutionPage.css';

const ThreatExposureManagement = () => {
  return (
    <div className="solution-page">
      <div className="solution-hero">
        <div className="container">
          <h1>Continuous Threat Exposure Management</h1>
          <p className="subtitle">Identify and Prioritize Risks Using AI-Driven Insights</p>
        </div>
      </div>

      <div className="solution-content">
        <div className="container">
          <section className="overview-section">
            <h2>Overview</h2>
            <p>
              Our Continuous Threat Exposure Management solution provides modern attack surface management
              and vulnerability assessment capabilities, helping you identify and prioritize risks before
              they become breaches.
            </p>
          </section>

          <section className="features-section">
            <h2>Key Features</h2>
            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon">
                  <span>01</span>
                </div>
                <h3>Attack Surface Discovery</h3>
                <p>
                  True adversary perspective on your attack surface, identifying vulnerabilities
                  before attackers do.
                </p>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <span>02</span>
                </div>
                <h3>Cryptographic Readiness</h3>
                <p>
                  Evaluate your organization's readiness for quantum threats with comprehensive
                  cryptographic posture assessment.
                </p>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <span>03</span>
                </div>
                <h3>Unified Vulnerability Management</h3>
                <p>
                  Centralized platform for identifying, assessing, and prioritizing vulnerabilities
                  across your entire infrastructure.
                </p>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <span>04</span>
                </div>
                <h3>Threat Intelligence</h3>
                <p>
                  Stay ahead of emerging threats with real-time threat intelligence and
                  advanced analytics.
                </p>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <span>05</span>
                </div>
                <h3>Continuous Penetration Testing</h3>
                <p>
                  Automated and ongoing penetration testing to continuously validate your
                  security controls.
                </p>
              </div>
            </div>
          </section>

          <section className="benefits-section">
            <h2>Benefits</h2>
            <div className="benefits-list">
              <div className="benefit-card">
                <h3>Proactive Defense</h3>
                <p>Identify and remediate vulnerabilities before they're exploited</p>
              </div>
              <div className="benefit-card">
                <h3>AI-Driven Insights</h3>
                <p>Leverage artificial intelligence for smarter risk prioritization</p>
              </div>
              <div className="benefit-card">
                <h3>Quantum Ready</h3>
                <p>Prepare your cryptography for future quantum computing threats</p>
              </div>
              <div className="benefit-card">
                <h3>Continuous Monitoring</h3>
                <p>24/7 surveillance of your threat landscape</p>
              </div>
            </div>
          </section>

          <section className="cta-section">
            <h2>Stay Ahead of Threats</h2>
            <p>Discover how our Threat Exposure Management can protect your organization.</p>
            <Link to="/#contact" className="cta-btn">Learn More</Link>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ThreatExposureManagement;
