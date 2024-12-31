import React from "react";
import { Carousel } from "react-bootstrap";
import sliderImg from "../../assets/images/slider/1.png";
import "./banner.css";
<link href="https://fonts.googleapis.com/css2?family=Waterbrush&display=swap" rel="stylesheet"></link>

const Banner = () => {
  return (
    <section className="slider">
      <Carousel variant="dark">
        {/* First Carousel Item */}
        <Carousel.Item>
          <img src={sliderImg} className="d-block w-100" alt="First slide" />
          <Carousel.Caption>
            <div className="slider_des">
              <p className="heading">
                <span>----Explore and Travel</span>
              </p>
              <h2 className="sub_text">
                Our     Cheapest 
              </h2>
              <h2 className="sub_text">
                Cruise    Search
              </h2>
            </div>
            {/* Search Bar integrated into the banner */}
            <div className="search-bar">
              <div className="location-input">
                <span className="label">
                  <i className="fas fa-map-marker-alt"></i> Location
                </span>
                <span className="value">Thailand</span>
              </div>
              <div className="date-input">
                <span className="label">
                  <i className="fas fa-calendar-alt"></i> Date
                </span>
                <span className="value">13 May, 2023</span>
              </div>
              <button className="search-btn">
                <i className="fas fa-search"></i>
              </button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default Banner;
