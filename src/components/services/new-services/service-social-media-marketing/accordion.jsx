import React from "react";

const accordion_items = [
  {
    id: "one",
    show: true,
    title: "What are the four types of Social Media Marketing?",
    desc: (
      <div>
        <li>
          Leveraging social media marketing has proven to be a great way to
          connect with potential customers, build relationships and recommend
          your products. Business marketing includes four main types: organic
          marketing, paid marketing, acquired marketing, and proprietary
          marketing.
        </li>
        <ul>
          <li>
            1.Organic social media marketing involves creating and delivering content to an audience without exchanging money.{" "}
          </li>
          <li>
            2.Paid social media marketing includes paid platforms like Facebook or Instagram to expand the visibility of your content to a wider audience.{" "}
          </li>
          <li>
            3.Monetization from social media marketing happens when influencers or the public share your content, which leads to word of mouth.{" "}
          </li>
          <li>
            4.Social media marketing enables content distribution and customer interaction through social media such as blogs or websites.
Each type of advertising business has its advantages and limitations. Therefore, understanding these differences is important in choosing the right path for your goals.{" "}
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "two",
    title: "Why is Social Media Management important?",
    desc: "In today's business environment, the importance of relationship management is constant, reflecting the growing number of users using online platforms for information exchange and access. This app allows businesses to build connections, develop customer loyalty, and expand brand awareness. It also monitors the channel to understand customer preferences. By monitoring social media, companies can engage with customers and encourage open conversations that drive interest and increase sales. In addition, smart social media management enables businesses to reach a wider audience and interact directly with consumers. Social media management is an essential part of business marketing, and its changes must be clearly understood to compete in the digital age.",
  },
  {
    id: "three",
    title: "What is a Social Media Management Platform?",
    desc: "A social media management platform (SMM) is a proprietary software application that provides users with a unified hub to monitor their social media activity. This integration allows users to comment, track, evaluate, and record their ad success and training. It helps with content creation, audience engagement, and relationship building. Social Media Management platforms can target brands by automating selected activities and providing analytics, reporting, and content planning capabilities. These platforms allow users to track interactions across multiple social networks, fine-tune content for effective collaboration, and monitor new events to identify expansion opportunities. The Social Media Management platform provides tools for customer retention, quality analysis, and analysis of campaign results. It's an essential tool for businesses looking to increase their social media presence and drive business growth.",
  },
  {
    id: "four",
    title: "Which is the Biggest Social Media Management Platform?",
    desc: "Social media management platforms come in different sizes according to the needs of the people or organisations using them. Chief among these platforms is Hootsuite, a cloud-based solution allowing users to monitor networks such as Twitter, Facebook, LinkedIn, and Google+ through an integrated dashboard. With Hootsuite, users can easily schedule and publish posts, monitor conversations, measure their impact, and collaborate with team members. The platform is equipped with powerful metrics and reporting features to measure the effectiveness of social media. Features like Hootsuite Insights allow users to track the performance of different channels over time. Hootsuite provides support services to ensure users get the most out of the platform. Collectively, these features make Hootsuite the most valuable and intuitive social media management platform available today.",
  },
];

const AccordionArea = () => {
  return (
    <>
      <div className="sd-accordio-area grey-bg pt-30 pb-30">
        <div className="container">
          <div className="row">
            <div>
              <h3 className="tp-title-sm mb-30">
                Stay Ahead with our FutureReady Digital Marketing Solutions
              </h3>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-custom-accordio">
                <div className="accordion" id="accordionExample">
                  {accordion_items.map((item, i) => {
                    const { id, show, title, desc } = item;
                    return (
                      <div
                        key={id}
                        className={`accordion-items ${
                          show ? "faq-accordio-border" : ""
                        }`}
                      >
                        <h2 className="accordion-header" id={`heading-${id}`}>
                          <button
                            className={`accordion-buttons ${
                              show ? "" : "collapsed"
                            }`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#collapse-${id}`}
                            aria-expanded={show ? "true" : "false"}
                            aria-controls={`collapse-${id}`}
                          >
                            {title}
                          </button>
                        </h2>
                        <div
                          id={`collapse-${id}`}
                          className={`accordion-collapse collapse ${
                            show ? "show" : ""
                          }`}
                          aria-labelledby={`heading-${id}`}
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">{desc}</div>
                        </div>
                      </div>
                    );
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
