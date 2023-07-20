import { useContext } from "react";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import UserExport from "../context/UserContext";

function AdminProtectedRoute({ children }) {
  const { users } = useContext(UserExport.UserContext);

  if (!users || users.role_id !== 2) {
    return <Navigate to="/" replace />;
  }

  return children;
}

AdminProtectedRoute.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default AdminProtectedRoute;
