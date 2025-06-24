import { useMutation } from "@tanstack/react-query";
import { signUp as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: signUp, isPending: isSigningUp } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      console.log(user);
      toast.success(
        `Successfully signed up to Wild Oasis! Please verify new account from user's email address.`
      );
    },
  });
  return { signUp, isSigningUp };
}
