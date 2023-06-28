import React from 'react';

const accordion_items = [
  { id: 'one', show: true, title: 'What are the four types of Social Media Marketing?',
    desc: "Social Media Marketing is an effective way to reach potential customers, build relationships with them, and promote your products or services. There are four main types of Social Media Marketing: Organic, Paid, Earned, and Owned. 1.Organic Social Media Marketing is when you create content and share it with your audience without paying for it. 2.Paid Social Media Marketing is when you pay platforms like Facebook or Instagram to promote your content and reach a larger audience. 3.Earned Social Media Marketing is when your content is shared by influencers or the public, creating word-of-mouth publicity for your business. 3.Owned Social Media Marketing is when you use owned platforms like blogs or websites to promote your content and engage with customers. Each type of Social Media Marketing has its own benefits and drawbacks, so it’s important to understand them and choose the one that best fits your objectives."},
  { id: 'two', title: 'Why is Social Media Management important?',
    desc: "Social media management is becoming increasingly important for businesses as customers increasingly use online platforms to share and access information. Social media management allows businesses to build relationships, create customer loyalty, and increase brand awareness while also providing feedback on what customers are looking for. By actively managing social media accounts, businesses can engage with customers on a much deeper level, and create an open dialogue that can help improve customer satisfaction and drive sales. Additionally, properly managing social media accounts can help businesses reach a wider audience, as well as communicate with customers directly instead of relying on third-party channels. All in all, social media management is an essential part of any business's marketing strategy, and it is important for businesses to understand the importance of managing their social media accounts in order to remain competitive in the digital age." },
  { id: 'three', title: 'What is a Social Media Management Platform?',
    desc: "A Social Media Management Platform (SMM) is a type of software application that provides users with the ability to manage their social media presence in one centralized place. It allows users to plan, monitor, analyze, and report on their social media performance and campaigns, as well as create content, engage with audiences, and build relationships. By automating certain tasks and providing features such as analytics, reporting, and content scheduling, SMM platforms help brands reach their goals more efficiently. With these platforms, users can track activity across multiple social networks, optimize content for maximum engagement, and monitor trends to identify opportunities for growth. Additionally, SMM platforms come with tools to manage customer service, moderate comments, and analyze the success of campaigns. As such, they are an indispensable tool for companies looking to maximize their social media presence and drive business growth." },
  { id: 'four', title: 'Which is the Biggest Social Media Management Platform?',
    desc: "Social media management platforms vary in size and scope, depending on the needs of the individual or organization managing them. The biggest social media management platform is Hootsuite, a cloud-based platform that allows users to manage multiple social networks, including Twitter, Facebook, LinkedIn, and Google+, from one integrated dashboard. With Hootsuite, users can easily schedule and post messages, monitor conversations, measure their impact, and collaborate with team members. The platform offers powerful analytics and reporting tools to measure the success of their social media campaigns. Features such as Hootsuite Insights allow users to track their performance on different channels over time. Hootsuite also offers comprehensive support services to help users get the most out of their platform. All of these features make Hootsuite the largest and most comprehensive social media management platform available." },
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