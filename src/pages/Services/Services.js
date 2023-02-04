import React from "react";
import { Link } from "react-router-dom";
import { Footer, Header, Itstaffingbanner, Itstaffingcontent, RpoMps, Weoffer } from "../../components";
import { CONSTANTS } from "../../utils/constants";
import './Services.scss';

const Services = () => {
    return (
        <div>
            <Header />
            <Itstaffingbanner />
            <Itstaffingcontent />
            <Weoffer />
            <RpoMps />
            <Footer />
        </div>
    );
};

export default Services;