import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./TopSection.css";
const TopSection = () => {
  return (
    <div>
      <Container>
        <Row className="block-main">
          <Col style={{ padding: "0px" }} xs={12} md={4}>
            <div className="first-block">
              <h4>Top Doctors</h4>
              <br />
              <p>
                Cum sociis natoque penatibus et magnis dis parturient montesmus.
                Pro vel nibh et elit mollis commodo et nec augue tristique sed
                volutpat.
              </p>
              <button className="top-btn">
                <span>Read More</span>
              </button>
            </div>
          </Col>
          <Col style={{ padding: "0px" }} gap={0} xs={12} md={4}>
            <div className="second-block">
              <h4>24 Hours Services</h4> <br />
              <p>
                We are committed to the integrity and accuracy of our content.
                Our editorial process includes key steps to create the best
                content to
              </p>
              <button className="top-btn">
                <span>Read More</span>
              </button>
            </div>
          </Col>
          <Col style={{ padding: "0px" }} xs={12} md={4}>
            <div className="third-block">
              <h4>Opening hours</h4> <br />
              <p style={{ paddingBottom: "" }}>
                <span>
                  Monday to Friday
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  8:00 - 17:00
                </span>
                <hr />
                <span>
                  Saturday to Friday
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8:00
                  - 17:00
                </span>
                <hr />
                <span>
                  Sunday to Friday
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  8:00 - 17:00
                </span>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TopSection;
