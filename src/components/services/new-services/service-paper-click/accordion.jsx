import React from 'react';

const accordion_items = [
  { id: 'one', show: true, title: 'What is PPC?',
    desc: "PPC stands for pay-per-click. PPC is a form of digital marketing where advertisers pay a fee each time their advertisement is clicked. It is used to drive traffic to websites, generate leads and increase sales. PPC campaigns are frequently set up on search engines like Google and Microsoft's Bing, in addition to social media sites like Facebook and LinkedIn. PPC campaigns are based on an auction system, where advertisers bid for keywords to target their potential customers. Advertisers pay for each click on their ads, and they can track their success and adjust their campaigns accordingly. PPC campaigns are typically managed by experienced professionals who are familiar with the intricacies of search engine algorithms. Once properly implemented, PPC can fetch enormous leads. A massive return on investment for your PPC efforts could be achieved if you can create a seamless user journey." },
  { id: 'two', title: 'How does PPC advertising work?',
    desc: "The way PPC works is simple. Businesses bid on keywords related to their products and services and when someone searches for those keywords, their advertisement appears in the search engines sponsored results section. Whenever someone clicks on the ad, the advertisers pay a fee to the search engine. The fee is determined based on a number of factors, including the advertiser’s budget and how competitive the keyword is. PPC advertising makes it easy for businesses to control their budget and measure the success of their ads with detailed reporting, which allows them to make adjustments as needed to get the best return on their investment." },
  { id: 'three', title: 'What is a keyword in PPC advertising?',
    desc: "A keyword in PPC (Pay-Per-Click) advertising is a specific word or phrase that is used to target relevant ads to a desired audience. The keyword acts as a trigger to trigger an advertisement when someone searches for a specific word or phrase. Keywords are used in search engine optimization (SEO) and PPC campaigns to optimize the visibility of a website online. An effective keyword strategy should be created strategically and should be regularly monitored and optimized to ensure that the right keywords are used for the intended audience. The right keywords can help drive more targeted traffic to the website, thus resulting in increased conversions and sales." },
  { id: 'four', title: 'What are the advantages of PPC advertising?',
    desc: "PPC (Pay-Per-Click) advertising provides numerous advantages to businesses that seek to optimize their digital marketing strategies. Firstly, it offers faster results than traditional SEO methods, with ads beginning to show almost instantaneously after setup. Secondly, it is a highly targeted and cost-effective way of reaching potential customers, as you only pay for the clicks on your ads. Thirdly, PPC advertising provides detailed tracking information that allows you to better understand your target audience and refine your targeting parameters. Finally, PPC campaigns are highly versatile and can be easily adjusted to keep up with changes in the market. All these advantages make PPC a great choice for businesses looking to maximize their digital presence." },
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