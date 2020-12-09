import React from "react";
import IndexNavbar from "../../components/Navbars/IndexNavbar";
import "./style.css";
import Slide from 'react-reveal/Fade';
import SDC from "../../assets/gifs/SDC.gif";
import VR from "../../assets/gifs/VR.gif";
import imgDesc from "../../assets/gifs/imgDesc.gif";
import {useMediaQuery} from "react-responsive";
import FR from "../../assets/gifs/FR.gif";
import DemoFooter from "components/Footers/DemoFooter";

const projects = [
  {
    title: 'Self Driving Car',
    content: 'The aim was to write a script that predicts steering angle from the front dashcam of the car.The script was written in python language. The backend works on Convolutional Neural Networks and libraries like Numpy and OpenCV were used in the processing of the input.',
    src: SDC,
    linkedin: 'https://linkedin.com/in/kushagra-wadhwa12/',
    github: 'https://github.com/Kushagraw12/Self-Driving-Car/',
    owner: 'Kushagra Wadhwa',
    tag: 'Machine Learning'
  },
  {
    title: 'Face Recogonition',
    content: 'Program which recognizes faces and displays their name with a rectangular box. Made using OpenCV and Python.',
    src: FR,
    linkedin: 'https://www.linkedin.com/in/ag23/',
    github: 'https://github.com/Anurag5086/Face-Recognition',
    owner: 'Anurag Gupta',
    tag: 'OpenCV'
  },
  {
    title: 'Chatify',
    content: 'We have built an application called Chatify. It will allow only authenticated users to send and read messages and users can sign up by providing their email and creating a password, or by authenticating through a Google account.',
    src: require("assets/img/chatify.jpeg"),
    linkedin: 'https://www.linkedin.com/in/anshika-jain-110948197/',
    github: '',
    owner: 'Anshika Jain, Anurag Gupta',
    tag: 'Web Dev'
  },
  {
    title: 'Alfred - The Virtual Assistant',
    content: 'The virtual assistant is an advanced python based project which helps in automation of certain tasks like capturing photographs, predicting weather, date and time, crawling data on google or wikipedia, searching videos on YouTube and send emails. It is using seech recognition feature and therefore takes speech commands from user to perform all the above mentioned tasks.',
    src: require("assets/img/alfred.jpeg"),
    linkedin: 'https://www.linkedin.com/in/riya-dev-varshney-361304197/',
    github: 'https://github.com/Riyadevvarshney11/ALFRED-Virtual-Assistant',
    owner: 'Riya Dev Varshney',
    tag: 'Artificial intelligence'
  },
  {
    title: 'Online Examination System',
    content: 'With the Covid-19 situation, its become difficult for the institutions to hold offline examinations. Its the need of the time to shift to online mode in this new normal so as to evaluate students and allocate grades on the basis of knowledge of the subject. In this world of evolving technology, it would not be a big deal to shift the examination mode to online mode and be able to conduct examinations seamlessly.',
    src: require("assets/img/oes.jpeg"),
    linkedin: 'https://www.linkedin.com/in/achint-dawra/',
    github: 'https://github.com/achint740/OnlineExamSystem',
    owner: 'Achint',
    tag: 'Web Dev'
  },
  {
    title: 'FoodZen 360',
    content: 'Built an app where a person will get personalized suggestions for restaurants based on their previous favorite orders and they can also see a 360 degree VR view of the restuarant to ascertain whether it is suitable to visit that restaurant or not.',
    src: VR,
    linkedin: 'https://www.linkedin.com/in/puneet-kumar-sehrawat-4b3312197/',
    github: 'https://github.com/seneark/Foodie-Hub',
    owner: 'Punjeet Kumar sehrawat',
    tag: 'Virtual Reality'
  },
  {
    title: 'Games of Codes',
    content: 'This is a web app developed using codeforces API for codeforces lovers where they can get personalized questions, analyze their weak and strong topics, do one-on-one coding fights, compare themselves with other users, and a lot more!',
    src: "https://camo.githubusercontent.com/39c255cadfe2f3d422e9a43ae9b1c9078c25ad56db79e98bdce545b427aee2be/68747470733a2f2f616268692d3832342e6769746875622e696f2f47616d652d6f662d434f4445532f7075626c696369732f7265736f75726365732f73637265656e73686f74732f64617368626f6172642e504e47",
    linkedin: 'linkedin.com',
    github: 'https://www.linkedin.com/in/abhinandan-sharma-0a2633175/',
    owner: 'Abhinandan Sharma',
    tag: 'Competitive'

  },
  {
    title: 'Corona Management System',
    content: 'Corona Management System is capable of managing each and every data regarding Corona Patients, Doctors, Hospitals, Home Quarantined People. Corona Management System helps Government and other concerned authorities in making effective policies because of the proper flow of information from ground reality to higher levels.',
    src: require("assets/img/cms.jpeg"),
    linkedin: 'https://www.linkedin.com/in/14visheshjain/',
    github: 'https://github.com/achint740/DBMS-Project',
    owner: 'Achint, Vishesh',
    tag: 'DBMS'
  },
  {
    title: 'Image Description for blind people',
    content: 'Built a GUI for blind people where they can upload an image and get its Description in audio as well as text form.Used a self trained RNN model for generating Descriptions.',
    src: imgDesc,
    linkedin: 'https://www.linkedin.com/in/puneet-kumar-sehrawat-4b3312197/',
    github: 'https://github.com/seneark/Image-Captioning',
    owner: 'Punjeet Kumar sehrawat',
    tag: 'Machine Learning'
  }
]

