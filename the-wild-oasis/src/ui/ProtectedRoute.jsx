import { useNavigate } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useEffect } from "react";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  // 1. Load authenticated User:
  const { isAuthenticated, isLoadingUser, isFetching } = useUser();

  // 2. Check if user is Authenticated:
  useEffect(() => {
    if (!isAuthenticated && !isLoadingUser && !isFetching) navigate("/login");
  }, [isAuthenticated, isLoadingUser, isFetching, navigate]);

  // 3. Show spinner while loading:
  if (isLoadingUser) return <Spinner />;

  if (isAuthenticated) return children;
}

export default ProtectedRoute;
