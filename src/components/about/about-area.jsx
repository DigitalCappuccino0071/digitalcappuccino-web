import React from 'react';
import useModal from '../../hooks/use-modal';
import VideoModal from '../common/modals/modal-video';

const contents = {
  title:'Digital Cappuccino brews the right cup',
  video_title:'Promotional Video',
  video_id:'qqwmN2dQlck',
  right_text_1:"Welcome to digital Cappuccino where we blend creativity, strategy, and technology to brew up digital marketing solutions that energize your brand. Just like a freshly brewed cappuccino, our digital marketing strategies are crafted to awaken your brand and engage your audience. We specialize in a wide range of digital marketing services, including search engine optimization (SEO), pay-per-click (PPC) advertising, social media marketing, email marketing, content marketing, and more. Our goal is to help our clients achieve their marketing objectives and drive results. So why settle for a mediocre cup of joe when you can have a premium, hand-crafted digital marketing solution? Contact us today to learn more about how our digital marketing strategies can " +
      "help your brand stand out and grow.",
  client_icon:'/assets/img/about/testi-7.png',
  client_name:'Digital Marketing is all about hitting ',
  desc:"Our creative, innovative, analytical campaigns knock on the " +
      "right doors for attaining what one can drool on.",
  about_img:'/assets/img/about/about_us.png',
}
const {about_img,client_icon,client_name,client_title,desc,right_text_1,right_text_2,title,video_id,video_title} = contents;

const AboutArea = () => {
  const { isVideoOpen, setIsVideoOpen } = useModal();
  return (
    <>
      <div className="ac-about-content-area pt-30">
        <div className="container">
          <div className="ac-border-bottom ac-bottom-space">
            <div className="row">
              <div className="col-xl-6 col-lg-6 wow tpfadeLeft" data-wow-duration=".3s" data-wow-delay=".5s">
                <div className="ac-about-left">
                  <h3 className="ac-ab-title"><a href="#">{title}</a></h3>
                  <div className="ac-play-button">
                    <button onClick={() => setIsVideoOpen(true)} className="popup-video">
                      <i className="far fa-play"></i></button>
                    <span>{video_title}</span>
                  </div>
                </div>
              </div>
              <div className="col-xl- col-lg-6 wow tpfadeRight" data-wow-duration=".5s" data-wow-delay=".7s">
                <div className="ac-about-right">
                  <p className="pb-25">{right_text_1}</p>
                  <p>{right_text_2}</p>
                </div>
              </div>
            </div>
          </div>
          {/*<div className="row ac-testimonial-space">*/}
          {/*  <div className="col-xl-6 col-lg-6 wow tpfadeLeft" data-wow-duration=".3s" data-wow-delay=".5s">*/}
          {/*    <div className="ac-testimonial-info">*/}
          {/*      <div className="actestimonial">*/}
          {/*        <div className="actestimonial__icon">*/}
          {/*          <img src={client_icon} alt="" />*/}
          {/*        </div>*/}
          {/*        <div className="actestimonial__position">*/}
          {/*          <h4 className="ac-client-name"><a href="#">{client_name}</a></h4>*/}
          {/*          <span>{client_title}</span>*/}
          {/*        </div>*/}
          {/*        <div className="actestimonial__paragraph">*/}
          {/*          <p>{desc}</p>*/}
          {/*        </div>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*  <div className="col-xl-6 col-lg-6 wow tpfadeRight" data-wow-duration=".5s" data-wow-delay=".7s">*/}
          {/*    <div className="ac-testimonial-right">*/}
          {/*      <img src={about_img} alt="" />*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}
        </div>
      </div>

      {/* video modal start */}
      <VideoModal isVideoOpen={isVideoOpen} setIsVideoOpen={setIsVideoOpen} videoId={video_id} />
      {/* video modal end */}
    </>
  );
};

export default AboutArea;
