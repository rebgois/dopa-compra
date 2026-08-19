function getPageItems(currentPage, totalPages) {
  if (totalPages <= 7) return Array.from({ length: totalPages }, (_, index) => index + 1)
  if (currentPage <= 4) return [1, 2, 3, 4, 5, 'ellipsis', totalPages]
  if (currentPage >= totalPages - 3) return [1, 'ellipsis', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages]
  return [1, 'ellipsis', currentPage - 1, currentPage, currentPage + 1, 'ellipsis-end', totalPages]
}

export default function Pagination({ currentPage, totalPages, itemsPerPage, onPageChange, onItemsPerPageChange }) {
  const pages = getPageItems(currentPage, totalPages)

  function changePage(page) {
    if (page < 1 || page > totalPages || page === currentPage) return
    onPageChange(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <nav className="pagination" aria-label="Paginação de produtos">
      <button className="pagination-arrow" type="button" disabled={currentPage === 1} onClick={() => changePage(currentPage - 1)}>← <span>Anterior</span></button>
      <div className="page-numbers">{pages.map((page, index) => page.toString().startsWith('ellipsis') ? <span className="pagination-ellipsis" key={`${page}-${index}`}>...</span> : <button className={page === currentPage ? 'active' : ''} type="button" key={page} onClick={() => changePage(page)} aria-current={page === currentPage ? 'page' : undefined}>{page}</button>)}</div>
      <button className="pagination-arrow" type="button" disabled={currentPage === totalPages} onClick={() => changePage(currentPage + 1)}><span>Próximo</span> →</button>
      <label className="page-size">Itens por página<select value={itemsPerPage} onChange={(event) => onItemsPerPageChange(Number(event.target.value))}><option value="8">8</option><option value="12">12</option><option value="16">16</option></select></label>
    </nav>
  )
}
