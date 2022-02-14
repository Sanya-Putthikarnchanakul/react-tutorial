import { useContext } from 'react';

import { Route, Redirect } from 'react-router-dom';

import { appContext } from '../contexts/AppContext';

const PrivateRoute = ({ children, ...rest }) => {
    let [state] = useContext(appContext);

    return (
        <Route
            {...rest}
            render={({ location }) =>
                state.userInfo.isLoggedIn ? (
                        children
                    ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
}

export default PrivateRoute;