import 'bootstrap/dist/css/bootstrap.css';
import React from "react";
import ReactDOM from "react-dom/client"; 
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Routers.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <React.StrictMode>
                <RouterProvider router={router} />
        </React.StrictMode>
);

