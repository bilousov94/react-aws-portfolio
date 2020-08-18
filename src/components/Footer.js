import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';

const Footer = () => {

    return (
        <footer className="footer navbar-static-bottom">
            <Container>
                <span className="back-to-top">
                    <Link to="hero" smooth duration={1000}>
                        <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
                    </Link>
                </span>
                <div className="social-links">
                    <a
                        href="https://github.com/bilousov94"
                        target="_blank"
                        aria-label="github"
                    >
                        <i className="fa fa-github fa-inverse" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/valentyn-bilousov/"
                        target="_blank"
                        aria-label="linkedin"
                    >
                        <i className="fa fa-linkedin fa-inverse" />
                    </a>
                    <a
                        href="https://medium.com/@valentynbilousov"
                        target="_blank"
                        aria-label="medium"
                    >
                        <i className="fa fa-medium fa-inverse" />
                    </a>
                </div>
                <hr />
                <p className="footer__text">
                    © {new Date().getFullYear()} - developed by Valentyn Bilousov
                </p>
            </Container>
        </footer>
    );
};

export default Footer;