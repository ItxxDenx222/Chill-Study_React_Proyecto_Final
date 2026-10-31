export default function Controls({ currentCategory, setCategory, searchTerm, setSearchTerm }) {
  const categories = [
    { id: 'all', label: 'Todos' },
    { id: 'caliente', label: 'Calientes' },
    { id: 'frio', label: 'Fríos' },
    { id: 'postre', label: 'Postres' }
  ];

  return (
    <div className="controls-container">
      <div className="search-box">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input 
          type="text" 
          placeholder="Buscar tu café favorito..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="filter-buttons">
        {categories.map(cat => (
          <button 
            key={cat.id}
            className={`filter-btn ${currentCategory === cat.id ? 'active' : ''}`}
            onClick={() => setCategory(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>
    </div>
  );
}