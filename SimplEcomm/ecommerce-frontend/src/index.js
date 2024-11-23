// Entry point for the React application



import React from 'react';

import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux'; // To connect the Redux store to the React app

import store from './store/store'; // The configured Redux store

import App from './App'; // Main App component

import './index.css'; // Global CSS and Tailwind setup



// Create the root element for rendering the React application

const root = ReactDOM.createRoot(document.getElementById('root'));



// Wrap the App component with the Redux Provider to provide the store

root.render(

  <React.StrictMode>

    <Provider store={store}>

      <App />

    </Provider>

  </React.StrictMode>

);
