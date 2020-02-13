import React from "react";
import Select from "react-select";

const AddPaymentForm = ({ members }) => {
  const options = members.map(member => {
    return { value: member.identity, label: member.identity };
  });

  const test = () => {
    console.log(members);
  };

  const validMembers = () => {
    return members.some(member => member.invitation === "accepted");
  };

  return (
    <>
      <form className="form">
        <h6 className="label">Payment amount</h6>
        <input className="input-field" id="payment-amount" type="number" />
        <h6 className="label">Member</h6>
        <Select menuPlacement="top" options={options} />
      </form>
      <div className="create-btn-wrapper">
        <button className="create-btn" onClick={test} disabled={!validMembers()}>
          Create
        </button>
      </div>
    </>
  );
};

export default AddPaymentForm;
