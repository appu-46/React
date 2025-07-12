import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import ButtonIcon from "./ButtonIcon";
import useLightMode from "../hooks/useLightMode";

function LightModeToggle() {
  const { isLightMode, lightModeToggle } = useLightMode();

  return (
    <ButtonIcon onClick={lightModeToggle}>
      {isLightMode ? <HiOutlineMoon /> : <HiOutlineSun />}
    </ButtonIcon>
  );
}

export default LightModeToggle;
