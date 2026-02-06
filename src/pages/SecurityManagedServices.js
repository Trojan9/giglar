import React from 'react';
import { Link } from 'react-router-dom';
import './SolutionPage.css';

const SecurityManagedServices = () => {
  return (
    <div className="solution-page">
      <div className="solution-hero">
        <div className="container">
          <h1>Security Managed Services</h1>
          <p className="subtitle">24/7 Protection, Detection and Response</p>
        </div>
      </div>

      <div className="solution-content">
        <div className="container">
          <section className="overview-section">
            <h2>Overview</h2>
            <p>
              Our Security Managed Services provide comprehensive cybersecurity that leverages AI and automation to deliver
              24/7 protection, detection, and response alongside compliance management. We combine proprietary security
              accelerators with industry-leading tools to protect your digital assets.
            </p>
          </section>

          <section className="features-section">
            <h2>Core Service Components</h2>
            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon">
                  <span>01</span>
                </div>
                <h3>Security Transformation</h3>
                <p>
                  Expert oversight of governance, maintenance, and protection of digital assets across your
                  organization's technology infrastructure.
                </p>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <span>02</span>
                </div>
                <h3>Continuous Threat Exposure Management</h3>
                <p>
                  Modern attack surface management, vulnerability assessment, and threat intelligence capabilities
                  to identify and mitigate emerging risks.
                </p>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <span>03</span>
                </div>
                <h3>Managed Detection and Response (MDR)</h3>
                <p>
                  Real-time threat identification combined with rapid incident response capabilities operating
                  around the clock.
                </p>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <span>04</span>
                </div>
                <h3>Cyber Recovery</h3>
                <p>
                  Backup vault systems and automation frameworks designed to restore applications quickly
                  following security incidents.
                </p>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <span>05</span>
                </div>
                <h3>Digital Identity and Access Management</h3>
                <p>
                  Role-based access controls that secure user identities and enable safe collaboration
                  across the organization.
                </p>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <span>06</span>
                </div>
                <h3>Secure Network Access</h3>
                <p>
                  Services encompassing firewall administration, Zero-Trust architecture implementation,
                  and network micro-segmentation.
                </p>
              </div>
            </div>
          </section>

          <section className="benefits-section">
            <h2>Key Benefits</h2>
            <div className="benefits-list">
              <div className="benefit-card">
                <h3>Risk Reduction</h3>
                <p>Continuous monitoring and swift response decrease breach likelihood</p>
              </div>
              <div className="benefit-card">
                <h3>Compliance Efficiency</h3>
                <p>Automated compliance frameworks streamline audit processes</p>
              </div>
              <div className="benefit-card">
                <h3>Operational Cost Control</h3>
                <p>Integrated automation reduces manual workload</p>
              </div>
              <div className="benefit-card">
                <h3>Business Flexibility</h3>
                <p>Vendor-neutral architecture accommodates evolving threat landscapes</p>
              </div>
              <div className="benefit-card">
                <h3>Scalable Customization</h3>
                <p>Solutions tailored by industry and organizational scale</p>
              </div>
            </div>
          </section>

          <section className="cta-section">
            <h2>Ready to Enhance Your Security?</h2>
            <p>Contact us today to learn how our Security Managed Services can protect your organization.</p>
            <Link to="/#contact" className="cta-btn">Get Started</Link>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SecurityManagedServices;
