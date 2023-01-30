import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import "./App.scss";

import { activateScreenSizeChangeDetection } from "./helpers/screenSizeChangeDetector";
import { ContextModal } from "./contexts/ContextModal";
import { ContextUser } from "./contexts/ContextUser";
import ModalContainer from "./components/reusable/ModalContainer";
import AppRouter from "./router/AppRouter";

function App() {
  // For responsiveness
  useEffect(() => {
    activateScreenSizeChangeDetection();
  }, []);

  // Modals global context
  const [modal, setModal] = useState({
    isOpen: false,
    screen: null,
    callback: () => {},
    options: {
      title: "",
      endpoint: "",
    },
  });

  const openSearchComponent = (
    title = "",
    endpoint = "",
    callback = () => {}
  ) => {
    setModal({
      isOpen: true,
      screen: "search",
      callback,
      options: { title, endpoint },
    });
  };

  // User global context
  const [user, setUser] = useState({
    isLogged: false,
    private_key: "",
    default_token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
  });

  return (
    <>
      <ContextModal.Provider value={{ modal, setModal, openSearchComponent }}>
        <ContextUser.Provider value={{ user, setUser }}>
          <ModalContainer />
          <ToastContainer
            position="bottom-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          <AppRouter />
        </ContextUser.Provider>
      </ContextModal.Provider>
    </>
  );
}

export default App;
