import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Logo from "./logo";
import Message from "./message";
import SignInButton from "./sign_in_button";
import AppMock from "./app_mock";
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
