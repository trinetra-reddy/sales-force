import React from "react";
import { Link } from "react-router-dom";
import { Footer, Header, Imagecarousel, Ourservices, Aboutbeyondsyntax, Whywithus, Howcanwehelpyou, Ourtechnologies, Ourclients } from "../../components";
import { CONSTANTS } from "../../utils/constants";
import './Home.scss';

const Home = () => {
    return (
        <div>
            <Header />
            <Imagecarousel />
            <Ourservices />
            <Aboutbeyondsyntax />
            <Whywithus />
            <Howcanwehelpyou />
            <Ourtechnologies />
            {/* <Ourclients /> */}
            <Footer /> 
        </div>
    );
};

export default Home;