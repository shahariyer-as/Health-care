import React from "react";
import { Accordion, Row, Col, Container } from "react-bootstrap";
import "./Specialist.css";
import Img1 from "../../Images/specialist/1.png";
import Img2 from "../../Images/specialist/2.png";
import Img3 from "../../Images/specialist/3.png";
import Img4 from "../../Images/specialist/4.png";
import Img5 from "../../Images/specialist/5.png";
import Img6 from "../../Images/specialist/6.png";
import specialistImg from "../../Images/specialist/sp-b.jpg";

const Specialist = () => {
  return (
    <div className=" pb-5 ">
      <h1 className="font-weight pb-5">Our Specialist</h1>

      {/* accordation ---------- */}
      <Row>
        <Col sm={12} md={12} lg={7}>
          <Accordion className="container" defaultActiveKey="">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <h1 className="font-weight fs-4">NEUROLOGY</h1>
              </Accordion.Header>
              <Accordion.Body>
                <div className=" accordion-sec">
                  <div>
                    <h5 className="font-weight fs-5">MAMOGRAPHY</h5>
                    <p>
                      {" "}
                      Specialized X-rays of the breast to aid in the early
                      detection of breast cancer. A yearly mammogram is
                      recommended for women age 40 and older.
                    </p>

                    <h5 className="font-weight fs-5">
                      REPRODUCTIVE ENDOCRINOLOGY
                    </h5>
                    <p>
                      {" "}
                      Care and treatment for couples having difficulties
                      conceiving a child. Conventional therapies such as
                      medication and surgery can help your dreams of parenthood
                      come true. Our partnership with Mayo Clinic allows us to
                      provide referrals when advanced reproductive techniques
                      are required.
                    </p>
                  </div>
                  <img className="img-fluid" src={Img1} alt="" />
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <h1 className="font-weight fs-4">COSMETIC SURGERY</h1>
              </Accordion.Header>
              <Accordion.Body>
                <div className=" accordion-sec">
                  <div>
                    <h5 className="font-weight fs-5">MAMOGRAPHY</h5>
                    <p>
                      {" "}
                      Specialized X-rays of the breast to aid in the early
                      detection of breast cancer. A yearly mammogram is
                      recommended for women age 40 and older.
                    </p>

                    <h5 className="font-weight fs-5">
                      REPRODUCTIVE ENDOCRINOLOGY
                    </h5>
                    <p>
                      {" "}
                      Care and treatment for couples having difficulties
                      conceiving a child. Conventional therapies such as
                      medication and surgery can help your dreams of parenthood
                      come true. Our partnership with Mayo Clinic allows us to
                      provide referrals when advanced reproductive techniques
                      are required.
                    </p>
                  </div>
                  <img className="img-fluid" src={Img2} alt="" />
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                <h1 className="font-weight fs-4">MICMETIC SURGERY</h1>
              </Accordion.Header>
              <Accordion.Body>
                <div className=" accordion-sec">
                  <div>
                    <h5 className="font-weight fs-5">MAMOGRAPHY</h5>
                    <p>
                      {" "}
                      Specialized X-rays of the breast to aid in the early
                      detection of breast cancer. A yearly mammogram is
                      recommended for women age 40 and older.
                    </p>

                    <h5 className="font-weight fs-5">
                      REPRODUCTIVE ENDOCRINOLOGY
                    </h5>
                    <p>
                      {" "}
                      Care and treatment for couples having difficulties
                      conceiving a child. Conventional therapies such as
                      medication and surgery can help your dreams of parenthood
                      come true. Our partnership with Mayo Clinic allows us to
                      provide referrals when advanced reproductive techniques
                      are required.
                    </p>
                  </div>
                  <img className="img-fluid" src={Img3} alt="" />
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                <h1 className="font-weight fs-4">MICROBIOLOGY LAB</h1>
              </Accordion.Header>
              <Accordion.Body>
                <div className=" accordion-sec">
                  <div>
                    <h5 className="font-weight fs-5">MAMOGRAPHY</h5>
                    <p>
                      {" "}
                      Specialized X-rays of the breast to aid in the early
                      detection of breast cancer. A yearly mammogram is
                      recommended for women age 40 and older.
                    </p>

                    <h5 className="font-weight fs-5">
                      REPRODUCTIVE ENDOCRINOLOGY
                    </h5>
                    <p>
                      {" "}
                      Care and treatment for couples having difficulties
                      conceiving a child. Conventional therapies such as
                      medication and surgery can help your dreams of parenthood
                      come true. Our partnership with Mayo Clinic allows us to
                      provide referrals when advanced reproductive techniques
                      are required.
                    </p>
                  </div>
                  <img className="img-fluid" src={Img4} alt="" />
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>
                <h1 className="font-weight fs-4">PEDIATRICS</h1>
              </Accordion.Header>
              <Accordion.Body>
                <div className=" accordion-sec">
                  <div>
                    <h5 className="font-weight fs-5">MAMOGRAPHY</h5>
                    <p>
                      {" "}
                      Specialized X-rays of the breast to aid in the early
                      detection of breast cancer. A yearly mammogram is
                      recommended for women age 40 and older.
                    </p>

                    <h5 className="font-weight fs-5">
                      REPRODUCTIVE ENDOCRINOLOGY
                    </h5>
                    <p>
                      {" "}
                      Care and treatment for couples having difficulties
                      conceiving a child. Conventional therapies such as
                      medication and surgery can help your dreams of parenthood
                      come true. Our partnership with Mayo Clinic allows us to
                      provide referrals when advanced reproductive techniques
                      are required.
                    </p>
                  </div>
                  <img className="img-fluid" src={Img5} alt="" />
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header>
                <h1 className="font-weight fs-4">DIAGONISTIC IMAGEING</h1>
              </Accordion.Header>
              <Accordion.Body>
                <div className=" accordion-sec">
                  <div>
                    <h5 className="font-weight fs-5">PEDITRICS</h5>
                    <p>
                      {" "}
                      Specialized X-rays of the breast to aid in the early
                      detection of breast cancer. A yearly mammogram is
                      recommended for women age 40 and older.
                    </p>

                    <h5 className="font-weight fs-5">
                      REPRODUCTIVE ENDOCRINOLOGY
                    </h5>
                    <p>
                      {" "}
                      Care and treatment for couples having difficulties
                      conceiving a child. Conventional therapies such as
                      medication and surgery can help your dreams of parenthood
                      come true. Our partnership with Mayo Clinic allows us to
                      provide referrals when advanced reproductive techniques
                      are required.
                    </p>
                  </div>
                  <img className="img-fluid" src={Img6} alt="" />
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6">
              <Accordion.Header>
                <h1 className="font-weight fs-4">CARDIOLOGY</h1>
              </Accordion.Header>
              <Accordion.Body>
                <div className=" accordion-sec">
                  <div>
                    <h5 className="font-weight fs-5">MAMOGRAPHY</h5>
                    <p>
                      {" "}
                      Specialized X-rays of the breast to aid in the early
                      detection of breast cancer. A yearly mammogram is
                      recommended for women age 40 and older.
                    </p>

                    <h5 className="font-weight fs-5">
                      REPRODUCTIVE ENDOCRINOLOGY
                    </h5>
                    <p>
                      {" "}
                      Care and treatment for couples having difficulties
                      conceiving a child. Conventional therapies such as
                      medication and surgery can help your dreams of parenthood
                      come true. Our partnership with Mayo Clinic allows us to
                      provide referrals when advanced reproductive techniques
                      are required.
                    </p>
                  </div>
                  <img className="img-fluid" src={Img1} alt="" />
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
        <Col sm={12} md={12} lg={5}>
          <img src={specialistImg} className="image-sec" alt="" width={750} />
        </Col>
      </Row>
    </div>
  );
};

export default Specialist;
