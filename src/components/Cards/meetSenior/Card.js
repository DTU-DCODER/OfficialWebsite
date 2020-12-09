import React, {useEffect} from "react";
import {Card, CardImg, CardBody, CardTitle, CardText, Button} from "reactstrap";
import "./style.css";

const CardCom = (props) => {
  function NewlineText(props) {
    const text = props.text;
    return text.split("\n").map((str) => <p>{str}</p>);
  }

  return (
    <Card className={"col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12 senior-card-main"}>
      <div className="senior-card-container ">
        <div className={"body-container"}>
          <div className={"left-container"}>
            <div className={"senior-card-img-container"}>
              <img className="senior-card-img" src={props.src} alt="profileImg"/>
            </div>
            <h6 className="no-mp senior-name">{props.name}</h6>
            <h6 className="no-mp senior-college">{props.company}</h6>
          </div>
        </div>
        <div className={"right-container"}>
          <div className={"review-content"}>
            <p className="">
              {props.content ? <NewlineText text={props.content}/> : "Hello"}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CardCom;
