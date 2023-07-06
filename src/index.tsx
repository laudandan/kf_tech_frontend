import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import FilterableItems from "./components/home/FilterableItems";
import 'bootstrap/dist/css/bootstrap.css';
import './components/api/Call.tsx'
import Call from "./components/api/Call";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(

  <React.StrictMode>
    <FilterableItems  />

      <Call />
  </React.StrictMode>
);

reportWebVitals();
