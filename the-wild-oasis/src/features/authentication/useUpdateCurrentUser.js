import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCurrentUser } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useUpdateCurrentUser() {
  const queryClient = useQueryClient();
  const { mutate: updateUserData, isPending: isUpdatingUserData } = useMutation(
    {
      mutationFn: ({ fullName, avatar }) => {
        updateCurrentUser({ fullName, avatar });
        console.log(fullName, avatar);
      },
      onSuccess: () => {
        queryClient.invalidateQueries(["user"]);
        toast.success(`Successfully updated your details!`);
      },
      onError: (err) => {
        toast.error(`There was an error while updating your details`);
        throw new Error(err);
      },
    }
  );
  return { updateUserData, isUpdatingUserData };
}
