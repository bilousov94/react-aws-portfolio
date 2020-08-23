import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from './partials/Title';
import about from '../images/about.jpg';


const About = () => {

    const [isDesktop, setIsDesktop] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (window.innerWidth > 769) {
            setIsDesktop(true);
            setIsMobile(false);
        } else {
            setIsMobile(true);
            setIsDesktop(false);
        }
    }, []);

    return (
        <section id="about">
            <Container>
                <Title title="About Me" />
                <Row className="about-wrapper">
                    <Col md={6} sm={12}>
                        <Fade bottom duration={1000} delay={600} distance="30px">
                            <div className="about-wrapper__image">
                                <div className="rounded shadow-lg image-wrapper">
                                    <img src={about} alt="Valentyn Bilousov" className="profileImg"/>
                                </div>
                            </div>
                        </Fade>
                    </Col>
                    <Col md={6} sm={12}>
                        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
                            <div className="about-wrapper__info">
                                <p className="about-wrapper__info-text">
                                   Hi, I am Valentyn Bilousov, Full Stack developer with a passion for new technologies.
                                </p>
                                <p className="about-wrapper__info-text">
                                    My main backend experience includes design and development of APIs in Python and NodeJS programming languages, set up AWS infrastructure for it and monitoring
                                    logs. Moved some functionality from PHP website to new approach using AWS. Built library using AWS PHP SDK to work with different services.
                                </p>
                                <p className="about-wrapper__info-text">
                                   My front end experience is to building responsive UI solutions for multiple websites on React and Angular frameworks. My experience also includes working
                                   on mobile app development, using ionic V5, Angular 9 and NGRX frameworks.
                                </p>

                                <span className="d-flex mt-3">
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="cta-btn cta-btn--resume"
                                        href="https://gatsby-simplefolio.netlify.app/"
                                    >
                                        Resume
                                    </a>
                  </span>
                            </div>
                        </Fade>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;