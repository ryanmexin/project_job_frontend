import React from "react";
import ModalWithForm from "../ModalWithForm/ModalWIthForm";
import "./SignUpModal.css";

const SignUpModal = ({ handleCloseModal, onClickSignIn }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic here
  };

  return (
    <ModalWithForm
      title="Sign Up"
      onClose={handleCloseModal}
      onSubmit={handleSubmit}
      buttonText="Sign Up"
      redirectButtonClick={onClickSignIn}
      hasRedirectButton={true}
      redirectButtonText="or Sign In"
    >
      {/* My SignUp form fields */}
      <label>
        <input
          type="text"
          name="name"
          className="modal__input"
          placeholder="UserName"
          required
        />
      </label>
      <label>
        <input
          type="email"
          name="email"
          className="modal__input"
          placeholder="Email"
          required
        />
      </label>
      <label>
        <input
          type="password"
          name="password"
          className="modal__input"
          placeholder="Password"
          required
        />
      </label>
      <label>
        <input
          type="text"
          name="name"
          className="modal__input"
          placeholder="Password Again"
          required
        />
      </label>
    </ModalWithForm>
  );
};

export default SignUpModal;
