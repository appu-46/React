import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCurrentUser } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useUpdateCurrentUser() {
  const queryClient = useQueryClient();
  const { mutate: updateUserData, isPending: isUpdatingUserData } = useMutation(
    {
      mutationFn: ({ fullName, password, avatar }) => {
        return updateCurrentUser({ fullName, password, avatar });
      },
      onSuccess: ({ user }) => {
        toast.success(`User details updated successfully!`);
        queryClient.setQueriesData(["user"], user);
      },
      onError: (err) => {
        toast.error(`There was an error while updating your details`);
        throw new Error(err);
      },
    }
  );
  return { updateUserData, isUpdatingUserData };
}
