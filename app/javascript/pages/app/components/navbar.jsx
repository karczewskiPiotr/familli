import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

const Navbar = ({ location }) => {
  const getLinkWrapperClassFor = path => {
    return `link-wrapper ${location.pathname == path ? "active" : "inactive"}`;
  };

  return (
    <div className="navbar-wrapper fixed-bottom">
      <div className={getLinkWrapperClassFor("/app")}>
        <Link to="/app" className="link">
          Hub
        </Link>
      </div>
      <div className={getLinkWrapperClassFor("/app/payment_history")}>
        <Link to="/app/payment_history" className="link">
          Payment History
        </Link>
      </div>
      <div className={getLinkWrapperClassFor("/app/statistics")}>
        <Link to="/app/statistics" className="link">
          Statistics
        </Link>
      </div>
      <div className={getLinkWrapperClassFor("/app/profile")}>
        <Link to="/app/profile" className="link">
          Profile
        </Link>
      </div>
    </div>
  );
};

export default withRouter(Navbar);
