/**
 * Nome do arquivo: App.jsx
 * Data: 10/05/2025
 * Autor: Erico de Freitas Neto
 * Matrícula: 01776648
 * Descrição: Componente principal do aplicativo
 */

import { useState, useEffect } from 'react';
import SavedCards from './SavedCards';
import SearchCard from './SearchCard';
import CardDetails from './CardDetails';

function App() {
  const [currentCard, setCurrentCard] = useState(null);
  const [savedCards, setSavedCards] = useState([]);

  // Carrega cartas salvas do localStorage
  useEffect(() => {
    const cards = JSON.parse(localStorage.getItem('pokemonCards') || "[]");
    setSavedCards(cards);
  }, []);

  // Salva carta no localStorage
  const handleSaveCard = (card) => {
    const updatedCards = [...savedCards];
    if (!updatedCards.some(c => c.id === card.id)) {
      updatedCards.push(card);
      localStorage.setItem('pokemonCards', JSON.stringify(updatedCards));
      setSavedCards(updatedCards);
    }
  };

  // Remove carta do localStorage
  const handleRemoveCard = (cardId) => {
    const updatedCards = savedCards.filter(card => card.id !== cardId);
    localStorage.setItem('pokemonCards', JSON.stringify(updatedCards));
    setSavedCards(updatedCards);
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Dashboard de Cartas Pokémon</h1>
      <SavedCards 
        cards={savedCards} 
        onCardSelect={setCurrentCard} 
        onRemoveCard={handleRemoveCard} 
      />
      <SearchCard onCardFound={setCurrentCard} />
      {currentCard && (
        <CardDetails 
          card={currentCard} 
          onSaveCard={handleSaveCard} 
          isSaved={savedCards.some(c => c.id === currentCard.id)}
        />
      )}
    </div>
  );
}

export default App;