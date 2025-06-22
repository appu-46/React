import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isPending: isLoggingIn } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (userObject) => {
      toast.success(`Successfully logged in ${userObject.user.email}!`);
      queryClient.setQueryData(["user"], userObject.user);
      navigate("/dashboard", { replace: true });
    },
    onError: (err) => {
      toast.error(`Password and the email are incorrect. Please try again!`);
      console.log(err);
    },
  });

  return { login, isLoggingIn };
}
