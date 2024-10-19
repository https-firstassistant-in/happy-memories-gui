import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { registeringUser, resetingRegister } from "../../actions/RegisterUser";
import { useDispatch, useSelector } from "react-redux";
import { message } from 'antd'; 

const Signup = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [registerMsg, setRegisterMsg] = useState('');
    const registerMessage = useSelector(state => state.auth.registerMessage);
    const userHasRegistered = useSelector(state => state.auth.userHasRegistered);
    const firstnameRef = useRef();
    const lastnameRef = useRef();
    const emailUserRef = useRef();
    const passwordRef = useRef();
    const [user, setUser] = useState(
        {
            id: "",
            firstname: "",
            lastname: "",
            emailUser: "",
            password: "",
            roles:"USER"
        }
    ); 

    const handleUser = (e) => {
        const value = e.target.value;
        setUser({...user, [e.target.name]: value});
        setRegisterMsg('');
    }

    const success = () => {
        messageApi.open({
            type: 'success',
            content: 'Registration successful!',
        });
    };

    const error = () => {
        messageApi.open({
          type: 'error',
          content: registerMessage || "something went wrong",
        });
    };

    const signupUser = async () => {
        await dispatch(registeringUser(user));
        if (userHasRegistered) {
            success()
            setTimeout(() => {
                navigate('/login');
            }, 1000);
        } else if (registerMessage) {
            error()
        }
       
        setUser({
            firstname: "",
            lastname: "",
            emailUser: "",
            password: "",
            roles: "USER"
        });
        if (firstnameRef.current) firstnameRef.current.value = "";
        if (lastnameRef.current) lastnameRef.current.value = "";
        if (emailUserRef.current) emailUserRef.current.value = "";
        if (passwordRef.current) passwordRef.current.value = "";
    };

    useEffect(() => {
        dispatch(resetingRegister());
    }, [dispatch]);

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
                <div className="row">
                    <div className="myform-area">
                        <div className="form-area">
                            <form className="row g-3 px-4 py-2">
                                <div className="error-message-container">
                                    {contextHolder}
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="firstname" className="form-label">Firstname</label>
                                    <input 
                                        className="form-control"
                                        name="firstname" 
                                        type="text"
                                        id="firstname" 
                                        placeholder="Firstname" 
                                        onChange={(e) => handleUser(e)} 
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="lastname" className="form-label">Lastname</label>
                                    <input 
                                        className="form-control" 
                                        name="lastname"
                                        type="text" 
                                        id="lastname" 
                                        placeholder="Lastname" 
                                        onChange={(e) => handleUser(e)}
                                    />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="emailUser" className="form-label">Email</label>
                                    <input 
                                        className="form-control"
                                        name="emailUser"
                                        type="email" 
                                        id="emailUser" 
                                        placeholder="Enter your email" 
                                        onChange={(e) => handleUser(e)}
                                    />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input 
                                        className="form-control" 
                                        name="password"
                                        type="password"
                                        id="password"
                                        placeholder="Enter your password"
                                        onChange={(e) => handleUser(e)} 
                                    />
                                </div>
                                <div className="col-12">
                                    <div className="form-check">
                                    <div className="align-items-center fw-bold">
                                        <div className="checkbox-wrapper-12" style={{ display: 'inline-block' }}>
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
                                </div>
                                <div className="col-12">
                                    <button 
                                        type="button" 
                                        className="button-34 button-shadow button-purple"
                                        onClick={signupUser}
                                    >
                                        Sign up
                                    </button>
                                    <button type="reset" className="button-34 button-shadow bg-danger button-green m-2">Reset</button>
                                </div>
                            </form>
                            <div className="dropdown-divider"></div>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    );
}

export default Signup;