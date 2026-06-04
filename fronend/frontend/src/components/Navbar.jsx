import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const { user, logout } =
    useContext(AuthContext);

  const navigate =
    useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="navbar">

      <h2>
        Pro-Tasker
      </h2>

      <div>

        <span>
          {user?.username}
        </span>

        <button
          onClick={handleLogout}
        >
          Logout
        </button>

      </div>

    </nav>
  );
}