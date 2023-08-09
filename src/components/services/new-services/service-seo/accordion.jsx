import React from 'react';

const accordion_items = [
  { id: 'one', show: true, title: 'What is an SEO Services Company ?',
    desc: "An SEO services company, often known as an SEO agency or SEO company, focuses on increasing online exposure and organic search ranks. It provides a variety of tactics, such as keyword optimisation, content enhancement, and link building, with the purpose of promoting itself as the industry's finest SEO services provider."},
  { id: 'two', title: 'What does an SEO Services Agency do ?',
    desc: "An SEO services company, often known as an SEO agency or the top SEO company, specialises in online visibility optimisation. To give the best SEO services, it implements tactics such as keyword optimisation, content development, and link building. Their purpose is to increase website traffic and rankings in order to boost online performance." },
  { id: 'three', title: 'Why are SEO Services important ?',
    desc: "SEO services provided by an SEO firm or SEO agency are critical to digital success. The top SEO services optimise websites for search engines, increasing visibility and providing a better user experience. Choosing the best SEO company guarantees that effective techniques are put in place, resulting in higher ranks and more organic traffic."},
  { id: 'four', title: 'How long will it take to see increases in traffic with SEO?',
    desc: "Traffic growth is highly linked to ranking gains when you use our top SEO services. As a reputable SEO company, Digital Cappuccino understands that improved rankings precede incremental traffic increases. It is critical to note that obtaining new rankings and traffic takes several months for revisions and indexing before meaningful gains show." },
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