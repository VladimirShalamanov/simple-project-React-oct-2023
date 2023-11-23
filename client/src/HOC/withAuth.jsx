import { useContext } from "react";

import AuthContext from "../contexts/authContext";

// Important !! - This is alternative way to use auth values
// in 'HOC'. The correct way is to use hooks. Do NOT use it for your project.

export default function withAuth(Component) {
    const EnhancedComponent = (props) => {
        const auth = useContext(AuthContext);

        return <Component {...props} {...auth} />
    };

    return EnhancedComponent;
};