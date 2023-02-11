import React, { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import {
  Footer,
  Header,
  GetTouch,
  Servicesbanner,
} from "../../components";
import {Services} from "../../utils/services";

import "./ServiceDetails.scss";


const ServiceDetails = (props) => { 
    let { id } = useParams();
    const [selectedService, setSelectedService] = useState({});
    useEffect(() => {
      const service = Services.find(val => val.id == id);
      console.log('service:', service);
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
        <hr class="ServiceDetails-heading-ul"></hr>
        <p className="ServiceDetails-description">
          {selectedService.shortDesc}
        </p>
      </div>
      <GetTouch bgcolor="grey" />
      <Footer />
    </div>
  );
};

export default ServiceDetails;
