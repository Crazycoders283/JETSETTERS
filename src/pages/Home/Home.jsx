import React from "react";
import Banner from "../../components/Banner/Banner";
import Features from "../../components/Features/Features";
import { Container, Row, Col } from "react-bootstrap";
import ValuedPartners from "./ValuedPartners"; // Import the ValuedPartners component
import CruiseDeals from "./CruiseDeals"; // Import the CruiseDeals component
import "./home.css";
import Login from'../../components/login/login';

import { popularsData } from "../../utils/data";
import PopularCard from "../../components/Cards/PopularCard";

const Home = () => {
  return (
    <>
      <Banner />
      <Features />

      {/* Tour Section Start */}
      <section className="popular py-5">
        <Container>
          <Row>
            <Col md="12">
              <div className="main_heading">
                <p>CHOOSE YOUR NEXT DESTINATION</p>
                <h1>EXPLORE BY DESTINATION</h1>
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
      {/* Tour Section End */}

      <section className="popular py-5">
        <Container>
          <Row>
            <Col md="12">
              <div className="main">
                <h1>EXPLORE BY CRUISE LINE</h1>
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
      {/* Popular Activities Section End */}

      {/* Cruise Deals Section */}
      <CruiseDeals />

      {/* Showcase Valued Partners Section */}
      <ValuedPartners />
    </>
  );
};

export default Home;
