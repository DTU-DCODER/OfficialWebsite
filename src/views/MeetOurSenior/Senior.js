import React from "react";
import {useMediaQuery} from "react-responsive";
import IndexNavbar from "../../components/Navbars/IndexNavbar";
import Card from "../../components/Cards/meetSenior/Card";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";

const SampleNextArrow = (props) => {
  const {className, style, onClick} = props;
  return (
    <div className={"slick-nexty"} style={{...style, display: "block"}} onClick={onClick}>
      <i className="fa fa-arrow-right" aria-hidden="true"></i>
    </div>
  );
};

function SamplePrevArrow(props) {
  const {className, style, onClick} = props;
  return (
    <div className="slick-previous" style={{...style, display: "block"}} onClick={onClick}>
      <i className="fa fa-arrow-left" aria-hidden="true"></i>
    </div>
  );
}

const Senior = (props) => {
  const isMobile = useMediaQuery({query: "(max-width: 519px)"});
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "-10px",
    slidesToShow: 1,
    speed: 500,
    dots: true,
    nextArrow: <SampleNextArrow/>,
    prevArrow: <SamplePrevArrow/>,
  };
  return (
    <div>
      <IndexNavbar noPhoto/>
      <br/>
      <br/>
      <br/>
      <div style={{width: "100vw", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: "5vh", textAlign: "center"}}>
        <h1>Testimonials from our Seniors</h1>
      </div>
      <div style={{width: "97%"}}>
        <div className="container-fluid" style={{marginTop: "40px", marginLeft: "30px"}}>
          {isMobile ? (
            <Slider style={{marginLeft: "-4%"}} {...settings}>
              <div>
                <div style={{display: "flex", justifyContent: "center"}} className={"row"}>
                  <Card
                    name="Mahek Jain"
                    src="https://lh3.googleusercontent.com/d/1ORixU6nr0j5SCzh3pjNzR7G6K4KD5U2E=s220?authuser=0"
                    content={"My journey at D_CODER has been a steep learning curve. Leadership here has given me wonderful exposure and an opportunity to develop myself as an individual.\nI do not consider myself to be in a capacity to give long sermons but one piece of advice I can give is to be patient and trust yourself. ma'am for guiding me.\nI am thankful to all my friends who supported me throughout and also daizy di \n" +
                    "Nevertheless, I am more than proud to say that I have got a talented bunch of juniors at D_CODER and I wish them All the best.\n"}
                  />
                  <Card name="Siddharth Singh"
                        src="https://lh3.googleusercontent.com/d/1RswASjKfpS3ZDielLDaI3oWm32B_Jr4n=s220?authuser=0"
                        content={"D_CODER is not just a society for me its more like a family and I owe this achievement to D_CODER that helped me to groom myself in every aspect whether it be technical or non technical skills . My friends and seniors specially my guru ji daizy dii has been the most wonderful and inspiring mentor I’ve ever had. \nShe motivated me to work hard and was so dedicated to help us. From the start,D_CODER gave me the exposure of hackathons wherein we learned various skills like problem solving and being a team player which also resulted in giving me some good projects. Thereafter we organized various events which improved my managerial skills and gave me an edge in interview rounds. Apart from this, the final 2 months training  before intern period by @daizzyy_24 played a major role. And I would suggest to have good command on OS DBMS and OOPS subject too other than DS & ALGO.\n" +
                        "\n" +
                        "And finally I would also thank my juniors because in a way they also helped me by asking various doubts related to coding!\n"}
                  />
                  <Card name="VIKAS YADAV"
                        src={null}
                        content={"Your limitation—it's only your imagination.\n" +
                        "Sow a seed of determination, and you will get success.\n" +
                        "D_CODER has helped me in choosing the right path and gave me an exposure to various hackathons where you can brush up your skills and learn some new skills like team coordination, real-life implementation of ideas, problem-solving and handling big projects. D_CODER also provided me with the right exposure to the competitive programming world by regularly conducting disco contest and motivating us to participate in a different competitive contest at other sites.D_CODER in not just a tech society; it provides you with an environment of like minds where you can interact and develop your personality and enhance your communication skills.\n" +
                        "My advice to all is to focus on the core CS subjects like DSA, OOPS, OS and DBMS. And improve your presentation and communication skills.\n" +
                        "Thank you daizy dii and Team D_CODER!!\"\n"}
                  />
                  <Card name="Anima Jain"
                        src="https://lh3.googleusercontent.com/d/1enWnSCeBmoRvF29VdshEtbYp6_NbFcKN=s220?authuser=0"
                        content={"\"Who i am today and whatever i have achieved is because of the continuous support from the seniors and my friends from D_CODER. They helped me get best out of me. All i have in my resume is because of D_CODER. It helped a lot during resume building.Also, I am so grateful to daizy di for mentoring me and guiding me at my every step and making me who i am today.\""}
                  />
                </div>
              </div>
              <div>
                <div style={{display: "flex", justifyContent: "center"}} className={"row"}>
                  <Card name="RACHIT SAKSENA"
                        src="https://lh3.googleusercontent.com/d/1ORixU6nr0j5SCzh3pjNzR7G6K4KD5U2E=s220?authuser=0"
                        content={"D_CODER not only provided me with a platform to hone both my technical and interpersonal skills but also provided a lot of exposure. Moreover, the seniors were an inspiration for me. I thank D_CODER for everything."}
                  />
                  <Card name="VARUN BAJLOTRA"
                        src="https://lh3.googleusercontent.com/d/1ORixU6nr0j5SCzh3pjNzR7G6K4KD5U2E=s220?authuser=0"
                        content={"Your problem solving skills and knowledge of CS fundamentals form the base of your preparation for any tech interview. Most students are able to ace these but what they lack is the ability to communicate and explain well. These soft skills are equally important while the course of an interview.\n" +
                        "Spending so much time in D_CODER, I've taken so many sessions guiding the juniors and it has actually helped me develop my oratory skills.\n" +
                        "\n" +
                        "My advice to all would be to spend ample amount of time on how you present things and give a few demo interviews to analyse yourself.\n"}
                  />
                  <Card name="HARSHIT MUHAL"
                        src="https://lh3.googleusercontent.com/d/1ORixU6nr0j5SCzh3pjNzR7G6K4KD5U2E=s220?authuser=0"
                        content={"\"D_CODER gave me exposure that not only helped me in improving my technical skills but also helped me in improving my overall personality. I'd like to thank daizy Ma'am for her constant support and for guiding me in the best way possible. I'm grateful to D_CODER to providing me perfect guidance that I could have ever got.\n" +
                        "I advise others to keep practicing DS and ALGO problems and also be well versed with core CS subjects like OS,OOPS,DBMS.\"\n"}
                  />
                  <Card name="ACHINT DAWRA"
                        src="https://lh3.googleusercontent.com/d/1ORixU6nr0j5SCzh3pjNzR7G6K4KD5U2E=s220?authuser=0"
                        content={"\"Motivation to work hard to upskill yourself in DSA and Good Communication Skills\" is what is required to crack the interview of tech giants. I am lucky enough that DCoder helped me to excel in both.The regular Disco Contests helped me improve myself and improve my problem solving ability. \n" +
                        "Apart from this, DCoder helped me in exploring various technologies and decide my area of interest. Daizy di always motivated and guided us in the right direction . \n" +
                        "Finally, I would like to say keep on practicing hard in  DSA and improve your Problem Solving ability day by day. And yeah, don't forget the core CS Fundamentals - OS, OOPS and DBMS\"\n"}
                  />
                </div>
              </div>
              <div>
                <div style={{display: "flex", justifyContent: "center"}} className={"row"}>
                  <Card name="VAIBHAV VARSHNEY"
                        src="https://lh3.googleusercontent.com/d/1ORixU6nr0j5SCzh3pjNzR7G6K4KD5U2E=s220?authuser=0"
                        content={"\"D_CODER gave me an exposure to various hackathons and coding competitions which enhanced my analytical thinking abilities as well as helped me to develop and strengthen my skillset.\n" +
                        "I'd like to thank Daizy Ma'am who always guided and supported me in every possible way.\n" +
                        "I would recommend one to primarily focus on DSA, OOPS and other core subjects such as OS and DBMS.\n" +
                        "Always strive to work on projects that help you to stand out in your resume.\n" +
                        "It makes you unique and creates a larger impact.\n" +
                        "Last, but not the least try to maintain an appreciable average grade as it really makes a difference. \n" +
                        "I hope this helps you to crack the interviews to get you your dream job!\""}
                  />
                  <Card name="V SRIRAM"
                        src="https://lh3.googleusercontent.com/d/1ORixU6nr0j5SCzh3pjNzR7G6K4KD5U2E=s220?authuser=0"
                        content={"\"D_CODER gave me the much needed exposure that helped me develop both my communication and technical skills. From providing guidance on how to excel at hackathons, to how to craft the perfect CV and answer questions in a interview, the team is always there for us. \n" +
                        "Computer Science subjects are as important as DSA, and you should know EVERYTHING about your projects!!!\n" +
                        "Thank you daizy dii and Team D_CODER!!\"\n"}
                  />
                  <Card name="VISHESH JAIN"
                        src="https://lh3.googleusercontent.com/d/1ORixU6nr0j5SCzh3pjNzR7G6K4KD5U2E=s220?authuser=0"
                        content={"\"Grabbing an internship is not much difficult if you have full support of seniors and working hard for it. D_coder helped me in exploring various technologies and finally to find my area of interest . Daizy di always motivated and guided us. For me D_Coder was not just \"yet another Tech society\". Here, I met likeminded people that resulted in developing my overall personality and communication skills and that gave me annedge over other competitors.\n" +
                        "Finally I would like to say practice hard and be well versed with DS/Algo and core CS concepts like DBMS OS OOPS and Architecture.\"\n"}
                  />
                  <Card name="VAGISH YAGNIK"
                        src="https://lh3.googleusercontent.com/d/1RswASjKfpS3ZDielLDaI3oWm32B_Jr4n=s220?authuser=0"
                        content={"\"D_Coder gave me the right path and exposure to various hackathons where you can brush up your skills and acquire some new skill stack like teamwork, problem solving and handling big projects. They gave me an exposure to world of competitve programming via there regular disco  contests and all of that combined resulted in developing my overall personality and communication skills which was reflected by my resume and hence gave an edge in my interviews.\n" +
                        "My personal advice is that one should be well versed with his/her skills, DS Algo problems and various CS subjects like DBMS,OS, OOPS and networking.\"\n"}
                  />
                </div>
              </div>
            </Slider>
          ) : (
            <Slider {...settings}>
              <div>
                <div style={{display: "flex", justifyContent: "center"}} className={"row"}>
                  <Card
                    name="Mahek Jain"
                    src="https://lh3.googleusercontent.com/d/1ORixU6nr0j5SCzh3pjNzR7G6K4KD5U2E=s220?authuser=0"
                    content={"My journey at D_CODER has been a steep learning curve. Leadership here has given me wonderful exposure and an opportunity to develop myself as an individual.\nI do not consider myself to be in a capacity to give long sermons but one piece of advice I can give is to be patient and trust yourself. ma'am for guiding me.\nI am thankful to all my friends who supported me throughout and also daizy di \n" +
                    "Nevertheless, I am more than proud to say that I have got a talented bunch of juniors at D_CODER and I wish them All the best.\n"}
                  />
                  <Card name="Siddharth Singh"
                        src="https://lh3.googleusercontent.com/d/1RswASjKfpS3ZDielLDaI3oWm32B_Jr4n=s220?authuser=0"
                        content={"D_CODER is not just a society for me its more like a family and I owe this achievement to D_CODER that helped me to groom myself in every aspect whether it be technical or non technical skills . My friends and seniors specially my guru ji daizy dii has been the most wonderful and inspiring mentor I’ve ever had. \nShe motivated me to work hard and was so dedicated to help us. From the start,D_CODER gave me the exposure of hackathons wherein we learned various skills like problem solving and being a team player which also resulted in giving me some good projects. Thereafter we organized various events which improved my managerial skills and gave me an edge in interview rounds. Apart from this, the final 2 months training  before intern period by @daizzyy_24 played a major role. And I would suggest to have good command on OS DBMS and OOPS subject too other than DS & ALGO.\n" +
                        "\n" +
                        "And finally I would also thank my juniors because in a way they also helped me by asking various doubts related to coding!\n"}
                  />
                  <Card name="VIKAS YADAV"
                        src={null}
                        content={"Your limitation—it's only your imagination.\n" +
                        "Sow a seed of determination, and you will get success.\n" +
                        "D_CODER has helped me in choosing the right path and gave me an exposure to various hackathons where you can brush up your skills and learn some new skills like team coordination, real-life implementation of ideas, problem-solving and handling big projects. D_CODER also provided me with the right exposure to the competitive programming world by regularly conducting disco contest and motivating us to participate in a different competitive contest at other sites.D_CODER in not just a tech society; it provides you with an environment of like minds where you can interact and develop your personality and enhance your communication skills.\n" +
                        "My advice to all is to focus on the core CS subjects like DSA, OOPS, OS and DBMS. And improve your presentation and communication skills.\n" +
                        "Thank you daizy dii and Team D_CODER!!\"\n"}
                  />
                  <Card name="Anima Jain"
                        src="https://lh3.googleusercontent.com/d/1enWnSCeBmoRvF29VdshEtbYp6_NbFcKN=s220?authuser=0"
                        content={"\"Who i am today and whatever i have achieved is because of the continuous support from the seniors and my friends from D_CODER. They helped me get best out of me. All i have in my resume is because of D_CODER. It helped a lot during resume building.Also, I am so grateful to daizy di for mentoring me and guiding me at my every step and making me who i am today.\""}
                  />
                </div>
              </div>
              <div>
                <div style={{display: "flex", justifyContent: "center"}} className={"row"}>
                  <Card name="RACHIT SAKSENA"
                        src="https://lh3.googleusercontent.com/d/1ORixU6nr0j5SCzh3pjNzR7G6K4KD5U2E=s220?authuser=0"
                        content={"D_CODER not only provided me with a platform to hone both my technical and interpersonal skills but also provided a lot of exposure. Moreover, the seniors were an inspiration for me. I thank D_CODER for everything."}
                  />
                  <Card name="VARUN BAJLOTRA"
                        src="https://lh3.googleusercontent.com/d/1ORixU6nr0j5SCzh3pjNzR7G6K4KD5U2E=s220?authuser=0"
                        content={"Your problem solving skills and knowledge of CS fundamentals form the base of your preparation for any tech interview. Most students are able to ace these but what they lack is the ability to communicate and explain well. These soft skills are equally important while the course of an interview.\n" +
                        "Spending so much time in D_CODER, I've taken so many sessions guiding the juniors and it has actually helped me develop my oratory skills.\n" +
                        "\n" +
                        "My advice to all would be to spend ample amount of time on how you present things and give a few demo interviews to analyse yourself.\n"}
                  />
                  <Card name="HARSHIT MUHAL"
                        src="https://lh3.googleusercontent.com/d/1ORixU6nr0j5SCzh3pjNzR7G6K4KD5U2E=s220?authuser=0"
                        content={"\"D_CODER gave me exposure that not only helped me in improving my technical skills but also helped me in improving my overall personality. I'd like to thank daizy Ma'am for her constant support and for guiding me in the best way possible. I'm grateful to D_CODER to providing me perfect guidance that I could have ever got.\n" +
                        "I advise others to keep practicing DS and ALGO problems and also be well versed with core CS subjects like OS,OOPS,DBMS.\"\n"}
                  />
                  <Card name="ACHINT DAWRA"
                        src="https://lh3.googleusercontent.com/d/1ORixU6nr0j5SCzh3pjNzR7G6K4KD5U2E=s220?authuser=0"
                        content={"\"Motivation to work hard to upskill yourself in DSA and Good Communication Skills\" is what is required to crack the interview of tech giants. I am lucky enough that DCoder helped me to excel in both.The regular Disco Contests helped me improve myself and improve my problem solving ability. \n" +
                        "Apart from this, DCoder helped me in exploring various technologies and decide my area of interest. Daizy di always motivated and guided us in the right direction . \n" +
                        "Finally, I would like to say keep on practicing hard in  DSA and improve your Problem Solving ability day by day. And yeah, don't forget the core CS Fundamentals - OS, OOPS and DBMS\"\n"}
                  />
                </div>
              </div>
              <div>
                <div style={{display: "flex", justifyContent: "center"}} className={"row"}>
                  <Card name="VAIBHAV VARSHNEY"
                        src="https://lh3.googleusercontent.com/d/1ORixU6nr0j5SCzh3pjNzR7G6K4KD5U2E=s220?authuser=0"
                        content={"\"D_CODER gave me an exposure to various hackathons and coding competitions which enhanced my analytical thinking abilities as well as helped me to develop and strengthen my skillset.\n" +
                        "I'd like to thank Daizy Ma'am who always guided and supported me in every possible way.\n" +
                        "I would recommend one to primarily focus on DSA, OOPS and other core subjects such as OS and DBMS.\n" +
                        "Always strive to work on projects that help you to stand out in your resume.\n" +
                        "It makes you unique and creates a larger impact.\n" +
                        "Last, but not the least try to maintain an appreciable average grade as it really makes a difference. \n" +
                        "I hope this helps you to crack the interviews to get you your dream job!\""}
                  />
                  <Card name="V SRIRAM"
                        src="https://lh3.googleusercontent.com/d/1ORixU6nr0j5SCzh3pjNzR7G6K4KD5U2E=s220?authuser=0"
                        content={"\"D_CODER gave me the much needed exposure that helped me develop both my communication and technical skills. From providing guidance on how to excel at hackathons, to how to craft the perfect CV and answer questions in a interview, the team is always there for us. \n" +
                        "Computer Science subjects are as important as DSA, and you should know EVERYTHING about your projects!!!\n" +
                        "Thank you daizy dii and Team D_CODER!!\"\n"}
                  />
                  <Card name="VISHESH JAIN"
                        src="https://lh3.googleusercontent.com/d/1ORixU6nr0j5SCzh3pjNzR7G6K4KD5U2E=s220?authuser=0"
                        content={"\"Grabbing an internship is not much difficult if you have full support of seniors and working hard for it. D_coder helped me in exploring various technologies and finally to find my area of interest . Daizy di always motivated and guided us. For me D_Coder was not just \"yet another Tech society\". Here, I met likeminded people that resulted in developing my overall personality and communication skills and that gave me annedge over other competitors.\n" +
                        "Finally I would like to say practice hard and be well versed with DS/Algo and core CS concepts like DBMS OS OOPS and Architecture.\"\n"}
                  />
                  <Card name="VAGISH YAGNIK"
                        src="https://lh3.googleusercontent.com/d/1RswASjKfpS3ZDielLDaI3oWm32B_Jr4n=s220?authuser=0"
                        content={"\"D_Coder gave me the right path and exposure to various hackathons where you can brush up your skills and acquire some new skill stack like teamwork, problem solving and handling big projects. They gave me an exposure to world of competitve programming via there regular disco  contests and all of that combined resulted in developing my overall personality and communication skills which was reflected by my resume and hence gave an edge in my interviews.\n" +
                        "My personal advice is that one should be well versed with his/her skills, DS Algo problems and various CS subjects like DBMS,OS, OOPS and networking.\"\n"}
                  />
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
