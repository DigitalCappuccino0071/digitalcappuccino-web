import React from 'react';

const accordion_items = [
  { id: 'one', show: true, title: 'What makes a good website design?',
    desc: " A good website design should be visually appealing, user-friendly, and optimized for performance. It should also reflect your brand personality and target your audience effectively." },
  { id: 'two', title: 'Can you design a website that is mobile-friendly?',
    desc: " Yes, we specialize in creating responsive and scalable websites that provide a seamless user experience across all devices." },
  { id: 'three', title: ' How long does it take to design and develop a website? ',
    desc: "The timeline for website design and development can vary depending on the complexity of the project. We work closely with our clients to ensure that we meet their specific timelines and deliver exceptional results." },
  { id: 'four', title: '  Do you offer website maintenance services?',
    desc: " Yes, we offer website maintenance services to ensure that your website stays up-to-date and secure. This includes regular software" +
        " updates, security checks, and content updates as needed." },
  { id: 'five', title: '  How much does web design and development cost? ',
    desc: "The cost of web design and development can vary depending on the scope of the project. We offer competitive pricing and work with our clients to create a custom solution that fits their budget and business needs." },
]

const AccordionArea = () => {
  return (
    <>
      <div className="sd-accordio-area grey-bg pt-130 pb-130">
        <div className="container">
          <div className="row">
            <div className="col-xl-7">
              <h3 className="tp-title-sm mb-90">Solutions: all your questions answered</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-custom-accordio">
                <div className="accordion" id="accordionExample">

                  {accordion_items.map((item, i) => {
                    const { id, show, title, desc } = item;
                    return <div key={id} className={`accordion-items ${show ? 'faq-accordio-border' : ''}`}>
                      <h2 className="accordion-header" id={`heading-${id}`}>
                        <button className={`accordion-buttons ${show ? '' : 'collapsed'}`} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse-${id}`}
                          aria-expanded={show ? 'true' : 'false'} aria-controls={`collapse-${id}`}>
                          {title}
                        </button>
                      </h2>
                      <div id={`collapse-${id}`} className={`accordion-collapse collapse ${show ? 'show' : ''}`} aria-labelledby={`heading-${id}`} data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          {desc}
                        </div>
                      </div>
                    </div>
                  })}

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccordionArea;