import React from "react";
import { withRouter } from "react-router";


const Assistant = ({ location }) => {
  return (
    <div className="assistant-wrapper">
      <p className="message">All payments for this month are settled.</p>
    </div>
  );
};

export default withRouter(Assistant);
