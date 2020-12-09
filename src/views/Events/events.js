import DemoFooter from "components/Footers/DemoFooter";
import {useMediaQuery} from "react-responsive";
import React from "react";
import Slide from 'react-reveal/Fade';
import IndexNavbar from "../../components/Navbars/IndexNavbar";
import "./style.css";
import Invic from "../../assets/events/invic.jpg"
import Webinar from "../../assets/events/webinar.jpg"
import SSM from "../../assets/events/SSM.jpg";
import TQ from "../../assets/events/TQ.jpg";
import Trip from "../../assets/events/trip.jpeg";

const events = [
  {
    title: "INVICTUS ‘ 19",
    content:
      "2019 edition of the annual Techfest of D_CODER DTU, INVICTUS was a three-day fest from 8th to 10th February. Although the fest saw multiple events and a vast participation, but the main highlight was the EDM themed Virtual Treasure Hunter virtual adventure-based segment where the participants decoded a set of sequential clues in order to find the final treasure. Then we had the showstopper event, IDEATHON (an annual event for code to school) where students from all the collaborated schools gathered under one roof to compete in the BIGGEST IDEATHON CHALLENGE IN INDIA for school students.",
    src: Invic,
  },
  {
    title: "WEBINARS",
    content:
      "While the world came to a pause during the pandemic, learning at D_CODER never came to a pause. The society continued to organize periodic webinars with the amazing alumni of DTU. Most recent ones being with Mr. Anurag Atri, Tech lead at Google, London, and Mr. Aarnav Jindal, SDE at Cure. fit. where they shared their experiences as students and how they are doing in their professional lives. They help the students gain valuable insights about how the tech industry is changing, how students must prepare amidst the competition, how to manage college life, projects, prepare for placements, and build your personality. These webinars serve as great interactive sessions for students to learn and grow from the comfort of their homes.",
    src: Webinar,
  },
  {
    title: "SENIORS SE MULAQAAT, 2019",
    content:
      '"Seniors Se Mulaqaat 1.0" was an event organized in October 2019 to augment interaction with the alumni and help students learn about their experiences. Honorable alumni of the college working at prestigious firms attended and shared their experiences from college and life in the formal session. We had Hemant Ahuja sir from PwC Digital, Naveen Kumar sir from Microsoft, Kartik Jain sir from Deloitte, and DJ Himanshu Mishra sir from GrooveNexus, to name a few. The formal session was followed by an informal session where students got a chance to network and interact directly with the speakers, and clear their doubts.',
    src: SSM,
  },
  {
    title: "TECHQUEST’20",
    content:
      "Techquest 2020 was another jewel to the series of events having 1500+ registrations all over the country. It was an online tech-fest that consisted of various coding events.It was an ideal opportunity for coders to showcase their programming skills.\n Day 1: It was a fusion of fun activities like the MEME++ challenge which saw a large number of meme entries and serious coding contests like DCodeIT. \nDay 2: HackIt,  a cryptic hunt which covered various problems like debugging, inspection, etc.\nDay 3 involved events like Ideathon marking the presence of  Mr. Hemant Ahuja (Product Manager, PWC), Mr. Naveen Kumar (SDE, Microsoft), and Mr. Himanshu Mishra (Founder, Groovenexus) as the judges and the last event, Twist & Code: a crossword puzzle.",
    src: TQ,
  },
  {
    title: "ANNUAL TRIP",
    content:
      "After the wind up of the techfest, the society organized a three day trip to mcleodganj and Dharamshala. The trip was packed with fun activities like trekking, bonfire, and party nights in order to make it up for the hard work during the fest. It was a new experience for everyone as the juniors witnessed a side of the seniors they had never thought of before and vice versa. The late-night games and talks created some hilarious anecdotes which are still told with the same enthusiasm. These trips are the reason that D_CODER members become the D_CODER family in a very short span of time.",
    src: Trip,
  },
];
const Events = () => {
  function NewlineText(props) {
    const text = props.text;
    return text.split("\n").map((str) => <p>{str}</p>);
  }

  const isMobile = useMediaQuery({query: "(max-width: 576px)"});
  return (
    <div>
      <IndexNavbar noPhoto/>
      <div className="events-container container" style={{overflowX: "hidden"}}>
        <h1>Events</h1>
        <p>D_Coders promises ______</p>
        <div className="events-container-body">
          {isMobile
            ? events.map((item, idx) => {
              return (
                <Slide key={idx} bottom>
                  <div className="events-body row">
                    <div className={"col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 events-img-container"}>
                      <img alt="cover" src={(item.src)} className="border--round box-shadow-wide"/>
                    </div>
                    <div className="event-body-text col-xl-5 col-lg-5 col-md-5 col-sm-5 col-12">
                      <h3 className="event-body-text-heading">{item.title}</h3>
                      <h5 className="event-body-text-content">
                        <NewlineText text={item.content}/>
                      </h5>
                    </div>
                  </div>
                </Slide>
              );
            })
            : events.map((item, idx) => {
              return parseInt(idx) % 2 !== 0 ? (
                <Slide key={idx} bottom>
                  <div className="events-body row" key={idx}>
                    <div className="event-body-text col-xl-5 col-lg-5 col-md-5 col-sm-5 col-12">
                      <h3 className="event-body-text-heading">{item.title}</h3>
                      <h5 className="event-body-text-content">{item.content}</h5>
                    </div>
                    <div className={"col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 events-img-container"}>
                      <img alt="cover" src={(item.src)} className="border--round box-shadow-wide"/>
                    </div>
                  </div>
                </Slide>
              ) : (
                <Slide key={idx} bottom>
                  <div className="events-body row" key={idx}>
                    <div className={"col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 events-img-container"}>
                      <img alt="cover" src={(item.src)} className="border--round box-shadow-wide"/>
                    </div>
                    <div className="event-body-text col-xl-5 col-lg-5 col-md-5 col-sm-5 col-12">
                      <h3 className="event-body-text-heading">{item.title}</h3>
                      <h5 className="event-body-text-content">{item.content}</h5>
                    </div>
                  </div>
                </Slide>
              );
            })}
        </div>
      </div>
      <DemoFooter/>
    </div>
  );
};

export default Events;
