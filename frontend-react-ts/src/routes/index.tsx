import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, Route, Routes } from "react-router";
import Home from "../views";
import Register from "../views/auth/register";
import Login from "../views/auth/login";

export default function AppRoutes() {
    const auth = useContext(AuthContext);

    const isAuthenticated = auth?.isAuthenticated ?? false;

    return (
        <Routes>
            {/* home */}
            <Route path="/" element={<Home />} />

            {/* register */}
            <Route path="/register" element={isAuthenticated ? <Navigate to="/admin/dashboard" replace /> : <Register />} />

            {/* login */}
            <Route path="/login" element={isAuthenticated ? <Navigate to="/admin/dashboard" replace /> : <Login />} />
        </Routes>
    )
}