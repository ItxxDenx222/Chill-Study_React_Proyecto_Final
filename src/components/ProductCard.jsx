export default function ProductCard({ product, isFavorite, onToggleFavorite, onOpenModal }) {
  return (
    <div className="card">
      <div className="card-img-wrapper">
        {product.badge && (
          <span className={`card-badge ${product.category === 'frio' ? 'cold' : ''}`}>
            {product.badge}
          </span>
        )}
        <img src={product.img} alt={product.title} />
        <button 
          className="fav-btn" 
          onClick={onToggleFavorite}
          title="Guardar en favoritos"
        >
          <i className={isFavorite ? "fa-solid fa-heart" : "fa-regular fa-heart"} style={{ color: isFavorite ? '#e74c3c' : '' }}></i>
        </button>
      </div>
      
      <div className="card-content">
        <h2>{product.title}</h2>
        <p className="description">{product.shortDesc}</p>
        <div className="rating">⭐ {product.rating} <span>({product.reviews} reseñas)</span></div>
        <div className="card-footer">
          <span className="price">{product.price}</span>
          <button className="btn-more" onClick={() => onOpenModal(product)}>Ver más</button>
        </div>
      </div>
    </div>
  );
}