import React from "react";
import { Container, Row, Col } from "reactstrap";
import Lottie from "react-lottie";
import animationData from "../public/lotties/110375-bapcelebration.json";

const Hero = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <section className="section position-relative">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="pr-lg-5">
              <h1 className="mb-4 font-weight-normal line-height-1_4">
                Aqui vai o texto para descrever a sua{" "}
                <span className="text-primary font-weight-medium">
                  Marca/Empresa
                </span>
              </h1>
              <p className="text-muted mb-4 pb-2">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged.
              </p>
              <a href="#" className="btn btn-warning">
                Saiba mais <span className="ml-2 right-icon">&#8594;</span>
              </a>
            </div>
          </Col>
          <Col lg={6}>
            <div className="mt-5 mt-lg-0">
              <Lottie options={defaultOptions} height={400} width={400} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
