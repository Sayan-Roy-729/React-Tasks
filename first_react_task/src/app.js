import React, { Component } from 'react';
import Navbar from './navbar';
import MainContainer from './mainContainer';

class App extends Component {
    state = {};

    render() {
        return (
            <div>
                <Navbar />
                <MainContainer />
            </div>
        );
    }
}

export default App;

