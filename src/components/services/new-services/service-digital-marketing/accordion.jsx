import React from 'react';

const accordion_items = [
  { id: 'one', show: true, title: 'Why is Digital Marketing important?',
    desc: "Digital marketing is essential in today's world as it allows businesses to connect with potential customers on a level that was not possible 15 years ago. Digital marketing offers businesses an unprecedented level of access to their target audiences, allowing them to reach more people and build relationships with them than ever before. In addition, digital marketing provides businesses with the ability to measure their results for each campaign, allowing them to determine what works and what doesn't and make adjustments accordingly. This level of accountability helps businesses maximize their return on investment for each campaign. Additionally, digital marketing enables businesses to create engaging customer experiences that increase brand loyalty and customer satisfaction. By designing digital campaigns that use multiple digital channels and techniques, businesses can reach their target audiences in a variety of ways and increase their chances of success." },
  { id: 'two', title: 'What does a Digital Marketing agency do?',
    desc: " A Digital Marketing Agency provides companies with services to crease their online presence. Through digital marketing strategies like search engine optimization (SEO), content marketing, website design, social media marketing, email marketing, and more, digital marketing agencies help brands to reach more customers and drive sales. By utilizing technology and data analysis, digital marketing agencies are able to provide insights into customer behavior and create campaigns that result in maximum visibility. Additionally, these agencies often provide paid media management services such as pay-per-click (PPC) campaigns and social media advertising. By leveraging the power of digital channels, a digital marketing agency can help companies to grow their online presence, reach new customers, generate leads, and boost sales."},
  { id: 'three', title: 'How do I become a Digital Marketer?',
    desc: "Becoming a digital marketer requires a combination of creative, technical, and analytical skills. It is important to understand the basics of digital marketing, such as SEO, content marketing, and paid social media advertising. Additionally, a digital marketer should have strong communication, writing, and research skills. Understanding how to create effective campaigns across multiple platforms and using analytics to measure success is essential. Building a portfolio of work and getting certified in digital marketing can help you stand out from the competition. Networking with other digital marketers in your area and keeping up to date with industry trends is important for staying current in the field. Finally, having an online presence via a personal website or professional social media accounts is critical for showing employers your knowledge and skills." },
  { id: 'four', title: 'What is a Digital Marketing Agency?',
    desc: "A Digital Marketing Agency is an organization or company that provides a range of marketing services for businesses in the digital realm. These services may include web design, search engine optimization (SEO), content creation, video production and advertising, social media management, email campaigns, and more. Digital Marketing Agencies are vital to the success of a business in the digital age as they help to create a comprehensive online presence and increase visibility. Additionally, they provide access to resources and professionals with the skill and expertise to create and implement successful digital marketing strategies. By combining their knowledge and experience with innovative technologies, Digital Marketing Agencies can help to maximize the return on investment for businesses and ensure they are reaching their target audience." },
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