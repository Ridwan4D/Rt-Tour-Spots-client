import { createContext } from "react";

const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const authInfo = {};
    return (
        <AuthContext>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;