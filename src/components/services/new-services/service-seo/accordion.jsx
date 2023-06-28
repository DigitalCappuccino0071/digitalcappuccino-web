import React from 'react';

const accordion_items = [
  { id: 'one', show: true, title: 'Does my business need SEO?',
    desc: "When it comes to the question of whether or not your business needs SEO, the answer is an unequivocal yes. SEO (search engine optimization) is a process of improving your website’s ranking in search engine results pages, which can be a major factor in helping you increase visibility, traffic, and sales. With the right SEO strategy, you can effectively reach more potential customers and increase your online presence. SEO also helps build trust and credibility with search engines, which is essential for reaching more customers and growing your online presence. It’s important to note that SEO can take time to take effect, so it’s important to ensure that you’re taking the right steps from the start. If you want to see great results for your business, investing in SEO can be a great place to start."},
  { id: 'two', title: 'Why isn’t my website ranking on Google?',
    desc: "A website's ranking on Google is determined by a variety of factors, such as content relevance, page speed, backlinks, and more. If your website is not appearing in Google search results, it could be due to a number of different issues, such as low-quality content, insufficient backlinks, incorrect keyword targeting or duplicate content. Other reasons could include low page authority, incorrect robots.txt and sitemap settings, or even a penalty from Google for violating its Webmaster Guidelines. To address this issue, you should first perform a thorough audit of your website, looking for any potential errors or violations that could be affecting your website's visibility. Once you've identified and addressed any issues that could be causing your website to not rank on Google, it's time to focus on building quality backlinks and optimizing your content for target keywords. With the right strategy and dedication, you can achieve better search engine rankings for your website." },
  { id: 'three', title: 'Who needs SEO?',
    desc: "Businesses of all sizes can benefit from SEO. Small businesses can use SEO to increase their visibility in search engine results, leading to increased website traffic and potential customers. Large corporations use SEO to ensure that their brand is prominent on the web, and that their content is visible to potential customers. Both types of businesses can also benefit from SEO by improving the overall user experience of their website, making it easier for customers to find the information they need and to make a purchase. SEO also helps businesses increase their return on investment by providing an economical way to generate organic leads. Ultimately, any business interested in increasing its reach online and gaining more customers should consider investing in a comprehensive SEO strategy."},
  { id: 'four', title: 'How does SEO work?',
    desc: "Search Engine Optimisation (SEO) is a technique for increasing a website's or web page's exposure in search engine listings. It is done by optimizing content, HTML and other elements on a website or web page so that when a search engine crawls it, it can more easily find and index all the relevant information. This makes the website or page more visible to potential customers. SEO also involves building links to your site, creating high-quality content, and using keywords throughout the content. By doing this, search engine algorithms will rank the page higher in search engine results pages, making it easier for potential customers to find the website or page. Additionally, SEO can help increase website or page traffic, brand recognition, and overall website or page performance." },
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