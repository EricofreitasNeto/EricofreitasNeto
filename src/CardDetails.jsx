
/**
 * Nome do arquivo: CardDetails.jsx
 * Data de criação: 11/05/2025
 * Autor: [Seu Nome]
 * Matrícula: [Sua Matrícula]
 *
 * Descrição:
 * Componente que exibe os detalhes de uma carta Pokémon.
 */

function CardDetails({ card, onSaveCard }) {
  if (!card) return null

  const isSaved = () => {
    const savedCards = JSON.parse(localStorage.getItem('pokemonCards') || [])
    return savedCards.some(savedCard => savedCard.id === card.id)
  }

  return (
    <div className="card-details mt-4">
      <div className="row">
        <div className="col-md-4">
          <img 
            src={card.images.large} 
            alt={card.name} 
            className="img-fluid mb-3"
          />
        </div>
        <div className="col-md-8">
          <h2>{card.name}</h2>
          <p><strong>Supertype:</strong> {card.supertype}</p>
          {card.subtypes && <p><strong>Subtypes:</strong> {card.subtypes.join(', ')}</p>}
          {card.hp && <p><strong>HP:</strong> {card.hp}</p>}
          {card.types && <p><strong>Types:</strong> {card.types.join(', ')}</p>}
          
          {card.evolvesTo && (
            <p><strong>Evolves To:</strong> {card.evolvesTo.join(', ')}</p>
          )}
          
          {card.rules && (
            <div className="mb-3">
              <strong>Rules:</strong>
              <ul>
                {card.rules.map((rule, i) => <li key={i}>{rule}</li>)}
              </ul>
            </div>
          )}
          
          {card.attacks && (
            <div className="mb-3">
              <strong>Attacks:</strong>
              {card.attacks.map((attack, i) => (
                <div key={i} className="mb-2">
                  <p><strong>{attack.name}</strong> - Cost: {attack.cost.join(', ')}</p>
                  <p>Damage: {attack.damage} - {attack.text}</p>
                </div>
              ))}
            </div>
          )}
          
          {card.weaknesses && (
            <p><strong>Weaknesses:</strong> {card.weaknesses.map(w => `${w.type} ${w.value}`).join(', ')}</p>
          )}
          
          {card.retreatCost && (
            <p><strong>Retreat Cost:</strong> {card.retreatCost.join(', ')}</p>
          )}
          
          {card.set && (
            <div className="mb-3">
              <strong>Set:</strong> {card.set.name} (Released: {card.set.releaseDate})
            </div>
          )}
          
          <p><strong>Number:</strong> {card.number} | <strong>Rarity:</strong> {card.rarity}</p>
          <p><strong>Artist:</strong> {card.artist}</p>
          
          {card.tcgplayer?.prices?.holofoil?.market && (
            <p><strong>Market Price:</strong> ${card.tcgplayer.prices.holofoil.market}</p>
          )}
          
          <button 
            className="btn btn-success"
            onClick={() => onSaveCard(card)}
            disabled={isSaved()}
          >
            {isSaved() ? 'Carta já salva' : 'Salvar Carta'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default CardDetails