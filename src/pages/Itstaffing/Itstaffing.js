import React from "react";
import { Link } from "react-router-dom";
import { Footer, Header, Itstaffingbanner, Itstaffingcontent, RpoMps, Weoffer } from "../../components";
import { CONSTANTS } from "../../utils/constants";
import './Itstaffing.scss';

const Itstaffing = () => {
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

export default Itstaffing;