import { FC } from "react";
import { Link } from "react-router";

const Home: FC = () => {
    return (
        <div className="p-5 mb-4 bg-light rounded-5 shadow-sm">
            <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">Software Engineer</h1>
                <p className="col-md-12 fs-4">Learning Golang React Typescript</p>
                <hr />
                <Link to="/register" className="btn btn-primary btn-lg me-3">Register</Link>
                <Link to="/login" className="btn btn-success btn-lg">Login</Link>
            </div>
        </div>
    )
}

export default Home;