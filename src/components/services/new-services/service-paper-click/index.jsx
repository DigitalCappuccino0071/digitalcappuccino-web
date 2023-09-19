import React, { useEffect } from "react";
import { FooterFour, FooterThree, Header, Wrapper } from "../../../../layout";
import { animationCreate } from "../../../../utils/utils";
import Breadcrumb from "../../../common/breadcrumb/breadcrumb";
import CtaTwo from "../../../common/cta/cta-2";
import ServicesWeb from "./services-web";
import CardWeb from "./Card-web";
import AccordionArea from "./accordion";
import TestimonialArea from "./testimonial-area";
import ClientFeedback from "../../../homes/home-5/client-feedback";
import Head from "next/head";

const ServicePaperClick = () => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <Head>
        <title>Skilled PPC Expert in Gurgaon - Digital Cappuccino</title>
        <meta
          name="description"
          content="Looking for a PPC expert in Gurgaon? Look no further! Our team of experienced PPC professionals has a proven track record of delivering outstanding results worldwide"
          />
           <link rel="canonical" href="https://www.digitalcappuccino.com/ppc-marketing-company-gurgaon"/>
          <meta property="og:title" 
          content="Skilled PPC Expert in Gurgaon - Digital Cappuccino" />
          <meta
            property="og:description"
            content="Looking for a PPC expert in Gurgaon? Look no further! Our team of experienced PPC professionals has a proven track record of delivering outstanding results worldwide"
          />
           <meta
            property="og:url"
            content="https://www.digitalcappuccino.com/ppc-marketing-company-gurgaon"
          />
          <meta
            property="og:image"
            content="https://www.digitalcappuccino.com/assets/img/service/5.png"
        />
      </Head>
      <Header />
      <Breadcrumb
        color={"#fec4c559"}
        imagePath={"/assets/img/service/5.png"}
        title={"Digital Cappuccino: PPC Marketing Company in Gurgaon"}
        alt="PPC Marketing Company in Gurgaon"
      />
      <CardWeb />
      <ServicesWeb />
      {/*<TestimonialArea style_2={true}/>*/}
      <ClientFeedback />
      <AccordionArea />
      <CtaTwo />
      <FooterFour />
    </Wrapper>
  );
};

export default ServicePaperClick;
