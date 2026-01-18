import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Now this will work

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;