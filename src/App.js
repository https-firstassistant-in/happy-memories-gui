import React from "react";
import { Outlet } from 'react-router-dom';
import './styles/style.css';
import Footer from "./component/footer/Footer";
import Navbar from "./component/navbar/Navbar"
import { Provider } from "react-redux";
import store from "./store/store";

const App = () =>{
    return (
        <div>
            <Provider store={store}>
                <Navbar />
                    <Outlet /> 
                <Footer />
            </Provider>
            
        </div>
    );
}

export default App;
