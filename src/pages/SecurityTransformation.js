import { Link } from 'react-router-dom';
import React from 'react';
import './SolutionPage.css';

const SecurityTransformation = () => {
  return (
    <div className="solution-page">
      <div className="solution-hero">
        <div className="container">
          <h1>Security Transformation</h1>
          <p className="subtitle">Strengthen Your Security Posture and Compliance</p>
        </div>
      </div>

      <div className="solution-content">
        <div className="container">
          <section className="overview-section">
            <h2>Overview</h2>
            <p>
              Our Security Transformation services act as an extension of your information security office,
              helping you govern, maintain, and protect critical assets while fostering a security-aware culture
              throughout your organization.
            </p>
          </section>

          <section className="features-section">
            <h2>Key Capabilities</h2>
            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon">
                  <span>01</span>
                </div>
                <h3>Global Cybersecurity Expert Audits</h3>
                <p>
                  Comprehensive security assessments conducted by global experts to identify vulnerabilities
                  and strengthen your defenses.
                </p>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <span>02</span>
                </div>
                <h3>Governance, Risk Management & Compliance</h3>
                <p>
                  Expert guidance on governance frameworks, risk mitigation strategies, and regulatory
                  compliance requirements.
                </p>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <span>03</span>
                </div>
                <h3>Cybersecurity Service Management</h3>
                <p>
                  End-to-end management of cybersecurity services ensuring continuous protection and
                  improvement of your security infrastructure.
                </p>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <span>04</span>
                </div>
                <h3>Flexible Deployment Options</h3>
                <p>
                  Customizable deployment models that adapt to your organization's unique needs and
                  infrastructure requirements.
                </p>
              </div>
            </div>
          </section>

          <section className="benefits-section">
            <h2>Benefits</h2>
            <div className="benefits-list">
              <div className="benefit-card">
                <h3>Enhanced Security Posture</h3>
                <p>Comprehensive protection of critical assets across your entire infrastructure</p>
              </div>
              <div className="benefit-card">
                <h3>Regulatory Compliance</h3>
                <p>Stay compliant with industry standards and regulations</p>
              </div>
              <div className="benefit-card">
                <h3>Security-Aware Culture</h3>
                <p>Build a culture of security awareness throughout your organization</p>
              </div>
              <div className="benefit-card">
                <h3>Expert Guidance</h3>
                <p>Access to global cybersecurity experts and best practices</p>
              </div>
            </div>
          </section>

          <section className="cta-section">
            <h2>Transform Your Security Today</h2>
            <p>Let our experts help you build a robust security framework for your organization.</p>
            <Link to="/#contact" className="cta-btn">Contact Us</Link>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SecurityTransformation;
