import React from "react";
import { Link } from "react-router-dom";
import { Footer, Header, Servicesbanner, Itstaffingcontent, RpoMps, Weoffer } from "../../components";
import { CONSTANTS } from "../../utils/constants";
import './Services.scss';

const Services = () => {
    return (
        <div>
            <Header />
            <Servicesbanner />
            <Itstaffingcontent />
            <Weoffer />
            <RpoMps />
            <Footer />
        </div>
    );
};

export default Services;