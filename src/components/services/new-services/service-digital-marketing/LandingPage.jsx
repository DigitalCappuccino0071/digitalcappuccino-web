import React, { useEffect } from 'react';
import { FooterFour, FooterThree, Header, Wrapper } from '../../../../layout';
import { animationCreate } from '../../../../utils/utils';
import Breadcrumb from '../../../common/breadcrumb/breadcrumb';
import CtaTwo from '../../../common/cta/cta-2';
import ServicesWeb from './services-web';
import CardWeb from './Card-web';
import AccordionArea from './accordion';
import TestimonialArea from './testimonial-area';
import ClientFeedback from '../../../homes/home-5/client-feedback';
import Head from 'next/head';
import LandingPageHeader from '../../../../layout/headers/landing-page-header';
import FeatureArea from '../../../homes/home-5/feature-area';
import BrandArea from '../../../homes/home-5/brand-area';
import ProjectArea from '../../../homes/home-5/project-area';
import ServicesArea from '../../../homes/home-5/services-area';
import TeamArea from '../../../homes/home-5/team-area';
import Link from 'next/link';

const LandingPage = () => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <Head>
        <title>Best Digital Marketing | Company in Gurgaon</title>
        <meta
          name="description"
          content="One of the best digital marketing companies in Gurgaon. That offers a wide range of services, including SEO, web development, and PPC marketing."
        />
        <link
          rel="canonical"
          href="https://www.digitalcappuccino.com/digital-marketing-company-gurgaon"
        />
        <meta
          property="og:title"
          content="Best Digital Marketing | Company in Gurgaon"
        />
        <meta
          property="og:description"
          content="One of the best digital marketing companies in Gurgaon. That offers a wide range of services, including SEO, web development, and PPC marketing."
        />
        <meta
          property="og:url"
          content="https://www.digitalcappuccino.com/digital-marketing-company-gurgaon"
        />
        <meta
          property="og:image"
          content="https://www.digitalcappuccino.com/assets/img/service/2.png"
        />
        <script type="application/ld+json">
          {`
  {
    "@context": "http://schema.org",
    "@type": "WebPage",
    "@id": "https://www.digitalcappuccino.com/digital-marketing-company-gurgaon#webpage",
    "url": "https://www.digitalcappuccino.com/digital-marketing-company-gurgaon",
    "inLanguage": "English",
    "name": "Digital Marketing",
    "description": "One of the best digital marketing companies in Gurgaon. That offers a wide range of services, including SEO, web development, and PPC marketing.",
    "isPartOf": {
      "@id": "#website"
    },
    "about": [
      {
        "@type": "Thing",
        "name": "Digital Cappuccino",
        "sameAs": "https://www.digitalcappuccino.com/"
      }
    ],
    "mentions": [
      {
        "@type": "Thing",
        "name": "Digital Cappuccino",
        "sameAs": "https://www.digitalcappuccino.com/"
      }
    ]
  }
  `}
        </script>
      </Head>
      <LandingPageHeader />
      <Breadcrumb
        color={'#fec4c559'}
        imagePath={'/assets/img/service/2.png'}
        title={'Digital Cappuccino: Digital Marketing Company in Gurgaon '}
        alt="Digital Marketing Company in Gurgaon"
      />
      <CardWeb />

      <ServicesArea />
      <FeatureArea />
      <BrandArea />
      {/*<OurAffiliates/>*/}
      <ProjectArea />
      {/*<TestimonialArea style_2={true}/>*/}
      <TeamArea />
      <ClientFeedback />
      <AccordionArea />
      <CtaTwo />
      {/* <FooterFour /> */}
      <footer className="d-flex d-lg-none justify-content-center align-items-center gap-5 py-3 px-4">
        <Link
          href="https://wa.me/9818696071"
          className="cursor-pointer"
          target="_blank"
        >
          <i
            className="fab fa-whatsapp fa-2x"
            style={{ color: '#25D366!important' }}
          ></i>
        </Link>
        <Link href="tel:9818696071">
          <i className="fas fa-phone fa-2x" style={{ color: '#25D366' }}></i>
        </Link>
      </footer>
    </Wrapper>
  );
};

export default LandingPage;
