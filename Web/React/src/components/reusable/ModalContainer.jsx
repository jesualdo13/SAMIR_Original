import { useContext } from "react";

import { ContextModal } from "../../contexts/ContextModal";
import ConfirmationModal from "./modal/ConfirmationModal";
import SearchComponent from "./modal/SearchComponent";
import TFAModal from "./modal/TFAModal";

const ModalContainer = () => {
  const { modal, setModal } = useContext(ContextModal);

  const closeModal = () => {
    setModal({ ...modal, isOpen: false });
  };

  const closeModalContainer = (e) => {
    e.stopPropagation();

    if (e.target.id === "modal-close-area") {
      closeModal();

      if (modal.screen === "search") {
        modal.callback();
      }
    }
  };

  return (
    <div id="modal" className={`${modal.isOpen ? "open" : ""}`}>
      <div
        id="modal-close-area"
        className="container"
        onClick={closeModalContainer}
      >
        {modal.screen === "tfa" ? (
          <TFAModal />
        ) : modal.screen === "confirmation" ? (
          <ConfirmationModal modal={modal} closeModal={closeModal} />
        ) : (
          <SearchComponent options={modal.options} />
        )}
      </div>
    </div>
  );
};

export default ModalContainer;
