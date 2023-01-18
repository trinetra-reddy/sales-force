import React from "react";
import { Link } from "react-router-dom";
import { Footer, Header, Aboutbanner, Howcanwehelpyou, Whypartnerwithus, Visionmission } from "../../components";
import { CONSTANTS } from "../../utils/constants";
import './About.scss';

const About = () => {
    return (
        <div>
            <Header />
            <Aboutbanner />
            <Whypartnerwithus />
            <Visionmission />
            <Howcanwehelpyou />
            <Footer />
        </div>
    );
};

export default About;