import React, { useState } from "react";
import VisibilitySensor from "react-visibility-sensor/visibility-sensor";

const VisibilityTracker = ({ children }) => {
  const [state, setState] = useState({ visible: false, reference: 0 });

  const handleChange = () => {
    if (state.reference === 1 || state.reference === 2) {
      setState({
        visible: true,
        reference: 3
      });
    } else if (state.reference < 3) {
      setState(previous => {
        return {
          ...previous,
          reference: state.reference + 1
        };
      });
    }
  };

  return (
    <VisibilitySensor onChange={handleChange} partialVisibility={true}>
      {children(state.visible)}
    </VisibilitySensor>
  );
};

export default VisibilityTracker;
