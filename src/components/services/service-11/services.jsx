import React from 'react';
import { services_data } from '../../../data';
import SingleServiceThree from '../../common/single-service-3';
import services_data_7 from "../../../data/service-data-7";

const services_items = services_data_7.filter(item => item.service_p_3);

const ServicesWeb11 = () => {
  return (
    <>
      <div className="tp-service-area-two p-relative black-bg pt-125 pb-145 z-index-1">
         <div className="container">
            <div className="row gx-12">
              {services_items.map((item,i) => (
                <SingleServiceThree key={i} service={item} />
              ))}
            </div>
         </div>
      </div> 
    </>
  );
};

export default ServicesWeb11;