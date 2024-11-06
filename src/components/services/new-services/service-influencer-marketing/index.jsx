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

const ServiceInfluencerMarketing = () => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <Head>
        <title>Best Influencer Marketing Company in Gurgaon</title>
        <meta
          name="description"
          content="Looking for the best influencer marketing agency in Gurgaon? Digital Cappuccino is the best influencer marketing company in Gurgaon. We synthesize marketing programs and merge techniques to reach your goals."
        />
        <link
          rel="canonical"
          href="https://www.digitalcappuccino.com/influencer-marketing-company"
        />
        <meta
          property="og:title"
          content="Best Influencer Marketing Company in Gurgaon"
        />
        <meta
          property="og:description"
          content="Looking for the best influencer marketing agency in Gurgaon? Digital Cappuccino is the best influencer marketing company in Gurgaon. We synthesize marketing programs and merge techniques to reach your goals."
        />
        <meta
          property="og:url"
          content="https://www.digitalcappuccino.com/influencer-marketing-company"
        />
        <meta
          property="og:image"
          content="https://www.digitalcappuccino.com/assets/img/service/2.png"
        />
      </Head>
      <Header />
      <Breadcrumb
        color={'#fec4c559'}
        imagePath={'/assets/img/service/2.png'}
        title={'Influencer Marketing Company in Gurgaon '}
        alt="Best Influencer Marketing Agency in Gurgaon"
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
                'https://www.digitalcappuccino.com/digital-marketing-company-gurgaon#webpage',
              url: 'https://www.digitalcappuccino.com/digital-marketing-company-gurgaon',
              inLanguage: 'English',
              name: 'Digital Marketing',
              description:
                'One of the best digital marketing companies in Gurgaon. That offers a wide range of services, including SEO, web development, and PPC marketing.',
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

export default ServiceInfluencerMarketing;
