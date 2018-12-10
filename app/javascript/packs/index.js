import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Route,
    Switch
} from 'react-router-dom';

import indexRoutes from 'routes/index.jsx';

import registerServiceWorker from 'registerServiceWorker';

ReactDOM.render((
    <HashRouter>
        <Switch>
            {
                indexRoutes.map((prop,key) => {
                    return (
                        <Route path={prop.path} component={prop.component}  key={key}/>
                    );
                })
            }
        </Switch>
    </HashRouter>
), document.getElementById('root'));
registerServiceWorker();