const Projects = () => {

  function NewlineText(props) {
    const text = props.text;
    return text.split("\n").map((str) => <p>{str}</p>);
  }

  const isMobile = useMediaQuery({query: "(max-width: 576px)"});
  return (
    <div>
      <IndexNavbar noPhoto/>
      <div className="events-container container">
        <h1>Events</h1>
        <p>D_Coders promises ______</p>
        <div className="events-container-body">
          {isMobile
            ? projects.map((item, idx) => {
              return (
                <Slide key={idx} bottom>
                  <div className="events-body row" key={idx}>
                    <div className={"col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 events-img-container"}>
                      <img alt="cover" src={item.src} className="border--round box-shadow-wide"/>
                    </div>
                    <div className="event-body-text col-xl-5 col-lg-5 col-md-5 col-sm-5 col-12">
                      <h3 className="event-body-text-heading2">{item.title}</h3>
                      <p><b>Owner: <a href={item.linkedin} className='bold'>
                        {item.owner}
                      </a> | Code:
                        <a href={item.github} className='bold'>
                          GitHub
                        </a></b>
                      </p>
                      <h5 className="event-body-text-content">
                        <NewlineText text={item.content}/>
                      </h5>
                      <h5 className='tag'>{item.tag}</h5>
                    </div>
                  </div>
                </Slide>
              );
            })
            : projects.map((item, idx) => {
              return parseInt(idx) % 2 !== 0 ? (
                <Slide key={idx} bottom>
                  <div className="events-body row" key={idx}>
                    <div className="event-body-text col-xl-5 col-lg-5 col-md-5 col-sm-5 col-12">
                      <h3 className="event-body-text-heading">{item.title}</h3>
                      <p><b>Owner: <a href={item.linkedin} className='bold'>
                        {item.owner}
                      </a> | Code:
                        <a href={item.github} className='bold'>
                          GitHub
                        </a></b>
                      </p>
                      <h5 className="event-body-text-content">{item.content}</h5>
                      <h5 className='tag'>{item.tag}</h5>
                    </div>
                    <div className={"col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 events-img-container"}>
                      <img alt="cover" src={item.src} className="border--round box-shadow-wide"/>
                    </div>
                  </div>
                </Slide>
              ) : (
                <Slide key={idx} bottom>
                  <div className="events-body row" key={idx}>
                    <div className={"col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 events-img-container"}>
                      <img alt="cover" src={item.src} className="border--round box-shadow-wide"/>
                    </div>
                    <div className="event-body-text col-xl-5 col-lg-5 col-md-5 col-sm-5 col-12">
                      <h3 className="event-body-text-heading">{item.title}</h3>
                      <p><b>Owner: <a href={item.linkedin} className='bold'>
                        {item.owner}
                      </a> | Code:
                        <a href={item.github} className='bold'>
                          GitHub
                        </a></b>
                      </p>
                      <h5 className="event-body-text-content">{item.content}</h5>
                      <h5 className='tag'>{item.tag}</h5>
                    </div>
                  </div>
                </Slide>
              );
            })}
        </div>
      </div>
      <DemoFooter/>
    </div>

    // return (
    // 	<div>
    // 		<IndexNavbar noPhoto />
    // 		<div className="events-container container">
    // 			<h1>Projects</h1>
    // 			<h3>Some of the projects carried out by members of D_CODER</h3>
    // 			<div className="events-container-body">

    // 				<div className="events-body row col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
    // 					<img
    // 						alt="gif"
    // 						// src={"./assets/gifs/SDC.gif"}
    // 						src={SDC}
    // 						className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 border--round box-shadow-wide gif"
    // 					/>
    // 					<div className="event-body-text col-xl-5 col-lg-5 col-md-5 col-sm-5 col-12">
    // 						<h3 className="event-body-text-heading">Self Driving Car</h3>
    // 						<p><b>Owner: <a href='https://linkedin.com/in/kushagra-wadhwa12/' className='bold'>Kushagra Wadhwa</a>  |
    // 						Code: <a href='https://github.com/Kushagraw12/Self-Driving-Car/' className='bold'>GitHub</a></b></p>
    // 						<h5 className="event-body-text-content">
    // 							The aim was to write a script that predicts steering angle from the
    // 							front dashcam of the car.The script was written in python language. The backend works on Convolutional Neural Networks
    // 							and libraries like Numpy and OpenCV were used in the processing of the input.
    // 						</h5>
    // 						<div className='inline'>
    // 							<h5 className='tag ml'>Machine Learning</h5>
    // 						</div>
    // 					</div>
    // 				</div>

    // 				<div className="events-body row">

    // 					<div className="event-body-text col-xl-5 col-lg-5 col-md-5 col-sm-5 col-12">
    // 						<h3 className="event-body-text-heading">Game of Codes</h3>
    // 						<p><b>Owner: <a href='https://linkedin.com/in/kushagra-wadhwa12/' className='bold'>Abhinandan Sharma</a>  |
    // 						Code: <a href="https://github.com/abhi-824/Game-of-CODES" className='bold'>GitHub</a></b></p>
    // 						<h5 className="event-body-text-content">
    // 						This is a web app developed using codeforces API for codeforces lovers
    // 						where they can get personalized questions, analyze their weak and strong
    // 						topics, do one-on-one coding fights, compare themselves with other users, and a lot more!
    // 						</h5>
    // 						<div className='inline'>
    // 							<h5 className='tag cp'>COMPETITIVE</h5>
    // 						</div>
    // 					</div>
    // 					<img
    // 						alt="cover"
    // 						src="https://camo.githubusercontent.com/39c255cadfe2f3d422e9a43ae9b1c9078c25ad56db79e98bdce545b427aee2be/68747470733a2f2f616268692d3832342e6769746875622e696f2f47616d652d6f662d434f4445532f7075626c696369732f7265736f75726365732f73637265656e73686f74732f64617368626f6172642e504e47"
    // 						className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 border--round box-shadow-wide"
    // 					/>
    // 				</div>

    // 				<div className="events-body row">
    // 					<img
    // 						alt="gif"
    // 						src={FR}
    // 						className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 border--round box-shadow-wide gif"
    // 					/>
    // 					<div className="event-body-text col-xl-5 col-lg-5 col-md-5 col-sm-5 col-12">
    // 						<h3 className="event-body-text-heading">Face Recogonition</h3>
    // 						<p><b>Owner: <a href='https://linkedin.com/in/kushagra-wadhwa12/' className='bold'>Anurag Gupta</a> |
    // 						Code: <a href="https://github.com/Anurag5086/Face-Recognition" className='bold'>GitHub</a> </b></p>
    // 						<h5 className="event-body-text-content">
    // 						Program which recognizes faces and displays their name with a rectangular box.
    // 						Made using OpenCV and Python.
    // 						</h5>
    // 						<div className='inline'>
    // 							<h5 className='tag ml'>OpenCV</h5>
    // 						</div>
    // 					</div>
    // 				</div>

    // 				<div className="events-body row">
    // 					<div className="event-body-text col-xl-5 col-lg-5 col-md-5 col-sm-5 col-12">
    // 						<h3 className="event-body-text-heading">Online Examination System</h3>
    // 						<p><b>Owner: <a href='https://linkedin.com/in/kushagra-wadhwa12/' className='bold'>Achint</a>  |
    // 						Code: <a href="https://github.com/achint740/OnlineExamSystem" className='bold'>GitHub</a></b></p>
    // 						<h5 className="event-body-text-content">
    // 						With the Covid-19 situation, it's become difficult for the institutions
    // 						to hold offline examinations. It's the need of the time to shift to online
    // 						mode in this new normal so as to evaluate students and allocate grades on the
    // 						basis of knowledge of the subject. In this world of evolving technology, it
    // 						would not be a big deal to shift the examination mode to online mode and be able
    // 						to conduct examinations seamlessly.
    // 						</h5>
    // 						<div className='inline'>
    // 							<h5 className='tag wd'>Web Dev</h5>
    // 						</div>
    // 					</div>
    // 					<img
    // 						alt="cover"
    // 						src={require("assets/img/oes.jpeg")}
    // 						className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 border--round box-shadow-wide"
    // 					/>
    // 				</div>

    // 				<div className="events-body row">
    // 					<img
    // 						alt="gif"
    // 						src={require("assets/img/cms.jpeg")}
    // 						className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 border--round box-shadow-wide"
    // 					/>
    // 					<div className="event-body-text col-xl-5 col-lg-5 col-md-5 col-sm-5 col-12">
    // 						<h3 className="event-body-text-heading">Corona Management System</h3>
    // 						<p><b>Owner: <a href='https://linkedin.com/in/kushagra-wadhwa12/' className='bold'>Achint and Vishesh Jain</a> |
    // 						Code: <a href="https://github.com/achint740/DBMS-Project" className='bold'>GitHub</a></b></p>
    // 						<h5 className="event-body-text-content">
    // 						Corona Management System is capable of managing each and every data regarding Corona Patients,
    // 						Doctors, Hospitals, Home Quarantined People, etc. Corona Management System helps Government
    // 						and other concerned authorities in making effective policies because of the proper flow
    // 						of information from ground reality to higher levels.

    // 						</h5>
    // 						<div className='inline'>
    // 							<h5 className='tag dbs'>DBMS</h5>
    // 						</div>
    // 					</div>
    // 				</div>

    // 				<div className="events-body row">
    // 					<div className="event-body-text col-xl-5 col-lg-5 col-md-5 col-sm-5 col-12">
    // 						<h3 className="event-body-text-heading">Alfred - The Virtual Assistant </h3>
    // 						<p><b>Owner: <a href='https://linkedin.com/in/kushagra-wadhwa12/' className='bold'>Riya Dev
    // 						Varshney </a>  |
    // 						Code: <a href="https://github.com/Riyadevvarshney11/ALFRED-Virtual-Assistant" className='bold'>GitHub</a> </b></p>
    // 						<h5 className="event-body-text-content">
    // 						"The virtual assistant is an advanced python based project which helps in
    // 						automation of certain tasks like capturing photographs , predicting weather,
    // 						date and time,  crawling data on google or wikipedia, searching videos on YouTube
    // 						and send emails.
    // 						It is using seech recognition feature and therefore takes speech commands from user to perform all the above mentioned tasks. "
    // 						</h5>
    // 						<div className='inline'>
    // 							<h5 className='tag ai'>Artificial Intelligence</h5>
    // 						</div>
    // 					</div>
    // 					<img
    // 						alt="cover"
    // 						src={require("assets/img/alfred.jpeg")}
    // 						className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 border--round box-shadow-wide"
    // 					/>
    // 				</div>

    // 				<div className="events-body row">
    // 					<img
    // 						alt="gif"
    // 						src={imgDesc}
    // 						className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 border--round box-shadow-wide gif"
    // 					/>
    // 					<div className="event-body-text col-xl-5 col-lg-5 col-md-5 col-sm-5 col-12">
    // 						<h3 className="event-body-text-heading">Image Description for blind people</h3>
    // 						<p><b>Owner: <a href='https://www.linkedin.com/in/puneet-kumar-sehrawat-4b3312197/' className='bold'>Puneet
    // 						Kumar Sehrawat</a> | Code: <a href="https://github.com/seneark/Image-Captioning" className='bold'>GitHub</a></b></p>
    // 						<h5 className="event-body-text-content">
    // 						Built a GUI for blind people where they can upload an image and get
    // 						its Description in audio as well as text form.
    // 						Used a self trained RNN model for generating Descriptions.

    // 						</h5>
    // 						<div className='inline'>
    // 							<h5 className='tag ml'>Machine Learning</h5>
    // 						</div>
    // 					</div>
    // 				</div>

    // 				<div className="events-body row">
    // 					<div className="event-body-text col-xl-5 col-lg-5 col-md-5 col-sm-5 col-12">
    // 						<h3 className="event-body-text-heading">FoodZen 360 </h3>
    // 						<p><b>Owner: <a href='https://www.linkedin.com/in/puneet-kumar-sehrawat-4b3312197/' className='bold'>Puneet Kumar
    // 						Sehrawat </a>  |
    // 						Code: <a href="https://github.com/seneark/FoodieHub" className='bold'>GitHub</a> </b></p>
    // 						<h5 className="event-body-text-content">
    // 						Built an app where a person will get personalized suggestions for
    // 						restaurants based on their previous favorite orders and they can also
    // 						see a 360 degree VR view of the restuarant to ascertain whether it is
    // 						suitable to visit that restaurant or not.
    // 						</h5>
    // 						<div className='inline' style={{display:"flex"}}>
    // 							<h5 className='tag dbs'>DBMS</h5>
    // 							&nbsp; &nbsp;
    // 							<h5 className='tag ml'>VR</h5>
    // 						</div>
    // 					</div>
    // 					<img
    // 						alt="cover"
    // 						src={VR}
    // 						className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 border--round box-shadow-wide"
    // 					/>
    // 				</div>

    // 				<div className="events-body row">
    // 					<img
    // 						alt="gif"
    // 						src={require("assets/img/chatify.jpeg")}
    // 						className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 border--round box-shadow-wide gif"
    // 					/>
    // 					<div className="event-body-text col-xl-5 col-lg-5 col-md-5 col-sm-5 col-12">
    // 						<h3 className="event-body-text-heading">Chatify</h3>
    // 						<p><b>Owner: <a href='https://www.linkedin.com/in/puneet-kumar-sehrawat-4b3312197/' className='bold'>Anshika Jain,
    // 						Anurag Gupta</a> | Code: <a href="https://github.com/seneark/Image-Captioning" className='bold'>GitHub</a></b></p>
    // 						<h5 className="event-body-text-content">
    // 						We've built an application called Chatify.
    // 						It will allow only authenticated users to send and
    // 						read messages and users can sign up by providing their
    // 						email and creating a password, or by authenticating through a Google account.
    // 						</h5>
    // 						<div className='inline'>
    // 							<h5 className='tag wd'>Web Dev</h5>
    // 						</div>
    // 					</div>
    // 				</div>
    // 			</div>
    // 		</div>
    // 		<DemoFooter/>
    // 	</div>
  );
};

export default Projects;
