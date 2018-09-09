import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import World from './App';
import registerServiceWorker from './registerServiceWorker';
import World from "./HelloWorld";

ReactDOM.render(<World />, document.getElementById('root'));
registerServiceWorker();
