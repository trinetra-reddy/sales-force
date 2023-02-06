import React from "react";
import { Link } from "react-router-dom";
import {
  Footer,
  Header,
  Imagecarousel,
  Ourservices,
  AboutFountainTech,
  ImageTextComponent,
  GetTouch,
  TextComponent
} from "../../components";
import { CONSTANTS } from "../../utils/constants";
import image from "../../images/howcanwehelpimg.jpg";
import partnerimage from "../../images/whywithusimg.jpg";
import "./Home.scss";
import "../../styles/_variables.scss";
const Home = (props) => {
  const implementationdescription =
    "We'll work with you to design and implement a Salesforce solution that meets your specific business needs.  ";
  const customizationdescription =
    "We'll tailor Salesforce to your unique requirements and preferences, so it works the way you want it to.  ";
  const integrationdescription =
    "We'll integrate Salesforce with other systems and platforms to streamline your workflow and improve efficiency.  ";
  const supportdescription =
    "We're here for you after implementation with ongoing support and maintenance to ensure that your Salesforce solution is running smoothly.  ";
  const whypartnerdescription = `The company offers a wide range of Salesforce services, including implementation, customization, integration, and ongoing support.Whether you're looking to automate your sales, marketing or customer service processes, Fountain Tech has the expertise to help you achieve your goals.In addition to its Salesforce capabilities, Fountain Tech also leverages its deep understanding of the fountain industry to offer cutting-edge fountain control systems that allows customers to centrally control and monitor their fountains.`;
  const salesforceprojectdiscription = `A Salesforce project advisory is a service provided by a consulting firm or individual that specializes in helping organizations implement and optimize their use of the Salesforce platform. This may include providing guidance on best practices, helping to design and configure the system to meet the organization's specific needs, and providing training and support to ensure the system is being used effectively. Additionally, a Salesforce project advisory may also help organizations with data migration, integration with other systems, and ongoing maintenance and support`;
  const salesforceclientdiscription = `Salesforce client project implementation is the process of setting up and configuring a Salesforce system for a specific client, based on their unique business requirements and objectives. `;
  const helpyoudescription =
    "Fountain Tech's commitment to client success is evident in its high client retention rate and the long-term partnerships it builds with its clients. Whether you're a small business or a large enterprise, Fountain Tech has the skills and experience to help you unlock the full potential of Salesforce and drive your business forward.";
  return (
    <div>
      <Header />
      <Imagecarousel />
      <Ourservices />
      <ImageTextComponent
        heading="Implementation"
        description={implementationdescription}
        image={image}
        view="viewmore"
      />
      <ImageTextComponent
        heading="Customization"
        description={customizationdescription}
        image={image}
        imgposition="right"
        view="viewmore"
      />
      <ImageTextComponent
        heading="Integration"
        description={integrationdescription}
        image={image}
        view="viewmore"
      />
      <ImageTextComponent
        heading="Support"
        description={supportdescription}
        image={image}
        imgposition="right"
        view="viewmore"
      />
      <AboutFountainTech />
      <ImageTextComponent
        heading="Why Partner With Us"
        description={whypartnerdescription}
        image={partnerimage}
      />
      <ImageTextComponent
        heading="How can we help you?"
        description={helpyoudescription}
        image={image}
        imgposition="right"
      />
      <TextComponent
        heading="Salesforce Project Advisory "
        description={salesforceprojectdiscription}
      />
      <TextComponent
        heading="Salesforce Client Project Implantation "
        description={salesforceclientdiscription}
      />
      <GetTouch bgcolor="grey" />
      {/* <Ourclients /> */}
      <Footer />
    </div>
  );
};

export default Home;
