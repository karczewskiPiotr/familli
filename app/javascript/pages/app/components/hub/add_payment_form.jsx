import React from "react";
import Select from "react-select";

const AddPaymentForm = () => {
  const options = [
    { value: "test", label: "test" },
    { value: "test", label: "test" },
    { value: "test", label: "test" },
    { value: "test", label: "test" }
  ];

  return (
    <>
      <form className="form">
        <h6 className="label">Payment amount</h6>
        <input className="input-field" id="payment-amount" type="number" />
        <h6 className="label">Member</h6>
        <Select options={options} menuPlacement="top" />
      </form>
      <div className="create-btn-wrapper">
        <button className="create-btn">Create</button>
      </div>
    </>
  );
};

export default AddPaymentForm;
