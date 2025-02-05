import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoute= ({ element: element, ...rest})  => {
 const isAuth = localStorage.getItem("token");

    return isAuth ? <Outlet /> : <Navigate  to="/login" />;





};
export default PrivateRoute;