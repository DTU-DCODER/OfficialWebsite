import React from "react";
import IndexNavbar from "../../components/Navbars/IndexNavbar";
import "./style.css";
import SDC from "../../assets/gifs/SDC.gif";
import DemoFooter from "components/Footers/DemoFooter";

const Projects = () => {
	return (
		<div>
			<IndexNavbar noPhoto />
			<div className="events-container container">
				<h1>Projects</h1>
				<h3>Some of the projects carried out by members of D_CODER</h3>
				<div className="events-container-body">

					<div className="events-body row col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
						<img
							alt="gif"
							// src={"./assets/gifs/SDC.gif"}
							src={SDC}
							className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 border--round box-shadow-wide gif"
						/>
						<div className="event-body-text col-xl-5 col-lg-5 col-md-5 col-sm-5 col-12">
							<h3 className="event-body-text-heading">Self Driving Car</h3>
							<p><b>Owner: <a href='https://linkedin.com/in/kushagra-wadhwa12/' className='bold'>Kushagra Wadhwa</a>  | 
							Code: <a href='https://github.com/Kushagraw12/Self-Driving-Car/' className='bold'>GitHub</a></b></p>
							<h5 className="event-body-text-content">
								The aim was to write a script that predicts steering angle from the 
								front dashcam of the car.The script was written in python language. The backend works on Convolutional Neural Networks
								and libraries like Numpy and OpenCV were used in the processing of the input.
							</h5>
							<div className='inline'>
								<h5 className='tag ml'>Machine Learning</h5>
							</div>
						</div>
					</div>

					<div className="events-body row">
						<div className="event-body-text col-xl-5 col-lg-5 col-md-5 col-sm-5 col-12">
							<h3 className="event-body-text-heading">Game of Codes</h3>
							<p><b>Owner: <a href='https://linkedin.com/in/kushagra-wadhwa12/' className='bold'>Abhinandan Sharma</a>  | 
							Link: <a href="https://github.com/" className='bold'>...</a></b></p>
							<h5 className="event-body-text-content">
							This is a web app developed using codeforces API for codeforces lovers 
							where they can get personalized questions, analyze their weak and strong 
							topics, do one-on-one coding fights, compare themselves with other users, and a lot more! 
							</h5>
							<div className='inline'>
								<h5 className='tag cp'>COMPETITIVE</h5>
							</div>
						</div>
						<img
							alt="cover"
							src={"./assets/foo.jpg"}
							className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 border--round box-shadow-wide"
						/>
					</div>

					<div className="events-body row">
						<img
							alt="gif"
							src={"./assets/foo.jpg"}
							className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 border--round box-shadow-wide gif"
						/>
						<div className="event-body-text col-xl-5 col-lg-5 col-md-5 col-sm-5 col-12">
							<h3 className="event-body-text-heading">Face Recogonition</h3>
							<p><b>Owner: <a href='https://linkedin.com/in/kushagra-wadhwa12/' className='bold'>Anurag Gupta</a> |  
							Link/Code: <a href="https://github.com/" className='bold'>...</a> </b></p>
							<h5 className="event-body-text-content">
							Program which recognizes faces and displays their name with a rectangular box. 
							Made using OpenCV and Python.
							</h5>
							<div className='inline'>
								<h5 className='tag ml'>OpenCV</h5>
							</div>
						</div>
					</div>

					<div className="events-body row">
						<div className="event-body-text col-xl-5 col-lg-5 col-md-5 col-sm-5 col-12">
							<h3 className="event-body-text-heading">Online Examination System</h3>
							<p><b>Owner: <a href='https://linkedin.com/in/kushagra-wadhwa12/' className='bold'>Achint</a>  | 
							Link/Code: <a href="https://github.com/" className='bold'>...</a></b></p>
							<h5 className="event-body-text-content">
							With the Covid-19 situation, it's become difficult for the institutions 
							to hold offline examinations. It's the need of the time to shift to online 
							mode in this new normal so as to evaluate students and allocate grades on the 
							basis of knowledge of the subject. In this world of evolving technology, it 
							would not be a big deal to shift the examination mode to online mode and be able 
							to conduct examinations seamlessly.
							</h5>
							<div className='inline'>
								<h5 className='tag dbs'>DBS</h5>
							</div>
						</div>
						<img
							alt="cover"
							src={"./assets/foo.jpg"}
							className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 border--round box-shadow-wide"
						/>
					</div>

					<div className="events-body row">
						<img
							alt="gif"
							src={"./assets/foo.jpg"}
							className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 border--round box-shadow-wide gif"
						/>
						<div className="event-body-text col-xl-5 col-lg-5 col-md-5 col-sm-5 col-12">
							<h3 className="event-body-text-heading">Corona Management System</h3>
							<p><b>Owner: <a href='https://linkedin.com/in/kushagra-wadhwa12/' className='bold'>Achint and Vishesh Jain</a> |
							Link/Code: <a href="https://github.com/" className='bold'>...</a></b></p>
							<h5 className="event-body-text-content">
							Corona Management System is capable of managing each and every data regarding Corona Patients, 
							Doctors, Hospitals, Home Quarantined People, etc. Corona Management System helps Government 
							and other concerned authorities in making effective policies because of the proper flow 
							of information from ground reality to higher levels.

							</h5>
							<div className='inline'>
								<h5 className='tag dbs'>DBS</h5>
							</div>
						</div>
					</div>

					<div className="events-body row">
						<div className="event-body-text col-xl-5 col-lg-5 col-md-5 col-sm-5 col-12">
							<h3 className="event-body-text-heading">Alfred - The Virtual Assistant </h3>
							<p><b>Owner: <a href='https://linkedin.com/in/kushagra-wadhwa12/' className='bold'>Riya Dev 
							Varshney </a>  | 
							Link/Code: <a href="https://github.com/" className='bold'>...</a> </b></p>
							<h5 className="event-body-text-content">
							"The virtual assistant is an advanced python based project which helps in 
							automation of certain tasks like capturing photographs , predicting weather,  
							date and time,  crawling data on google or wikipedia, searching videos on YouTube 
							and send emails. 
							It is using seech recognition feature and therefore takes speech commands from user to perform all the above mentioned tasks. "
							</h5>
							<div className='inline'>
								<h5 className='tag ai'>Artificial Intelligence</h5>
							</div>
						</div>
						<img
							alt="cover"
							src={"./assets/foo.jpg"}
							className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 border--round box-shadow-wide"
						/>
					</div>

					<div className="events-body row">
						<img
							alt="gif"
							src={"./assets/foo.jpg"}
							className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 border--round box-shadow-wide gif"
						/>
						<div className="event-body-text col-xl-5 col-lg-5 col-md-5 col-sm-5 col-12">
							<h3 className="event-body-text-heading">Image Description for blind people</h3>
							<p><b>Owner: <a href='https://linkedin.com/in/kushagra-wadhwa12/' className='bold'>Puneet 
							Kumar Sehrawat</a> | Link/Code: <a href="https://github.com/" className='bold'>...</a></b></p>
							<h5 className="event-body-text-content">
							Built a GUI for blind people where they can upload an image and get 
							its Description in audio as well as text form.
							Used a self trained RNN model for generating Descriptions.

							</h5>
							<div className='inline'>
								<h5 className='tag ml'>Machine Learning</h5>
							</div>
						</div>
					</div>

					<div className="events-body row">
						<div className="event-body-text col-xl-5 col-lg-5 col-md-5 col-sm-5 col-12">
							<h3 className="event-body-text-heading">FoodZen 360 </h3>
							<p><b>Owner: <a href='https://linkedin.com/in/kushagra-wadhwa12/' className='bold'>Puneet Kumar 
							Sehrawat </a>  | 
							Link/Code: <a href="https://github.com/" className='bold'>...</a> </b></p>
							<h5 className="event-body-text-content">
							Built an app where a person will get personalized suggestions for 
							restaurants based on their previous favorite orders and they can also 
							see a 360 degree VR view of the restuarant to ascertain whether it is 
							suitable to visit that restaurant or not.
							</h5>
							<div className='inline'>
								<h5 className='tag ml'>Machine Learning</h5>
							</div>
						</div>
						<img
							alt="cover"
							src={"./assets/foo.jpg"}
							className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 border--round box-shadow-wide"
						/>
					</div>


          
				</div>
			</div>
			<DemoFooter/>
		</div>
	);
};

export default Projects;
