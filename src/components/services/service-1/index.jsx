import React, { useEffect } from "react";
import { FooterFour, FooterThree, Header, Wrapper } from "../../../layout";
import { animationCreate } from "../../../utils/utils";
import Breadcrumb from "../../common/breadcrumb/breadcrumb";
import CtaTwo from "../../common/cta/cta-2";
import ServiceArea from "./service-area";
import CardDetails from "./card-details";

const Service = () => {
    useEffect(() => {
        setTimeout(() => {
            animationCreate();
        }, 500);
    }, []);

    return (
        <Wrapper>
            <Header />
            <Breadcrumb
                title={"Our Services"}
                color={"#fec4c559"}
                imagePath={"/assets/img/service/service-girl.png"}
            />
            <ServiceArea />
            {/* <CardDetails /> */}
            {/* <CaseArea/> */}
            {/* <TestimonialArea style_2={true}/> */}
            <CtaTwo />
            {/* <FooterThree /> */}
            <FooterFour />
        </Wrapper>
    );
};

export default Service;
