import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Logo from "../components/logo";
import Message from "../components/message";
import SignInButton from "../components/sign_in_button";
import AppMock from "../components/app_mock";
import Reminders from "../components/features/remiders";

import VisibilitySensor from "react-visibility-sensor/visibility-sensor";

const Home = () => {
  const [isRemindersVisible, setIsRemindersVisible] = useState(false);

  const toggleReminders = () => {
    setIsRemindersVisible(visibility => {
      return !visibility;
    });
  };

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
        <VisibilitySensor partialVisibility={true} onChange={toggleReminders}>
          <div>&nbs</div>
        </VisibilitySensor>
        <Reminders isVisible={isRemindersVisible} />
      </Container>
    </>
  );
};

export default Home;
