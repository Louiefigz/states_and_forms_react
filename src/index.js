import React from 'react';
import ReactDOM from 'react-dom';
import LoginForm from './LoginForm';
import TwitterMessage from './TwitterMessage';
import PoemWriter from './PoemWriter';
import './index.css';

function login({ username, password }) {
  console.log(`Logging in ${username} with password ${password}`);
}

ReactDOM.render(
  <div>
    <h1><pre>TwitterMessage</pre></h1>
    <TwitterMessage maxChars={140} />

    <h1><pre>LoginForm</pre></h1>
    <LoginForm onSubmit={login} />

    <h1>PoemWriter</h1>
    <PoemWriter />

   </div>,
  document.getElementById('root')
);
