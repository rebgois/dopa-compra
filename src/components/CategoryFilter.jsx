const icons = { Todos: '✦', Roupas: '✧', Calçados: '⌁', Eletrônicos: '⌁', Games: '◈', Brinquedos: '♧', Acessórios: '◇', 'Setup Neon': '▣' }

export default function CategoryFilter({ categories, activeCategory, onCategoryChange, resultCount }) {
  return (
    <section className="category-section" aria-label="Categorias de produtos">
      <div className="section-heading"><div><span className="section-label">EXPLORE POR VIBE</span><h2>O que combina com você?</h2></div><span className="product-count">{resultCount} itens para descobrir <span>→</span></span></div>
      <div className="category-list">{categories.map((category) => <button key={category} className={`category-chip ${activeCategory === category ? 'active' : ''}`} type="button" onClick={() => onCategoryChange(category)}><span>{icons[category]}</span>{category}</button>)}</div>
    </section>
  )
}
