import React from 'react';

const accordion_items = [
  { id: 'one', show: true, title: 'What is a Website Development process?',
    desc: "Website development is a process that involves the creation, design, coding, and implementation of the various components of a website. It is an iterative process that begins with the initial planning stages and continues through to the final launch of the website. The process involves tasks such as creating an information architecture, designing wireframes, coding the site, building the design, testing and launching the site. Each step in the process requires attention to detail and careful consideration of user experience and functionality. Additionally, each step should be tested to ensure that the website meets all the necessary standards and requirements. In conclusion, website development is a complex, multi-step process that requires skill and expertise in order to produce a successful website." },
  { id: 'two', title: 'Why is Web Development important?',
    desc: " Web development is an increasingly important area of technology in today's world, as more and more businesses rely on their online presence for success. Web development is important because it allows companies to reach a wider audience, create a more engaging experience for their users, and provide more useful features and services to customers. Web development allows businesses to create interactive experiences that are easily accessible from any device. It also gives businesses the ability to scale their operations quickly by creating websites that can be easily updated and maintained. Additionally, web development helps businesses to remain competitive in a rapidly changing market by allowing them to quickly respond to changing user needs and preferences. Finally, web development is critical to the success of any online presence as it provides the foundation for secure, reliable, and efficient websites that ensure customer satisfaction." },
  { id: 'three', title: 'What exactly is Web Development?',
    desc: " Web Development is the process of creating websites and applications for the web. It includes activities such as designing a website's layout and content, coding and programming, and ensuring that the site works correctly across different browsers and devices. This process involves many different skills, such as HTML, JavaScript, CSS, Adobe Creative Suite, and more. Web developers typically work collaboratively or independently to build websites from concept to completion. They often have to troubleshoot any problems that arise during the development process. Additionally, they may be responsible for maintaining and improving existing websites as well as creating mobile apps for different platforms. Web development is a rapidly changing field that requires a strong working knowledge of up-to-date technologies and practices in order to stay competitive." },
  { id: 'four', title: 'How long does it take to design or develop a website?',
    desc: <p>A variety of typical procedures are required to effectively launch a website as part of the broader website development process:
Preparation (two to three weeks)
Creation of content (four to six weeks)
Design of a website (two to three weeks)
Testing and analysis (one to two weeks)
      From concept to completion, the time frame is 10-14 weeks. These time periods are estimates, and the procedure may take longer or shorter depending on how sophisticated your site is.</p> }
]

const AccordionArea = () => {
  return (
    <>
      <div className="sd-accordio-area grey-bg pt-30 pb-30">
        <div className="container">
          <div className="row">
            <div>
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