import React from "react";
import './Weoffer.scss';
import weofferbg from "../../images/backgroundimg.jpg";
import icon1 from "../../images/weoffericon1.png";
import icon2 from "../../images/weoffericon2.png";
import icon3 from "../../images/weoffericon3.png";

const Weoffer = () => {
    return (
        <div className="weoffer">
            <img src={weofferbg} alt="Weofferbgimage" />
            <div className="weoffer-container">
                <div className="weoffer-heading">We offer Staffing solutions in three modes which are as follows:</div>
                <div className="weoffer-content">
                    <div className="weoffer-content-wraper">
                        <img src={icon1} alt="weoffericon1" />
                        <div className="weoffer-content-wraper-heading">Permanent Staffing</div>
                        <div className="weoffer-content-wraper-paragraph">Here we permanently place the candidate at the client’s place.
                            Permanent Staffing is where a candidate is employed for a full-time position</div>
                    </div>
                    <div className="weoffer-content-wraper">
                        <img src={icon2} alt="weoffericon2" />
                        <div className="weoffer-content-wraper-heading">Temporary Staffing</div>
                        <div className="weoffer-content-wraper-paragraph">Here we permanently place the candidate at the client’s place.
                            Permanent Staffing is where a candidate is employed for a full-time position</div>
                    </div>
                    <div className="weoffer-content-wraper">
                        <img src={icon3} alt="weoffericon3" />
                        <div className="weoffer-content-wraper-heading">Contract Staffing</div>
                        <div className="weoffer-content-wraper-paragraph">Here we permanently place the candidate at the client’s place.
                            Permanent Staffing is where a candidate is employed for a full-time position</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Weoffer;