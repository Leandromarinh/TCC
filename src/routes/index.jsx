import React from "react";
import  { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from '../pages/SignedOut/Login';
import Register from '../pages/SignedOut/Register';
import Home from '../pages/SignedIn/Home';
import Profile from "../pages/SignedIn/Profile";

import PrivateRoute from './private.routes';

export default function routes(){
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/registro" element={<Register />} />
                <Route path="/" element={<PrivateRoute />}>
                    <Route path="/home" element={<Home />} />
                    <Route path="/perfil" element={<Profile />} />
                </Route>
             </Routes>
        </Router>
    );
}

