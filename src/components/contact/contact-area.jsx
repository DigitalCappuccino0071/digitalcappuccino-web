import React from "react";
import HubspotForm from "./../hubspot-form";

const ContactArea = () => {
  return (
    <>
      <div className="tp-contact-area pt-30 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 ">
              <div className="tp-contct-wrapper contact-space-40">
                <div className="tp-contact-thumb mb-60">
                  <img
                    src="/assets/img/contact/contact-1.jpg"
                    alt="Digital Marketing Agency"
                  />
                </div>
                <div className="tp-contact-info mb-40">
                  <h4 className="contact-title">Mail Address</h4>
                  <span>
                    <a href="mailto:(info@digitalcappuccino.com)">
                      (info@digitalcappuccino.com)
                    </a>
                  </span>
                </div>
                <div className="tp-contact-info mb-40">
                  <h4 className="contact-title">Phone Number</h4>
                  <span>
                    <a href="tel:(+91 9910190071)">(+91 9910190071)</a>
                  </span>
                </div>
                <div className="tp-contact-info">
                  <h4 className="contact-title">Address line</h4>
                  <span>
                    <a
                      href="https://www.google.com/maps/place/Rider+House/
                  @28.4514806,77.0730605,17z/data=!4m7!3m6!1s0x390d18eb0ce0
                  8cd1:0x2406f413db6895ca!4b1!8m2!3d28.4515566!4d77.07524
                  37!16s%2Fg%2F11n6snwf9q"
                      target="blank"
                    >
                      Plot No. 136, 3rd Floor, Rider House, Sector 44, 122003
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="tpcontact">
                <h4 className="tp-contact-big-title">Let’s Connect...</h4>
                <div className="tpcontact__form tpcontact__form-3">
                  {/* ContactForm start */}
                  <HubspotForm></HubspotForm>
                  {/* ContactForm end */}
                </div>
                <p className="ajax-response"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactArea;
