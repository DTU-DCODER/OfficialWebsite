import React from "react";
import "./style.css";

const Card = () => {
	return (
		<div className={"senior-card-container col-5"}>
			<div>
				<div>
					<div className={"senior-card-img-container"}>
						<img className="senior-card-img" src="./assets/user.png" alt="profileImg" />
					</div>
					<h3 className="no-mp">name</h3>
					<h4 className="no-mp">Company</h4>
				</div>
			</div>
			<div>
				<h5 className="heading">Review</h5>
				<h6 className="heading">hhh</h6>
			</div>
		</div>
	);
};

export default Card;
