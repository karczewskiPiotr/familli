import React from "react";
import { Row, Col } from "react-bootstrap";
import GitHubLogo from "../images/github_logo.png";

const Footer = () => {
  return (
    <Row className="footer">
      <Col>
        <a
          href="https://github.com/karczewskiPiotr"
          className="hvr-icon-float"
          rel="nofollow"
          target="_blank"
        >
          <p className="hvr-icon">@Piotr Karczewski</p>
        </a>
      </Col>
    </Row>
  );
};

export default Footer;
