import React from "react";
import "./OurTeam.css";
import { Col, Container, Row } from "react-bootstrap";
import doctor1 from "../../../../Images/Doctor/doctor1.png";
import doctor2 from "../../../../Images/Doctor/doctor2.png";
import doctor3 from "../../../../Images/Doctor/doctor3.png";
import doctor4 from "../../../../Images/Doctor/doctor4.png";
import { Link } from "react-router-dom";

const OurTeam = () => {
  return (
    <div className="doctors pt-5 ">
      <h1 className="service-title  mb-5">Meet Our Doctor's</h1>
      <Container>
        <h3>Who we are</h3>
        <Row className="pt-3">
          <Col className="doctors-shadow" sm={6} md={3} lg={3}>
            <div className="doctor-photo">
              <div className="photo-frame">
                <div className="photo">
                  <img src={doctor4} alt="" />
                </div>
              </div>
            </div>
            <div className="photo-details">
              <h3>Sandra Bells</h3>
              <p>Caregiver</p>
            </div>
          </Col>
          <Col className="doctors-shadow" sm={6} md={3} lg={3}>
            <div className="doctor-photo">
              <div className="photo-frame">
                <div className="photo">
                  <img src={doctor3} alt="" />
                </div>
              </div>
            </div>
            <div className="photo-details">
              <h3>Dr. Max Turner</h3>
              <p>Caregiver</p>
            </div>
          </Col>
          <Col className="doctors-shadow" sm={6} md={3} lg={3}>
            <div className="doctor-photo">
              <div className="photo-frame">
                <div className="photo">
                  <img src={doctor2} alt="" />
                </div>
              </div>
            </div>
            <div className="photo-details">
              <h3>Esme Walsh</h3>
              <p>Physician</p>
            </div>
          </Col>
          <Col className="doctors-shadow" sm={6} md={3} lg={3}>
            <div className="doctor-photo">
              <div className="photo-frame">
                <div className="photo">
                  <img src={doctor1} alt="" />
                </div>
              </div>
            </div>
            <div className="photo-details">
              <h3>Rose Mention</h3>
              <p>Caregiver</p>
            </div>
          </Col>
        </Row>
      </Container>
      <Link to="about">
        <button className="last-btn mb-5 ">Meet all Team members</button>
      </Link>
      {/*------------ indipendent section ---------------- */}
      <div className="ind">
        <h1 className="pt-2 mb-5">Independent Living - For Couples</h1>
        <h5 className="pb-5">
          Independent Living is a living option for residents to enjoy the
          freedom, <br /> services & amenities with the confidence of knowing
          that support is available.
        </h5>
        <Link to="/specialist">
          <button className="last-btn mb-5 px-5">More Information</button>
        </Link>
      </div>
    </div>
  );
};

export default OurTeam;
