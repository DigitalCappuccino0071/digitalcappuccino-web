import React from "react";
import {} from "../../../../data";
import SingleServiceFour from "../../../common/single-service-4";
import services_data_web from "../../../../data/services-data-website-development";
import services_data_seo from "../../../../data/services-data-seo";

const services_items = services_data_seo.filter((ser) => ser.service_p_4);

const ServicesWeb = () => {
  return (
    <div>
      <div className="tp-service-area pt-50 mb-50">
        <div className="container">
          <div className="row gx-17">
            <div className="project-section-box-two text-center">
              <h2 className="tp-title-sm">Service We Provide</h2>
            </div>
            {services_items.map((ser, i) => {
              return <SingleServiceFour key={i} service={ser} index={i} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesWeb;
