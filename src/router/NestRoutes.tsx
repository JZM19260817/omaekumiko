import {Redirect, Route, Switch} from 'react-router-dom';
import routes from './routes';
import React from 'react';

export default function NestRoutes(){
    return(
        <Switch>
            {
                routes.map(route => (
                    <Route
                        key={route.path}
                        exact={route.exact === undefined ? true : route.exact}
                        component={route.component}
                        path={route.path}
                    />
                ))
            }
            <Redirect from={'/'} to={'/index'} exact={true}/>
        </Switch>
    )
}
