import Link from "next/link";
import React from "react";
import { blog_data } from "../../../data";
import { Document, HighlightFive, HighlightFour } from "../../../svg";
import BlogForm from "../../forms/blog-form";

const blog_items = blog_data.filter((blog) => blog.home_5);

const blog_contents = {
  shapes: ["bp-chose-5.2.png", "bp-chose-5.3.png", "hero-shape-5.2.png"],
  subtitle: "Our Work",
  title: (
    <>
      Our <span className="tp-section-highlight"> Work </span>
    </>
  ),
  contact_subtitle: "Fill & Brew",
  contact_title: (
    <>
      <span className="tp-section-highlight"> Contact us </span>{" "}
    </>
  ),
};

const { contact_subtitle, contact_title, shapes, subtitle, title } =
  blog_contents;

const BlogArea = () => {
  return (
    <div
      id="Our-Work"
      className="tp-blog-area tp-blog-bs-space yellow-bg pt-30 mr-130 ml-130 grey-bg p-relative"
    >
      {shapes.map((s, i) => (
        <div key={i} className={`bp-blog-shape-${i + 1} d-none d-lg-block`}>
          <img src={`/assets/img/blog/${s}`} alt="" />
        </div>
      ))}
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-7 col-12">
            <div className="tp-blog-section-box pb-35">
              <h5 className="tp-subtitle tp-subtitle-before-color">
                {subtitle}
              </h5>
              <h2 className="tp-title-sm">{title}</h2>
            </div>
            {blog_items.map((blog) => {
              const { date, id, img, meta_tag, link, title,alt } = blog;
              return (
                <div key={id} className="tpblog mb-50">
                  <div className="tpblog__item d-flex align-items-center">
                    <div className="tpblog__thumb fix">
                     <a target="_blank" href={link} rel="noreferrer">
                      <img src={img} alt={alt} />
                    </a>
                      {/*<a>*/}
                      {/*  <img src={img} target="_blank" href={link} rel="noreferrer" alt="" />*/}
                      {/*</a>*/}
                    </div>
                    <div className="tpblog__info">
                      <div className="tpblog__meta d-flex align-item-center">
                        <h4 className="tp-blg-sm-title mb-0">
                          <a href="#">{meta_tag}</a>
                        </h4>
                        <span>
                          <b>{date}</b>
                        </span>
                      </div>
                      <div>
                        <h3 className="tp-blg-lg-title">
                          <a target="_blank" href={link} rel="noreferrer">
                            {title}
                          </a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="col-xl-6 col-lg-5 tp-contact-space col-12 ">
            <div className="tp-border-left">
              <div className="tp-blog-section-box pb-35">
                <h5 className="tp-subtitle tp-subtitle-before-color">
                  {contact_subtitle}
                </h5>
                <h2 className="tp-title-sm">{contact_title}</h2>
              </div>
              <div className="tpcontact">
                <div className="tpcontact__heading">
                  <h4 className="tp-contact-title">
                    <Document />
                    Fill the form
                  </h4>
                </div>
                <div className="tpcontact__form">
                  <BlogForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogArea;
