export default function Header({ theme, onToggleTheme, query, onQueryChange, cartCount }) {
  return (
    <header className="store-header">
      <a className="store-brand" href="/" aria-label="Dopa, início"><span className="logo-orbit"><span>d</span></span><span>dopa<span className="logo-dot">.</span></span></a>
      <div className="search-wrap">
        <span className="search-icon" aria-hidden="true">⌕</span>
        <input value={query} onChange={(event) => onQueryChange(event.target.value)} placeholder="O que vai te fazer feliz hoje?" aria-label="Buscar produtos" />
        <kbd>/</kbd>
      </div>
      <div className="header-actions">
        <button className="icon-button theme-switch" type="button" onClick={onToggleTheme} aria-label="Alternar tema">{theme === 'dark' ? '☼' : '☾'}</button>
        <button className="cart-button" type="button" aria-label={`${cartCount} itens no carrinho`}><span>🛍</span>{cartCount > 0 && <b key={cartCount}>{cartCount}</b>}</button>
        <div className="avatar">R</div>
      </div>
    </header>
  )
}
