import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import SecurityManagedServices from './pages/SecurityManagedServices';
import SecurityTransformation from './pages/SecurityTransformation';
import ThreatExposureManagement from './pages/ThreatExposureManagement';
import IdentityAccessManagement from './pages/IdentityAccessManagement';
import SecureNetworkAccess from './pages/SecureNetworkAccess';
import ManagedDetectionResponse from './pages/ManagedDetectionResponse';
import CyberRecovery from './pages/CyberRecovery';
import CloudSecurity from './pages/CloudSecurity';

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solutions/security-managed-services" element={<SecurityManagedServices />} />
        <Route path="/solutions/security-transformation" element={<SecurityTransformation />} />
        <Route path="/solutions/threat-exposure-management" element={<ThreatExposureManagement />} />
        <Route path="/solutions/identity-access-management" element={<IdentityAccessManagement />} />
        <Route path="/solutions/secure-network-access" element={<SecureNetworkAccess />} />
        <Route path="/solutions/managed-detection-response" element={<ManagedDetectionResponse />} />
        <Route path="/solutions/cyber-recovery" element={<CyberRecovery />} />
        <Route path="/solutions/cloud-security" element={<CloudSecurity />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
