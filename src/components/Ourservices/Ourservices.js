import React from "react";
import './Ourservices.scss';
import ourservicesimg_1 from "../../images/ourservicesimg_1.jpg";
import ourservicesimg_2 from "../../images/ourservicesimg_2.jpg";
import ourservicesimg_3 from "../../images/ourservicesimg_3.jpg";



const Ourservices = () => {
    return (
        <div className="ourservices">
            <div className="ourservices-heading">Ou<span className="com">r s</span><span className="mid">er</span><span className="com">vic</span>es</div>
            <div class="ourservices-heading-ul"></div>
            <div className="ourservices-container-main">
                <div className="ourservices-container">
                    <img src={ourservicesimg_1}  alt="ourserviceimg_1" />
                    <div className="ourservices-content">
                        <h1>Salesforce CRM </h1>
                        <p>Over the past decade, the demand for quality IT candidates has grown tremendously as technology has emerged as a 
                            fundamental component to a business’s success. ,
                         </p>
                        <button className="ourservices-content-btn">VIEW MORE</button>
                    </div>
                </div>
                <div className="ourservices-container">
                    <img src={ourservicesimg_2}  alt="ourserviceimg_2" />
                    <div className="ourservices-content">
                        <h1>Web Technologies </h1>
                        <p>Beyond Syntax LLC is a full-service provider of contingent staffing in support of technology solutions 
                            for industry leading Enterprise Technology Projects.  </p>
                        <button className="ourservices-content-btn">VIEW MORE</button>
                    </div>
                </div>
                <div className="ourservices-container">
                    <img src={ourservicesimg_3}  alt="ourserviceimg_3" />
                    <div className="ourservices-content">
                        <h1>Mulesoft</h1>
                        <p>Beyond Syntax LLC is a full-service provider of contingent staffing in support of technology solutions 
                            for industry leading Enterprise Technology Projects. </p>
                        <button className="ourservices-content-btn">VIEW MORE</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ourservices;