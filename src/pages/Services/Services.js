import React from "react";
import { Link } from "react-router-dom";
import {
  Footer,
  Header,
  GetTouch,
  Servicesbanner,
  TextComponent,
  CardComponent,
} from "../../components";
import { CONSTANTS } from "../../utils/constants";
import "./Services.scss";
import icon from "../../images/contactUsHomeIcon.png";

const Services = (props) => {
  const AppDevDescription =
    "Salesforce allows to build and deploy custom apps on its platform, Salesforce Development Services include building and deploying these custom apps to extend the functionality of the system.";
  const LightingDescription =
    "Salesforce Lightning is a user interface framework that allows for the development of custom components and interfaces, these services include developing lightning components, customizing lightning pages, and building custom lightning apps.";
  const ApexDescription =
    "Apex is a proprietary programming language provided by Salesforce, it allows to build robust back-end logic, triggers and Web Services. Visualforce is a framework that allows building custom pages and components on Salesforce platform. These services include developing custom Apex and Visualforce code to extend the functionality of the system.";
  const SupportDescription =
    "These services include providing ongoing support and maintenance to ensure the system is running smoothly and addressing any issues that may arise.";
  const IntegrateDescription =
    "Integrating Salesforce with other systems is the process of connecting Salesforce with other software and platforms that an organization uses to ensure data is seamlessly shared between them. The main goal of integrating Salesforce with other systems is to automate business processes, reduce data entry errors and data duplication, and improve the overall efficiency of the organization.";

  return (
    <div>
      <Header />
      <Servicesbanner />
      <div className="Servicecards">
        <CardComponent
          icon={icon}
          heading="Lightning Development"
          description={LightingDescription}
        />
        <CardComponent
          icon={icon}
          heading="Apex and Visualforce Development"
          description={ApexDescription}
        />
        <CardComponent
          icon={icon}
          heading="Support and Maintenance"
          description={SupportDescription}
        />
        <CardComponent
          icon={icon}
          heading="
        Integrate with other systems 
        "
          description={IntegrateDescription}
        />
        <CardComponent
          icon={icon}
          heading="App Development"
          description={AppDevDescription}
        />
      </div>
      <GetTouch bgcolor="grey" />
      <Footer />
    </div>
  );
};

export default Services;
