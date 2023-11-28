import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

import Path from "../../paths";
import AuthContext from "../../contexts/authContext";

// TODO - guest Guard for Login and Reg
export default function AuthGuard() {
    const { isAuthenticated } = useContext(AuthContext);

    if (!isAuthenticated) {
        return <Navigate to={Path.Login} />;
    }

    return <Outlet />;
};