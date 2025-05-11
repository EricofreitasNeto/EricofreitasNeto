/**
 * Nome do arquivo: CardDetails.jsx
 * Data: 10/05/2025
 * Autor: Erico de Freitas Neto
 * Matrícula: 01776648
 * Descrição: Componente de detalhes da carta
 */

function CardDetails({ card, onSaveCard, isSaved }) {
  return (
    <div className="card-details mt-4 p-3 bg-light rounded">
      <div className="row">
        <div className="col-md-4">
          <img 
            src={card.images.large} 
            alt={card.name} 
            className="img-fluid rounded"
          />
          <div className="d-grid gap-2 mt-3">
            <button 
              className={`btn ${isSaved ? 'btn-secondary' : 'btn-success'}`}
              onClick={() => !isSaved && onSaveCard(card)}
              disabled={isSaved}
            >
              {isSaved ? '✓ Carta Salva' : 'Salvar Carta'}
            </button>
          </div>
        </div>
        <div className="col-md-8">
          <h2>{card.name}</h2>
          
          <div className="row">
            <div className="col-md-6">
              <p><strong>Tipo:</strong> {card.supertype}</p>
              {card.subtypes && <p><strong>Subtipos:</strong> {card.subtypes.join(', ')}</p>}
              {card.hp && <p><strong>HP:</strong> {card.hp}</p>}
              {card.types && <p><strong>Tipos:</strong> {card.types.join(', ')}</p>}
              
              {card.evolvesFrom && <p><strong>Evolui de:</strong> {card.evolvesFrom}</p>}
              
              {card.rules && (
                <div className="mb-3">
                  <strong>Regras:</strong>
                  <ul>
                    {card.rules.map((rule, i) => <li key={i}>{rule}</li>)}
                  </ul>
                </div>
              )}
            </div>
            
            <div className="col-md-6">
              {card.attacks && (
                <div className="mb-3">
                  <strong>Ataques:</strong>
                  {card.attacks.map((attack, i) => (
                    <div key={i} className="mb-2 p-2 border rounded">
                      <p className="mb-1"><strong>{attack.name}</strong></p>
                      <p className="mb-1"><small>Custo: {attack.cost?.join(' ') || 'Nenhum'}</small></p>
                      <p className="mb-1">Dano: {attack.damage || 'Nenhum'}</p>
                      <p className="mb-0">{attack.text}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          
          <div className="row mt-2">
            <div className="col-md-6">
              {card.weaknesses && (
                <p>
                  <strong>Fraquezas:</strong> 
                  {card.weaknesses.map((w, i) => (
                    <span key={i} className="badge bg-danger ms-1">{w.type} {w.value}</span>
                  ))}
                </p>
              )}
            </div>
            <div className="col-md-6">
              {card.retreatCost && (
                <p>
                  <strong>Custo de Recuo:</strong>
                  {card.retreatCost.map((c, i) => (
                    <span key={i} className="badge bg-secondary ms-1">{c}</span>
                  ))}
                </p>
              )}
            </div>
          </div>
          
          <hr />
          
          <div className="row">
            <div className="col-md-6">
              <p><strong>Coleção:</strong> {card.set.name}</p>
              <p><strong>Lançamento:</strong> {card.set.releaseDate}</p>
            </div>
            <div className="col-md-6">
              <p><strong>Número:</strong> {card.number}</p>
              <p><strong>Raridade:</strong> {card.rarity}</p>
              <p><strong>Artista:</strong> {card.artist}</p>
            </div>
          </div>
          
          {card.tcgplayer?.prices && (
            <div className="mt-3 p-2 bg-white rounded">
              <h5>Preços TCGPlayer</h5>
              <div className="row">
                {card.tcgplayer.prices.holofoil && (
                  <div className="col">
                    <p className="mb-0">Holofoil: ${card.tcgplayer.prices.holofoil.market || 'N/A'}</p>
                  </div>
                )}
                {card.tcgplayer.prices.normal && (
                  <div className="col">
                    <p className="mb-0">Normal: ${card.tcgplayer.prices.normal.market || 'N/A'}</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CardDetails;