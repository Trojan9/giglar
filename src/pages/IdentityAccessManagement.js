import { Link } from 'react-router-dom';
import React from 'react';
import './SolutionPage.css';

const IdentityAccessManagement = () => {
  return (
    <div className="solution-page">
      <div className="solution-hero">
        <div className="container">
          <h1>Digital Identity & Access Management</h1>
          <p className="subtitle">Identity-Centric Security Framework</p>
        </div>
      </div>

      <div className="solution-content">
        <div className="container">
          <section className="overview-section">
            <h2>Overview</h2>
            <p>
              Our Digital Identity and Access Management solution provides a comprehensive identity-centric
              security framework. We assess your current IAM maturity and provide a roadmap for improvement
              across five key dimensions: people, process, technology, operations, and governance.
            </p>
          </section>

          <section className="features-section">
            <h2>Core Capabilities</h2>
            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon">
                  <span>01</span>
                </div>
                <h3>IAM Maturity Assessment</h3>
                <p>
                  Comprehensive evaluation of your current identity and access management capabilities
                  with actionable improvement recommendations.
                </p>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <span>02</span>
                </div>
                <h3>Passwordless Authentication</h3>
                <p>
                  Modern authentication methods including biometrics, hardware tokens, and
                  passwordless single sign-on capabilities.
                </p>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <span>03</span>
                </div>
                <h3>Role-Based Access Control</h3>
                <p>
                  Granular access management based on user roles, responsibilities, and
                  organizational hierarchies.
                </p>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <span>04</span>
                </div>
                <h3>Attribute-Based Access Management</h3>
                <p>
                  Dynamic access policies based on user attributes, environmental factors,
                  and contextual information.
                </p>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <span>05</span>
                </div>
                <h3>Gap Analysis & Roadmap</h3>
                <p>
                  Detailed analysis of current vs. desired state with a strategic roadmap
                  for IAM improvements.
                </p>
              </div>
            </div>
          </section>

          <section className="benefits-section">
            <h2>Benefits</h2>
            <div className="benefits-list">
              <div className="benefit-card">
                <h3>Enhanced Security</h3>
                <p>Reduce unauthorized access with robust identity controls</p>
              </div>
              <div className="benefit-card">
                <h3>Improved User Experience</h3>
                <p>Seamless authentication with passwordless and SSO capabilities</p>
              </div>
              <div className="benefit-card">
                <h3>Compliance Ready</h3>
                <p>Meet regulatory requirements for identity and access management</p>
              </div>
              <div className="benefit-card">
                <h3>Operational Efficiency</h3>
                <p>Streamline user provisioning and access management processes</p>
              </div>
            </div>
          </section>

          <section className="cta-section">
            <h2>Secure Your Identities</h2>
            <p>Transform your identity and access management with our expert solutions.</p>
            <Link to="/#contact" className="cta-btn">Get Started</Link>
          </section>
        </div>
      </div>
    </div>
  );
};

export default IdentityAccessManagement;
