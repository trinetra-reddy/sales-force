import React from "react";
import './Ourservices.scss';
import ourservicesimg_1 from "../../images/ourservicesimg_1.jpg";
import ourservicesimg_2 from "../../images/ourservicesimg_2.jpg";
import ourservicesimg_3 from "../../images/ourservicesimg_3.jpg";



const Ourservices = () => {
    return (
        <div className="ourservices">
            <div className="ourservices-heading">Our services</div>
            <hr class="ourservices-heading-ul"></hr>
            <div className="ourservices-container-main">
                <div className="ourservices-container">
                    <img src={ourservicesimg_1}  alt="ourserviceimg_1" />
                    <div className="ourservices-content">
                        <h1>IT Staffing</h1>
                        <p>Over the past decade, the demand for quality IT candidates has grown tremendously as technology has emerged as a 
                            fundamental component to a business’s success. ,
                         </p>
                        <button className="ourservices-content-btn">VIEW MORE</button>
                    </div>
                </div>
                <div className="ourservices-container">
                    <img src={ourservicesimg_2}  alt="ourserviceimg_2" />
                    <div className="ourservices-content">
                        <h1>Data & Infrastructure</h1>
                        <p>Beyond Syntax LLC is a full-service provider of contingent staffing in support of technology solutions 
                            for industry leading Enterprise Technology Projects.  </p>
                        <button className="ourservices-content-btn">VIEW MORE</button>
                    </div>
                </div>
                <div className="ourservices-container">
                    <img src={ourservicesimg_3}  alt="ourserviceimg_3" />
                    <div className="ourservices-content">
                        <h1>Enterprise CMS</h1>
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