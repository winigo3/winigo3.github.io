import React, {useState} from "react";
import { Container, Row, Col } from "react-bootstrap";
import CustomPopup from "../Home/customPopup";

// import homeLogo from "../../Assets/home-main.svg";


function Portfolios() {
    const [frameVis, setFrameVis] = useState(false);
    const [shellVis, setShellVis] = useState(false);
    const [sleepVis, setSleepVis] = useState(false);
    const [workVis, setWorkVis] = useState(false);
    const [appVis, setAppVis] = useState(false);
    const [energyVis, setEnergyVis] = useState(false);
    const [bmeVis, setBmeVis] = useState(false);

    const frameHandler = (e) => { setFrameVis(e); };
    const shellHandler = (e) => { setShellVis(e); };
    const sleepHandler = (e) => { setSleepVis(e); };
    const workHandler = (e) => { setWorkVis(e); };
    const appHandler = (e) => { setAppVis(e); };
    const energyHandler = (e) => { setEnergyVis(e); };
    const bmeHandler = (e) => { setBmeVis(e); };


    return (
        <section>
            <Container fluid className="home-section" >
                <Container >
                    <Row>
                        <Col md={12} className="home-about-social">
                            <h1>Subteam Portfolios</h1>
                            <p>
                                <span className="shed-orange"> One pagers </span> from each subteam from the Fall semester.
                            </p>
                            <ul className="home-about-social-links">
                                <li className="btn-primary portfolio-buttons" onClick={(e) => setFrameVis(!frameVis)}>
                                    Frame
                                </li>
                                <li className="btn-primary portfolio-buttons" onClick={(e) => setShellVis(!frameVis)}>
                                    Shell
                                </li>
                            </ul>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12} className="home-about-social">
                            <ul className="home-about-social-links">
                                <li className="btn-primary portfolio-buttons" onClick={(e) => setSleepVis(!frameVis)}>
                                    Sleep
                                </li>
                                <li className="btn-primary portfolio-buttons" onClick={(e) => setWorkVis(!frameVis)}>
                                    Workspace
                                </li>
                                <li className="btn-primary portfolio-buttons" onClick={(e) => setAppVis(!frameVis)}>
                                    Appliances
                                </li>
                            </ul>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12} className="home-about-social">
                            <ul className="home-about-social-links">
                                <li className="btn-primary portfolio-buttons" onClick={(e) => setEnergyVis(!frameVis)}>
                                    Energy
                                </li>
                                <li className="btn-primary portfolio-buttons" onClick={(e) => setBmeVis(!frameVis)}>
                                    BME
                                </li>
                            </ul>
                        </Col>
                    </Row>
                    <Row>
                        <button className="btn-home"><a href="/" className="portfolio-link">Home</a></button>
                    </Row>

                    <CustomPopup onClose={frameHandler} show={frameVis} >
                        <img src={require("../Home/eports/Frame.png")} alt={"frame e portfolio"}/>
                    </CustomPopup>
                    <CustomPopup onClose={shellHandler} show={shellVis} >
                        <img src={require("../Home/eports/Shell.png")} alt={"shell e portfolio"}/>
                    </CustomPopup>
                    <CustomPopup onClose={sleepHandler} show={sleepVis} >
                        <img src={require("../Home/eports/Sleep.png")} alt={"sleep e portfolio"}/>
                    </CustomPopup>
                    <CustomPopup onClose={workHandler} show={workVis} >
                        <img src={require("../Home/eports/Workspace.png")} alt={"workspace e portfolio"}/>
                    </CustomPopup>
                    <CustomPopup onClose={appHandler} show={appVis} >
                        <img src={require("../Home/eports/Appliances.png")} alt={"appliances e portfolio"}/>
                    </CustomPopup>
                    <CustomPopup onClose={energyHandler} show={energyVis} >
                        <img src={require("../Home/eports/Energy.png")} alt={"energy e portfolio"}/>
                    </CustomPopup>
                    <CustomPopup onClose={bmeHandler} show={bmeVis} >
                        <img src={require("../Home/eports/BME.png")} alt={"BME e portfolio"}/>
                    </CustomPopup>

                </Container>
            </Container>
        </section>
    );
}

export default Portfolios;
