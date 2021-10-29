import React from 'react';
import image from '../../assets/courier.jpg';
import { FcGoogle } from "react-icons/fc";
import './Login.css';
import { useHistory, useLocation } from 'react-router';
import useAuthentication from '../../hooks/useAuthentication';

const Login = () => {
    const { allContexts } = useAuthentication();
    const { signInWithGoogle } = allContexts;
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }

    return (
        <div>
            <div className="container-fluid">
                <div className="row no-gutter">
                    <div className="col-md-6 d-md-flex bg-image">
                        <img src={image} alt="" />
                    </div>
                    <div className="col-md-6 bg-light">
                        <div className="login d-flex align-items-center py-5">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-10 mx-auto">
                                        <h3 className="display-5 mb-5">Please login to continue!</h3>
                                        <form>
                                            <div className="form-group mb-4">
                                                <input type="email" placeholder="Email address" required className="form-control rounded border-0 px-2" />
                                            </div>
                                            <div className="form-group mb-5">
                                                <input type="password" placeholder="Password" required className="form-control rounded border-0 px-2 text-primary" />
                                            </div>
                                            <div className="form-group">
                                                <input type="submit" value="Sign in" className="btn btn-danger text-uppercase mb-2 px-5 py-2 rounded shadow-sm me-4" />
                                                <button onClick={handleGoogleLogin} className="fs-5 btn-google"><FcGoogle className="fs-2" /> Continue with google</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;