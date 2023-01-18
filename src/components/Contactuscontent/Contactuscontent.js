import React from "react";
import './Contactuscontent.scss';
import locationicon from "../../images/contactusicon1.png";
import phoneicon from "../../images/contactusicon2.png";

const Contactuscontent = () => {
    return (
        <div className="contactuscontent">
            <div className="contactuscontent-heading">CONTACT US</div>
            <hr class="contactuscontent-heading-ul"></hr>
            <div className="contactuscontent-colums">
                <div className="contactuscontent-colum1">
                    <img src={locationicon} alt="locationicon" />
                    <div className="contactuscontent-colum1-heading">USA ADRESS</div>
                    <div className="contactuscontent-colum1-text">BEYONDSYNTAXLLC,1138 Europena Drive,Brentwood, CA 94513.
                    </div>
                </div>
                <div className="contactuscontent-colum2">
                    <img src={locationicon} alt="locationicon" />
                    <div className="contactuscontent-colum1-heading">INDIA ADRESS</div>
                    <div className="contactuscontent-colum1-text">BEYONDSYNTAXLLC.com
                        XX Hub, xxxxxx Cross Road,
                        xxxxxx street, xxxxxx,
                        INDIA 00000
                    </div>
                </div>
                <div className="contactuscontent-colum3">
                    <img src={phoneicon} alt="locationicon" />
                    <div className="contactuscontent-colum1-heading">PHONE NUMBER</div>
                    <div className="contactuscontent-colum1-text">(USA): +1(408)431-5046
                    (INDIA): +000-00000000
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contactuscontent;