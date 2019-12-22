import React from 'react';
import { Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';

// import HomePage from 'pages/home/HomePage';
import LoginPage from 'pages/login/LoginPageContainer';
import AboutUsPage from 'pages/aboutUs/AboutUsPage';
import UserManagementContainer from 'pages/userManagement/UserManagementContainer';
import AppRoute from 'features/appRoute/AppRouteContainer';

import routePaths from 'shared/routePaths';

import './App.css';

const noHeader = <header />;

const App = () => (
    <Switch>
        <AppRoute exact path={routePaths.LOGIN} header={noHeader} component={LoginPage} />
        <AppRoute isPrivate exact path={routePaths.ROOT} component={LoginPage} />
        <AppRoute isPrivate exact path={routePaths.ABOUT} component={AboutUsPage} />
        <AppRoute isPrivate exact path={routePaths.USERS} component={UserManagementContainer} />
    </Switch>
);

export default hot(module)(App);
