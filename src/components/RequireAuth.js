import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = ({ allowedRoles }) => {
    const { auth } = useAuth();
    const location = useLocation();

    return (
        auth?.roles?.find(role => allowedRoles?.includes(role))
        //roles vaneko auth ko roles ho. we are comparing this with the allowedRoles passed in as props.
            ? <Outlet />
            : auth?.user //loggedin user ho?
                ? <Navigate to="/unauthorized" state={{ from: location }} replace />
                : <Navigate to="/login" state={{ from: location }} replace />
                //from has the path where the user wanted to go.
    );
}

export default RequireAuth;