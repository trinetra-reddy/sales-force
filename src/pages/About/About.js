import React from "react";
import {
  Footer,
  Header,
  TextComponent,
  Aboutbanner,
  ImageTextComponent,
  Visionmission,
  GetTouch,
} from "../../components";
import { CONSTANTS } from "../../utils/constants";
import "./About.scss";
import image from "../../images/howcanwehelpimg.jpg";

const About = () => {
  const helpyoudescription =
    "Fountain Tech's commitment to client success is evident in its high client retention rate and the long-term partnerships it builds with its clients. Whether you're a small business or a large enterprise, Fountain Tech has the skills and experience to help you unlock the full potential of Salesforce and drive your business forward.";
  const whypartnerwithuscontent = `The company offers a wide range of Salesforce services, including implementation, customization, integration, and ongoing support.Whether you're looking to automate your sales, marketing or customer service processes, Fountain Tech has the expertise to help you achieve your goals.In addition to its Salesforce capabilities, Fountain Tech also leverages its deep understanding of the fountain industry to offer cutting-edge fountain control systems that allows customers to centrally control and monitor their fountains.`;
  return (
    <div>
      <Header />
      <Aboutbanner />
      <TextComponent
        heading="WHY PARTNER WITH US ?"
        description={whypartnerwithuscontent}
      />
      <Visionmission />
      <ImageTextComponent
        heading="How can we help you?"
        description={helpyoudescription}
        image={image}
        imgposition="right"
      />
      <GetTouch />
      <Footer />
    </div>
  );
};

export default About;
