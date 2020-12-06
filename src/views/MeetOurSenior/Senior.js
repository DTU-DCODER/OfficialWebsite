import React from "react";
import IndexNavbar from "../../components/Navbars/IndexNavbar";
import Card from "../../components/Cards/meetSenior/Card";
import "./style.css";

const Senior = () => {
	return (
		<div>
			<IndexNavbar noPhoto />
			<div className="events-container container">
				<div className={"row col-12"}>
					<Card />
					<Card />
					<Card />
				</div>
			</div>
		</div>
	);
};

export default Senior;
