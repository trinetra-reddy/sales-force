import React from "react";
import './Itstaffingcontent.scss';
import itstaffingcontentimg from "../../images/backgroundimg.jpg"
import icon1 from "../../images/itstaffingcontenticon1.png";
import icon2 from "../../images/itstaffingcontenticon2.png";

const Itstaffingcontent = () => {
    return (
        <div className="itstaffingcontent">
            <div className="itstaffingcontent-1">
                <div className="itstaffingcontent-1-heading">IT STAFFING</div>
                <hr class="itstaffingcontent-1-heading-ul"></hr>
                <div className="itstaffingcontent-1-paragraph">For any IT (or) Non IT Business to be highly successful, there is only one way that can guarantee optimum results in terms of both overall growth and profit maximization of that particular business and that is “MANPOWER”.</div>
            </div>
            <div className="itstaffingcontent-2">
                <div className="itstaffingcontent-2-content">
                    <div className="itstaffingcontent-2-content-heading"> How Can We Help You ?</div>
                    <hr class="itstaffingcontent-2-content-heading-ul"></hr>
                    <div className="itstaffingcontent-2-content-paragraph">Beyond Syntax LLC is founded to serve its customers with a core set of values. These core values guide our actions as we engage with our customers, employees, partners, and all whom we serve. We believe strongly in the value of high-quality processes to deliver consistent results,
                     and a continuous improvement process to ensure we can be nimble and adopt quickly to technology, industry and market change.
                        Our areas of specialization include Technical Staffing, Training to the Employees, Application Development, Business Strategy, Human Resources and Talent Acquisition, Information Technology, and Technical Support.
                    </div>
                </div>
                <div className="itstaffingcontent-2-image">
                    <img src={itstaffingcontentimg} alt="itstaffingcontentimage" />
                </div>
            </div>
            <div className="itstaffingcontent-3">
                <div className="itstaffingcontent-3-col-1">
                    <img src={icon1} alt="itstaffingcontenticon1" />
                    <div className="itstaffingcontent-3-col-1-heading">We provide the candidates in the following streams</div>
                    <div className="itstaffingcontent-3-col-1-paragraph">
                        <ul>
                            <li>Our core service offering is providing IT staff augmentation services that help our clients execute large-scale technology initiatives. We have proven experience in delivering qualified, reliable IT professionals at an unbeatable value.
                                We are the #1 provider of contract</li>
                            <li>IT staffing in niche skill areas across the spectrum of information technology has resulted in hundreds of successful projects in several key areas, including application development, software testing, project management, systems engineering, business intelligence,enterprise architecture and security.</li>
                            <li>Our core service offering is providing IT staff augmentation services that help our clients execute large-scale technology initiatives. We have proven experience in delivering qualified, reliable IT professionals at an unbeatable value.
                                We are the #1 provider of contract</li>
                            <li>IT staffing in niche skill areas across the spectrum of information technology has resulted in hundreds of successful projects in several key areas, including application development, software testing, project management, systems engineering, business intelligence,enterprise architecture and security.</li>
                        </ul> </div>
                </div>
                <div className="itstaffingcontent-3-col-2">
                    <img src={icon2} alt="itstaffingcontenticon2" />
                    <div className="itstaffingcontent-3-col-2-heading">
                        Direct Hire
                        IT Staffing</div>
                    <div className="itstaffingcontent-3-col-2-paragraph">
                        <ul>
                            <li>Our core service offering is providing IT staff augmentation services that help our clients execute large-scale technology initiatives. We have proven experience in delivering qualified, reliable IT professionals at an unbeatable value.
                                We are the #1 provider of contract</li>
                            <li>IT staffing in niche skill areas across the spectrum of information technology has resulted in hundreds of successful projects in several key areas, including application development, software testing, project management, systems engineering, business intelligence,enterprise architecture and security.</li>
                            <li>Our core service offering is providing IT staff augmentation services that help our clients execute large-scale technology initiatives. We have proven experience in delivering qualified, reliable IT professionals at an unbeatable value.
                                We are the #1 provider of contract</li>
                            <li>IT staffing in niche skill areas across the spectrum of information technology has resulted in hundreds of successful projects in several key areas, including application development, software testing, project management, systems engineering, business intelligence,enterprise architecture and security.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Itstaffingcontent;