import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardText, Button } from "reactstrap";
import "./style.css";

const CardCom = () => {
	return (
		<Card className={"col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12 senior-card-main"}>
			<div className="senior-card-container ">
				<div className={"body-container"}>
					<div className={"left-container"}>
						<div className={"senior-card-img-container"}>
							<img className="senior-card-img" src="./assets/user.png" alt="profileImg" />
						</div>
						<h6 className="no-mp senior-name">This is A Junk Name</h6>

						<h6 className="no-mp senior-college">Company</h6>
					</div>
				</div>
				<div className={"right-container"}>
					<h5 className="review-content-heading">Review</h5>
					<div className={"review-content"}>
						<p className="">
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
							industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
							scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
							into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
							release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
							software like Aldus PageMaker including versions of Lorem Ipsum.
						</p>
					</div>
				</div>
			</div>
		</Card>
	);
};

export default CardCom;
