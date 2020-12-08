import React, { Component } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// import "../Css/carousel2.css";
import "./style.css";

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };


export default class JR extends Component {

    render() {
        return (
            <div className=''>

            <h1>JUNIOR</h1>

              <Carousel
                swipeable={false}
                draggable={false}
                showDots={false}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={this.props.deviceType !== "mobile" ? true : true}
                autoPlaySpeed={2500}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={3000}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
              >
                <div className='text-center'>
                    <img 
                        src="https://drive.google.com/thumbnail?id=1_BW43LVcxr0W_Af7BK4-eHuiGsJYHqEz" 
                        alt="name" 
                        className='img_senior2' />
                    <p className="description text-center">
                        <br />
                        CORPORATE CO-HEAD
                        <br />
                        KUSHAGRA WADHWA 
                    </p>
                </div>

                <div className='text-center'>
                    <img 
                        src="https://drive.google.com/thumbnail?id=1o0bHWxGBOV2ywIzJEcAkJnJZHBGf-bQH" 
                        alt="name" 
                        className='img_senior2 text-center' />
                    <p className="description text-center">
                        <br />
                        CORPORATE CO-HEAD
                        <br />
                        ANSHIKA JAIN 
                    </p>
                </div>

                <div className='text-center'>
                    <img 
                        src="https://drive.google.com/thumbnail?id=1hsJVigaExkXgUZgcILxTgQRNIPlCiE3P" 
                        alt="name" 
                        className='img_senior2' />
                    <p className="description text-center">
                        <br />
                        CORPORATE CO-HEAD
                        <br />
                        GARVIT GULATI 
                    </p>
                </div>

                <div className='text-center'>
                    <img 
                        src="https://drive.google.com/thumbnail?id=1sCmUyPbMvjMrg7rimyEsajNcfKHv7GbR" 
                        alt="name" 
                        className='img_senior2' />
                    <p className="description text-center">
                        <br />
                        PUBLIC RELATIONS
                        <br />
                        RIYA DEV VARSHNEY
                    </p>
                </div>                

                <div className='text-center'>
                    <img 
                        src="https://drive.google.com/thumbnail?id=1-ytziu_ORYeH2vzGmK4qIUPMsdI7MI_O" 
                        alt="name" 
                        className='img_senior2' />
                    <p className="description text-center">
                        <br />
                        PUBLIC RELATIONS
                        <br />
                        AMOGH JALAN
                    </p>
                </div>                
                
                <div className='text-center'>
                    <img 
                        src="https://drive.google.com/thumbnail?id=1dETowwewiMCfbfNlBHsGG7cCBifjOqmH" 
                        alt="name" 
                        className='img_senior2' />
                    <p className="description text-center">
                        <br />
                        PUBLIC RELATIONS
                        <br />
                        KARAN BAJAJ 
                    </p>
                </div>                

                <div className='text-center'>
                    <img 
                        src="https://drive.google.com/thumbnail?id=1Zt21mZnorQSgwDREhxjkR0q_v0oOSUtS" 
                        alt="name" 
                        className='img_senior2' />
                    <p className="description text-center">
                        <br />
                        PUBLIC RELATIONS
                        <br />
                        VANSHIKA GUPTA 
                    </p>
                </div>     

                <div className='text-center'>
                    <img 
                        src="https://drive.google.com/thumbnail?id=1t_blYmagHXF-lxX6PTc_zQeoVkNuMe6H" 
                        alt="name" 
                        className='img_senior2' />
                    <p className="description text-center">
                        <br />
                        CREATIVE
                        <br />
                        SIDDHANT SINGH
                    </p>
                </div>              
                </Carousel>
              </div>
              
        )
    }
}