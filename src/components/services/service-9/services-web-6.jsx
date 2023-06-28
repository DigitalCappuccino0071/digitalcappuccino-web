import React from 'react';
import {  } from '../../../data';
import SingleServiceFour from '../../common/single-service-4';
import services_data_5 from "../../../data/service-data-5";

const services_items = services_data_5.filter(ser => ser.service_p_4);

const ServicesWeb9 = () => {
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

export default ServicesWeb9;