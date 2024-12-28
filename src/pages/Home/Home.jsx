import React from "react";
import Banner from "../../components/Banner/Banner";
// import AdvanceSearch from "../../components/AdvanceSearch/AdvanceSearch"; // Uncomment if needed
import Features from "../../components/Features/Features";
import { Container, Row, Col } from "react-bootstrap";

import "./home.css";

import Gallery from "../../components/Gallery/Gallery";
import Cards from "../../components/Cards/Cards";
import { destinationsData, popularsData } from "../../utils/data";
import PopularCard from "../../components/Cards/PopularCard";

const Home = () => {
  return (
    <>
      <Banner />
      <Features />

      {/* Tour Section Start */}
      <section className="tours_section">
        <Container>
          <Row>
            <Col md="12">
              <div className="main_heading">
                <h1>Choose Your Next Destination</h1>
              </div>
            </Col>
          </Row>

          <Row className="g-4">
            {destinationsData.map((destination, inx) => (
              <Col md={3} sm={6} xs={12} key={inx}>
                <Cards destination={destination} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      {/* Tour Section End */}

      <section className="popular py-5">
        <Container>
          <Row>
            <Col md="12">
              <div className="main_heading">
                <h1>Popular Activities</h1>
              </div>
            </Col>
          </Row>
          <Row>
            {popularsData.map((val, inx) => (
              <Col md={3} sm={6} xs={12} className="mb-5" key={inx}>
                <PopularCard val={val} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="call_us">
        <Container>
          <Row className="align-items-center">
            <Col md="8">
              <h5 className="title">CALL TO ACTION</h5>
              <h2 className="heading">
                READY FOR UNFORGETTABLE TRAVEL. REMEMBER US!
              </h2>
              <p className="text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
            </Col>
            <Col md="4" className="text-center mt-3 mt-md-0">
              <a
                href="tel:6398312365"
                className="secondary_btn bounce"
                rel="no"
              >
                Contact Us!
              </a>
            </Col>
          </Row>
        </Container>
        <div className="overlay"></div>
      </section>

      <section className="gallery">
        <Container>
          <Row>
            <Col md="12">
              <div className="main_heading">
                <h1>Photo Gallery</h1>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <Gallery />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
