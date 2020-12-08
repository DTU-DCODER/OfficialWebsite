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


export default class Car extends Component {

    render() {
        return (
            <div className=''>

            <h1>SENIOR</h1>

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
                transitionDuration={1000}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
              >
                <div className='text-center'>
                    <img 
                        src="https://drive.google.com/thumbnail?id=1ORixU6nr0j5SCzh3pjNzR7G6K4KD5U2E" 
                        alt="name" 
                        className='img_senior2' />
                    <p className="description text-center">
                        <br />
                        PRESIDENT
                        <br />
                        MAHEK JAIN
                    </p>
                </div>
                
                <div className='text-center'>
                    <img 
                        src="https://drive.google.com/thumbnail?id=1ORixU6nr0j5SCzh3pjNzR7G6K4KD5U2E" 
                        alt="name" 
                        className='img_senior2' />
                    <p className="description text-center">
                        <br />
                        PRESIDENT
                        <br />
                        MAHEK JAIN
                    </p>
                </div>
                <div className='text-center'>
                    <img 
                        src="https://drive.google.com/thumbnail?id=1ORixU6nr0j5SCzh3pjNzR7G6K4KD5U2E" 
                        alt="name" 
                        className='img_senior2' />
                    <p className="description text-center">
                        <br />
                        PRESIDENT
                        <br />
                        MAHEK JAIN
                    </p>
                </div>
                <div className='text-center'>
                    <img 
                        src="https://drive.google.com/thumbnail?id=1ORixU6nr0j5SCzh3pjNzR7G6K4KD5U2E" 
                        alt="name" 
                        className='img_senior2' />
                    <p className="description text-center">
                        <br />
                        PRESIDENT
                        <br />
                        MAHEK JAIN
                    </p>
                </div>
                <div className='text-center'>
                    <img 
                        src="https://drive.google.com/thumbnail?id=1ORixU6nr0j5SCzh3pjNzR7G6K4KD5U2E" 
                        alt="name" 
                        className='img_senior2' />
                    <p className="description text-center">
                        <br />
                        PRESIDENT
                        <br />
                        MAHEK JAIN
                    </p>
                </div>
                <div className='text-center'>
                    <img 
                        src="https://drive.google.com/thumbnail?id=1ORixU6nr0j5SCzh3pjNzR7G6K4KD5U2E" 
                        alt="name" 
                        className='img_senior2' />
                    <p className="description text-center">
                        <br />
                        PRESIDENT
                        <br />
                        MAHEK JAIN
                    </p>
                </div>
                <div className='text-center'>
                    <img 
                        src="https://drive.google.com/thumbnail?id=1ORixU6nr0j5SCzh3pjNzR7G6K4KD5U2E" 
                        alt="name" 
                        className='img_senior2' />
                    <p className="description text-center">
                        <br />
                        PRESIDENT
                        <br />
                        MAHEK JAIN
                    </p>
                </div>
              </Carousel>
              </div>
              
        )
    }
}