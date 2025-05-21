import React, { createContext, ReactNode, useEffect, useState } from "react";
import Cookies from "js-cookie";

// menentukan tipe context value
interface AuthContextType{
    isAuthenticated: boolean;
    setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

// set context devault value
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

// menentukan auth provider
interface AuthProviderProps {
    children: ReactNode;
}

// komponen provider untuk authentikasi
export const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(!!Cookies.get('token'));

    useEffect(() => {
        const handleTokenChange = () => {
            setIsAuthenticated(!!Cookies.get('token'));
        };

        window.addEventListener('storage', handleTokenChange);
        return () => {
            window.removeEventListener('storage', handleTokenChange);
        };
    }, []);

    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
};