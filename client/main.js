import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import App from '../imports/ui/app.js';
import Calc from '../imports/ui/calc.js';

Meteor.startup(() => {
  ReactDOM.render(<App dumbass={'kanye'} fucker={'trump'}/>, document.getElementById('app'));
  ReactDOM.render(<App dumbass={'hillary'} fucker={'duterte'}/>, document.getElementById('app2'));
  ReactDOM.render(<Calc input1={2} input2={2}/>, document.getElementById('calc'));
});