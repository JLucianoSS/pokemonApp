import React from 'react'
import ReactDOM from 'react-dom/client'
import { PokemonApp } from './PokemonApp.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from './redux/store.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'animate.css';
import './scss/main.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <PokemonApp />
      </BrowserRouter>
    </Provider>
  // </React.StrictMode>,
)
