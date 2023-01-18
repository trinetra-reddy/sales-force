import React from "react";
import './Aboutbeyondsyntax.scss';
import backgroundimg from "../../images/aboutbeyondimg.jpg";

const Aboutbeyondsyntax = () => {
    return (
        <div className="aboutbeyondsyntax">
            <img src={backgroundimg} alt="backgroundimage" />
            <div className="aboutbeyondsyntax-content">
                <h2>About BeyondSyntaxllc</h2>
                <p>With over 13 years of experience in the IT industry, the founders of Beyond Syntax bring technical skill, 
                    industry insight, business experience and thought leadership to all our service engagements.</p>
                <button>VIEW DETAILS</button>
            </div>
        </div>
    );
};

export default Aboutbeyondsyntax;