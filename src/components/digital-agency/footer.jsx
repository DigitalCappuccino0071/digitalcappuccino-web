import React from 'react';
import Link from 'next/link';

const DigitalAgencyFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="dc-agency-footer">
      <div className="container">
        <div className="dc-agency-footer-content">
          <div className="dc-agency-footer-copyright">
            © {currentYear} Digital Cappuccino. All rights reserved.
          </div>
          <div className="dc-agency-footer-links">
            <Link href="/privacy-policy" className="dc-agency-footer-link">
              Privacy Policy
            </Link>
            <Link
              href="/terms-and-conditions"
              className="dc-agency-footer-link"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default DigitalAgencyFooter;
