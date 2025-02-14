import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const ThankYou = () => {
  const router = useRouter();

  useEffect(() => {
    // Automatically redirect back to home after 5 seconds
    const timer = setTimeout(() => {
      router.push('/top-digital-marketing-agency-india');
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="dc-thank-you">
      <div className="dc-thank-you-content">
        <div className="dc-thank-you-icon">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
        </div>
        <h1 className="dc-thank-you-title">Thank You!</h1>
        <p className="dc-thank-you-message">
          Your message has been successfully sent. We&apos;ll get back to you
          within 24 hours.
        </p>
        <div className="dc-thank-you-timer">
          Redirecting to home page in 5 seconds...
        </div>
        <Link
          href="/top-digital-marketing-agency-india"
          className="dc-thank-you-button"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;
