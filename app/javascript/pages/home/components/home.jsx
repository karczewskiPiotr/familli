import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Logo from "../components/logo";
import Message from "../components/message";
import SignInButton from "../components/sign_in_button";
import AppMock from "../components/app_mock";
import Reminders from "./remiders";
import Statuses from "./statuses";

const Home = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Logo />
          </Col>
        </Row>
        <Row>
          <Col>
            <Message />
          </Col>
        </Row>
        <Row>
          <Col>
            <SignInButton />
          </Col>
        </Row>
        <AppMock />
        <Reminders />
        <Statuses />
      </Container>
    </>
  );
};

export default Home;
