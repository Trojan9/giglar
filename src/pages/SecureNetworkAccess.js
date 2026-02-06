import { Link } from 'react-router-dom';
import React from 'react';
import './SolutionPage.css';

const SecureNetworkAccess = () => {
  return (
    <div className="solution-page">
      <div className="solution-hero">
        <div className="container">
          <h1>Secure Network Access</h1>
          <p className="subtitle">Zero Trust Network Protection</p>
        </div>
      </div>

      <div className="solution-content">
        <div className="container">
          <section className="overview-section">
            <h2>Overview</h2>
            <p>
              Our Secure Network Access solution implements end-to-end network segmentation for defense,
              providing comprehensive Zero Trust network protection tailored to your business needs.
            </p>
          </section>

          <section className="features-section">
            <h2>Key Features</h2>
            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon">
                  <span>01</span>
                </div>
                <h3>End-to-End Network Segmentation</h3>
                <p>
                  Comprehensive network segmentation strategies to isolate and protect
                  critical assets and workloads.
                </p>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <span>02</span>
                </div>
                <h3>Microsegmentation</h3>
                <p>
                  Granular security controls at the workload level, providing close-range
                  protection for critical applications.
                </p>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <span>03</span>
                </div>
                <h3>SASE Managed Services</h3>
                <p>
                  Secure Access Service Edge managed services combining network and
                  security functions in the cloud.
                </p>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <span>04</span>
                </div>
                <h3>Managed SD-WAN</h3>
                <p>
                  Software-defined wide area network solutions tailored to your
                  business requirements and security policies.
                </p>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <span>05</span>
                </div>
                <h3>Zero Trust Architecture</h3>
                <p>
                  Implementation of Zero Trust principles to verify every access request
                  regardless of location.
                </p>
              </div>
            </div>
          </section>

          <section className="benefits-section">
            <h2>Benefits</h2>
            <div className="benefits-list">
              <div className="benefit-card">
                <h3>Reduced Attack Surface</h3>
                <p>Minimize lateral movement with network segmentation</p>
              </div>
              <div className="benefit-card">
                <h3>Zero Trust Security</h3>
                <p>Never trust, always verify every network access attempt</p>
              </div>
              <div className="benefit-card">
                <h3>Cloud-Native Protection</h3>
                <p>SASE services for modern cloud-first environments</p>
              </div>
              <div className="benefit-card">
                <h3>Business Continuity</h3>
                <p>Ensure reliable and secure network connectivity</p>
              </div>
            </div>
          </section>

          <section className="cta-section">
            <h2>Implement Zero Trust Today</h2>
            <p>Protect your network with our comprehensive secure access solutions.</p>
            <Link to="/#contact" className="cta-btn">Contact Us</Link>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SecureNetworkAccess;
