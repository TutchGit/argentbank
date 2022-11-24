import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './styles/main.css'

import Home from './pages/Home';
import Login from './pages/Login';
import UserProfil from './pages/UserProfil';
import store from './app/store';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <React.StrictMode>
        <Router>
          <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route path='login' element={<Login />}></Route>
            <Route path='profil' element={<UserProfil />}></Route>
          </Routes>
        </Router>
    </React.StrictMode>
  </Provider>
);
