import React from 'react';

const accordion_items = [
  { id: 'one', show: true, title: 'How do you determine the best digital marketing channels to use for my business?',
    desc: "We determine the best digital marketing channels to use for your business based on a thorough analysis of your target audience, competitors, and industry trends. We will conduct market research to understand your audience's preferences, behavior, and pain points, and use that information to create a customized digital strategy and plan that utilizes the most effective channels to reach and engage with your audience." },
  { id: 'two', title: 'How long does it take to develop a digital strategy and plan for my business?',
    desc: " The time it takes to develop a digital strategy and plan for your business varies depending on the complexity of your needs and goals. However, we typically take 4-6 weeks to develop a comprehensive digital strategy and plan that is customized to your business. We believe in taking the time to understand your business needs and goals to create a strategy and plan that will deliver results." },
  { id: 'three', title: 'How do you measure the success of our digital marketing efforts?',
    desc: "We measure the success of your digital marketing efforts through key performance indicators (KPIs) that are aligned with your business goals. We provide regular analytics and reporting to track the performance of your digital marketing efforts and make necessary adjustments. We also conduct regular reviews with you to ensure that our strategy and plan align with your evolving business needs and goals." },
  { id: 'four', title: 'Can you work with businesses of all sizes and industries?',
    desc: "Yes, we work with businesses of all sizes and industries. We believe in creating customized digital strategies and plans that are tailored to your specific business needs and goals. Whether you're a small business just starting out or a large enterprise looking to improve your digital marketing efforts, our team of experienced digital marketers can help you achieve your business goals." },
  { id: 'five', title: 'How will your digital strategy and planning services benefit my business?',
    desc: "Our digital strategy and planning services will benefit your business by providing a customized roadmap for your digital marketing efforts that is tailored to your business needs and goals. We will help you identify your target audience, develop a content strategy, improve your website's visibility in search engines, and create social media and paid advertising strategies to reach and engage with your audience more effectively. Our services are designed to help you drive more traffic, leads, and conversions, and grow your business in the digital world." },
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