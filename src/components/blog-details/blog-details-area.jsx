import { format } from 'date-fns';
import React from 'react';
import BlogSidebar from '../blog/blog-sidebar';

const post_comments = [
  {
    date: '3/05/2022, 3:53:39 PM',
    img: '/assets/img/testimonial/testi-4.2.png',
    name: 'Kristin Watson',
    desc: 'Patient Comments are a collection of comments submitted by viewers in <br /> response to a question posed by a MedicineNet doctor.',
  },
  {
    children: true,
    date: '5/09/2022, 3:59:39 PM',
    img: '/assets/img/testimonial/testi-4.5.png',
    name: 'Farhan Firoz',
    desc: 'Include anecdotal examples of your experience, or things you took notice of that <br /> you feel others would find useful.',
  },
  {
    date: '8/10/2022, 5:59:39 PM',
    img: '/assets/img/testimonial/testi-4.1.png',
    name: 'Salim rana',
    desc: 'Include anecdotal examples of your experience, or things you took notice of that <br /> you feel others would find useful.',
  },
];

const BlogDetailsArea = ({ blog }) => {
  return (
    <>
      <div className="postbox__area pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-12">
              <div className="postbox__wrapper">
                <article className="postbox__item format-image transition-3">
                  <div className="postbox__content">
                    <p>
                      <img
                        className="w-100"
                        src={blog?.imageCover ?? ''}
                        alt={blog?.imageCoverAlt ?? ''}
                      />
                    </p>
                    <div className="postbox__meta">
                      <span>
                        <a href="#">
                          <i className="fal fa-clock"></i>
                          {format(new Date(blog?.updatedAt), 'dd-MM-yyyy')}
                        </a>
                      </span>
                    </div>
                    <div
                      className="postbox__text"
                      dangerouslySetInnerHTML={{ __html: blog?.content ?? '' }}
                    ></div>
                    <div>
                      <a
                        style={{
                          color: '#000!important',
                          border: '1px solid #000',
                          borderRadius: '100px',
                          padding: '10px 20px',
                        }}
                        href="/contact-us"
                      >
                        Enquiry Now
                      </a>
                    </div>
                  </div>
                </article>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4">
              {/* blog sidebar start */}
              <BlogSidebar />
              {/* blog sidebar end */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetailsArea;
