import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";

export function useUser() {
  const {
    isPending: isLoadingUser,
    error,
    data: user,
    isFetching,
  } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  return {
    isLoadingUser,
    user,
    error,
    isFetching,
    isAuthenticated: user?.role === "authenticated",
  };
}
