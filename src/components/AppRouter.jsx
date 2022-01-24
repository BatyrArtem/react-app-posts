import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import PostIdPage from "../pages/PostIdPage";
import {privateRoutes, publicRoutes} from "../router/routes";

const AppRouter = () => {
    return (
        <Routes>
            {privateRoutes.map(route =>
                <Route
                    exact={route.exact}
                    path={route.path}
                    element={<route.element/>}
                />
            )}
            {publicRoutes.map(route =>
                <Route
                    exact={route.exact}
                    path={route.path}
                    element={<route.element/>}
                />
            )}
            <Route path='*' element={<Navigate to="/posts"/>}/>
        </Routes>
    );
};

export default AppRouter;
