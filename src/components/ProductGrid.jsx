import ProductCard from './ProductCard.jsx'

export default function ProductGrid({ products, onAdd, addedProduct }) {
  return (
    <div className="product-grid">
      {products.map((product) => <ProductCard key={product.id} product={product} onAdd={onAdd} isAdded={addedProduct === product.name} />)}
    </div>
  )
}
