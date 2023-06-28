import React from 'react';
import {  } from '../../../data';
import SingleServiceFour from '../../common/single-service-4';
import services_data_2 from "../../../data/service-data-2";
import services_data_4 from "../../../data/service-data-4";

const services_items = services_data_4.filter(ser => ser.service_p_4);

const ServicesWeb8 = () => {
  return (
    <>
      <div className="tp-service-area pt-125">
        <div className="container">
          <div className="row gx-17">
            {services_items.map((ser, i) => {
              return <SingleServiceFour key={i} service={ser} index={i} />
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesWeb8;