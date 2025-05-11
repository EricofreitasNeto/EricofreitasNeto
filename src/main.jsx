/**
 * Nome do arquivo: main.jsx
 * Data: 10/05/2025
 * Autor: Erico de Freitas Neto
 * Matrícula: 01776648
 * Descrição: Ponto de entrada principal da aplicação
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import pokemontcgsdk from 'pokemontcgsdk';

// Configuração robusta
const apiKey = import.meta.env.VITE_POKEMON_API_KEY;

if (!apiKey) {
  console.error('⚠️ Configure sua API Key no arquivo .env');
  // Pode adicionar um fallback ou desativar funcionalidades
} else {
  pokemontcgsdk.configure({ 
    apiKey,
    debug: true, // Mostra logs detalhados
    timeout: 10000 // 10 segundos de timeout
  });
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);