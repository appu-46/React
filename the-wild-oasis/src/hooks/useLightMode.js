import { useContext } from "react";
import { LightModeContext } from "../context/LightModeContext";

export default function useLightMode() {
  const context = useContext(LightModeContext);

  if (context === undefined)
    throw new Error("LightModeContext was used outside the LightModeProvider");

  return context;
}
