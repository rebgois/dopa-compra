import { useEffect, useMemo, useState } from 'react'
import './App.css'

type Theme = 'light' | 'dark'
type Category = 'Todos' | 'Roupas' | 'Calçados' | 'Brinquedos' | 'Eletrônicos' | 'Acessórios' | 'Games'
type Product = { id: number; name: string; category: Exclude<Category, 'Todos'>; price: string; badge: string; badgeTone: 'pink' | 'cyan' | 'gold'; rating: string; image: string }

const categories: { name: Category; icon: string }[] = [
  { name: 'Todos', icon: '✦' }, { name: 'Roupas', icon: '✧' }, { name: 'Calçados', icon: '⌁' },
  { name: 'Brinquedos', icon: '♧' }, { name: 'Eletrônicos', icon: '⌁' }, { name: 'Acessórios', icon: '◇' }, { name: 'Games', icon: '◈' },
]

const products: Product[] = [
  { id: 1, name: 'Tênis Cloud Nova', category: 'Calçados', price: '0 moedas', badge: 'Super Dopamina', badgeTone: 'pink', rating: '4.9', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=85' },
  { id: 2, name: 'Headphone Pulse Max', category: 'Eletrônicos', price: '0 moedas', badge: '100% Grátis', badgeTone: 'cyan', rating: '4.8', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=85' },
  { id: 3, name: 'Câmera Instant Joy', category: 'Eletrônicos', price: '0 moedas', badge: 'Sem Frete', badgeTone: 'gold', rating: '4.7', image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=700&q=85' },
  { id: 4, name: 'Camiseta Mood Club', category: 'Roupas', price: '0 moedas', badge: 'Novo drop', badgeTone: 'pink', rating: '4.9', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=85' },
  { id: 5, name: 'Controle Arcade Pro', category: 'Games', price: '0 moedas', badge: 'Super Dopamina', badgeTone: 'gold', rating: '5.0', image: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=700&q=85' },
  { id: 6, name: 'Mini Robô Astro', category: 'Brinquedos', price: '0 moedas', badge: '100% Grátis', badgeTone: 'cyan', rating: '4.8', image: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=700&q=85' },
  { id: 7, name: 'Óculos Solar Prism', category: 'Acessórios', price: '0 moedas', badge: 'Sem Frete', badgeTone: 'pink', rating: '4.6', image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=700&q=85' },
  { id: 8, name: 'Jaqueta Aura', category: 'Roupas', price: '0 moedas', badge: 'Novo drop', badgeTone: 'cyan', rating: '4.9', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=700&q=85' },
]

function App() {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('dopa-theme')
    return savedTheme === 'dark' || savedTheme === 'light' ? savedTheme : 'dark'
  })
  const [category, setCategory] = useState<Category>('Todos')
  const [query, setQuery] = useState('')
  const [cartCount, setCartCount] = useState(0)
  const [lastAdded, setLastAdded] = useState<string | null>(null)
  const [toast, setToast] = useState('')

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('dopa-theme', theme)
  }, [theme])

  useEffect(() => {
    if (!toast) return
    const timer = window.setTimeout(() => setToast(''), 2200)
    return () => window.clearTimeout(timer)
  }, [toast])

  const filteredProducts = useMemo(() => products.filter((product) => {
    const matchesCategory = category === 'Todos' || product.category === category
    const matchesQuery = `${product.name} ${product.category}`.toLowerCase().includes(query.toLowerCase())
    return matchesCategory && matchesQuery
  }), [category, query])

  function addToCart(product: Product) {
    setCartCount((count) => count + 1)
    setLastAdded(product.name)
    setToast(`${product.name} entrou no carrinho ✦`)
    window.setTimeout(() => setLastAdded(null), 650)
  }

  return (
    <main className="store-shell">
      <div className="ambient ambient-one" /><div className="ambient ambient-two" />
      <header className="store-header">
        <a className="store-brand" href="/" aria-label="Dopa, início"><span className="logo-orbit"><span>d</span></span><span>dopa<span className="logo-dot">.</span></span></a>
        <div className="search-wrap"><span className="search-icon" aria-hidden="true">⌕</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="O que vai te fazer feliz hoje?" aria-label="Buscar produtos" /><kbd>/</kbd></div>
        <div className="header-actions"><button className="icon-button theme-switch" type="button" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} aria-label="Alternar tema">{theme === 'dark' ? '☼' : '☾'}</button><button className={`cart-button ${lastAdded ? 'cart-bump' : ''}`} type="button" aria-label={`${cartCount} itens no carrinho`}><span>🛍</span>{cartCount > 0 && <b key={cartCount}>{cartCount}</b>}</button><div className="avatar">R</div></div>
      </header>

      <section className="welcome-row"><div><p className="mini-kicker">QUARTA-FEIRA, 19 JUN <span>✦</span></p><h1>Encontre sua próxima <em>obsessão.</em></h1><p className="welcome-copy">Tudo aqui é grátis. A única coisa que você vai gastar é tempo se divertindo.</p></div><div className="streak-card"><span className="streak-flame">♨</span><div><strong>3 dias de streak</strong><small>Você está no ritmo! +120 XP</small></div><span className="streak-arrow">↗</span></div></section>

      <section className="category-section" aria-label="Categorias de produtos"><div className="section-heading"><div><span className="section-label">EXPLORE POR VIBE</span><h2>O que combina com você?</h2></div><span className="product-count">{filteredProducts.length} itens para descobrir <span>→</span></span></div><div className="category-list">{categories.map((item) => <button key={item.name} className={`category-chip ${category === item.name ? 'active' : ''}`} type="button" onClick={() => setCategory(item.name)}><span>{item.icon}</span>{item.name}</button>)}</div></section>

      <section className="product-section" id="produtos"><div className="feed-heading"><h2>Escolhas que dão <em>match</em></h2><button className="sort-button" type="button">Mais populares <span>⌄</span></button></div><div className="product-grid">{filteredProducts.map((product) => <article className="product-card" key={product.id}><div className="product-media"><img src={product.image} alt={product.name} /><span className={`product-badge ${product.badgeTone}`}>{product.badge}</span><button className="heart-button" type="button" aria-label={`Favoritar ${product.name}`}>♡</button></div><div className="product-info"><div className="product-meta"><span>{product.category}</span><span>★ {product.rating}</span></div><h3>{product.name}</h3><div className="product-bottom"><strong>{product.price}</strong><button className={`add-button ${lastAdded === product.name ? 'added' : ''}`} type="button" onClick={() => addToCart(product)}>{lastAdded === product.name ? '✓ Adicionado' : <><span>+</span> Adicionar</>}</button></div></div></article>)}</div>{filteredProducts.length === 0 && <div className="empty-state"><span>✦</span><h3>Nada encontrado ainda</h3><p>Tente uma vibe diferente ou limpe sua busca.</p></div>}</section>
      <footer className="store-footer"><span>feito para gastar sua dopamina, não seu dinheiro <b>✦</b></span><span>© dopa 2024</span></footer>
      {toast && <div className="toast" role="status"><span>✦</span>{toast}</div>}
    </main>
  )
}

export default App