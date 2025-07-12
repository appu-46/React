import { createContext, useEffect } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

const LightModeContext = createContext();

function LightModeProvider({ children }) {
  const [isLightMode, setIsLightMode] = useLocalStorageState(
    false,
    "isLightMode"
  );

  useEffect(
    function () {
      if (isLightMode) {
        document.documentElement.classList.add("light-mode");
        document.documentElement.classList.remove("dark-mode");
      } else {
        {
          document.documentElement.classList.add("dark-mode");
          document.documentElement.classList.remove("light-mode");
        }
      }
    },
    [isLightMode]
  );

  function lightModeToggle() {
    setIsLightMode((isLight) => !isLight);
  }

  return (
    <LightModeContext.Provider value={{ isLightMode, lightModeToggle }}>
      {children}
    </LightModeContext.Provider>
  );
}

export { LightModeProvider, LightModeContext };
