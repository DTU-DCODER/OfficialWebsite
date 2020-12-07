import DemoFooter from "components/Footers/DemoFooter";
import React from "react";
import IndexNavbar from "../../components/Navbars/IndexNavbar";
import "./style.css";
const Events = () => {
	return (
		<div>
			<IndexNavbar noPhoto />
			<div className="events-container container">
				<h1>Events</h1>
				<p>D_Coders promises ______</p>
				<div className="events-container-body">
					<div className="events-body row">
						<div className={"col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 events-img-container"}>
							<img
								alt="cover"
								src={"./assets/foo.jpg"}
								className="border--round box-shadow-wide"
							/>
						</div>
						<div className="event-body-text col-xl-5 col-lg-5 col-md-5 col-sm-5 col-12">
							<h3 className="event-body-text-heading">Here Goes the Events Heading</h3>
							<h5 className="event-body-text-content">
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
								the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
								type and scrambled it to make a type specimen book. It has survived not only five centuries, but
								also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in
								the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
								with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
							</h5>
						</div>
					</div>

					<div className="events-body row">
						<div className="event-body-text col-xl-5 col-lg-5 col-md-5 col-sm-5 col-12">
							<h3 className="event-body-text-heading">Here Goes the Events Heading</h3>
							<h5 className="event-body-text-content">
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
								the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
								type and scrambled it to make a type specimen book. It has survived not only five centuries, but
								also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in
								the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
								with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
							</h5>
						</div>
						<img
							alt="cover"
							src={"./assets/foo.jpg"}
							className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 border--round box-shadow-wide"
						/>
					</div>
				</div>
			</div>
			<DemoFooter />
		</div>
	);
};

export default Events;
