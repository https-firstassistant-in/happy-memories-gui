import React, { useRef, useState } from 'react';

const ForgotPassword = () => {
    const emailRef = useRef();
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleEmailInput = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordReset = () => {
        // Add your logic for sending a password reset email
        if (email) {
            // Simulate success message
            setMessage('If this email is registered, a password reset link has been sent.');
            emailRef.current.value = ''; // Clear the input field
        } else {
            setMessage('Please enter a valid email address.');
        }
    };

    return (
        <div style={{ backgroundColor: '#d4d9d9c9' }}>
            <div className="container">
                <div className="row">
                    <div className="col-xs-1 col-sm-2 col-md-3"></div>
                    <div className="col-xs-10 col-sm-8 col-md-6">
                        <div className="myform-area">
                            <div className="form-area">
                                <form className="px-4 py-3">
                                    <p className="text-muted">
                                        Enter your user account's verified email address and we will send you a password reset link.
                                    </p>
                                    <div className="mb-3">
                                        <label htmlFor="userEmail" className="form-label fw-bold">Email address</label>
                                        <input 
                                            ref={emailRef}
                                            className="form-control" 
                                            id="emailUser" 
                                            type="email" 
                                            placeholder="Enter your email" 
                                            onChange={handleEmailInput}
                                        />
                                    </div>
                                    <button 
                                        type="button" 
                                        className="button-34 button-shadow bg-success button-green m-2"
                                        onClick={handlePasswordReset}
                                    >
                                        Send Reset Link
                                    </button>
                                    <p className="text-muted mt-2">{message}</p>
                                </form>
                                <div className="dropdown-divider"></div>
                                <a className="mx-3 text-decoration-none text-warning" href="#">Back to login</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-1 col-sm-2 col-md-3"></div>
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;
