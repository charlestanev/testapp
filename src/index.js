import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

import MyInfo from './Components/MyInfo';

ReactDOM.render(<MyInfo />, document.getElementById('root'));

serviceWorker.unregister();
