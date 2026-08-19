export default function ProductCard({ product, onAdd, isAdded }) {
  return (
    <article className="product-card">
      <div className="product-media"><img src={product.image} alt={product.name} loading="lazy" /><span className={`product-badge ${product.badgeTone}`}>{product.badge}</span><button className="heart-button" type="button" aria-label={`Favoritar ${product.name}`}>♡</button></div>
      <div className="product-info"><div className="product-meta"><span>{product.category}</span><span>★ {product.rating}</span></div><h3>{product.name}</h3><p className="product-description">{product.description}</p><div className="product-bottom"><strong>{product.price}</strong><button className={`add-button ${isAdded ? 'added' : ''}`} type="button" onClick={() => onAdd(product)}>{isAdded ? '✓ Adicionado' : <><span>+</span> Adicionar</>}</button></div></div>
    </article>
  )
}
