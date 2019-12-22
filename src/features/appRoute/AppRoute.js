import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import routePath from 'shared/routePaths';
import Header from 'Header';

const isAuthenticated = loginData => loginData && loginData.data && loginData.data.accessToken;

const AppRoute = ({
    loginData,
    isPrivate,
    exact,
    path,
    component,
    header,
    footer,
}) => {
    if ((isPrivate && isAuthenticated(loginData)) || !isPrivate) {
        const getComponent = props => (
            <React.Fragment>
                {header}
                {React.createElement(component, props)}
                {footer}
            </React.Fragment>
        );

        return (<Route exact={exact} path={path} component={getComponent} />);
    }

    return (<Redirect to={routePath.LOGIN} />);
};

AppRoute.propTypes = {
    loginData: PropTypes.object.isRequired,
    isPrivate: PropTypes.bool,
    exact: PropTypes.bool,
    path: PropTypes.string.isRequired,
    component: PropTypes.func.isRequired,
    header: PropTypes.object,
    footer: PropTypes.object,
};

AppRoute.defaultProps = {
    isPrivate: false,
    exact: false,
    header: <Header />,
    footer: <footer />,
};

export default AppRoute;
