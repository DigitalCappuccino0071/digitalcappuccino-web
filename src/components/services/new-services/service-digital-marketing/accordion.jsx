import React from 'react';

const accordion_items = [
  { id: 'one', show: true, title: 'Why is Digital Marketing important?',
    desc: "A Digital Marketing Company is vital in today's market, allowing firms to communicate with potential clients in ways that were not feasible 15 years ago. This strategy aids in the expansion and development of relationships by delivering a unique reach to your target audience. Furthermore, a Digital Marketing Agency enables firms to assess the efficiency of their competitors by implementing tried-and-true contextual techniques. This feature optimises ROI for each campaign. Furthermore, Digital Marketing Services can aid in increasing consumer awareness, trust, and contentment. With the assistance of a Top Digital Marketing Agency, businesses can engage with their target audience and extend their success." },
  { id: 'two', title: 'What does a Digital Marketing agency do?',
    desc: " Digital Marketing Company provides comprehensive solutions to help businesses improve their online presence. These agencies use technology and data analytics to study client behaviour and devise ideal marketing plans using SEO, content marketing, web design, social media, and email marketing. They are skilled at monitoring PPC campaigns and social media advertising in order to promote growth, reach new customers, generate leads, and increase revenue. Their competence as a Top Digital Marketing Agency ensures that businesses thrive in the digital arena, obtaining a competitive advantage and maximising their online potential."},
  { id: 'three', title: 'How do I become a Digital Marketer?',
    desc: "Starting a career as a digital marketer necessitates a combination of creativity, intelligence, and analytics. Mastering the fundamentals of digital marketing, such as search engine optimisation, content optimisation, and paid advertising, is critical. Communication, writing, and research skills are also essential. It is critical to learn good cross-platform campaigns and to use analytics to measure results. Acquiring credentials and a digital marketing certification can help you stand out.Begin your journey as a digital marketer by learning about SEO, content, and paid ads. Communicate effectively, conduct campaign analysis, and become certified. Follow trends and network with colleagues. Create an internet presence. For experienced services, collaborate with a leading Digital Marketing Company."},
  { id: 'four', title: 'What is a Digital Marketing Agency?',
    desc: "A Digital Marketing Agency is a company that offers a variety of digital marketing services to businesses. Web design, search engine optimisation (SEO), content creation, video production, advertising, social media management, email marketing, and other services are examples of these products. As a leading Digital Marketing Agency, they are important to business success in the digital age, assisting in the development of an online presence, increasing visibility, and increasing audience and loyalty. Digital Marketing Services maximise the return on investment and assure effective digital marketing strategies by combining their expertise and experience with advanced technology." },
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