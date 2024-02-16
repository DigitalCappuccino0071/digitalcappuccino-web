import React from 'react';
import HubspotForm from '../hubspot-form';

const ContactAreaLandingPage = () => {
  return (
    <>
      <div className="tp-contact-area pt-60 px-5 pb-60">
        <div className="tpcontact">
          <div className="tpcontact__form tpcontact__form-3">
            {/* ContactForm start */}
            <HubspotForm></HubspotForm>
            {/* ContactForm end */}
          </div>
          <p className="ajax-response"></p>
        </div>
      </div>
    </>
  );
};

export default ContactAreaLandingPage;
