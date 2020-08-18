import React from 'react';
import './App.css';
import {AppPresenter} from "./components/AppPresenter/AppPresenter";

class App extends React.Component {

    componentDidMount() {
        this.props.setUser();
    }

    render() {
        return (
            <AppPresenter />
        );
    }
}

export default App;
