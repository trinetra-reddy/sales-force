import React from "react";
import "./CardComponent.scss";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const CardComponent = (props) => {
  const navigate = useNavigate();

  const navigateToServiceDetails = () => {
    navigate(`/services/${props.id}`);
  }
  return (
    <>
      <div className="card-main pointer" onClick={navigateToServiceDetails}>
        <div className="card-icon-wrapper">
          <img className="card-icon" src={props.icon} alt="Icon"></img>
        </div>
        <div className="card-head-wrapper">
          <Link className="card-head" to="/services/1">
            {props.heading}
          </Link>
        </div>
        <div className="card-description-wrapper">
          <p className="card-description">{props.description}</p>
        </div>
      </div>
    </>
  );
};
export default CardComponent;
