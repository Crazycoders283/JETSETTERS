import React from "react";
import { Carousel } from "react-bootstrap";
import sliderImg from "../../assets/images/slider/1.png";
import "./banner.css";

// Import FontAwesome for icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faCalendarAlt,
  faShip,
  faDollarSign,
  faFilter,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

// Banner Component
const Banner = () => {
  return (
    <section className="slider">
      <Carousel variant="dark">
        {/* Carousel Item */}
        <Carousel.Item>
          <img src={sliderImg} className="d-block w-100" alt="First slide" />
          <Carousel.Caption>
            {/* Banner Content */}
            <div className="slider_des">
              <p className="heading">
                <span>----Explore and Travel</span>
              </p>
              <h2 className="sub_text">Our Cheapest</h2>
              <h2 className="sub_text">Cruise Search</h2>
            </div>

            {/* Search Bar Section */}
            <div className="search-bar">
              <div className="filter-item">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
                <div>
                  <p>Location</p>
                  <h4>USA</h4>
                </div>
              </div>

              <div className="divider"></div>

              <div className="filter-item">
                <FontAwesomeIcon icon={faCalendarAlt} className="icon" />
                <div>
                  <p>Date</p>
                  <h4>13 May, 2023</h4>
                </div>
              </div>

              <div className="divider"></div>

              <div className="filter-item">
                <FontAwesomeIcon icon={faShip} className="icon" />
                <div>
                  <p>Cruiseline</p>
                  <h4>Curnard</h4>
                </div>
              </div>

              <div className="divider"></div>

              <div className="filter-item">
                <FontAwesomeIcon icon={faDollarSign} className="icon" />
                <div>
                  <p>Price Range</p>
                  <h4>$200-$500</h4>
                </div>
              </div>

              <div className="divider"></div>

              <div className="filter-item">
                <FontAwesomeIcon icon={faFilter} className="icon" />
                <div>
                  <p>Filters</p>
                  <h4>More Filters</h4>
                </div>
              </div>

              <button className="search-btn">
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>

            {/* Book Now Button */}
            <div className="book-now-container">
              <button className="book-now-btn">BOOK NOW</button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default Banner;
