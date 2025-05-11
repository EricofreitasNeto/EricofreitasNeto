/**
 * Nome do arquivo: main.jsx
 * Data de criação: 10/05/2025
 * Autor: Erico de Freitas Neto
 * Matrícula: 01776648
 *
 * Descrição:
 * Ponto de entrada principal da aplicação React.
 * Configura o App como componente raiz e aplica o Bootstrap.
 */

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)