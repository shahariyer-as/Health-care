import React from "react";
import "./OurTeam.css";
import { Col, Container, Row } from "react-bootstrap";
import doctor1 from "../../../../Images/Doctor/doctor1.png";

// import doctor2 from "../../../../Images/Doctor/doctor2.png";
// import doctor3 from "../../../../Images/Doctor/doctor3.png";
// import doctor4 from "../../../../Images/Doctor/doctor4.png";

const OurTeam = () => {
  return (
    <div>
      <h1 className="service-title mb-5">Meet Our Doctor's</h1>
      <Container>
        <Row>
          <Col sm={6} md={3} lg={3}>
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
          <Col sm={6} md={3} lg={3}>
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
          <Col sm={6} md={3} lg={3}>
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
          <Col sm={6} md={3} lg={3}>
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
    </div>
  );
};

export default OurTeam;
