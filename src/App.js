import React, {Fragment} from "react";
import "./styles/App.css"
import {BrowserRouter as Router, Route, Link, Routes, Switch, Redirect, Navigate} from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Navbar from "./components/UI/Navbar/Navbar";
import Error from "./pages/Error";
import AppRouter from "./components/AppRouter";

function App() {
    return (
        <Router>
            <Fragment>
            <Navbar/>
                <AppRouter/>
            </Fragment>
        </Router>
    )
}

export default App;
