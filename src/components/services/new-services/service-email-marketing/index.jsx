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
import Script from 'next/script';

const ServiceEmailMarketing = () => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <Head>
        <title>Best Email Marketing | Company in Gurgaon</title>
        <meta
          name="description"
          content="Are you looking for the best email marketing company in Gurgaon? Digital Cappuccino is here to provide you with all the solutions."
        />
        <link
          rel="canonical"
          href="https://www.digitalcappuccino.com/email-marketing-company-gurgaon"
        />
        <meta
          property="og:title"
          content="Best Email Marketing | Company in Gurgaon"
        />
        <meta
          property="og:description"
          content="Are you looking for the best email marketing company in Gurgaon? Digital Cappuccino is here to provide you with all the solutions."
        />
        <meta
          property="og:url"
          content="https://www.digitalcappuccino.com/email-marketing-company-gurgaon"
        />
        <meta
          property="og:image"
          content="https://www.digitalcappuccino.com/assets/img/service/6.png"
        />
      </Head>
      <Header />
      <Breadcrumb
        color={'#fec4c559'}
        imagePath={'/assets/img/service/6.png'}
        title={
          'Digital Cappuccino Elevates Your Reach:Email marketing in Gurgaon'
        }
        alt="Email Marketing Services in Gurgaon"
      />
      <CardWeb />
      <ServicesWeb />
      {/*<TestimonialArea style_2={true}/>*/}
      <ClientFeedback />
      <AccordionArea />
      <CtaTwo />
      <FooterFour />
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'http://schema.org',
              '@type': 'WebPage',
              '@id':
                'https://www.digitalcappuccino.com/email-marketing-company-gurgaon#webpage',
              url: 'https://www.digitalcappuccino.com/email-marketing-company-gurgaon',
              inLanguage: 'English',
              name: 'Email Marketing ',
              description:
                'Are you looking for the best email marketing company in Gurgaon? Digital Cappuccino is here to provide you with all the solutions.',
              isPartOf: {
                '@id': '#website',
              },
              about: [
                {
                  '@type': 'Thing',
                  name: 'Digital Cappuccino',
                  sameAs: 'https://www.digitalcappuccino.com/',
                },
              ],
              mentions: [
                {
                  '@type': 'Thing',
                  name: 'Digital Cappuccino',
                  sameAs: 'https://www.digitalcappuccino.com/',
                },
              ],
            },
          ]),
        }}
      />
    </Wrapper>
  );
};

export default ServiceEmailMarketing;
