/**
 * Nome do arquivo: SearchCard.jsx
 * Data de criação: 11/05/2025
 * Autor: [Seu Nome]
 * Matrícula: [Sua Matrícula]
 *
 * Descrição:
 * Componente com campo de busca para pesquisar cartas Pokémon por ID.
 */

import { useState } from 'react'
import PokemonTCG from 'pokemon-tcg-sdk'

function SearchCard({ onCardFound }) {
  const [cardId, setCardId] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSearch = async () => {
    if (!cardId.trim()) return
    
    setIsLoading(true)
    setError(null)
    
    try {
      const apiKey = import.meta.env.VITE_POKEMON_API_KEY
      const card = await PokemonTCG.card.find(cardId, { apiKey })
      onCardFound(card)
    } catch (err) {
      setError('Card não encontrado. Verifique o ID e tente novamente.')
      console.error('Erro ao buscar o card:', err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="search-card mb-4">
      <h2>Buscar Carta</h2>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Digite o ID da carta (ex: base1-4)"
          value={cardId}
          onChange={(e) => setCardId(e.target.value)}
        />
        <button
          className="btn btn-primary"
          onClick={handleSearch}
          disabled={isLoading || !cardId.trim()}
        >
          {isLoading ? 'Buscando...' : 'Buscar'}
        </button>
      </div>
      {error && <div className="alert alert-danger mt-2">{error}</div>}
    </div>
  )
}

export default SearchCard