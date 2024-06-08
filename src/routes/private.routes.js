import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

function PrivateRoute() {
  const { signedIn } = useSelector((state) => state.auth);
  const location = useLocation();

  if (!signedIn) {
    return <Navigate to="/" state={{ from: location }} />;
  }

  return <Outlet />;
}

export default PrivateRoute;
