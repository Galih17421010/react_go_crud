import { FC } from "react";
import { Link } from "react-router";
import { useLogout } from "../hooks/auth/useLogout";


const SidebarMenu: FC = () => {

    const logout = useLogout();

    return (
        <div className="card border-0 rounded-4 shadow-4">
            <div className="card-header">
                Main Menu
            </div>
            <div className="card-body">
                <div className="list-group">
                    <Link to="/admin/dashboard" className="list-group-item list-group-item-action">Dashboard</Link>
                    <Link to="/admin/users" className="list-group-item list-group-item-action" >Users</Link>
                    <a onClick={logout} className="list-group-item list-group-item-action" style={{ cursor: 'pointer' }}>Logout</a>
                </div>
            </div>
        </div>
    )
}

export default SidebarMenu;