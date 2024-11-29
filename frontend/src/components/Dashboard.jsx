import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../styles/Dashboard.css";

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!user)
    return (
      <div className="dashboard-container">
        <h2 className="dashboard-title">
          Please log in to access the dashboard.
        </h2>
        <div className="dashboard-link">
          <button
            className="dashboard-button"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
          <button
            className="dashboard-button"
            onClick={() => navigate("/register")}
          >
            Register
          </button>
        </div>
      </div>
    );

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Welcome, {user.name}!</h2>
      <h3 className="dashboard-role">Your role is: {user.role}</h3>

      {user.role === "admin" ? (
        <div className="admin-info">
          <h4>Admin Only Information</h4>
          <p>
            This information is only visible to admins. You have full access to
            manage the platform, view user statistics, and perform
            administrative tasks.
          </p>
        </div>
      ) : (
        <div className="user-info">
          <h4>User Only Information</h4>
          <p>
            This information is only visible to users. You can view your
            profile, manage your settings, and interact with other users.
          </p>
        </div>
      )}

      <button className="dashboard-button" onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
