/**
 * Nome do arquivo: SavedCards.jsx
 * Data de criação: 10/05/2025
 * Autor: Erico de Freitas Neto
 * Matrícula: 01776648
 *
 * Descrição:
 * Componente que exibe as cartas salvas pelo usuário no localStorage.
 */


function SavedCards({ cards, onCardSelect, onRemoveCard }) {
  if (cards.length === 0) {
    return (
      <div className="saved-cards mb-4 p-3 bg-light rounded">
        <h2>Cartas Salvas</h2>
        <p className="text-center text-muted">Nenhuma carta salva ainda.</p>
      </div>
    );
  }

  return (
    <div className="saved-cards mb-4 p-3 bg-light rounded">
      <h2>Cartas Salvas ({cards.length})</h2>
      <div className="row row-cols-2 row-cols-md-4 row-cols-lg-6 g-2">
        {cards.map((card) => (
          <div key={card.id} className="col">
            <div className="card h-100">
              <img 
                src={card.images.small} 
                className="card-img-top cursor-pointer"
                alt={card.name}
                onClick={() => onCardSelect(card)}
                style={{ cursor: 'pointer' }}
              />
              <div className="card-body p-2">
                <button
                  className="btn btn-sm btn-danger w-100"
                  onClick={(e) => {
                    e.stopPropagation();
                    onRemoveCard(card.id);
                  }}
                >
                  Remover
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SavedCards;