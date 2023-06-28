import React from 'react';

const accordion_items = [
  { id: 'one', show: true, title: 'How effective is Email Marketing?',
    desc: "Email marketing is a powerful and effective way to reach potential customers. It provides an easy and affordable way to keep in touch with existing customers and potential customers. Email marketing is a great way to promote your products or services, build relationships with customers, and keep them up-to-date with the latest news and offers. The effectiveness of email marketing depends on several factors, including the quality of your content, how often you send emails, and how well you personalize emails to fit your target audience. When done correctly, email marketing can be an incredibly effective tool for driving leads, sales, and engagement with your brand." },
  { id: 'two', title: 'Why is Email Marketing important?',
    desc: " Email marketing is incredibly important for businesses of all sizes, as it provides a direct, cost-effective way to reach existing and potential customers. It allows companies to build relationships with customers, build loyalty, and increase brand awareness. Email marketing also helps to improve customer engagement, generate leads, and increase conversions. Additionally, email marketing is highly trackable and can provide valuable insights into customer behaviour. Furthermore, it can be used as a low-cost tool to promote sales, and special offers, and build brand loyalty. In short, email marketing is an essential part of any successful digital marketing strategy." },
  { id: 'three', title: 'What is the best way to build an email strategy?',
    desc: "The best way to build an email strategy is to start by identifying the specific goals you are hoping to achieve with your email campaigns. Is it to increase brand awareness? To acquire new leads? To drive sales? Once you have established your objectives you can create content that is tailored to those goals. You can then segment your list according to the content that is most relevant to each group and create personalized emails for each segment. It is also important to pay attention to the details such as optimizing subject lines, crafting engaging copy, and making sure your emails are mobile-friendly. Finally, track the performance of your emails using analytics tools to ensure you are reaching your desired goals and adjust your email strategy accordingly." },
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
              <h3 className="tp-title-sm mb-30">Stay Ahead with our FutureReady Digital Marketing Solutions</h3>
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