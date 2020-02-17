import React from 'react'
import ReactDOM from 'react-dom'
import 'react-app-polyfill/ie11';
import 'core-js/features/array/find';
import 'core-js/features/array/includes';
import 'core-js/features/number/is-nan';

import App from './components/App'
import './styles/_global.css'

ReactDOM.render(<App />, document.getElementById('root'))
