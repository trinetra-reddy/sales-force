import React, { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import {
  Footer,
  Header,
  GetTouch,
  Servicesbanner,
} from "../../components";
import {ServicesList} from "../../utils/services";

import "./ServiceDetails.scss";


const ServiceDetails = (props) => { 
  
    let { id } = useParams();
    const [selectedService, setSelectedService] = useState({});
    useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      
      const service = ServicesList.find(val => val.id == id);
      if(service) {
        setSelectedService(service);
      }
    },[]);
  return (
    <div>
      <Header />
      <Servicesbanner />
      <div className="ServiceDetails-main">
        <h1 className="ServiceDetails-heading">
          {selectedService.title}
        </h1>
        <hr className="ServiceDetails-heading-ul"></hr>
        {selectedService.description && selectedService.description.map((val, index) => (
          <p className="ServiceDetails-description" key={index}>
            {val}
          </p>
        ))}
      </div>
      <GetTouch bgcolor="grey" />
      <Footer />
    </div>
  );
};

export default ServiceDetails;
