import React from 'react';
import HeroContactForm from './hero-contact-form';

const DigitalAgencyHero = () => {
  return (
    <section className="dc-agency-hero">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="dc-agency-hero-content">
              <span className="dc-agency-hero-welcome">
                WELCOME TO DIGITAL CAPPUCCINO
              </span>
              <h1 className="dc-agency-hero-title">
                Elevate Your Online Presence with Digital Cappuccino, Your
                Premier Digital Marketing Partner
              </h1>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="dc-agency-hero-form-wrapper">
              <div className="dc-agency-hero-form-content">
                <h3 className="dc-agency-hero-form-title mb-3">
                  Get Started Today
                </h3>
                {/* <p className="dc-agency-hero-form-subtitle">
                  Fill out the form below and we&apos;ll get back to you within
                  24 hours.
                </p> */}
                <HeroContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalAgencyHero;
