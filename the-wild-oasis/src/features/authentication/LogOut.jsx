import { HiArrowRightOnRectangle } from "react-icons/hi2";
import ButtonIcon from "../../ui/ButtonIcon";
import { useLogout } from "./useLogOut";

function LogOut() {
  const { logOut, isLoggingOut } = useLogout();
  return (
    <ButtonIcon onClick={() => logOut()} disabled={isLoggingOut}>
      <HiArrowRightOnRectangle />
    </ButtonIcon>
  );
}

export default LogOut;
