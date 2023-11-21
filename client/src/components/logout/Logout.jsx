import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Path from "../../paths";
import AuthContext from "../../contexts/authContext";
import * as authService from "../../services/authService";

export default function Logout() {
    const navigate = useNavigate();
    const { logoutHandler } = useContext(AuthContext);

    useEffect(() => {
        authService.logout()
            .then(() => {
                logoutHandler();
                navigate(Path.Home);
            })
            .catch(() => navigate(Path.Home));
    }, []);

    return null;
};