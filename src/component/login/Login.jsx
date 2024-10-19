import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hasUserValidCredentials } from '../../actions/LoginUser';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');
    const loginMessage = useSelector(state => state.auth.loginMessage);
    const isUserLoggedIn = useSelector(state => state.auth.isUserLoggedIn);
    const emailRef = useRef();
    const passwordRef = useRef();
    const [user, setUser] = useState({
        emailUser: "",
        password: "",
    }); 

    const handleUser = (e) => {
        const value = e.target.value;
        setUser({...user, [e.target.name]: value});
        setErrorMessage('');
    }

    const isValidUserLoggedIn = async () => {
        dispatch(hasUserValidCredentials(user));

        setTimeout(() => {
            emailRef.current.value = "";
            passwordRef.current.value = "";
            setUser({
                emailUser: "",
                password: ""
            });
        }, 2000); 
    }

    useEffect(() => {
        if (isUserLoggedIn) {
            passwordRef.current.value = '***************';
            setTimeout(() => {
                navigate('/home'); 
            }, 2500);
        }
    }, [isUserLoggedIn, navigate]);

    useEffect(() => {
        if (loginMessage) {
            setErrorMessage(loginMessage);
        }
    }, [loginMessage]);

    return (
        <div style={{ 
            backgroundColor: '#d4d9d9c9', 
            height: '100vh', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            overflow: 'hidden'
        }}>
            <div className="container" style={{ maxWidth: '600px', width: '100%' }}>
                <div className="myform-area">
                    <div className="form-area">
                        <form className="px-4 py-3">
                            <div className="error-message-container">
                                {
                                    isUserLoggedIn ?
                                    <p 
                                        className={`error-message ${errorMessage ? 'show' : ''}`}
                                        style={{ color: '#2cf267' }}
                                    >
                                        {errorMessage}
                                    </p>
                                    :
                                    <p 
                                        className={`error-message ${errorMessage ? 'show' : ''}`}
                                        style={{ color: 'red' }}
                                    >
                                        {errorMessage}
                                    </p>
                                }
                            </div>
                            <div className="mb-3" id='1'>
                                <label htmlFor="userEmail" className="form-label fw-bold">Email address</label>
                                <input 
                                    ref={emailRef}
                                    className="form-control" 
                                    name='emailUser'
                                    id="emailUser" 
                                    type="email" 
                                    placeholder="Enter your email" 
                                    onChange={(e) => handleUser(e)} 
                                />
                            </div>
                            <div className="mb-3" id='2'>
                                <label htmlFor="userPassword" className="form-label fw-bold">Password</label>
                                <input 
                                    ref={passwordRef}
                                    className="form-control" 
                                    name='password'
                                    id="password"
                                    type="password"
                                    placeholder="Enter your password" 
                                    onChange={(e) => handleUser(e)} 
                                />
                            </div>
                            <div className="mb-3" id='3'>
                                <div className="align-items-center fw-bold">
                                    <div className="checkbox-wrapper-12 mx-1" style={{ display: 'inline-block' }}>
                                        <div className="cbx">
                                            <input id="cbx-12" type="checkbox" />
                                            <label htmlFor="cbx-12"></label>
                                            <svg width="15" height="14" viewBox="0 0 15 14" fill="none">
                                                <path d="M2 8.36364L6.23077 12L13 2"></path>
                                            </svg>
                                        </div>
                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                            <defs>
                                                <filter id="goo-12">
                                                    <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
                                                    <feColorMatrix
                                                        in="blur"
                                                        mode="matrix"
                                                        values="1 0 0 0 0  
                                                                0 1 0 0 0  
                                                                0 0 1 0 0  
                                                                0 0 0 22 -7"
                                                        result="goo-12"
                                                    />
                                                    <feBlend in="SourceGraphic" in2="goo-12" />
                                                </filter>
                                            </defs>
                                        </svg>
                                    </div>
                                    Remember
                                </div>
                            </div>
                            <button 
                                type="button" 
                                className="button-34 button-shadow bg-success button-green m-2"
                                onClick={isValidUserLoggedIn}
                            >
                                Login
                            </button>
                            <button type="reset" className="button-34 button-shadow bg-danger button-green m-2">Reset</button>
                        </form>
                        <div className="dropdown-divider"></div>
                        <a 
                            className="mx-3 text-decoration-none text-warning" 
                            style={{ cursor: 'pointer' }}
                            onClick={() => navigate('/forgotPassword')}
                        >
                            Forgot password?
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
