import { Link } from 'react-router-dom';
import React from 'react';
import './SolutionPage.css';

const CyberRecovery = () => {
  return (
    <div className="solution-page">
      <div className="solution-hero">
        <div className="container">
          <h1>Cyber Recovery</h1>
          <p className="subtitle">Ransomware Recovery and Business Continuity</p>
        </div>
      </div>

      <div className="solution-content">
        <div className="container">
          <section className="overview-section">
            <h2>Overview</h2>
            <p>
              Our Cyber Recovery solution delivers industry-leading vault platforms and automation
              to ensure rapid recovery of core business services after a cyber attack. With immutable
              storage protection and automated orchestration, we help you bounce back quickly from
              ransomware and other cyber incidents.
            </p>
          </section>

          <section className="features-section">
            <h2>Key Features</h2>
            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon">
                  <span>01</span>
                </div>
                <h3>Immutable Backup Vaults</h3>
                <p>
                  Protected backup storage that cannot be encrypted or deleted by
                  ransomware, ensuring data integrity.
                </p>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <span>02</span>
                </div>
                <h3>Automated Restoration</h3>
                <p>
                  Streamlined automation for rapid application and data recovery,
                  minimizing downtime.
                </p>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <span>03</span>
                </div>
                <h3>Recovery Orchestration</h3>
                <p>
                  Coordinated recovery processes across multiple systems and
                  applications for efficient restoration.
                </p>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <span>04</span>
                </div>
                <h3>Incident Response Support</h3>
                <p>
                  Experienced incident response team to guide you through
                  the recovery process.
                </p>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <span>05</span>
                </div>
                <h3>Business Continuity Planning</h3>
                <p>
                  Comprehensive continuity strategies to ensure critical
                  operations continue during recovery.
                </p>
              </div>
            </div>
          </section>

          <section className="benefits-section">
            <h2>Benefits</h2>
            <div className="benefits-list">
              <div className="benefit-card">
                <h3>Rapid Recovery</h3>
                <p>Minimize downtime with fast, automated recovery processes</p>
              </div>
              <div className="benefit-card">
                <h3>Data Protection</h3>
                <p>Immutable backups that ransomware cannot compromise</p>
              </div>
              <div className="benefit-card">
                <h3>Business Resilience</h3>
                <p>Ensure business continuity even during cyber incidents</p>
              </div>
              <div className="benefit-card">
                <h3>Peace of Mind</h3>
                <p>Know you can recover from any cyber attack</p>
              </div>
            </div>
          </section>

          <section className="cta-section">
            <h2>Be Prepared for Any Cyber Incident</h2>
            <p>Ensure your organization can recover quickly from ransomware and cyber attacks.</p>
            <Link to="/#contact" className="cta-btn">Get Protected</Link>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CyberRecovery;
