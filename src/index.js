import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
export { default as Cards} from './components/Cards/Cards';
export { default as Chart} from './components/Charts/Chart';
export { default as CountryPicker} from './components/CountryPicker/CountryPicker';



ReactDOM.render(
    <App />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
