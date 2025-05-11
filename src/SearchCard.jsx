/**
 * Nome do arquivo: SearchCard.jsx
 * Data de criação: 10/05/2025
 * Autor: Erico De Freitas Neto
 * Matrícula: 01776648
 *
 * Descrição:
 * Componente com campo de busca para pesquisar cartas Pokémon por ID ou Nome.
 */
import { useState } from 'react';
import pokemontcgsdk from 'pokemontcgsdk';

function SearchCard({ onCardFound }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchType, setSearchType] = useState('name');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    if (!searchTerm.trim()) return;
    
    setIsLoading(true);
    setError(null);
    setSearchResults([]);
    
    try {
      if (searchType === 'id') {
        // Busca por ID
        const card = await pokemontcgsdk.card.find(searchTerm);
        onCardFound(card);
      } else {
        // Busca por nome
        const result = await pokemontcgsdk.card.where({
          q: `name:"${searchTerm}"`,
          pageSize: 12,
          orderBy: 'name'
        });
        
        if (result.data.length === 0) {
          throw new Error(`Nenhuma carta encontrada com "${searchTerm}"`);
        } else if (result.data.length === 1) {
          onCardFound(result.data[0]);
        } else {
          setSearchResults(result.data);
        }
      }
    } catch (err) {
      let errorMsg = 'Erro ao buscar cartas';
      
      if (err.response?.status === 400) {
        errorMsg = 'Termo de busca inválido';
      } else if (err.response?.status === 401) {
        errorMsg = 'API Key inválida ou não configurada';
      } else if (err.message.includes('Network Error')) {
        errorMsg = 'Problema de conexão';
      }
      
      setError(errorMsg);
      console.error('Erro detalhado:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSelectCard = (card) => {
    onCardFound(card);
    setSearchResults([]);
  };

  return (
    <div className="search-container mb-4 p-3 bg-light rounded">
      <h2 className="mb-3">Buscar Cartas</h2>
      
      <div className="btn-group mb-3" role="group">
        <button
          type="button"
          className={`btn ${searchType === 'name' ? 'btn-primary' : 'btn-outline-primary'}`}
          onClick={() => setSearchType('name')}
        >
          Por Nome
        </button>
        <button
          type="button"
          className={`btn ${searchType === 'id' ? 'btn-primary' : 'btn-outline-primary'}`}
          onClick={() => setSearchType('id')}
        >
          Por ID
        </button>
      </div>

      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder={searchType === 'name' ? 'Ex: Pikachu' : 'Ex: base1-4'}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
        />
        <button
          className="btn btn-success"
          onClick={handleSearch}
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <span className="spinner-border spinner-border-sm me-2" role="status"></span>
              Buscando...
            </>
          ) : 'Buscar'}
        </button>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      {searchResults.length > 0 && (
        <div className="search-results mt-3">
          <h5>Resultados:</h5>
          <div className="row row-cols-2 row-cols-md-4 g-3">
            {searchResults.map((card) => (
              <div key={card.id} className="col">
                <div 
                  className="card h-100 cursor-pointer"
                  onClick={() => handleSelectCard(card)}
                  style={{ cursor: 'pointer' }}
                >
                  <img 
                    src={card.images.small} 
                    className="card-img-top" 
                    alt={card.name}
                    loading="lazy"
                  />
                  <div className="card-body p-2">
                    <h6 className="card-title">{card.name}</h6>
                    <p className="card-text small text-muted">
                      {card.set.name} #{card.number}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchCard;