import React from 'react';

const accordion_items = [
  { id: 'one', show: true, title: 'What is video marketing, and how can it benefit my business?',
    desc: " Video marketing is the use of videos to promote and market your business, products, or services. It can help you engage your audience, increase brand awareness, and drive conversions. By incorporating videos into your marketing strategy, you can create more engaging and memorable content that resonates with your target audience."},
  { id: 'two', title: '  What is a GIF, and how can it be used for marketing? ',
    desc: "A GIF is a short, animated image that loops continuously. They can be used in various ways for marketing, such as creating eye-catching social media posts, adding personality to email marketing campaigns, or showcasing product features on your website. GIFs can help you grab your audience's attention, communicate a message quickly and effectively, and increase engagement." },
  { id: 'three', title: 'How can content marketing help my business? ',
    desc: "Content marketing is the creation and distribution of valuable, relevant, and consistent content to attract and retain a clearly defined audience and drive profitable customer action. It can help your business establish credibility, authority, and trust with your target audience. By creating high-qualit content that addresses your audience's pain points and interests, you can position your business as a valuable resource and drive conversions." },
  { id: 'four', title: 'Can video marketing and content marketing work together?',
    desc: "Absolutely! Video marketing and content marketing can complement each other to create a powerful marketing strategy. For example, you can create video content that aligns with your content marketing strategy, such as creating how-to videos that demonstrate your expertise or sharing customer success stories through video testimonials. By integrating video and content marketing, you can enhance your messaging, increase engagement, and drive results." },
  { id: 'five', title: ' How can I measure the success of my video and content marketing efforts?',
    desc: "To measure the success of your video and content marketing efforts, you can track various metrics such as views, engagement rates, click-through rates, conversions, and ROI. By analyzing these metrics, you can identify what's working well and what can be improved, and make data-driven decisions to optimize your strategy for better results." },
]

const AccordionArea = () => {
  return (
    <>
      <div className="sd-accordio-area grey-bg pt-130 pb-130">
        <div className="container">
          <div className="row">
            <div className="col-xl-7">
              <h3 className="tp-title-sm mb-90"> Solutions: all your questions answered</h3>
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