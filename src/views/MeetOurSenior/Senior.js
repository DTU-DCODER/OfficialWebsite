import React from "react";
import { useMediaQuery } from "react-responsive";
import IndexNavbar from "../../components/Navbars/IndexNavbar";
import Card from "../../components/Cards/meetSenior/Card";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";

const SampleNextArrow = (props) => {
	const { className, style, onClick } = props;
	return (
		<div className={"slick-nexty"} style={{ ...style, display: "block" }} onClick={onClick}>
			<i className="fa fa-arrow-right" aria-hidden="true"></i>
		</div>
	);
};

function SamplePrevArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div className="slick-previous" style={{ ...style, display: "block" }} onClick={onClick}>
			<i className="fa fa-arrow-left" aria-hidden="true"></i>
		</div>
	);
}
const Senior = () => {
	const isMobile = useMediaQuery({ query: "(max-width: 519px)" });
	const settings = {
		className: "center",
		centerMode: true,
		infinite: true,
		centerPadding: "-10px",
		slidesToShow: 1,
		speed: 500,
		dots: true,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
	};
	return (
		<div>
			<IndexNavbar noPhoto />
			<br />
			<br />
			<div style={{ width: "97%" }}>
				<div className="container-fluid" style={{ marginTop: "100px", marginLeft: "30px" }}>
					{isMobile ? (
						<Slider style={{ marginLeft: "-4%" }} {...settings}>
							<div>
								<div style={{ display: "flex", justifyContent: "center" }} className={"row"}>
									<Card />
									<Card />
									<Card />
									<Card />
								</div>
							</div>
							<div>
								<div style={{ display: "flex", justifyContent: "center" }} className={"row"}>
									<Card />
									<Card />
									<Card />
									<Card />
								</div>
							</div>
							<div>
								<div style={{ display: "flex", justifyContent: "center" }} className={"row"}>
									<Card />
									<Card />
									<Card />
									<Card />
								</div>
							</div>
						</Slider>
					) : (
						<Slider {...settings}>
							<div>
								<div style={{ display: "flex", justifyContent: "center" }} className={"row"}>
									<Card />
									<Card />
									<Card />
									<Card />
								</div>
							</div>
							<div>
								<div style={{ display: "flex", justifyContent: "center" }} className={"row"}>
									<Card />
									<Card />
									<Card />
									<Card />
								</div>
							</div>
							<div>
								<div style={{ display: "flex", justifyContent: "center" }} className={"row"}>
									<Card />
									<Card />
									<Card />
									<Card />
								</div>
							</div>
						</Slider>
					)}
				</div>
			</div>
		</div>
	);
};

export default Senior;
