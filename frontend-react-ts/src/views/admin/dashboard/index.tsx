import { FC } from "react";
import SidebarMenu from "../../../components/SidebarMenu";
import { useAuthUser } from "../../../hooks/auth/useAuthUser";

const Dashboard: FC = () => {

    const user = useAuthUser();

    return (
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-md-3">
                    <SidebarMenu />
                </div>
                <div className="col-md-9">
                    <div className="card border-0 rounded-4 shadow-sm">
                        <div className="card-header">
                            Dashboard
                        </div>
                        <div className="card-body">
                            { user ? (
                                <p>Welcome, <strong>{user.name}</strong> !</p>
                            ) : (
                                <p>You aren't login.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;
