import Link from "next/link";
import React from "react";

import { ContactForm } from "../../ui/ContactForm";
// import ContactForm from '../../ui/ContactForm';

const BlogHero = ({ title, color, imagePath, back_home, alt = false }) => {
    return (
        <section
            className="breadcrumb__area pt-50 pb-5 include-bg p-relative min-vh-50"
            style={{ background: color }}
        >
            <div className="ac-about-shape-img">
                <img src="/assets/img/breadcrum/ab-shape-1.1.jpg" alt="" />
            </div>
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 tp-hero-section-box-five">
                        <div className="breadcrumb__content p-relative z-index-1">
                            <h2 className="breadcrumb__title">{title}</h2>
                            {!back_home && (
                                <Link href="/contact-us">
                                    <a className="tp-btn-white-border">
                                        {"let's Connect"}{" "}
                                        <i className="far fa-arrow-right"></i>
                                    </a>
                                </Link>
                            )}
                            {back_home && (
                                <Link href="/contact-us">
                                    <a className="tp-btn-white-border">
                                        Back to home{" "}
                                        <i className="far fa-arrow-right"></i>
                                    </a>
                                </Link>
                            )}
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        {/* <img
              src={imagePath}
              alt={alt}
              className="w-100 animationGirl"
              data-wow-duration="2s"
              data-wow-delay=".5s"
            /> */}
                        {/* <ContactAreaLandingPage /> */}
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogHero;
