import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, Route, Routes } from "react-router";
import Home from "../views";
import Register from "../views/auth/register";
import Login from "../views/auth/login";
import Dashboard from "../views/admin/dashboard";
import UsersIndex from "../views/admin/users";
import UsersEdit from "../views/admin/users/edit";
import UsersCreate from "../views/admin/users/create";

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

            {/* dashboard */}
            <Route path="/admin/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" replace /> } />

            {/* users */}
            <Route path="/admin/users" element={isAuthenticated ? <UsersIndex /> : <Navigate to="/login" replace /> } />

            {/* user create */}
            <Route path="/admin/users/create" element={isAuthenticated ? <UsersCreate /> : <Navigate to="/login" replace />} />

            {/* user edit */}
            <Route path="/admin/users/edit/:id" element={isAuthenticated ? <UsersEdit /> : <Navigate to="/login" replace /> } />
        </Routes>
    )
}