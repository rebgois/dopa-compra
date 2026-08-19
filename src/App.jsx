import { useEffect, useMemo, useState } from 'react'
import Header from './components/Header.jsx'
import CategoryFilter from './components/CategoryFilter.jsx'
import ProductGrid from './components/ProductGrid.jsx'
import Pagination from './components/Pagination.jsx'
import DopamineToast from './components/DopamineToast.jsx'
import { categories, products } from './data/products.js'
import './App.css'

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('dopa-theme') === 'light' ? 'light' : 'dark')
  const [category, setCategory] = useState('Todos')
  const [query, setQuery] = useState('')
  const [cartCount, setCartCount] = useState(0)
  const [addedProduct, setAddedProduct] = useState(null)
  const [toast, setToast] = useState('')
  const [page, setPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(8)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('dopa-theme', theme)
  }, [theme])

  useEffect(() => {
    if (!toast) return undefined
    const timer = window.setTimeout(() => setToast(''), 2200)
    return () => window.clearTimeout(timer)
  }, [toast])

  const filteredProducts = useMemo(() => products.filter((product) => {
    const matchesCategory = category === 'Todos' || product.category === category
    const matchesQuery = `${product.name} ${product.category} ${product.description}`.toLowerCase().includes(query.toLowerCase())
    return matchesCategory && matchesQuery
  }), [category, query])
  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / itemsPerPage))
  const visibleProducts = filteredProducts.slice((page - 1) * itemsPerPage, page * itemsPerPage)

  function updateCategory(nextCategory) { setCategory(nextCategory); setPage(1) }
  function updateQuery(nextQuery) { setQuery(nextQuery); setPage(1) }
  function updateItemsPerPage(nextSize) { setItemsPerPage(nextSize); setPage(1) }
  function addToCart(product) {
    setCartCount((count) => count + 1)
    setAddedProduct(product.name)
    setToast(`${product.name} entrou no carrinho ✦`)
    window.setTimeout(() => setAddedProduct(null), 650)
  }

  return <main className="store-shell">
    <div className="ambient ambient-one" /><div className="ambient ambient-two" />
    <Header theme={theme} onToggleTheme={() => setTheme(theme === 'light' ? 'dark' : 'light')} query={query} onQueryChange={updateQuery} cartCount={cartCount} />
    <section className="welcome-row"><div><p className="mini-kicker">QUARTA-FEIRA, 19 JUN <span>✦</span></p><h1>Encontre sua próxima <em>obsessão.</em></h1><p className="welcome-copy">Tudo aqui é grátis. A única coisa que você vai gastar é tempo se divertindo.</p></div><div className="streak-card"><span className="streak-flame">♨</span><div><strong>3 dias de streak</strong><small>Você está no ritmo! +120 XP</small></div><span className="streak-arrow">↗</span></div></section>
    <CategoryFilter categories={categories} activeCategory={category} onCategoryChange={updateCategory} resultCount={filteredProducts.length} />
    <section className="product-section" id="produtos"><div className="feed-heading"><h2>Escolhas que dão <em>match</em></h2><button className="sort-button" type="button">Mais populares <span>⌄</span></button></div><ProductGrid products={visibleProducts} onAdd={addToCart} addedProduct={addedProduct} />{filteredProducts.length === 0 && <div className="empty-state"><span>✦</span><h3>Nada encontrado ainda</h3><p>Tente uma vibe diferente ou limpe sua busca.</p></div>}<Pagination currentPage={page} totalPages={totalPages} itemsPerPage={itemsPerPage} onPageChange={setPage} onItemsPerPageChange={updateItemsPerPage} /></section>
    <footer className="store-footer"><span>feito para gastar sua dopamina, não seu dinheiro <b>✦</b></span><span>© dopa 2024</span></footer>
    <DopamineToast message={toast} />
  </main>
}
