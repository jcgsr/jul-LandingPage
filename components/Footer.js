import React from "react";
import { Container, Row, Col } from "reactstrap";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  const links = [
    {
      id: 1,
      title: "Características",
      child: [
        { title: "LOREM IPSUM", link: "/" },
        { title: "LOREM IPSUM", link: "/" },
        { title: "LOREM IPSUM", link: "/" },
        { title: "LOREM IPSUM", link: "/" },
      ],
    },
    {
      id: 2,
      title: "Sobre",
      child: [
        { title: "Contato", link: "/" },
        { title: "FAQs", link: "/" },
      ],
    },
  ];

  return (
    <section className="footer section">
      <Container>
        <Row>
          <Col lg={4}>
            <div className="mb-4">
              <p className="text-muted mt-4 mb-2">email@email.com</p>
              <h6 className="text-muted font-weight-normal">+99 1234-5678-9</h6>
            </div>
          </Col>
          <Col lg={8}>
            <Row>
              {links.map((link, key) => (
                <Col key={key} md={4}>
                  <h6 className="text-dark mb-3">{link.title}</h6>
                  <ul className="list-unstyled company-sub-menu">
                    {link.child.map((fLink, key) => (
                      <li key={key}>
                        <a href={fLink.link}>{fLink.title}</a>
                      </li>
                    ))}
                  </ul>
                </Col>
              ))}

              <Col md={4}>
                <h6 className="text-dark mb-3">Nosso Endereço</h6>
                <p className="text-muted f-14">
                  1234 Lorem Ipsum dummy text, 12345
                </p>
                <h6 className="text-muted pb-2">Email: email@email.com</h6>
                <ul className="list-unstyled footer-social-list mt-4">
                  <li className="list-inline-item">
                    <a href="#">
                      <FaFacebookF />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <FaInstagram />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <FaWhatsapp />
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col md={12}>
            <div className="text-center text-muted">
              <p className="mb-0 f-15">2020 © Sua Empresa</p>
              <p>Todos os Direitos Reservados</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Footer;
