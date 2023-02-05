import React from "react";
import { Link } from "react-router-dom";
import { Footer, Header, Servicesbanner,} from "../../components";
import { CONSTANTS } from "../../utils/constants";
import './Services.scss';

const Services = () => {
    return (
        <div>
            <Header />
            <Servicesbanner />
            <Footer />
        </div>
    );
};

export default Services;