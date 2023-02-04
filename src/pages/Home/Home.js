import React from "react";
import { Link } from "react-router-dom";
import { Footer, Header, Imagecarousel, Ourservices ,AboutFountainTech, Aboutbeyondsyntax, Whywithus, Howcanwehelpyou, Ourtechnologies, Ourclients, TextComponent } from "../../components";
import { CONSTANTS } from "../../utils/constants";
import './Home.scss';

const Home = () => {
    const salesforceprojectdiscription=`A Salesforce project advisory is a service provided by a consulting firm or individual that specializes in helping organizations implement and optimize their use of the Salesforce platform. This may include providing guidance on best practices, helping to design and configure the system to meet the organization's specific needs, and providing training and support to ensure the system is being used effectively. Additionally, a Salesforce project advisory may also help organizations with data migration, integration with other systems, and ongoing maintenance and support`;
    const salesforceclientdiscription=`Salesforce client project implementation is the process of setting up and configuring a Salesforce system for a specific client, based on their unique business requirements and objectives. `;

    return (
        <div>
            <Header />
            <Imagecarousel />
            <Ourservices />
            <AboutFountainTech />
            <Whywithus />
            <Howcanwehelpyou />
            <Ourtechnologies />
            <TextComponent heading="Salesforce Project Advisory " description={salesforceprojectdiscription}/>
            <TextComponent heading="Salesforce Client Project Implantation " description={salesforceclientdiscription}/>
            {/* <Ourclients /> */}
            <Footer /> 
        </div>
    );
};

export default Home;