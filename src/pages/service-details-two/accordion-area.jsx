import React from 'react';

const accordion_items = [
  { id: 'one', show: true, title: 'What is seo and why is it important for my business? ',
    desc: "seo is the process of optimizing your website to improve its visibility in search engine results pages. It is important for your business because it can help you drive more traffic, leads, and conversions, ultimately leading to increased revenue." },
  { id: 'two', title: ' How long does it take to see results from seo?',
    desc: " It depends on several factors, such as the current state of your website, the level of competition in your industry, and the seo strategies used. Generally, it can take anywhere from a few weeks to several months to see significant improvements in your website's rankings and traffic." },
  { id: 'three', title: ' What is SEM and how is it different from seo?',
    desc: "SEM stands for Search Engine Marketing and involves using paid advertising to improve your website's visibility in search engine results pages. It is different from seo, which focuses on improving your website's visibility through organic means." },
  { id: 'four', title: ' How can SEM help my business?',
    desc: "SEM can help your business by driving more targeted traffic to your website, increasing brand awareness, and generating leads and sales. With SEM, you can reach a larger audience and achieve your business goals more quickly." },
  { id: 'five', title: 'How do you measure the success of seo and SEM campaigns? ',
    desc: "The success of seo and SEM campaigns can be measured through various metrics such as website traffic, keyword rankings, click-through rates, conversion rates, and ROI. At Digital Cappuccino, we use advanced analytics tools to track and measure the success of our clients' seo and SEM campaigns." },
]

const AccordionArea = () => {
  return (
    <>
      <div className="sd-accordio-area grey-bg pt-130 pb-130">
        <div className="container">
          <div className="row">
            <div className="col-xl-7">
              <h3 className="tp-title-sm mb-90"> Solutions: all your questions answered</h3>
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