import React from "react";
import "./ModalWithForm.css";

const ModalWithForm = ({
  children,
  title,
  buttonText,
  name,
  onClose,
  redirectButtonClick,
  redirectButtonText,
  hasRedirectButton,
}) => {
  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal__content modal__content-form">
        <button
          className="modal__close"
          type="button"
          onClick={onClose}
        ></button>
        <h3 className="modal__title-form">{title}</h3>
        <form className="modal__children">
          {children}
          <button className="modal__form-button" type="submit">
            {buttonText}
          </button>
          {hasRedirectButton && (
            <button
              className="modal__redirect-button"
              onClick={redirectButtonClick}
              type="button"
            >
              {redirectButtonText}
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
