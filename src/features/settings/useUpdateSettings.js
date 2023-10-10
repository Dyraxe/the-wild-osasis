import toast from "react-hot-toast";
import { updateSetting as updateSettingApi } from "../../services/apiSettings";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useUpdateSetting() {
  const queryClient = useQueryClient();
  const { isLoading: isUpdatingSettings, mutate: updateSetting } = useMutation({
    mutationFn: updateSettingApi,
    onSuccess: () => {
      toast.success("Settings successfully edited");
      queryClient.invalidateQueries({ queryKey: ["settings"] });
    },
    onError: () => toast.error("failed to create cabin"),
  });
  return { isUpdatingSettings, updateSetting };
}
