import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Context } from '../src/utilities/context';
import App from './App';
import Saved from './components/Saved';

ReactDOM.render(
  <React.StrictMode>
    <Context>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="saved-quotes" element={<Saved />} />
        </Routes>
      </BrowserRouter>
    </Context>
  </React.StrictMode>,
  document.getElementById('root')
);

