import { FC, FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router";
import { useUserCreate } from "../../../hooks/user/useUserCreate";
import SidebarMenu from "../../../components/SidebarMenu";

interface ValidationErrors {
    [key: string]: string;
}

const UsersCreate: FC = () => {
    const navigate = useNavigate();

    const [name, setName] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const [errors, setErrors] = useState<ValidationErrors>({});

    const {mutate, isPending} = useUserCreate();

    const storeUser = async (e: FormEvent) => {
        e.preventDefault();

        mutate({ name, username, email, password }, {
            onSuccess: () => {
                navigate('/admin/users');
            },
            onError: (error: any) => {
                setErrors(error.response.data.errors);
            }
        })
    }

    return (
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-md-3">
                    <SidebarMenu />
                </div>
                <div className="col-md-9">
                    <div className="card border-0 rounded-4 shadow-sm">
                        <div className="card-header">
                            Add User
                        </div>
                        <div className="card-body">
                            <form onSubmit={storeUser}>
                                <div className="form-group mb-3">
                                    <label className="mb-1 fw-bold">Full Name</label>
                                    <input type="text" value={name} onChange={ (e) => setName(e.target.value) } className="form-control" placeholder="Full Name" />
                                    {errors.Name && <div className="alert alert-danger mt-2 rounded-4">{errors.Name}</div>}
                                </div>
                                <div className="form-group mb-3">
                                    <label className="mb-1 fw-bold">Username</label>
                                    <input type="text" value={username} onChange={ (e) => setUsername(e.target.value) } className="form-control" placeholder="Username" />
                                    {errors.Username && <div className="alert alert-danger mt-2 rounded-4">{errors.Username}</div>}
                                </div>
                                <div className="form-group mb-3">
                                    <label className="mb-1 fw-bold">Email Address</label>
                                    <input type="email" value={email} onChange={ (e) => setEmail(e.target.value) } className="form-control" placeholder="Email Address" />
                                    {errors.Email && <div className="alert alert-danger mt-2 rounded-4">{errors.Email}</div>}
                                </div>
                                <div className="form-group mb-3">
                                    <label className="mb-1 fw-bold">Password</label>
                                    <input type="password" value={password} onChange={ (e) => setPassword(e.target.value) } className="form-control" placeholder="Password" />
                                    {errors.Password && <div className="alert alert-danger mt-2 rounded-4">{errors.Password}</div>}
                                </div>
                                <button type="submit" className="btn btn-md btn-primary rounded-4 shadow-sm border-0" disabled={isPending}>
                                    {isPending ? 'Saving...' : 'Save'}
                                </button>
                                <Link to="/admin/users" className="btn btn-md btn-secondary rounded-4 shadow-sm border-0 ms-2">Cancel</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UsersCreate