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
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.
                                </p>
                                <p className="about-wrapper__info-text">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.
                                </p>
                                <p className="about-wrapper__info-text">
                                   'Lorem ipsum dolor sit, amet consectetur adipisicing elit.
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