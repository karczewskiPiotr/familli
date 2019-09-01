import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Logo from "../components/logo";
import Message from "../components/message";
import SignInButton from "../components/sign_in_button";
import AppMock from "../components/app_mock";
import Reminders from "../components/features/remiders";
import Statuses from "../components/features/statuses";
import VisibilitySensor from "react-visibility-sensor/visibility-sensor";

const Home = () => {
  const [remindersVisibility, setRemindersVisibility] = useState({
    visibility: false,
    count: 0
  });
  const [statusesVisibility, setStatusesVisibility] = useState({
    visibility: false,
    count: 0
  });

  const toggleVisibility = setState => {
    setState(previous => {
      return {
        visibility: !previous.visibility,
        count: previous.count + 1
      };
    });
  };

  const toggleReminders = () => {
    if (remindersVisibility.count < 3) {
      toggleVisibility(setRemindersVisibility);
    }
  };

  const toggleStatuses = () => {
    if (statusesVisibility.count < 3) {
      toggleVisibility(setStatusesVisibility);
    }
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
        <VisibilitySensor onChange={toggleReminders}>
          <div>&nbs</div>
        </VisibilitySensor>
        <Reminders isVisible={remindersVisibility.visibility} />
        <VisibilitySensor onChange={toggleStatuses}>
          <div className="divider">&nbs</div>
        </VisibilitySensor>
        <Statuses isVisible={statusesVisibility.visibility} />
      </Container>
    </>
  );
};

export default Home;
