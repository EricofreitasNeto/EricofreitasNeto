/**
 * Nome do arquivo: App.jsx
 * Data de criação: 10/05/2025
 * Autor: Erico de Freitas Neto
 * Matrícula: 01776648
 *
 * Descrição:
 * Componente principal da aplicação que renderiza o dashboard de cartas Pokémon.
 */
import { useState } from 'react'
import SavedCards from './SavedCards'
import SearchCard from './SearchCard'
import CardDetails from './CardDetails'

function App() {
  const [currentCard, setCurrentCard] = useState(null)

  const handleSaveCard = (card) => {
  const savedCards = JSON.parse(localStorage.getItem('pokemonCards') || '[]')
  if (!savedCards.some(c => c.id === card.id)) {
    savedCards.push(card)
    localStorage.setItem('pokemonCards', JSON.stringify(savedCards))
    // Forçar atualização do SavedCards
    setCurrentCard({...card})
    alert('Carta salva com sucesso!')
  }
}

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Dashboard de Cartas Pokémon</h1>
      <SavedCards />
      <SearchCard onCardFound={setCurrentCard} />
      <CardDetails card={currentCard} onSaveCard={handleSaveCard} />
    </div>
  )
}

export default App