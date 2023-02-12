import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Footer,
  Header,
  GetTouch,
  Servicesbanner,
  CardComponent,
} from "../../components";
import { ServicesList } from "../../utils/services";
import "./Services.scss";
import icon from "../../images/contactUsHomeIcon.png";

const Services = (props) => {
  useEffect(()=>{
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  },[]);
  return (
    <div>
      <Header />
      <Servicesbanner />

      <div className="Servicecards">
        {ServicesList.map((val, index) => (
          <CardComponent
            key={index}
            icon={icon}
            heading={val.title}
            description={val.shortDesc}
            id={index + 1}
          />
        ))}
      </div>
      <GetTouch bgcolor="grey" />
      <Footer />
    </div>
  );
};

export default Services;
