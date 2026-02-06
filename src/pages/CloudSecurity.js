import { Link } from 'react-router-dom';
import React from 'react';
import './SolutionPage.css';

const CloudSecurity = () => {
  return (
    <div className="solution-page">
      <div className="solution-hero">
        <div className="container">
          <h1>Cloud Security</h1>
          <p className="subtitle">Comprehensive Multi-Cloud Protection</p>
        </div>
      </div>

      <div className="solution-content">
        <div className="container">
          <section className="overview-section">
            <h2>Overview</h2>
            <p>
              Our Cloud Security solutions protect your cloud infrastructure, applications, and data
              across multi-cloud environments. Whether you're on AWS, Azure, Google Cloud, or hybrid
              environments, we provide comprehensive security tailored to your cloud architecture.
            </p>
          </section>

          <section className="features-section">
            <h2>Key Capabilities</h2>
            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon">
                  <span>01</span>
                </div>
                <h3>Multi-Cloud Protection</h3>
                <p>
                  Unified security across AWS, Azure, Google Cloud, and other cloud
                  platforms with consistent policies.
                </p>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <span>02</span>
                </div>
                <h3>Cloud Workload Protection</h3>
                <p>
                  Comprehensive protection for cloud workloads including containers,
                  serverless, and virtual machines.
                </p>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <span>03</span>
                </div>
                <h3>Cloud Security Posture Management</h3>
                <p>
                  Continuous monitoring and assessment of cloud configurations to
                  identify misconfigurations and security risks.
                </p>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <span>04</span>
                </div>
                <h3>Data Protection</h3>
                <p>
                  Encryption, data loss prevention, and secure data storage
                  across all cloud environments.
                </p>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <span>05</span>
                </div>
                <h3>Cloud Access Security</h3>
                <p>
                  Control and monitor access to cloud resources with advanced
                  identity and access management.
                </p>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <span>06</span>
                </div>
                <h3>Compliance Automation</h3>
                <p>
                  Automated compliance monitoring for standards like GDPR, HIPAA,
                  PCI-DSS, and SOC 2.
                </p>
              </div>
            </div>
          </section>

          <section className="benefits-section">
            <h2>Benefits</h2>
            <div className="benefits-list">
              <div className="benefit-card">
                <h3>Cloud-Native Security</h3>
                <p>Purpose-built security for modern cloud architectures</p>
              </div>
              <div className="benefit-card">
                <h3>Unified Protection</h3>
                <p>Single pane of glass for multi-cloud security management</p>
              </div>
              <div className="benefit-card">
                <h3>Automated Compliance</h3>
                <p>Streamline cloud compliance with automated assessments</p>
              </div>
              <div className="benefit-card">
                <h3>Scalable Security</h3>
                <p>Security that scales with your cloud adoption</p>
              </div>
            </div>
          </section>

          <section className="cta-section">
            <h2>Secure Your Cloud Today</h2>
            <p>Protect your cloud infrastructure with our comprehensive security solutions.</p>
            <Link to="/#contact" className="cta-btn">Get Started</Link>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CloudSecurity;
