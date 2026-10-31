export default function CartDrawer({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem }) {
  if (!isOpen) return null;

  const parsePrice = (priceStr) => {
    return parseInt(priceStr.replace('$', '').replace(/\./g, ''), 10) || 0;
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + (parsePrice(item.price) * item.quantity), 0);

  const formatPrice = (amount) => {
    return '$' + amount.toLocaleString('es-CO');
  };

  const enviarPedido = async () => {
    try {
      const pedidoData = {
        items: cartItems.map(item => ({
          name: item.title,
          price: parsePrice(item.price),
          quantity: item.quantity
        })),
        total: totalPrice
      };

      const response = await fetch('http://localhost:5000/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(pedidoData)
      });

      if (response.ok) {
        alert('¡Pedido realizado con éxito y guardado en MongoDB! ☕🔥');
        localStorage.removeItem('chill_study_cart');
        window.location.reload();
      } else {
        // --- BLOQUE MEJORADO PARA CAPTURAR EL ERROR EXACTO ---
        const errorData = await response.json();
        console.error('Detalle del error del servidor:', errorData);
        alert(`Error del servidor: ${errorData.message || 'Desconocido'}`);
      }
    } catch (error) {
      console.error('Error de red:', error);
      alert('No se pudo conectar con el servidor backend.');
    }
  };

  return (
    <div className="modal-overlay active" onClick={onClose}>
      <div className="modal-box cart-drawer-box" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '450px', width: '100%', padding: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
          <h2>Tu Orden</h2>
          <button className="close-modal" onClick={onClose} style={{ position: 'static', fontSize: '1.5rem' }}>&times;</button>
        </div>

        <div style={{ maxHeight: '350px', overflowY: 'auto', margin: '15px 0' }}>
          {cartItems.length === 0 ? (
            <p style={{ textAlign: 'center', color: '#777', padding: '30px 0' }}>Tu carrito está vacío.</p>
          ) : (
            cartItems.map(item => (
              <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px', borderBottom: '1px solid #f9f9f9', paddingBottom: '10px' }}>
                <img src={item.img} alt={item.title} style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '8px' }} />
                <div style={{ flex: 1, marginLeft: '12px' }}>
                  <h4 style={{ fontSize: '0.95rem', color: '#6f4e37', marginBottom: '4px' }}>{item.title}</h4>
                  <span style={{ fontSize: '0.85rem', color: '#888' }}>{item.price}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <button onClick={() => onUpdateQuantity(item.id, -1)} style={{ padding: '2px 8px', cursor: 'pointer', background: '#ddd', border: 'none', borderRadius: '4px' }}>-</button>
                  <span style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>{item.quantity}</span>
                  <button onClick={() => onUpdateQuantity(item.id, 1)} style={{ padding: '2px 8px', cursor: 'pointer', background: '#ddd', border: 'none', borderRadius: '4px' }}>+</button>
                  <button onClick={() => onRemoveItem(item.id)} style={{ background: 'none', border: 'none', color: '#e74c3c', cursor: 'pointer', marginLeft: '8px' }} title="Eliminar">
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '15px', borderTop: '1px solid #eee', paddingTop: '10px' }}>
              <span>Total:</span>
              <span style={{ color: '#6f4e37' }}>{formatPrice(totalPrice)}</span>
            </div>
            
            <button 
              className="btn-add-cart" 
              style={{ width: '100%', textAlign: 'center' }}
              onClick={enviarPedido}
            >
              Finalizar Pedido
            </button>
          </div>
        )}
      </div>
    </div>
  );
}