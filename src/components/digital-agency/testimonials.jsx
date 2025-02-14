import React, { useRef } from 'react';

const testimonials = [
  {
    name: 'Rajesh S.',
    role: 'E-commerce Business Owner',
    content:
      'Digital Cappuccino has utterly revolutionised our digital footprint! Their strategies for search engine optimisation and social media engagement enabled us to connect with a larger audience and accelerate our growth beyond our expectations. Strongly endorsed!',
  },
  {
    name: 'Neha M.',
    role: 'Real Estate Consultant',
    content:
      "The team at Digital Cappuccino is amazing! Their performance marketing has significantly boosted our lead generation, and we've seen our website traffic double in just a few months.",
  },
  {
    name: 'Vikram R.',
    role: 'Entrepreneur',
    content:
      "Expert, innovative, and focused on outcomes! The branding and design services transformed our business's appearance, and the feedback has been incredible!",
  },
  {
    name: 'Priya K.',
    role: 'Wellness Coach',
    content:
      'We faced challenges with attracting leads in the past, but the team at Digital Cappuccino streamlined the process for us. Their focused efforts attracted the ideal audience, leading to a notable increase in our sales!',
  },
  {
    name: 'Ankit J.',
    role: 'Chief Executive Officer of a Tech Startup',
    content:
      'The video production team at Digital Cappuccino created captivating material that truly resonated with our audience. We are thrilled to see such an improvement in our brand visibility!',
  },
  {
    name: 'Sonia T.',
    role: 'Local Business Owner',
    content:
      'Collaborating with Digital Cappuccino has been an excellent journey! Their strategies for search engine optimisation significantly improved our Google ranking, resulting in a rush of customers daily.',
  },
  {
    name: 'Rahul P.',
    role: 'Hospitality Industry',
    content:
      'Incredible service and outstanding outcomes! The team is consistently accessible, and their analytical methodology truly impacts outcomes.',
  },
  {
    name: 'Pooja S.',
    role: 'Owner of a Fashion Brand',
    content:
      'The development team created a speedy, mobile-optimised platform that is visually stunning! There has been a noticeable rise in customer interaction and questions.',
  },
];

const DigitalAgencyTestimonials = () => {
  const scrollContainerRef = useRef(null);

  const handleScroll = direction => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // Get container width to determine scroll amount
    const containerWidth = container.offsetWidth;
    const cardWidth = container.querySelector(
      '.dc-agency-testimonial-card'
    ).offsetWidth;
    const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;

    // Calculate current scroll position
    const currentScroll = container.scrollLeft;
    const targetScroll = currentScroll + scrollAmount;

    // Scroll to the target position
    container.scrollTo({
      left: targetScroll,
      behavior: 'smooth',
    });
  };

  return (
    <section className="dc-agency-testimonials">
      <div className="container">
        <div className="dc-agency-testimonials-header">
          <span className="dc-agency-testimonials-subtitle">
            CLIENT TESTIMONIALS
          </span>
          <h2 className="dc-agency-testimonials-title">
            Discover what our clients say about their experience with Digital
            Cappuccino
          </h2>
        </div>

        <div className="dc-agency-testimonials-container">
          <button
            className="dc-agency-testimonials-nav-btn prev"
            onClick={() => handleScroll('left')}
            aria-label="Previous testimonials"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <div className="dc-agency-testimonials-grid" ref={scrollContainerRef}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="dc-agency-testimonial-card">
                <div className="dc-agency-testimonial-content">
                  <svg
                    className="dc-agency-testimonial-quote"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                  </svg>
                  <p className="dc-agency-testimonial-text">
                    {testimonial.content}
                  </p>
                </div>
                <div className="dc-agency-testimonial-author">
                  <div className="dc-agency-testimonial-info">
                    <h4 className="dc-agency-testimonial-name">
                      {testimonial.name}
                    </h4>
                    <p className="dc-agency-testimonial-role">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            className="dc-agency-testimonials-nav-btn next"
            onClick={() => handleScroll('right')}
            aria-label="Next testimonials"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default DigitalAgencyTestimonials;
