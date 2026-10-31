export default function Header({ cartCount, onOpenCart }) {
  return (
    <header className="main-header">
      <div className="header-container">
        <h1 className="logo">Chill<span>&</span>Study</h1>
        <nav className="nav-links">
          <a href="#" className="active">Inicio</a>
          <a href="#carta">Carta</a>
          <a href="#novedades">Novedades</a>
        </nav>
        <div className="cart-icon" id="cart-btn" onClick={onOpenCart} style={{ cursor: 'pointer' }}>
          <i className="fa-solid fa-cart-shopping"></i>
          <span className="cart-badge" id="cart-count">{cartCount}</span>
        </div>
      </div>
    </header>
  );
}