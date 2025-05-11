/**
 * Nome do arquivo: SavedCards.jsx
 * Data de criação: 10/05/2025
 * Autor: Erico de Freitas Neto
 * Matrícula: 01776648
 *
 * Descrição:
 * Componente que exibe as cartas salvas pelo usuário no localStorage.
 */

import { useEffect, useState } from 'react'

function SavedCards() {
  const [savedCards, setSavedCards] = useState([])

  useEffect(() => {
    const cards = JSON.parse(localStorage.getItem('pokemonCards') || [])
    setSavedCards(cards)
  }, [])

  if (savedCards.length === 0) {
    return <p className="text-center">Nenhuma carta salva.</p>
  }

  return (
    <div className="saved-cards-container mb-4">
      <h2>Cartas Salvas</h2>
      <div className="d-flex flex-wrap gap-2">
        {savedCards.map((card) => (
          <img 
            key={card.id}
            src={card.images.small}
            alt={card.name}
            className="saved-card"
            style={{ width: '100px', height: '140px' }}
          />
        ))}
      </div>
    </div>
  )
}

export default SavedCards