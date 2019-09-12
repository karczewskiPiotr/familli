import React, { useState } from "react";
import axios from "axios";
import Fade from "react-reveal/Fade";

const StartFamillyForm = ({ setVisibility }) => {
  const [formData, setFormData] = useState({
    familly: {
      subscription_fee: 0,
      currency: "",
      renewal_day: 0
    }
  });

  const [formValidity, setFormValidity] = useState({
    subscription_fee: true,
    currency: true,
    renewal_day: true
  });

  const [changes, setChanges] = useState(false)

  const closePopUp = () => {
    setVisibility(false);
  };

  const handleSubscriptionChange = () => {
    const value = document.getElementById("subscription-fee").value;
    setChanges(true)
    if (value > 0) {
      setFormValidity(previous => {
        return {
          ...previous,
          subscription_fee: true
        };
      });
      setFormData(previous => {
        return {
          ...previous,
          subscription_fee: value
        };
      });
    } else {
      setFormValidity(previous => {
        return {
          ...previous,
          subscription_fee: false
        };
      });
    }
  };

  const handleCurrencyChange = () => {
    const value = document.getElementById("currency").value;
    setChanges(true)
    if (value != "") {
      setFormValidity(previous => {
        return {
          ...previous,
          currency: true
        };
      });
      setFormData(previous => {
        return {
          ...previous,
          currency: value
        };
      });
    } else {
      setFormValidity(previous => {
        return {
          ...previous,
          currency: false
        };
      });
    }
  };

  const handleRenewalDayChange = () => {
    const value = document.getElementById("renewal-day").value;
    setChanges(true)
    if (value > 0 && value <= 28) {
      setFormValidity(previous => {
        return {
          ...previous,
          renewal_day: true
        };
      });
      setFormData(previous => {
        return {
          ...previous,
          renewal_day: value
        };
      });
    } else {
      setFormValidity(previous => {
        return {
          ...previous,
          renewal_day: false
        };
      });
    }
  };

  const isFormDataValid = () => {
    return (
      formValidity.subscription_fee &&
      formValidity.currency &&
      formValidity.renewal_day
    );
  };

  const handleCreate = () => {
    if (isFormDataValid()) {
      axios
        .post("/api/v1/famillies", {
          familly: {
            subscription_fee: formData.subscription_fee,
            currency: formData.currency,
            renewal_date: `2019-09-${formData.renewal_day}`
          }
        })
        .then(closePopUp);
    }
  };


  return (
    <>
      <form className="form">
        <h6 className="label">Your subscription fee</h6>
        <input
          className="input-field"
          id="subscription-fee"
          type="number"
          onChange={handleSubscriptionChange}
        />
        <Fade when={!formValidity.subscription_fee && changes} collapse>
          <div className="input-error">Value should be greater than 0.</div>
        </Fade>
        <h6 className="label">Currency</h6>
        <input
          type="text"
          className="input-field"
          id="currency"
          onChange={handleCurrencyChange}
        />
        <Fade when={!formValidity.currency && changes} collapse>
          <div className="input-error">Value can't be blank.</div>
        </Fade>
        <h6 className="label">Renewal day</h6>
        <input
          id="renewal-day"
          type="number"
          className="input-field"
          placeholder="1 - 28"
          onChange={handleRenewalDayChange}
        />
        <Fade when={!formValidity.renewal_day && changes} collapse>
          <div className="input-error">Value must be between 1 and 28.</div>
        </Fade>
      </form>
      <div className="create-btn-wrapper">
        <button className="create-btn" onClick={handleCreate}>
          Create
        </button>
      </div>
    </>
  );
};

export default StartFamillyForm;
