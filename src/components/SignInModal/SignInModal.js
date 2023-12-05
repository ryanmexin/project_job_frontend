import React from "react";

import ModalWithForm from "../ModalWithForm/ModalWIthForm";
import "./SignInModal.css";

const SignInModal = ({ handleCloseModal,onClickSignUp }) => {
  return (
    <ModalWithForm
      title="Sign In"
      onClose={handleCloseModal}
      buttonText="Sign In"
      redirectButtonClick={onClickSignUp}
      hasRedirectButton={true}
      redirectButtonText="or Sign Up"
    >
      {/* My SignIn form fields */}
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
    </ModalWithForm>
  );
};

export default SignInModal;
