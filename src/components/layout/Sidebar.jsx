import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function Sidebar() {
  const { menus, loading } = useAuth();

  if (loading) return null;

  return (
    <aside className="sidebar">
      <h2>Pravaah</h2>
      <nav>
        {menus.map((menu) => (
          <NavLink key={menu.code} to={menu.route}>
            {menu.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
