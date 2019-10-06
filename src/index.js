import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'font-awesome/css/font-awesome.min.css';

$(document).ready(function () {
    $("[href]").each(function () {
        if (this.href === window.location.href) {
            $(this).addClass("active");
        }
    });
});

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();

