import React from "react";
import  { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from '../pages/SignedOut/Login';
import Register from '../pages/SignedOut/Register';

export default function routes(){
    return (
        <Router>
            <Routes>
                <Route path="/" exact Component={Login}/>
                <Route path="/Register" exact Component={Register}/>
            </Routes>
        </Router>
    );
}

