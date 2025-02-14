import React from 'react';
import { Search, BarChart3, Share2, Play, Palette, Globe } from './icons';

const services = [
  {
    icon: Search,
    title: 'SEO',
    description:
      'Using our professional SEO techniques can help you to dominate search engine results and improve your online presence. Using keyword research, high-quality content, on-page and off-page SEO strategies, and keyword searches, we maximise your website to boost search results and natural traffic.',
    features: [
      'Technical SEO & website audits',
      'Advanced keyword optimisation',
      'High-quality link-building techniques',
      'Local and worldwide searches',
    ],
    cta: "Increase your website's lead-generation abilities with our assistance!",
  },
  {
    icon: BarChart3,
    title: 'Performance Marketing & Lead Generation',
    description:
      'With our data-driven performance marketing techniques, maximise your return on investment and generate top-notch leads. At Digital Cappuccino, we help your company expand quickly by combining focused advertising, conversion optimisation, and smart lead generation. Our performance-orientated strategy guarantees quantifiable achievement whether your goals are to raise website traffic, enhance conversions, or produce qualified prospects.',
    features: [
      'PPC Campaigns: Google Ads, Bing Ads, and Display Advertising',
      'Social Media Advertising: Facebook, Instagram, LinkedIn & YouTube Ads',
      'Retargeting Strategies Convert website visitors into paying consumers',
      'Landing Page Optimisation High-converting designs for better lead capture',
      'B2B & B2C Lead Generation Attract and nurture the right prospects',
      'Email Marketing & Automation: Invite leads to boost conversions',
    ],
    cta: 'With Digital Cappuccino, increase leads, lower acquisition expenses, and grow your company!',
  },
  {
    icon: Share2,
    title: 'Social Media Marketing (SMM)',
    description:
      'Using our social media marketing plans, engage, expand, and convert. We create original, interesting material for your readers that increases brand recognition and consumer involvement on all social media channels and therefore strengthens your audience.',
    features: [
      'Content production—graphics, videos, reels, & tales',
      'Social media strategy & administration (Instagram, Facebook, LinkedIn, Twitter)',
      'Paid ad campaigns for brand awareness & lead generation',
    ],
    cta: 'Let us get your brand buzzing on social media!',
  },
  {
    icon: Play,
    title: 'Video Production',
    description:
      'Tell the tale of your brand with excellent, captivating video content that converts. From social media reels to business movies, we provide visually spectacular material fit for your marketing objectives.',
    features: [
      'Promotional & corporate videos',
      'Brand narrative & animated films',
      'Social media reels & ad creatives',
      'Product demos & testimonials',
    ],
    cta: 'Get high-impact videos that vividly depict your brand!',
  },
  {
    icon: Palette,
    title: 'Branding and Design',
    description:
      'The identity of your business counts; hence, we can assist you in standing out with attractive design and branding ideas. We design visually striking logos, brand kits, and visual identities that will stay.',
    features: [
      'Logo design & brand identity development',
      'Marketing & sales collaterals (brochures, flyers, presentations)',
      'UI/UX design for websites & applications',
      'Packaging & digital branding solutions',
    ],
    cta: "Let's craft a brand that conveys a powerful message.",
  },
  {
    icon: Globe,
    title: 'Website Development',
    description:
      "Your online visibility rests on a well-designed website. Our knowledgeable staff generates responsive, search engine-optimised, high-performance websites catered to your company's demands.",
    features: [
      'Custom website creation (corporate, e-commerce, & portfolio sites)',
      'Mobile-friendly & SEO-optimized websites',
      'Fast-loading & user-friendly interfaces',
      'Secure & scalable web solutions',
    ],
    cta: "Let's create a website that boosts revenue and leads to more conversions!",
  },
];

const DigitalAgencyServices = () => {
  return (
    <section className="dc-agency-services">
      <div className="container">
        <div className="dc-agency-services-header">
          <h2 className="dc-agency-services-title">Our Services</h2>
          <p className="dc-agency-services-subtitle">
            At Digital Cappuccino, we provide a complete suite of digital
            marketing services meant to enable your business&apos;s success,
            interaction, and conversion. We craft strategies that provide actual
            outcomes from performance marketing and SEO to website development
            and branding.
          </p>
        </div>

        <div className="dc-agency-services-grid">
          {services.map((service, index) => (
            <div key={index} className="dc-agency-service-card">
              <div className="dc-agency-service-icon">
                <service.icon />
                <span className="dc-agency-service-number">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="dc-agency-service-title">{service.title}</h3>
              <p className="dc-agency-service-description">
                {service.description}
              </p>
              <ul className="dc-agency-service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="dc-agency-service-feature">
                    {feature}
                  </li>
                ))}
              </ul>
              <p className="dc-agency-service-cta">{service.cta}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DigitalAgencyServices;
