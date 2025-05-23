import { FC } from "react";
import { User, useUser } from "../../../hooks/user/useUsers";
import SidebarMenu from "../../../components/SidebarMenu";
import { Link } from "react-router";
import { useQueryClient } from "@tanstack/react-query";
import { useUserDelete } from "../../../hooks/user/useUserDelete";

const UsersIndex: FC = () => {
    const {data: users, isLoading, isError, error} = useUser();

    const queryClient = useQueryClient();

    const { mutate, isPending } = useUserDelete();

    const handleDelete = (id: number) => {
        if (confirm("Are you sure you want to delete this user?")) {
            mutate(id, {
                onSuccess: () => {
                    queryClient.invalidateQueries({ queryKey: ['users'] });
                }
            });
        }
    }

    return (
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-md-3">
                    <SidebarMenu />
                </div>
                <div className="col-md-9">
                    <div className="card border-0 rounded-4 shadow-sm">
                        <div className="card-header d-flex justify-content-between align-items-center">
                            <span>Users</span>
                            <Link to="/admin/users/create" className="btn btn-sm btn-info rounded-4 shadow-sm border-0">Add User</Link>
                        </div>
                        <div className="card-body">
                            {/* loading state */}
                            { isLoading && ( <div className="alert alert-info text-center">Loading...</div> ) }

                            {/* error state */}
                            { isError && ( <div className="alert alert-danger text-center">Error: {error.message}</div> ) }

                            <table className="table table-bordered">
                                <thead className="bg-success text-white">
                                    <tr>
                                        <th scope="col">Full Name</th>
                                        <th scope="col">Username</th>
                                        <th scope="col">Email Address</th>
                                        <th scope="col" style={{width: "20%"}}>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        users?.map((user: User) => (
                                            <tr key={user.id}>
                                                <td>{user.name}</td>
                                                <td>{user.username}</td>
                                                <td>{user.email}</td>
                                                <td className="text-center">
                                                    <Link to={`/admin/users/edit/${user.id}`} className="btn btn-sm btn-warning rounded-4 shadow-sm border-0 me-2">Edit</Link>
                                                    <button onClick={() => handleDelete(user.id)} disabled={isPending} className="btn btn-sm btn-danger rounded-4 shadow-sm border-0">
                                                        {isPending ? 'Deleting...' : 'Delete'}
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UsersIndex