import React from 'react';

import { Wrapper } from '../layout';

import Head from 'next/head';
import ChildWrapper from '../components/ChildWrapper';
const index = () => {
  return (
    <Wrapper>
      <Head>
        <title>Privacy Policy - Digital Cappuccino</title>
        <meta
          name="description"
          content="Privacy Policy - Digital Cappuccino"
        />
        <link
          rel="canonical"
          href="https://www.digitalcappuccino.com/privacy-policy"
        />
        <meta
          property="og:title"
          content="Privacy Policy - Digital Cappuccino"
        />
        <meta
          property="og:description"
          content="Privacy Policy - Digital Cappuccino"
        />
        <meta
          property="og:url"
          content="https://www.digitalcappuccino.com/privacy-policy"
        />
        <meta
          property="og:image"
          content="https://www.digitalcappuccino.com/assets/img/privacy-policy.jpg"
        />
      </Head>
      <ChildWrapper>
        <div className="privacy-policy">
          <h2>Privacy Policy</h2>
          <p>
            Digital Cappuccino respects and honors your privacy. This Privacy
            Policy outlines how we collect, process, and protect information
            about you when you use our services or access our website. All those
            who access this website give their consent to the practices listed
            here.
          </p>
          <h3>Information Collection and Use</h3>
          <p>
            We obtain only the information you have given to us voluntarily.
            This could range from contact information to details relevant to the
            services we offer. We assure you that such information shall solely
            be used with regards to the provision and enhancement of our
            services. And, on no account, do we sell, lease, or disclose your
            personal information to third parties for whatever reason, except as
            necessary to administer our obligations or requirements with the
            law.
          </p>
          <h3>Data Security</h3>
          <p>
            Digital Cappuccino ensures that proper care is taken with regard to
            your private information. Data safety, both online and offline, is
            heavily implemented within the systems. Only authorized persons
            receive access to your information. In this way, your information
            will be kept safe and confidential.
          </p>
          <h3>Cookies</h3>
          <p>
            Our website uses cookies to give you a richer experience browsing on
            our site. Cookies are small data files stored in your local machine
            to aid us in identifying you whenever you are returning; therefore,
            the website can efficiently function its aspects. You may disable
            such cookies when accessing your browser. However, it might make
            some services of this website unavailable in your utilization.
          </p>
          <h3>Amendments to This Privacy Policy</h3>
          <p>
            Digital Cappuccino reserves the right to update this Privacy Policy
            as needed. Any changes will be posted on this page, and continued
            use of or services signifies acceptance of these updates.
          </p>
          <h3>Contact Us</h3>
          <p>
            If you have any questions regarding the privacy policy, please write
            to us at info@digitalcappuccino.com
          </p>
        </div>
      </ChildWrapper>
    </Wrapper>
  );
};

export default index;
