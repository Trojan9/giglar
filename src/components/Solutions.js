import React from 'react';
import { Link } from 'react-router-dom';
import './Solutions.css';

const Solutions = () => {
  const solutions = [
    {
      title: 'Security Managed Services',
      description: 'Round-the-clock monitoring combining detection, response, and compliance capabilities across IT environments using AI-driven automation.',
      link: '/solutions/security-managed-services',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      )
    },
    {
      title: 'Security Transformation',
      description: 'Governance and protection of critical infrastructure through audits, assessments, compliance expertise, and continuous security innovation.',
      link: '/solutions/security-transformation',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <path d="M8 12h8"/>
          <path d="M12 8v8"/>
        </svg>
      )
    },
    {
      title: 'Continuous Threat Exposure Management',
      description: 'Modern attack surface discovery, vulnerability management, and threat intelligence powered by AI and machine learning.',
      link: '/solutions/threat-exposure-management',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
          <line x1="12" y1="9" x2="12" y2="13"/>
          <line x1="12" y1="17" x2="12.01" y2="17"/>
        </svg>
      )
    },
    {
      title: 'Digital Identity & Access Management',
      description: 'Identity-centric security featuring passwordless authentication, single sign-on, and role-based access control.',
      link: '/solutions/identity-access-management',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
        </svg>
      )
    },
    {
      title: 'Secure Network Access',
      description: 'Zero Trust implementation through end-to-end network segmentation with microsegmentation and SASE-managed services.',
      link: '/solutions/secure-network-access',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
        </svg>
      )
    },
    {
      title: 'Managed Detection & Response',
      description: 'Real-time threat detection and incident response with 24/7/365 monitoring, event analysis, and post-incident analysis.',
      link: '/solutions/managed-detection-response',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8"/>
          <path d="m21 21-4.35-4.35"/>
        </svg>
      )
    },
    {
      title: 'Cyber Recovery',
      description: 'Ransomware recovery solutions featuring immutable backup vaults, automated restoration orchestration, and incident response services.',
      link: '/solutions/cyber-recovery',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="23 4 23 10 17 10"/>
          <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/>
        </svg>
      )
    },
    {
      title: 'Cloud Security',
      description: 'Comprehensive cloud security solutions to protect your cloud infrastructure, applications, and data across multi-cloud environments.',
      link: '/solutions/cloud-security',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
        </svg>
      )
    }
  ];

  return (
    <section id="solutions" className="solutions">
      <div className="container">
        <h2 className="section-title">Our Cybersecurity Solutions</h2>
        <p className="section-subtitle">
          Comprehensive protection for your organization's digital infrastructure
        </p>

        <div className="solutions-grid">
          {solutions.map((solution, index) => (
            <Link key={index} to={solution.link} className="solution-card-link">
              <div className="solution-card">
                <div className="solution-icon">{solution.icon}</div>
                <h3>{solution.title}</h3>
                <p>{solution.description}</p>
                <div className="learn-more">
                  Learn More →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
