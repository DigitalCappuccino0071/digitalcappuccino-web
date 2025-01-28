import Link from "next/link";
import React from "react";
import { services_data } from "../../../data";

const ServiceArea = () => {
    return (
        <>
            <div className="tp-service-area pt-110 pb-130">
                <div className="container">
                    <div className="row">
                        {services_data.map((service, i) => {
                            const {
                                delay,
                                duration,
                                id,
                                img,
                                title,
                                border_effect,
                                path,
                            } = service;
                            return (
                                <Link
                                    key={id}
                                    href={service?.path ?? ""}
                                    style={{ cursor: "pointer" }}
                                >
                                    <div
                                        key={id}
                                        className="col-xl-3 col-lg-4 col-md-6 wow tpfadeUp"
                                        data-wow-duration={duration}
                                        data-wow-delay={delay}
                                    >
                                        <div
                                            className={`tp-sv-border-effect ${border_effect}`}
                                        >
                                            <div
                                                className={`tp-service-item-four sv-1-border
                  ${i + 1 === 8 ? "sv-color-1" : `sv-color-${i + 1}`} mb-30`}
                                            >
                                                <div className="tp-service-item-four__img  mb-40">
                                                    <img src={img} alt="" />
                                                </div>
                                                <div className="tp-service-item-four__title">
                                                    <h3 className="tp-sv-sm-title">
                                                        {/* <Link href={`/service-details/${id}`}>
                          <a>{title}</a>
                        </Link> */}
                                                        {/* <a href={path}> */}
                                                        {title}
                                                        {/* </a> */}
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceArea;
