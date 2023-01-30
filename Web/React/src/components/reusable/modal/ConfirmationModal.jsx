import React from "react";

import ActionButton from "../../workspace/forms/ActionButton";

const ConfirmationModal = ({ modal, closeModal }) => {
  return (
    <div className="confirmation-window">
      <p>
        Tienes cambios sin guardar, deseas cerrar la pestaña? (Los cambios se
        perderan)
      </p>

      <div className="buttons">
        <ActionButton
          name={"SI, cerrar pestaña"}
          special={true}
          onClick={() => {
            closeModal();
            modal.callback();
          }}
        />
        <ActionButton
          name={"NO, cancelar"}
          special={true}
          color={"green"}
          onClick={closeModal}
        />
      </div>
    </div>
  );
};

export default ConfirmationModal;
