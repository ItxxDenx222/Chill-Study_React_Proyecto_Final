export default function Modal({ product, onClose, onAddToCart }) {
  if (!product) return null;

  return (
    <div className="modal-overlay active" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="close-modal" onClick={onClose}>&times;</button>
        <div className="modal-body">
          <img src={product.img} alt={product.title} />
          <div className="modal-info">
            <h2>{product.title}</h2>
            <span className="modal-price">{product.price}</span>
            <p>{product.fullDesc}</p>
            <button className="btn-add-cart" onClick={onAddToCart}>
              <i className="fa-solid fa-cart-plus"></i> Añadir a la orden
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}