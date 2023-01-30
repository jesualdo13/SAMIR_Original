import { useContext, useEffect } from "react";

import { ContextForms } from "../contexts/ContextForms";

const useInputVerification = (id, inputs) => {
  const { formHasUnsavedChanges, setformHasUnsavedChanges } =
    useContext(ContextForms);

  // Comprobar que hay cambios en los inputs
  useEffect(() => {
    for (const [key, value] of Object.entries(inputs)) {
      // Estados iniciales
      if (value === "" || value === 0 || value === false) {
        setformHasUnsavedChanges({ ...formHasUnsavedChanges, [id]: false });
      } else {
        console.log(`Input-ID: '${key}' has an unsaved value`);

        setformHasUnsavedChanges({ ...formHasUnsavedChanges, [id]: true });
        break;
      }
    }
    //eslint-disable-next-line
  }, [inputs]);
};

export default useInputVerification;
