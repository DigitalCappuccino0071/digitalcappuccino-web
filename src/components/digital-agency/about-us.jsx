import React from 'react';
import Image from 'next/image';

const DigitalAgencyAbout = () => {
  return (
    <section className="dc-agency-about">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="dc-agency-about-img">
              <Image
                src="/images/about.webp"
                alt="Digital Agency Team Meeting"
                width={600}
                height={400}
                className="dc-agency-about-main-img"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="dc-agency-about-content">
              <span className="dc-agency-about-subtitle">ABOUT US</span>
              <h2 className="dc-agency-about-title">
                Your Vision, Our Expertise
              </h2>
              <div className="dc-agency-about-text">
                <p>
                  Embrace the ever-changing digital scene with Digital
                  Cappuccino, your trusted digital marketing company. Our path
                  started with a goal to revamp online marketing plans by
                  combining data-driven insights with artistic expression.
                </p>
                <p>
                  Delivering powerful solutions across SEO, Performance
                  Marketing, Social Media, Video Production, Branding & Design,
                  Lead Generation, and Website Development today, we stand as a
                  reputable brand in the business.
                </p>
                <p>
                  Our team of seasoned professionals is driven by creativity and
                  develops customised plans that improve businesses, optimise
                  return on investment, and leave long-lasting digital traces.
                  Digital Cappuccino is here to transform your vision into
                  quantifiable success regardless of your brand—established or
                  startup seeking impact or both.
                </p>
                <p className="dc-agency-about-closing">
                  Together, let&apos;s help your brand envision its future.
                </p>
              </div>
              <div className="dc-agency-about-stats">
                <div className="dc-agency-stat-item">
                  <span className="dc-agency-stat-number">500+</span>
                  <span className="dc-agency-stat-label">
                    Projects Completed
                  </span>
                </div>
                <div className="dc-agency-stat-item">
                  <span className="dc-agency-stat-number">98%</span>
                  <span className="dc-agency-stat-label">
                    Client Satisfaction
                  </span>
                </div>
                <div className="dc-agency-stat-item">
                  <span className="dc-agency-stat-number">10+</span>
                  <span className="dc-agency-stat-label">Years Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalAgencyAbout;
