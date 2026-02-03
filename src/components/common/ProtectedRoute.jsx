import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  // While checking auth (API call in progress)
  if (loading) {
    return <div>Loading...</div>;
  }

  // Not authenticated
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Authenticated
  return children;
}

export default ProtectedRoute;
