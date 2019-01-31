import React from 'react';
import PropTypes from 'prop-types';
import {
    Redirect,
    Route,
    Switch
} from 'react-router-dom';
import {
    LoginPage,
    ShareFeedback,
    MyFeedback,
    ErrorView } from './';


export const PrivateRoute = ({ component: Component, ...rest }) => {
    const loggedIn = JSON.parse(localStorage.getItem('loggedIn'));

    return (
        <Route
            {...rest}
            render={(props) => (
                loggedIn === true
                    ? <Component {...props} />
                    : <Redirect to="/login" />
            )}
        />
    );
};

PrivateRoute.propTypes = {
    component: PropTypes.func
};

/**
 * These routes are ONLY the base routes that are necessary in order to not trigger the ErrorView.
 *
 * With React Router 4, Routes are now used as actual component-templates and child routes are rendered in parent component-templates.
 * React Router 4 has a different philosophy to routing than a traditional static router.
 * Routes are not all defined in a single location anymore and can be used to conditionally render content based on the route.
 */
export const Routes = {
    baseRoutes: () => {
        const loggedIn = JSON.parse(localStorage.getItem('loggedIn'));

        return (
            <div className="routes">
                <Switch>
                    <Route
                        path="/"
                        exact={true}
                        render={() => (
                            loggedIn ? (
                                <Redirect to="/share-feedback" />
                            ) : (
                                <Redirect to="/login" />
                            )
                        )}
                    />
                    <Route path="/login" exact={true} component={LoginPage} />
                    <PrivateRoute path="/share-feedback" component={ShareFeedback} />
                    <PrivateRoute path="/my-feedback" exact={true} component={MyFeedback} />

                    <Route component={ErrorView} />
                </Switch>
            </div>
        );
    }
};

export default Routes;
