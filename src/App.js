import React from 'react';
import Navbar from './components/Navbar';
import Router from './router'


function App(props) {
    return (
        <div>
            <Navbar/>
            <Router/>
        </div>
    );
}

export default App;