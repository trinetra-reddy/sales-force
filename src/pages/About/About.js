import React from "react";
import { Link } from "react-router-dom";
import { Footer, Header, TextComponent, Aboutbanner, Howcanwehelpyou, Visionmission } from "../../components";
import { CONSTANTS } from "../../utils/constants";
import './About.scss';

const About = () => {
    const whypartnerwithuscontent = `The company offers a wide range of Salesforce services,including implementation,customization, integration and ongoing support.Whether you're looking to automate your sales,marketing or customer service processes,Fountain Tech has the expertise to help you achieve your goals.In addition to its Salesforce capabilities,Fountain Tech also leverages its deep understanding of the fountain industry to offer cutting-edge fountain control systems that allows customers to centrally control and monitor their fountains.`;
    return (

        <div>
            <Header />
            <Aboutbanner />
            <TextComponent heading="WHY PARTNER WITH US ?"  description={whypartnerwithuscontent} />
            <Visionmission />
            <Howcanwehelpyou />
            <Footer />
        </div>
    );
};

export default About;