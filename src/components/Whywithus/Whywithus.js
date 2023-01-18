import React from "react";
import './Whywithus.scss';
import image from "../../images/whywithusimg.jpg";

const Whywithus = () => {
    return (
        <div className="whywithus">
            <div className="whywithus-image">
                <img src={image} alt="image" />
            </div>
            <div className="whywithus-content">
                <div className="whywithus-content-heading">
                    Why Partner with Us
                </div>
                <div className="whywithus-content-paragraph">
                    Beyond Syntax LLC is a full-service provider of contingent staffing in support of technology solutions for industry leading Enterprise Technology Projects.
                    Our areas of specialization include Technical Staffing, Training to the Employees, Application Development, Business Strategy,
                    Human Resources and Talent Acquisition, Information Technology, and Technical Support.
                </div>
            </div>
        </div>
    );
};

export default Whywithus;