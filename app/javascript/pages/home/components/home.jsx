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
  const [isRemindersVisible, setIsRemindersVisible] = useState({
    visibility: false,
    count: 0
  });
  const [isStatusesVisible, setIsStatusesVisible] = useState({
    visibility: false,
    count: 0
  });

  const toggleReminders = () => {
    if (isRemindersVisible.count < 3) {
      setIsRemindersVisible(previous => {
        return {
          visibility: !previous.visibility,
          count: previous.count + 1
        };
      });
    }
  };

  const toggleStatuses = () => {
    if (isStatusesVisible.count < 3) {
      setIsStatusesVisible(previous => {
        return {
          visibility: !previous.visibility,
          count: previous.count + 1
        };
      });
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
        <Reminders isVisible={isRemindersVisible.visibility} />
        <VisibilitySensor onChange={toggleStatuses}>
          <div className="divider">&nbs</div>
        </VisibilitySensor>
        <Statuses isVisible={isStatusesVisible.visibility} />
      </Container>
    </>
  );
};

export default Home;
