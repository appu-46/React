import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: logOut, isPending: isLoggingOut } = useMutation({
    mutationFn: () => logout(),
    onSuccess: () => {
      queryClient.removeQueries();
      toast.success(`Successfully logged out!`);
      navigate("/login", { replace: true });
    },
    onError: (err) => {
      throw (new Error(err.message), console.log(err));
    },
  });

  return { logOut, isLoggingOut };
}
