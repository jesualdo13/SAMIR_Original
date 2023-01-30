import React, { useContext, useEffect, useState } from "react";

import { ContextModal } from "../../contexts/ContextModal";
import { ContextForms } from "../../contexts/ContextForms";
import NavigationBar from "./navigationBar/NavigationBar";
import ShortcutsWindow from "./ShortcutsWindow";
import TabsZone from "./TabGenerator";
import Window from "./Window";
import LoadingScreen from "./LoadingScreen";

const WorkspacePage = () => {
  // Para destacar ventana y tab, 0 = ninguna
  const [activeWindowID, setActiveWindowID] = useState(0);

  //Para renderizar ventanas
  const [arrayOfOpenWindows, setArrayOfOpenWindows] = useState([]);

  // Para evitar mas reorganizaciones cuando ya se esta en una
  const [rearrangingTabs, setRearrangingTabs] = useState(false);

  // Colección de formularios con cambios sin guardar
  const [formHasUnsavedChanges, setformHasUnsavedChanges] = useState({});

  const { setModal } = useContext(ContextModal);

  // Abrir ventana y tab
  const openNewWindow = (data) => {
    console.log("Opening FORM-ID: ", data.id);

    if (!rearrangingTabs) {
      setRearrangingTabs(true);

      if (!arrayOfOpenWindows.includes(data)) {
        setArrayOfOpenWindows([...arrayOfOpenWindows, data]);
      }

      setActiveWindowID(data.id);

      // Agregar a la colección para observar el form
      setformHasUnsavedChanges({ ...formHasUnsavedChanges, [data.id]: false });

      setTimeout(() => {
        setRearrangingTabs(false);
      }, 10);
    }
  };

  const focusTab = (id) => {
    setActiveWindowID(id);
  };

  // Cerrar ventana y tab
  const closeTab = (id) => {
    if (!rearrangingTabs) {
      setRearrangingTabs(true);

      let filtered = arrayOfOpenWindows.filter((el) => {
        return el.id !== id;
      });

      setArrayOfOpenWindows(filtered);
    }
  };

  // Darle el foco a una ventana en cola cuando se cierra la actual
  useEffect(() => {
    if (arrayOfOpenWindows.length === 0) {
      setActiveWindowID(0);
    } else {
      setActiveWindowID(arrayOfOpenWindows[arrayOfOpenWindows.length - 1].id);
    }

    setRearrangingTabs(false);
  }, [arrayOfOpenWindows]);

  // Comprobar si se puede cerrar la ventana
  const checkTab = (id) => {
    if (!formHasUnsavedChanges[id]) {
      closeTab(id);
    } else {
      setModal({
        isOpen: true,
        screen: "confirmation",
        callback: () => closeTab(id),
      });
    }
  };

  // Loading Screen
  const [loadingWorkspace, setLoadingWorkspace] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingWorkspace(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div id="workspace">
      {/* Loading */}
      {loadingWorkspace && <LoadingScreen />}

      {/* Workspace */}
      <NavigationBar openNewWindow={openNewWindow} />
      <ContextForms.Provider
        value={{ formHasUnsavedChanges, setformHasUnsavedChanges }}
      >
        <TabsZone
          arrayOfOpenWindows={arrayOfOpenWindows}
          activeWindowID={activeWindowID}
          focusTab={focusTab}
          closeTab={checkTab}
        />
        {arrayOfOpenWindows.map((el) => {
          return (
            <Window
              key={el.id}
              el={el}
              activeWindowID={activeWindowID}
              openNewWindow={openNewWindow}
            />
          );
        })}
      </ContextForms.Provider>
      <ShortcutsWindow
        activeWindowID={activeWindowID}
        openNewWindow={openNewWindow}
      />
    </div>
  );
};

export default WorkspacePage;
