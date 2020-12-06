import React from "react";
import IndexNavbar from "../../components/Navbars/IndexNavbar";
import Card from "../../components/Cards/meetSenior/Card";
import "./style.css";

const Senior = () => {
	return (
		<div>
			<IndexNavbar noPhoto />
			<br />
			<br />
			<div className="events-container container-fluid">
				<div style={{display:"flex", justifyContent:"center"}} className={"row col-12"}>
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
		</div>
	);
};

export default Senior;
