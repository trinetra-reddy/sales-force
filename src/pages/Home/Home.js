import React from "react";
import { Link } from "react-router-dom";
import { Footer, Header, Imagecarousel, Ourservices, Aboutbeyondsyntax, Whywithus, Howcanwehelpyou, Ourtechnologies,ImageTextComponent, Ourclients } from "../../components";
import { CONSTANTS } from "../../utils/constants";
import howcanwehelpimg from "../../images/howcanwehelpimg.jpg";
import './Home.scss';
import "../../styles/_variables.scss";
const Home = (props) => {
    
const implementationdescription = "We'll work with you to design and implement a Salesforce solution that meets your specific business needs.";
const customizationdescription = "We'll tailor Salesforce to your unique requirements and preferences, so it works the way you want it to.";
    return (
        <div>
            <Header />
            <Imagecarousel />
            <Ourservices />
            <Aboutbeyondsyntax />
            <Whywithus />
            <Howcanwehelpyou />
            <Ourtechnologies />
            <ImageTextComponent  name="Implementation" desc={implementationdescription} imgPath={howcanwehelpimg}/>
            <ImageTextComponent  name="Customization" desc={customizationdescription} imgPath={howcanwehelpimg} imgPosition="right" bgcolor='$grey'/>
            {/* <Ourclients /> */}
            <Footer /> 
        </div>
    );
};

export default Home;