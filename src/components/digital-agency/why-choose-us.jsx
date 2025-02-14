import React from 'react';
import Image from 'next/image';
import {
  Compass,
  BarChart,
  Settings,
  LineChart,
  Target,
  MessageCircle,
  Award,
} from './icons';

const features = [
  {
    title: 'Tested Strategic Approach and Expertise',
    description:
      'Having years of expertise and a staff of digital marketing experts, we combine creative brilliance with data-driven methods. From performance marketing and lead generation to SEO and social media marketing, we create solutions fit for your particular corporate objectives.',
    icon: Compass,
  },
  {
    title: 'ROI-Focused Digital Solutions',
    description:
      'We value real outcomes over just vanity measurements. Our campaigns are meant to maximise conversions, interaction, and income generation, thereby making sure every dollar you spend on marketing has actual worth.',
    icon: BarChart,
  },
  {
    title: '360° Digital Marketing Services',
    description:
      'Digital Cappuccino serves as a comprehensive solution for all digital needs.',
    icon: Settings,
    list: [
      'Performance marketing to generate high-quality leads',
      'Branding and design to create a strong identity',
      'SEO to rank better on search engines',
      'Social media marketing to involve your audience',
      'Video creation to provide an engaging visual narrative',
      'Website building for a magnificent and user-friendly platform',
    ],
  },
  {
    title: 'Data-Driven Strategies with Creative Execution',
    description:
      'Digital Cappuccino combines data with creativity. Using creative storytelling, AI-powered technologies, and extensive market data, our professionals create plans that draw in, convert, and keep clients.',
    icon: LineChart,
  },
  {
    title: 'Custom-Tailored Solutions for Each Business',
    description:
      'Neither our tactics nor any two businesses are the same. We customise our strategy to fit your goals regardless of your brand—established, looking for growth or a startup seeking awareness.',
    icon: Target,
  },
  {
    title: 'Open Communication and Committed Assistance',
    description:
      'We appreciate openness and teamwork. Regular performance reports, real-time analytics, and a committed account manager help you to constantly be informed and in charge of your digital development.',
    icon: MessageCircle,
  },
  {
    title: 'Trusted by Brands, Powered by Success',
    description:
      'Our experience is self-evident; we have helped numerous companies expand their online presence, enhance engagement, and achieve unparalleled success.',
    icon: Award,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="dc-agency-why-choose">
      <div className="container">
        <div className="dc-agency-why-choose-header text-center">
          <span className="dc-agency-why-choose-subtitle">WHY CHOOSE US</span>
          <h2 className="dc-agency-why-choose-title">
            At Digital Cappuccino, we create success stories—not just promote
            your company
          </h2>
          <p className="dc-agency-why-choose-description">
            Being a top digital marketing firm, we guarantee that your brand not
            only survives but rules the digital terrain using a
            results-orientated strategy.
          </p>
        </div>

        <div className="dc-agency-why-choose-main">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="dc-agency-why-choose-image">
                <Image
                  src="/images/why-choose-us.webp"
                  alt="Why Choose Digital Cappuccino"
                  width={600}
                  height={400}
                  className="dc-agency-why-choose-img"
                />
                <div className="dc-agency-why-choose-image-shape"></div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="dc-agency-why-choose-content">
                <div className="dc-agency-why-choose-feature featured">
                  <div className="dc-agency-why-choose-feature-icon">
                    <Award />
                  </div>
                  <div className="dc-agency-why-choose-feature-content">
                    <h3 className="dc-agency-why-choose-feature-title">
                      Why Digital Cappuccino Stands Out
                    </h3>
                    <p className="dc-agency-why-choose-feature-description">
                      We combine strategic thinking with creative excellence to
                      deliver results that matter. Our proven track record and
                      innovative approach make us the partner of choice for
                      businesses seeking digital success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="dc-agency-why-choose-grid">
          {features.map((feature, index) => (
            <div key={index} className="dc-agency-why-choose-feature">
              <div className="dc-agency-why-choose-feature-icon">
                <feature.icon />
              </div>
              <div className="dc-agency-why-choose-feature-content">
                <h3 className="dc-agency-why-choose-feature-title">
                  {feature.title}
                </h3>
                <p className="dc-agency-why-choose-feature-description">
                  {feature.description}
                </p>
                {feature.list && (
                  <ul className="dc-agency-why-choose-feature-list">
                    {feature.list.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
