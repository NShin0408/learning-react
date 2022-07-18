import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(
    document.getElementById('root')
);

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'Haper',
    lastName: 'Perez'
}

const element = (
  <h1>
      Hello, {formatName(user)}
  </h1>
);

root.render(element);
