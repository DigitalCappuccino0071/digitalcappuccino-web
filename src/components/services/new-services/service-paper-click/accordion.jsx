import React from 'react';

const accordion_items = [
  { id: 'one', show: true, title: 'What is PPC?',
    desc: "PPC, short for pay-per-click, is part of digital marketing, where advertisers are paid for each click they receive. These strategies are used to increase website traffic, help generate leads and increase sales. These campaigns are often posted on search engines like Google and Microsoft's Bing and social media like Facebook and LinkedIn. PPC services operate in competitive advertising, where advertisers compete for keywords that will be effective for their customers. Advertisers have to pay for each ad, and they can also measure their performance and adjust their advertising plans accordingly. PPC campaigns are often overseen by experts who are knowledgeable in the nuances of search engine algorithms and can produce incredible results. Aim for a great customer experience, and you will see a great return on investment from your PPC efforts." },
  { id: 'two', title: 'How does PPC advertising work?',
    desc: "The PPC process is simple. Businesses bid on content related to their products. Then, when someone searches for certain content, the relevant ad appears in the promotion section of the search engine. The advertiser charges the search engine each time a user clicks on the ad. This cost depends on many factors, including the advertiser's budget and keyword competition. PPC advertising gives businesses easy control over budgets and makes it easy to evaluate ads from ads. It allows companies to adjust their strategies and optimise resources for the best results." },
  { id: 'three', title: 'What is a keyword in PPC advertising?',
    desc: "In PPC (pay-per-click) advertising, keywords are specific terms or phrases that direct relevant ads to a particular audience. As a result, keywords tell the ad to appear every time users search using certain words or phrases. Content is important in PPC campaigns and search engine optimization (SEO), which aims to improve the website's online presence. Creating a good keyword strategy requires careful planning and attention. Regular monitoring and optimization are important to ensure the selected content is relevant to your target audience.Using keywords can bring more traffic to the website, which means more conversions and more sales." },
  { id: 'four', title: 'What are the advantages of PPC advertising?',
    desc: "PPC (pay-per-click) advertising provides many benefits for businesses to improve their digital marketing strategy:It goes through the traditional SEO process, which occurs quickly after installation.It is one of the best and most economical ways to attract customers because the costs are incurred only for clicking on the ad.PPC advertising expands access to comprehensive tracking data, improving your understanding of your audience and optimising targeting.PPC campaigns exhibit great flexibility and can easily adapt to changing market conditions.These advantages make PPC the perfect choice for businesses looking to expand their digital footprint." },
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