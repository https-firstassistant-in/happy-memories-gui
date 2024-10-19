import React from "react";
import { images } from '../../utils/ImageExtract';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../actions/LogoutUser";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Badge } from 'antd';

const Navbar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const username = useSelector(state => state.auth.username);
    const isUserLoggedIn = useSelector(state => state.auth.isUserLoggedIn);
    const totalItemInCart = useSelector(state => state.cart.totalItemInCart);
    console.log("totalItemInCart", totalItemInCart);

    const handleLogout = () => {
        dispatch(logoutUser());
        navigate('/');
    }

    return (
        <header className="p-3 sticky-navbar" id="navbar-bg-color">
            <div className="container">
                <div className="row">
                    <div className="d-flex flex-wrap row" >
                        <div className="col-xs-12 col-md-3 col-xl-3 col-xxl-3 d-flex justify-content-center">
                            <Link to='/' style={{ textDecoration: "none" }}>
                                <div className="text-white px-6 d-flex align-items-center">
                                    <img src={images.logo} alt="" width="45px" height="45px" id="logo-img" />
                                    <span id="logo-fonts-decoration">
                                        Happy Memories
                                    </span>
                                </div>
                            </Link>
                        </div>
                        <div className="col-xs-12 col-md-6 col-xl-6 col-xxl-6 fw-bold lh-lg fs-5">
                            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-around">
                                <li className="nav-item">
                                    <a className="nav-link px-2 text-light" onClick={() => navigate('/')}>
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link px-2 text-light" onClick={() => navigate('/payment')}>
                                        Products
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link px-2 text-light" href="#">Essentials</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link px-2 text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Services
                                    </a>
                                </li>
                            </ul>
                        </div>
                        {isUserLoggedIn ? (
                            <div className="d-flex justify-content-center align-items-center col-xs-12 col-md-3 col-xl-3 col-xxl-3">
                                 <Badge count={username} />
                                <div className="dropdown">
                                    <button
                                        className="btn btn-secondary dropdown-toggle rounded-circle p-0"
                                        type="button"
                                        id="profileDropdown"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                        style={{ width: '50px', height: '45px', overflow: 'hidden' }}
                                    >
                                        <img
                                            src={images.profileImage} 
                                            alt="Profile"
                                            className="img-fluid rounded-circle"
                                            style={{ width: '100%', height: '100%' }}
                                        />
                                    </button>
                                    <ul
                                        className="dropdown-menu dropdown-menu-end"
                                        aria-labelledby="profileDropdown"
                                        style={{ zIndex: 1050, position: 'absolute' }} /* Set z-index and positioning */
                                    >
                                        <li><Link className="dropdown-item" to="/profile">Profile</Link></li>
                                        <li><Link className="dropdown-item" to="/settings">Settings</Link></li>
                                        <li><Link className="dropdown-item" to="/orders">Orders</Link></li>
                                        <li><Link className="dropdown-item" to="/address">Address</Link></li>
                                        <li><Link className="dropdown-item" to="/payment">Payment</Link></li>
                                        <li><Link className="dropdown-item" to="/wallet">Wallet</Link></li>
                                        <li><Link className="dropdown-item" to="/transactions">Transactions</Link></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><button className="dropdown-item" onClick={handleLogout}>Logout</button></li>
                                    </ul>
                                </div>
                                <div>

                                </div>
                                <div>
                                    <button
                                            className="btn btn-secondary dropdown-toggle rounded-circle p-0"
                                            type="button"
                                            id="profileDropdown"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                            style={{ width: '50px', height: '45px', overflow: 'hidden' }}
                                        >
                                            <img
                                                src={images.shoppingCart} 
                                                alt="Profile"
                                                className="img-fluid rounded-circle"
                                                style={{ width: '100%', height: '100%' }}
                                            />
                                            
                                        </button>
                                        <Badge count={0}>
                                            {/* <ShoppingCartOutlined style={{ fontSize: '25px', color: '#fff', cursor: 'pointer', marginRight: '15px' }} /> */}
                                            <div className="cart-items">
                                                {totalItemInCart}
                                            </div>
                                        </Badge>
                                    </div>
                            </div>
                        ) : (
                            <div className="d-flex justify-content-center align-items-center col-xs-12 col-md-3 col-xl-3 col-xxl-3">
                                <Link to="/login" >
                                    <button type="button" className="button-34 button-shadow bg-success button-green m-2 text-decoration-none text-white">
                                        Login
                                    </button>
                                </Link>
                                <Link to="/signup" style={{ textDecoration: "none" }}>
                                    <button type="button" className="button-34 button-shadow button-purple text-decoration-none text-white">
                                        Sign up
                                    </button>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
