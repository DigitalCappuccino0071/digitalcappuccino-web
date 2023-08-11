import React from 'react';

const accordion_items = [
  { id: 'one', show: true, title: 'What is a Website Development Company do ?',
    desc: "A top web development company may assist in the creation of websites and apps for personal or commercial use. The procedures vary, but they always entail goal alignment, design selection, and feature integration. Regular check-ins during development guarantee that your feedback shapes the final product, giving the intended ROI." },
  { id: 'two', title: 'How long does it take to build a website?',
    desc: " If you hire a competent website development business, it will take 1 to 4 months from start to finish for basic information websites with limited functionality. Website builders can help you develop your website faster, but they are difficult to rely on because you must handle everything from start. Expert advice or opinion may aid in obtaining better results." },
  { id: 'three', title: 'Could my Google ranking be affected by website redesign or redevelopment?',
    desc: " Using a competent website design business ensures that your ranking is affected as little as possible. During redesigns, our web development business follows a strict checklist. This method not only maintains ranking but also increases visibility. Working with the best website design firm can help your business stand out with updated, optimised designs." },
  { id: 'four', title: 'How Can a Skillfully Crafted Website Benefit My Business?',
    desc: "A well-designed website dramatically improves user experience, which is a critical aspect in increasing conversions. Building your site with a well planned style instills a sense of visual satisfaction in visitors and consumers, enticing a growing stream of potential clients. The first step towards success is to captivate and engage visitors, which is accomplished through the establishment of a precisely designed website by the best website designing business." }
]

const AccordionArea = () => {
  return (
    <>
      <div className="sd-accordio-area grey-bg pt-30 pb-30">
        <div className="container">
          <div className="row">
            <div>
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