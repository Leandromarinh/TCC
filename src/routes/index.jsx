import React from "react";
import  { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from '../pages/SignedOut/Login';
import Register from '../pages/SignedOut/Register';
import Home from '../pages/SignedIn/Home';
import Profile from "../pages/SignedIn/Profile";
import Grid from '../pages/SignedIn/Grid';
import MyGrid from "../pages/SignedIn/MyGride";
import Link from '../pages/SignedIn/Link';
import CR from "../pages/SignedIn/CR";

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
                    <Route path="/grade" element={<Grid />} />
                    <Route path="/minha-grade" element={<MyGrid />} />
                    <Route path="/links" element={<Link />} />
                    <Route path="/cr" element={<CR/>} />
                </Route>
             </Routes>
        </Router>
    );
}

