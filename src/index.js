import React from 'react';
import ReactDOM from 'react-dom';

import Landing from './components/pages/Landing';
import Range from './components/pages/Range';

import './style.css';

const App = () => (
    <div className="App">
        <Landing />
        <Range />
    </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
