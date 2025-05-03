import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateSetting as updateSettingAPI } from "../../services/apiSettings";

export function useUpdateSettings() {
  const queryClient = useQueryClient();

  const {
    isPending: isUpdating,
    mutate: updateSettings,
    error,
  } = useMutation({
    mutationFn: updateSettingAPI,
    onSuccess: () => {
      toast.success("Settings updated successfully!");
      queryClient.invalidateQueries({
        queryKey: ["settings"],
      });
    },
  });

  return { isUpdating, updateSettings, error };
}
