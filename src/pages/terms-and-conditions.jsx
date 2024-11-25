import React from 'react';

import { Wrapper } from '../layout';

import Head from 'next/head';
import ChildWrapper from '../components/ChildWrapper';
const index = () => {
  return (
    <Wrapper>
      {/* <SEO pageTitle={"Contact Us"} /> */}
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
          content="https://www.digitalcappuccino.com/assets/img/contact/contact-1.jpg"
        />
      </Head>
      <ChildWrapper>
        <div className="terms-and-conditions">
          <h2 className="text-black">Terms and Conditions</h2>
          <p>Terms of Use</p>
          <p>
            Digital Cappuccino welcomes you. Access to our site and our services
            is subject to the conditions, terms, and notices contained herein.
            If you do not agree with any part of these terms, we request that
            you do not use our website and services.
          </p>
          <h3 className="text-black">Refund Policy</h3>
          <p>
            Digital Cappuccino provides services that can be of the highest
            standard to clients. We do not give back, although it is usually
            under special circumstances where we find that services cannot meet
            what we offer. In some services, such refunds could be partial as
            per the services delivered.
          </p>
          <h3 className="text-black">Intellectual Property Rights</h3>
          <p>
            All content on this website is owned by Digital Cappuccino and/or
            its licensors, unless otherwise stated. The following includes but
            is not limited to text, graphics, and other materials. All rights
            are reserved, and unauthorized use of our intellectual property is
            strictly prohibited.
          </p>
          <h3 className="text-black">Restrictions</h3>
          <ul className="text-black font-medium mb-5">
            <li style={{ fontSize: '16px!important' }}>You are not allowed:</li>
            <li style={{ fontSize: '16px!important' }}>
              Republish material from this website without obtaining a license
              from us.
            </li>
            <li style={{ fontSize: '16px!important' }}>
              Sell, rent, or sublicense any website content.
            </li>
            <li style={{ fontSize: '16px!important' }}>
              Duplication, photocopying or reproduction of material from this
              site for commercial purposes.
            </li>
          </ul>
          <h3 className="text-black">User-Generated Content</h3>
          <p>
            Digital Cappuccino shall have no responsibility for any content
            which you may provide on your website or transmit via our services.
            You agree to hold harmless and indemnify us from and against any and
            all claims and liabilities arising from your submissions or from
            third parties&apos; misuse of our services.
          </p>
          <h3 className="text-black">Reservation of Rights</h3>
          <p>
            We reserve the right to request that you remove any link to our
            website or services at any time. You agree to promptly remove any
            such link upon request.
          </p>
          <h3 className="text-black">Disclaimer</h3>
          <p>
            To the fullest extent permitted by law, Digital Cappuccino excludes
            all representations, warranties, and conditions relating to the
            website and the use of our services. No direct, indirect, special,
            or consequential damages arising out of the use of our website or
            services shall be deemed to be caused by us.
          </p>
          <h3 className="text-black">Modifications to Terms and Conditions</h3>
          <p>
            Digital Cappuccino may update the terms and conditions listed here
            from time to time. Continued use of our website after posting such
            changes shall constitute acceptance of those changes.
          </p>
          <h3 className="text-black">Governing Law</h3>
          <p>
            These terms and conditions are governed by laws prevailing in India.
            In using our website and services, you submit to the exclusive
            jurisdiction of the courts in India.
          </p>
        </div>
      </ChildWrapper>
    </Wrapper>
  );
};

export default index;
