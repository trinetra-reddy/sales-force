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
      <div>
        <h1>
          {selectedService.title}
        </h1>
        <p>
          {selectedService.shortDesc}
        </p>
      </div>
      <GetTouch bgcolor="grey" />
      <Footer />
    </div>
  );
};

export default ServiceDetails;
