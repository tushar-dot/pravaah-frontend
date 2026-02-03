import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";


function Header() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user) return null;
    const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="header">
      <span>{user.username}</span>
      <span className="role">{user.role}</span>
      <button onClick={handleLogout}>Logout</button>
    </header>
  );
}

export default Header;
