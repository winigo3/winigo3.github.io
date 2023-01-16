import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useState} from "react";
import CustomPopup from "./customPopup";
import "./popup.css"
import "../../style.css"

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
              <h1>Who We Are</h1>
              <p>
                Our team is made up of ~35 Mechanical Engineering Students in the Duke class of 2023.
                We are building a smart home based around a ~6.5' x 14' trailer.
                The home will be a smart space that enables workers, families, and others alike to travel
                to novel locations whether it be deep in nature, at a campsite, or anywhere else they can park.
              </p>
              <p>
                The team is structured into 7 subteams of 4-6 with 4 team leads serving in leadership positions (Meet the Team page coming soon!).
              </p>
              <p>
                We would love to work with other groups, companies, and anyone who is interested in getting involved!
                Send us a quick email using the button below if you have any questions, ideas, or any other interest
                in the project and we'll get right back to you
              </p>
            </Col>
            <Col md={12} className="home-about-social">
              <h1>Subteam Portfolios</h1>
              <p>
                <span className="shed-orange"> One pagers </span> describing some of the work each subteam did during the Fall 2022 semester.
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
