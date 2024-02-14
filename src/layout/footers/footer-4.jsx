import Link from 'next/link';
import React from 'react';
import SocialLinks from '../social-links';
import CopyrightArea from './component/copyright-area';

const footer_contents = {
  shapes: ['hero-shape-5.1.png', 'testimonial-shape-5.4.png'],
  logo: '/assets/img/logo/new-logo-design-v1-old.png',
  widget_desc:
    'From Strategy to Execution, Digital Cappuccino Delivers Results- Your Digital Marketing Enthusiasts',
  footer_widgets: [
    {
      w_class: 'd-flex justify-content-lg-center',
      title: 'Useful Links',
      widget_lists: [
        {
          id: 1,
          text: 'Home',
          link: '/',
        },

        // {
        //   id: 4,
        //   text: "Case Studies",
        //   link: "/blog",
        // },
        {
          id: 4,
          text: 'Contact US',
          link: '/contact-us',
        },
        {
          id: 2,
          text: 'About Us',
          link: '/about-us',
        },
      ],
    },
    {
      padd: 'pl-20',
      title: 'Our Services',
      widget_lists: [
        {
          id: 1,
          text: 'Website Development',
          link: './web-development-company-gurgaon',
        },
        {
          id: 2,
          text: 'Digital Marketing',
          link: '/digital-marketing-company-gurgaon',
        },
        {
          id: 3,
          text: 'Social Media Marketing',
          link: '/social-media-marketing-services-gurgaon',
        },
        {
          id: 4,
          text: 'SEO Services',
          link: '/social-media-marketing-services-gurgaon',
        },
        {
          id: 4,
          text: 'Pay-Per Click',
          link: '/ppc-marketing-company-gurgaon',
        },
        {
          id: 5,
          text: 'Email Marketing',
          link: '/email-marketing-company-gurgaon',
        },
      ],
    },
  ],
  subscribe_title: 'Subscribe to our Newsletter',
  subscribe_text: (
    <>
      To keep up to date with what&apos;s advanced and make informed choices
      about the services we offer, subscribe to our newsletter.
    </>
  ),
  copy_right_text: (
    <>
      © Copyright ©{new Date().getFullYear()} Digital Cappuccino. All Rights
      Reserved Copyright
    </>
  ),
  conditions: [
    { id: 1, text: 'Terms and conditions' },
    { id: 2, text: 'Privacy policy' },
  ],
};
const {
  conditions,
  copy_right_text,
  footer_widgets,
  logo,
  widget_desc,
  subscribe_text,
  subscribe_title,
  shapes,
} = footer_contents;

const FooterFour = () => {
  return (
    <footer>
      <div className="tp-footer-area pt-60 pb-15 p-relative">
        {shapes.map((s, i) => (
          <div
            key={i}
            className={`bp-foooter-shape-${i + 1} d-none d-lg-block`}
          >
            <img src={`/assets/img/footer/${s}`} alt="" />
          </div>
        ))}
        <div className="container">
          <div
            className="row wow tpfadeUp"
            data-wow-duration=".3s"
            data-wow-delay=".5s"
          >
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="tp-footer-widget">
                <div className="tp-footer-widget__logo mb-30">
                  <Link href="/">
                    <a>
                      <img src={logo} alt="" />
                    </a>
                  </Link>
                </div>
                <div className="tp-footer-widget__text mb-45">
                  <p>{widget_desc}</p>
                </div>
                <div className="tp-footer-widget__social-link tp-footer-widget__social-link-2 text-nowrap">
                  <SocialLinks />
                </div>
              </div>
            </div>
            {footer_widgets.map((w, i) => {
              const { title, widget_lists, w_class, padd } = w;
              return (
                <div
                  key={i}
                  className={`col-xl-3 col-lg-2 col-md-6 ${
                    w_class ? w_class : ''
                  }`}
                >
                  <div className={`tp-footer-widget ${padd ? padd : ''}`}>
                    <div className="tp-footer-widget__title pb-15">
                      <h3 className="footer-title text-black">{title}</h3>
                    </div>
                    <div className="tp-footer-widget__list">
                      <ul>
                        {widget_lists.map((l, i) => (
                          <li key={i}>
                            <a href={l.link}>{l.text}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="tp-footer-widget">
                <div className="tp-footer-widget__title pb-15">
                  <h3 className="footer-title text-black">{subscribe_title}</h3>
                </div>
                <div className="tp-footer-widget__text mb-55">
                  <p>{subscribe_text}</p>
                </div>
                <div className="tp-footer-widget__input tp-input-white">
                  <form onSubmit={e => e.preventDefault()}>
                    <input type="text" placeholder="Enter Mail" />
                    <button type="submit">
                      <i className="fas fa-paper-plane"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* CopyrightArea start */}
        <CopyrightArea
          copy_right_text={copy_right_text}
          conditions={conditions}
          color={'tp-copyright-color'}
        />
        {/* CopyrightArea end */}
      </div>
    </footer>
  );
};

export default FooterFour;
