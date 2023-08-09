import React from 'react';

const accordion_items = [
  { id: 'one', show: true, title: 'What is an Email Marketing Company?',
    desc: "An Email Marketing Company, often known as an Email Marketing agency, specialises in email marketing services. It provides businesses with the experience they need to run effective campaigns and achieve the best possible results. This type of organisation is regarded for providing the greatest email marketing services, earning it a spot among the top Email Marketing Services providers." },
  { id: 'two', title: 'Why is Email Marketing important?',
    desc: " As a potent business tool, email marketing is extremely important. The competence of an Email Marketing agency ensures that brands can engage effectively through focused campaigns and top Email Marketing services. This strengthens customer relationships, increases conversions, and cements their status as the best email marketing services provider in the industry." },
  { id: 'three', title: 'What does an Email Marketing Agency do?',
    desc: "An Email Marketing agency specialises in campaign strategy and execution. It provides comprehensive Email Marketing services with the goal of providing the best and top-notch solutions. An Email Marketing service offers best results for your outreach initiatives, from creating captivating content to managing lists and analysing performance." },
  { id: 'four', title: 'What does Email Marketing include?',
    desc: "Email marketing includes the use of email campaigns to promote a company, product, service, or event. It's a great way to reach a large number of potential customers quickly and cost-effectively. Email marketing includes crafting well-written emails with compelling and informative subject lines to attract customers. It can also include segmenting customer lists into smaller groups so that specific messages can be sent tailored to their interests. Additionally, email marketing involves using analytics to assess open rates, click-through rates, and other performance metrics so that one can track the success of their email campaigns. Email marketing also includes creating campaigns that encourage customers to take an action such as signing up for a newsletter, shopping at an online store, or registering for an event. In this way, marketers can gain valuable insights about their customers and create meaningful relationships with them." },
]

const AccordionArea = () => {
  return (
    <>
      <div className="sd-accordio-area grey-bg pt-30 pb-30">
        <div className="container">
          <div className="row">
            <div >
              <h3 className="tp-title-sm mb-30">Clarifying Curiosities: Your Questions Answered with Care</h3>
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