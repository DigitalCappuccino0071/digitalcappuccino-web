import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../public/images/logo.png';

const DigitalAgencyHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`dc-agency-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="dc-agency-header-content">
          <div className="logo-wrapper">
            {/* Desktop Logo */}
            <div className="desktop-logo">
              <Link href="/" className="dc-agency-header-logo relative">
                <div style={{ width: '190px', height: 'auto' }}>
                  <Image
                    src={logo}
                    alt="Digital Cappuccino"
                    priority
                    style={{
                      width: '145px',
                      height: '45px',
                      objectFit: 'cover',
                    }}
                  />
                </div>
              </Link>
            </div>

            {/* Mobile Logo */}
            <div className="mobile-logo">
              <Link href="/" className="dc-agency-header-logo relative">
                <div style={{ width: '190px', height: 'auto' }}>
                  <Image
                    src={logo}
                    alt="Digital Cappuccino"
                    priority
                    style={{
                      width: '140px',
                      height: '40px',
                      objectFit: 'cover',
                    }}
                  />
                </div>
              </Link>
            </div>
          </div>

          <div className="dc-agency-header-contact">
            <a
              href="tel:+919910190071"
              className="dc-agency-header-contact-item"
            >
              <div className="dc-agency-header-contact-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div className="dc-agency-header-contact-info">
                <span className="dc-agency-header-contact-label">Call Us</span>
                <span className="dc-agency-header-contact-value">
                  +91 9910190071
                </span>
              </div>
            </a>

            <a
              href="mailto:info@digitalcappuccino.com"
              className="dc-agency-header-contact-item"
            >
              <div className="dc-agency-header-contact-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div className="dc-agency-header-contact-info">
                <span className="dc-agency-header-contact-label">Email Us</span>
                <span className="dc-agency-header-contact-value">
                  info@digitalcappuccino.com
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DigitalAgencyHeader;
