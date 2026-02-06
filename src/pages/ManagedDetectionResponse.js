import { Link } from 'react-router-dom';
import React from 'react';
import './SolutionPage.css';

const ManagedDetectionResponse = () => {
  return (
    <div className="solution-page">
      <div className="solution-hero">
        <div className="container">
          <h1>Managed Detection & Response</h1>
          <p className="subtitle">Real-Time Threat Mitigation and Incident Management</p>
        </div>
      </div>

      <div className="solution-content">
        <div className="container">
          <section className="overview-section">
            <h2>Overview</h2>
            <p>
              Our Managed Detection and Response (MDR) service provides round-the-clock monitoring and threat
              response. With 24/7/365 coverage, we ensure your organization is protected against evolving
              cyber threats with real-time detection and rapid incident response.
            </p>
          </section>

          <section className="features-section">
            <h2>Core Services</h2>
            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon">
                  <span>01</span>
                </div>
                <h3>24/7/365 Monitoring</h3>
                <p>
                  Round-the-clock security monitoring by expert analysts who never sleep,
                  ensuring continuous protection.
                </p>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <span>02</span>
                </div>
                <h3>Security Event Analysis</h3>
                <p>
                  Advanced log collection, correlation, and analysis to identify
                  potential security incidents.
                </p>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <span>03</span>
                </div>
                <h3>Incident Management</h3>
                <p>
                  Comprehensive incident response services from initial detection
                  through complete resolution.
                </p>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <span>04</span>
                </div>
                <h3>Post-Incident Analysis</h3>
                <p>
                  Detailed forensic analysis and lessons learned to prevent
                  future incidents.
                </p>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <span>05</span>
                </div>
                <h3>Platform Management</h3>
                <p>
                  Complete management of security platforms and tools for
                  optimal performance.
                </p>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <span>06</span>
                </div>
                <h3>Scalable Response</h3>
                <p>
                  Flexible incident response services that scale with your
                  organization's needs.
                </p>
              </div>
            </div>
          </section>

          <section className="benefits-section">
            <h2>Benefits</h2>
            <div className="benefits-list">
              <div className="benefit-card">
                <h3>Rapid Response</h3>
                <p>Minimize damage with immediate threat detection and response</p>
              </div>
              <div className="benefit-card">
                <h3>Expert Analysis</h3>
                <p>Leverage security experts without building an in-house team</p>
              </div>
              <div className="benefit-card">
                <h3>Continuous Protection</h3>
                <p>24/7/365 monitoring ensures no gaps in security coverage</p>
              </div>
              <div className="benefit-card">
                <h3>Cost Effective</h3>
                <p>Enterprise-level security at a fraction of the cost</p>
              </div>
            </div>
          </section>

          <section className="cta-section">
            <h2>Protect Your Organization 24/7</h2>
            <p>Get expert threat detection and response services around the clock.</p>
            <Link to="/#contact" className="cta-btn">Learn More</Link>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ManagedDetectionResponse;
