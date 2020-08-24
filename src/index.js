import * as serviceWorker from './serviceWorker';
import store from "./redux/redux-store"
import ReactDOM from "react-dom";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import Provider from "react-redux/lib/components/Provider";
import {AppContainer} from "./components/AppContainer/AppContainer";

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);

serviceWorker.unregister();
