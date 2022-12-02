import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useState} from "react";
import CustomPopup from "./customPopup";
import "./popup.css"
import "../../style.css"
import myImg from "../../Assets/dhruv.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub
} from "react-icons/ai";
import { FaLinkedinIn, FaEnvelope } from "react-icons/fa";


function Home3() {
  return (
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>Subteam Portfolios</h1>
              <p>
                <span className="shed-orange"> One pagers </span> from each subteam from the Fall semester.
              </p>
              <ul className="home-about-social-links">
                <li className="social-icons icon-colour portfolio-buttons" >
                  <a className="portfolio-link" href="/portfolios"> Portfolios </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
  );
}
export default Home3;
